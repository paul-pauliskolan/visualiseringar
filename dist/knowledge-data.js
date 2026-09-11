const KL=(id,s,title,level,code,art,desc,goal,ci)=>({id,s,title,level,code,time:10,art,desc,goal,ci,kind:'knowledge'});
window.knowledgeLessons=[
KL('linjar-eller-exponentiell','matematik','Linjär eller exponentiell?','1a / 1b / 1c','MATE1A00X · MATE1B00X · MATE1C00X','+ 20 · × 1,05','Avgör vilken förändringsmodell som passar och kontrollera din motivering.','Skilja konstant ökning från konstant förändringsfaktor.','Exponentialfunktioner, jämförelser med linjära funktioner och förändringsfaktor.'),
KL('sannolikhet-flera-steg','matematik','Sannolikhet i flera steg','1a / 1b / 1c','MATE1A00X · MATE1B00X · MATE1C00X','P(A och B)','Räkna med oberoende, beroende och komplementära händelser.','Avgöra hur tidigare utfall påverkar nästa sannolikhet.','Oberoende och beroende händelser, komplementhändelser och sannolikheter i flera steg.'),
KL('energikedjor','fysik','Följ energin','1a1 / 1b','FYSK1A10X · FYSK1B00X','Eₚ → Eₖ → Eᵥ','Välj rätt energiomvandling och beräkna verkningsgrad.','Tillämpa energiprincipen i olika situationer.','Energiformer, energiprincipen, arbete, effekt och verkningsgrad.'),
KL('elektriska-kretsar','fysik','Ström och spänning i kretsar','1a1 / 1b','FYSK1A10X · FYSK1B00X','U = R · I','Förutsäg ström, spänning och resistans innan svaret visas.','Skilja storheterna åt och använda deras samband.','Spänning, ström, resistans samt elektriska kretsar och tillämpningar.'),
KL('periodiska-trender','kemi','Hitta trenden i periodiska systemet','1','KEMI1000X','Li → F · ↓','Jämför atomradie och elektronegativitet utifrån grundämnenas plats.','Använda periodiska systemet för att förutsäga egenskaper.','Grundämnens egenskaper och trender i det periodiska systemet.'),
KL('klassificera-reaktioner','kemi','Vilken reaktion ser du?','1','KEMI1000X','syra–bas · redox · fällning','Identifiera reaktionstypen utifrån en reaktionsformel.','Känna igen centrala typer av kemiska reaktioner.','Kemiska reaktioner, däribland syrabas-, redox- och fällningsreaktioner.'),
KL('litterar-analys','svenska','Från handling till analys','1','SVEN1000X','textställe → tolkning','Skilj återberättande från textnära analys och välj tolkningar som stöds.','Bygga en analys med textställe, begrepp och tolkning.','Analys av skönlitteratur samt motiv, berättarteknik och stildrag.'),
KL('anpassa-till-mottagare','svenska','Anpassa språk och framförande','1','SVEN1000X','syfte · mottagare','Välj språk och disposition som passar kommunikationssituationen.','Anpassa framställning till syfte, mottagare och sammanhang.','Muntlig och skriftlig framställning med anpassning till sammanhang, syfte och mottagare.'),
KL('read-between-lines','engelska','Read between the lines','2','ENGE2000X','clue → inference','Read short passages and choose the inference supported by clues.','Draw conclusions about viewpoint, purpose and implied meaning.','Strategier för slutsatser om syfte, synsätt och underförstådd betydelse.'),
KL('adapt-your-english','engelska','Adapt your English','1','ENGE1000X','purpose · audience','Choose suitable wording for different audiences and situations.','Adapt language to purpose, audience and context.','Anpassning till syfte, mottagare och sammanhang i produktion och interaktion.'),
KL('historisk-kronologi','historia','Placera epokerna','1a1 / 1b','HIST1A10X · HIST1B00X','forntid → nutid','Placera epoker och förändringsprocesser i kronologisk ordning.','Bygga en kronologisk historisk referensram.','Europeisk epokindelning ur ett kronologiskt perspektiv.'),
KL('orsak-och-konsekvens','historia','Orsak, konsekvens eller kontinuitet?','1a1 / 1b','HIST1A10X · HIST1B00X','orsak → förändring','Pröva förklaringar till industrialisering och samhällsförändring.','Använda historiska begrepp för att förklara förändring.','Begreppen orsak och konsekvens samt kontinuitet och förändring.'),
KL('granska-historiska-kallor','historia','Vilken källa kan besvara frågan?','1a1 / 1b','HIST1A10X · HIST1B00X','fråga → källa','Bedöm källors användbarhet, närhet, beroende och perspektiv.','Värdera en historisk källa i förhållande till en fråga.','Tolkning, granskning och värdering av historiska källor.'),
KL('kanna-igen-historiebruk','historia','Varför används historien?','1a1 / 1b','HIST1A10X · HIST1B00X','dåtid → syfte idag','Identifiera syftet när historia används för identitet, politik eller försäljning.','Förklara hur och varför historia används.','Historiebruk i vardagsliv, samhällsliv och politik och dess påverkan på identitet och värderingar.')
];

const Q=(q,options,answer,why,visual,context='')=>({q,options,answer,why,visual,context});
window.knowledgeQuestions={
'begransande-reaktant':[
Q('Du har 6 H₂ och 2 O₂. Vilken reaktant begränsar mängden vatten?',['H₂','O₂','Ingen'],1,'Två O₂ behöver fyra H₂. Syret tar slut och två H₂ blir över.','6 H₂ + 2 O₂ → 4 H₂O + 2 H₂ kvar'),
Q('Du har 4 H₂ och 3 O₂. Vad blir kvar?',['1 O₂','2 H₂','Inget'],0,'Fyra H₂ reagerar med två O₂. En O₂ återstår.','4 H₂ + 3 O₂ → 4 H₂O + 1 O₂ kvar'),
Q('Hur många H₂O kan bildas av 8 H₂ och 3 O₂?',['3','6','8'],1,'Tre O₂ reagerar med sex H₂ och bildar sex H₂O.','6 H₂ + 3 O₂ → 6 H₂O; 2 H₂ kvar')],
'testa-argumentation':[
Q('Vilken mening är tesen?',['Skolan bör erbjuda frukost.','Hungriga elever får svårare att koncentrera sig.','Ett försök kan utvärderas.'],0,'Tesen är ståndpunkten som resten av resonemanget ska stödja.','TES ← argument ← belägg','Skolan bör erbjuda frukost. Hungriga elever får svårare att koncentrera sig.'),
Q('Vilken del bemöter invändningen?',['En invändning är kostnaden.','Men ett begränsat försök kan först utvärderas.','Frukost serveras på morgonen.'],1,'Den andra delen svarar på problemet som invändningen tar upp.','invändning → svar'),
Q('Vilket är bäst belägg för ett argument om koncentration?',['En relevant undersökning med redovisad metod','Att upprepa tesen','Ett anonymt påstående utan källa'],0,'Belägget behöver vara relevant och möjligt att värdera.','argument + relevant underlag')],
'kallans-rost':[
Q('Vilken mening är ett korrekt markerat citat?',['Läraren skriver: ”Läsning behöver få ta tid.”','Läraren tycker läsning.','Jag vill läsa längre.'],0,'Ett citat återger källans exakta ord och markeras med citattecken.','källa → exakt återgivning'),
Q('Vilken mening är ett referat?',['Läraren menar att tid behöver avsättas för läsning.','”Läsning behöver få ta tid.”','Jag läser varje dag.'],0,'Referatet återger tanken med egna ord och anger vem som uttryckt den.','källans tanke → egna ord'),
Q('Vilken del är skribentens egen slutsats?',['Rapporten visar…','…fler boklån…','Därför tror jag…'],2,'”Tror jag” markerar skribentens egen tolkning.','källa ≠ egen slutsats')],
'rorelse-och-grafer':[
Q('En läge–tid-graf är horisontell. Vad betyder det?',['Föremålet står stilla','Farten är hög','Föremålet accelererar'],0,'Positionen ändras inte, alltså är hastigheten noll.','horisontell graf → v = 0'),
Q('En rät läge–tid-graf lutar nedåt. Vad visar den?',['Positiv hastighet','Negativ konstant hastighet','Ökande acceleration'],1,'Positionen minskar lika mycket per tidsenhet.','negativ lutning → negativ hastighet'),
Q('Linje A är brantare än linje B. Vad är säkert?',['A har större hastighetsbelopp','A har större massa','A börjar vid origo'],0,'Lutningens storlek visar hastighetsbeloppet.','brantare → större |v|')],
'time-and-tense':[
Q('Choose the sentence for a finished time period.',['I visited London last year.','I have visited London last year.','I have visit London last year.'],0,'“Last year” is finished, so simple past fits.','LAST YEAR ●──── NOW'),
Q('Choose the sentence about experience up to now.',['I visited London three times.','I have visited London three times.','I am visiting London three times.'],1,'Present perfect connects past experience to now.','PAST ● ● ● ─── NOW'),
Q('Which means the person still lives here?',['I lived here for three years.','I have lived here for three years.','I live here since three years.'],1,'Present perfect with “for” can continue to now.','START ═════ NOW')],
'text-connect':[
Q('It was raining. ___, we went outside.',['Therefore','However','Because'],1,'“However” marks contrast.','expectation ↔ contrast'),
Q('The bus was late, ___ I missed the beginning.',['so','although','because'],0,'“So” introduces a result.','cause → result'),
Q('We stayed inside ___ it was raining.',['however','because','therefore'],1,'“Because” introduces the reason.','result ← reason')],
'linjar-eller-exponentiell':[
Q('Ett konto ökar med 5 % varje år. Vilken modell passar?',['Linjär','Exponentiell','Konstant'],1,'Samma procent ger förändringsfaktorn 1,05 varje år.','startvärde · 1,05ᵗ'),
Q('En tank fylls med 20 liter per minut. Vilken modell passar?',['Linjär','Exponentiell','Slumpmässig'],0,'Volymen ökar med samma antal liter varje minut.','V(t) = V₀ + 20t'),
Q('Följden är 100, 120, 144. Vilken är förändringsfaktorn?',['1,2','20','0,2'],0,'Varje värde är det föregående multiplicerat med 1,2.','100 × 1,2 = 120 × 1,2 = 144')],
'sannolikhet-flera-steg':[
Q('Ett rättvist mynt kastas två gånger. P(krona båda gångerna)?',['1/2','1/4','1/8'],1,'Kasten är oberoende: 1/2 · 1/2 = 1/4.','K 1/2 → K 1/2 ⇒ 1/4'),
Q('3 röda och 2 blå kulor. En röd dras utan återläggning. P(röd igen)?',['3/5','2/4','1/5'],1,'Två röda av fyra kulor finns kvar.','3R + 2B → 2R + 2B'),
Q('P(regn)=0,3. Vad är P(inget regn)?',['0,3','0,6','0,7'],2,'Komplementet är 1 − 0,3 = 0,7.','P(A) + P(inte A) = 1')],
'energikedjor':[
Q('En boll faller utan luftmotstånd. Vilken omvandling dominerar?',['Rörelse → läge','Läge → rörelse','Kemisk → elektrisk'],1,'Minskad lägesenergi blir rörelseenergi.','Eₚ minskar → Eₖ ökar'),
Q('En cykel bromsar. Vart tar rörelseenergin främst vägen?',['Den försvinner','Till termisk energi','Till lägesenergi'],1,'Friktion ökar den termiska energin i bromsar och omgivning.','Eₖ → termisk energi'),
Q('100 J tillförs och 70 J blir nyttig energi. Verkningsgrad?',['30 %','70 %','143 %'],1,'70/100 = 0,70 = 70 %.','η = 70/100')],
'elektriska-kretsar':[
Q('U=12 V och R=6 Ω. Hur stor är I?',['0,5 A','2 A','72 A'],1,'I=U/R=12/6=2 A.','I = 12/6 = 2 A'),
Q('Två lampor är seriekopplade. Hur är strömmen?',['Samma genom båda','Större i den första','Noll i den andra'],0,'Samma ström går genom alla komponenter i en enkel seriekrets.','I → L₁ → L₂'),
Q('R fördubblas medan U är konstant. Vad händer med I?',['Fördubblas','Halveras','Oförändrad'],1,'I=U/R, så dubbelt R ger halva I.','R × 2 ⇒ I ÷ 2')],
'periodiska-trender':[
Q('Vilken atom har störst radie: Li eller F?',['Li','F','Lika'],0,'Radien minskar generellt åt höger i period 2.','Li ●────→ • F'),
Q('Vilket är mest elektronegativt: C eller F?',['C','F','Lika'],1,'Elektronegativiteten ökar generellt åt höger; fluor är högst.','C ───→ F'),
Q('Vilken atom har störst radie: Na eller K?',['Na','K','Lika'],1,'Radien ökar generellt nedåt när elektronskal tillkommer.','Na ↓ K')],
'klassificera-reaktioner':[
Q('HCl + NaOH → NaCl + H₂O är främst en…',['syrabasreaktion','redoxreaktion','fällningsreaktion'],0,'Syra och bas reagerar och bildar bland annat vatten.','H⁺ + OH⁻ → H₂O'),
Q('Zn + Cu²⁺ → Zn²⁺ + Cu är en…',['syrabasreaktion','redoxreaktion','fasövergång'],1,'Zink avger och kopparjoner tar upp elektroner.','elektronöverföring'),
Q('Ag⁺(aq) + Cl⁻(aq) → AgCl(s) är en…',['fällningsreaktion','förbränning','syrabasreaktion'],0,'Lösta joner bildar ett svårlösligt fast ämne.','aq + aq → s')],
'litterar-analys':[
Q('Vilket svar är en analys?',['Dörren slår igen och det blir tyst.','Den plötsliga tystnaden skapar en hotfull stämning.','Sedan händer något mer.'],1,'Svaret tolkar effekten av en textdetalj.','textdetalj → effekt → tolkning','När dörren slog igen blev korridoren plötsligt tyst.'),
Q('Vilket citat stödjer bäst att personen känner sig instängd?',['”Väggarna tycktes krypa närmare.”','”Solen sken.”','”Hon köpte en biljett.”'],0,'Den bildliga formuleringen stöder tolkningen konkret.','tolkning + textställe'),
Q('Berättaren vet vad alla personer tänker. Vilket begrepp passar?',['Allvetande berättare','Jagetberättare','Dialog'],0,'En allvetande berättare kan visa flera personers tankar.','berättare → flera inre perspektiv')],
'anpassa-till-mottagare':[
Q('Bästa inledningen i ett formellt mejl till en praktikplats?',['Tja! Jag vill ha praktik.','Hej, jag heter Sam och söker praktik vecka 12.','Hallå, har ni något kul?'],1,'Den är tydlig, artig och relevant.','mottagare + syfte → språk'),
Q('Du talar för en publik utan förkunskaper. Vad hjälper mest?',['Oförklarade fackord','Tydlig struktur och konkreta exempel','Snabb högläsning'],1,'Språk och innehåll anpassas till förkunskaperna.','förkunskaper → exempel'),
Q('Bästa avslutningen i en argumenterande text?',['Återknyt till tes och huvudskäl','Lägg till ett nytt oförklarat argument','Upprepa ordagrant'],0,'Avslutningen samlar resonemanget.','tes + skäl → slutsats')],
'read-between-lines':[
Q('“Maya checked the clock again and kept her coat on.” Best inference?',['She may be waiting to leave.','She lost her coat.','She cannot read clocks.'],0,'The details suggest that she expects to leave soon.','clues → inference'),
Q('“That was clever,” he said, looking at the broken screen. Meaning?',['Certain praise','Possible irony','A colour description'],1,'The broken screen conflicts with the literal praise.','words + context → attitude'),
Q('Which clue best shows persuasive purpose?',['A date','Reasons for one position and a call to action','Three paragraphs'],1,'Reasons and a call to action reveal persuasive purpose.','position + reasons + action')],
'adapt-your-english':[
Q('Best request in a formal workplace email?',['Send the schedule now.','Could you please send the updated schedule?','Yo, where is it?'],1,'It is clear and appropriately polite.','formal → polite and precise'),
Q('Best way to add another viewpoint?',['I see your point, but another factor is…','You are wrong.','Whatever.'],0,'It acknowledges the speaker and adds a perspective constructively.','acknowledge → new point'),
Q('A friend asks why you were late. Clearest answer?',['Due to circumstances, attendance failed.','I missed the bus, so I arrived late.','Arrival was delayed by me.'],1,'The direct causal explanation suits the context.','cause → result')],
'historisk-kronologi':[
Q('Vilken ordning är kronologisk?',['Antiken → medeltiden → tidigmodern tid','Medeltiden → antiken → modern tid','Tidigmodern tid → forntiden → antiken'],0,'Medeltiden följer efter antiken och därefter tidigmodern tid.','forntid → antiken → medeltiden → tidigmodern → modern'),
Q('Varför behöver epokindelningar problematiseras?',['Alla samhällen ändras samtidigt','De bygger på kulturella och politiska perspektiv','Årtal kan inte användas'],1,'Valda brytpunkter passar inte automatiskt hela världen.','brytpunkt → perspektiv'),
Q('Vilken process började först?',['Industrialisering','Jordbrukets utveckling','Digitalisering'],1,'Jordbrukets utveckling började långt tidigare.','jordbruk → industri → digitalisering')],
'orsak-och-konsekvens':[
Q('Vilket är en konsekvens av industrialiseringen?',['Fabriker behövde kraft','Många flyttade till växande städer','Maskiner kunde drivas'],1,'Urbanisering blev en följd av industrins arbetskraftsbehov.','industrialisering → urbanisering'),
Q('Vilket är ett exempel på kontinuitet?',['Allt ändras direkt','Äldre maktmönster finns kvar trots nya lagar','Alla institutioner försvinner'],1,'Kontinuitet innebär att drag består över tid.','förändring + något består'),
Q('Varför räcker sällan en orsak för demokratisering?',['Flera ekonomiska, sociala och politiska faktorer samverkar','Orsaker kan aldrig undersökas','Alla länder ändrades samtidigt'],0,'Komplexa processer har ofta flera orsaker och aktörer.','struktur + aktör + händelse')],
'granska-historiska-kallor':[
Q('Du undersöker hur en soldat upplevde ett slag. Mest direkt användbar källa?',['Soldatens samtida dagbok','En modern lärobok','En senare spelfilm'],0,'Dagboken ligger nära upplevelsen men behöver ändå granskas.','fråga → närhet + perspektiv'),
Q('Två tidningar återger samma telegram. Är de oberoende?',['Ja, olika namn','Nej, samma ursprungliga uppgift','Ja, samma datum'],1,'Båda är beroende av telegrammet.','telegram → A + B'),
Q('En värvningsaffisch är särskilt användbar för att undersöka…',['exakt vad alla tänkte','hur avsändaren ville påverka','exakt antal soldater'],1,'Budskap och form visar avsedd påverkan, inte publikens faktiska reaktion.','avsändare → budskap → syfte')],
'kanna-igen-historiebruk':[
Q('Ett företag använder vikingar för nordisk identitet. Vad undersöks?',['Historiebruk i marknadsföring','Vikingars syn på reklam','Produktens pris'],0,'Det förflutna används för associationer och försäljning.','historia → identitet → försäljning'),
Q('En politiker hänvisar till en historisk händelse. Viktigaste frågan?',['Vilket urval och syfte?','Hur lång är texten?','Finns en film?'],0,'Historiebruk granskas genom urval, tolkning, avsändare och syfte.','urval av dåtid → argument idag'),
Q('Ett museum visar flera gruppers erfarenheter. Vad synliggörs?',['Flera perspektiv','Att bara ett perspektiv finns','Att alla källor är lika'],0,'Olika erfarenheter kan ge flera perspektiv på samma händelse.','en händelse → flera perspektiv')]
};
