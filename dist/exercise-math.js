/* Ren beräkningskod som används både av presentationen och granskningsproven. */
(function (root) {
  'use strict';
  function parseProduct(source) {
    const text = source.replace(/\s/g, '').replace(/[·×]/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
    if (!text || text.length > 200) throw new Error('Tomt eller för långt uttryck');
    let pos = 0;
    const value = (coefficient, powers = {}) => ({ coefficient, powers });
    function multiply(a, b, sign = 1) {
      if (sign === -1 && b.coefficient === 0) throw new Error('Division med noll');
      const powers = { ...a.powers };
      Object.entries(b.powers).forEach(([key, exponent]) => { powers[key] = (powers[key] || 0) + sign * exponent; if (!powers[key]) delete powers[key]; });
      const coefficient = sign === 1 ? a.coefficient * b.coefficient : a.coefficient / b.coefficient;
      if (!Number.isFinite(coefficient)) throw new Error('Ogiltigt tal');
      return value(coefficient, powers);
    }
    function factor() {
      if (text[pos] === '+' || text[pos] === '-') { const sign = text[pos++] === '-' ? -1 : 1; const v = factor(); return value(sign * v.coefficient, v.powers); }
      if (text[pos] === '(') { pos++; const v = product(); if (text[pos++] !== ')') throw new Error('Parentes saknas'); return v; }
      const number = text.slice(pos).match(/^(?:\d+(?:\.\d*)?|\.\d+)/);
      if (number) { pos += number[0].length; return value(Number(number[0])); }
      const variable = text.slice(pos).match(/^[A-Za-z]/);
      if (variable) { pos++; return value(1, { [variable[0]]: 1 }); }
      throw new Error('Förväntade ett tal, en variabel eller en parentes');
    }
    function product() {
      let result = factor();
      while (pos < text.length && text[pos] !== ')') {
        if (text[pos] === '*' || text[pos] === '/') { const sign = text[pos++] === '*' ? 1 : -1; result = multiply(result, factor(), sign); }
        else if (/[A-Za-z(]/.test(text[pos])) result = multiply(result, factor());
        else throw new Error('Använd multiplikation, division och parenteser');
      }
      return result;
    }
    const result = product();
    if (pos !== text.length) throw new Error('Oväntad avslutning');
    return result;
  }
  function sameSolvedFormula(actual, expected) {
    const parts = actual.split('=');
    const reference = expected.split('=');
    if (parts.length !== 2 || reference.length !== 2) return false;
    const equal = (a, b) => Math.abs(a.coefficient - b.coefficient) < 1e-10 && JSON.stringify(Object.entries(a.powers).sort()) === JSON.stringify(Object.entries(b.powers).sort());
    try {
      // Den eftersökta variabeln måste stå ensam, som i facit.
      const allowed = new Set(expected.match(/[A-Za-z]/g));
      if ((actual.match(/[A-Za-z]/g)||[]).some(letter=>!allowed.has(letter))) return false;
      const isolated = reference.map(x=>x.trim()).find(x=>/^[A-Za-z]$/.test(x));
      if (!isolated || !parts.some(x=>x.trim()===isolated)) return false;
      const a = parts.map(parseProduct), b = reference.map(parseProduct);
      return (equal(a[0],b[0]) && equal(a[1],b[1])) || (equal(a[0],b[1]) && equal(a[1],b[0]));
    } catch { return false; }
  }
  const unit = p => { const length = Math.hypot(...p); if (!length) throw new Error('Nollvektor'); return p.map(x => x / length); };
  function molecularDipole(t) { return t.points.map(unit).reduce((sum, p) => sum.map((n, j) => n + p[j] * (t.towardCenter ? -0.43 : 0.43)), [0,0,0]); }
  function angleBetween(a,b) { const u=unit(a),v=unit(b); return Math.acos(Math.max(-1,Math.min(1,u.reduce((sum,n,j)=>sum+n*v[j],0))))*180/Math.PI; }
  function atomCounts(t,coeff) { return [...new Set(t.atoms.flatMap(a=>Object.keys(a)))].map(e=>({e,left:t.atoms.reduce((sum,a,j)=>sum+(j<t.split?(a[e]||0)*coeff[j]:0),0),right:t.atoms.reduce((sum,a,j)=>sum+(j>=t.split?(a[e]||0)*coeff[j]:0),0)})); }
  const validCoefficients = values => values.every(n=>Number.isInteger(n)&&n>=1&&n<=6);
  const api = { parseProduct, sameSolvedFormula, unit, molecularDipole, angleBetween, atomCounts, validCoefficients };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.learningMath = api;
})(typeof window === 'undefined' ? globalThis : window);
