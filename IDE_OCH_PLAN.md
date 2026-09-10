# Gymnasievisualiseringar – idé och första innehållsplan

Datum: 10 september 2026  
Status: Förslag inför fortsatt arbete. Detta dokument beskriver webbplatsen; själva webbplatsen är ännu inte byggd.

## 1. Så har jag förstått uppdraget

Du vill utveckla idén i [Begrepp att undersöka – interaktiva gymnasieövningar](https://paulbelfrage.se/presentations/gymnasie-visualiseringar) till en egen webbplats med ett växande bibliotek av visualiseringar och interaktiva övningar för gymnasiet.

Varje ämne ska ha en egen undersida. På ämnessidan ska tydliga, klickbara boxar beskriva vad varje visualisering hjälper eleven att förstå, vilken ämnesnivå den hör till och hur den anknyter till Gy25:s centrala innehåll. Eleven ska kunna hitta en relevant övning utan att gå igenom en hel presentation.

Jag föreslår matematik, fysik, kemi, svenska och engelska som första etapp. Jag tolkar dina exempel som en början, så strukturen ska kunna utökas med fler ämnen. Utgångspunkten är gymnasieskolans ämnesplaner.

Prioriteten är begrepp och samband som kan vara svåra att förstå och där en genomtänkt visualisering hjälper eleven att undersöka varför något fungerar. Varje övning ska ha ett tydligt lärandemål.

## 2. Vad vi tar med från dina referenser

### Befintliga gymnasieövningar

Jag har läst sidans HTML och övningsdata. Där finns bland annat formelomvandling, funktioner och grafer, kraftdiagram, optik, ordklasser, satsdelar och engelsk ordföljd, samt innehåll för andra ämnen.

Det pedagogiska mönstret är särskilt användbart: ett exempel, en egen förutsägelse eller ett försök, interaktion, förklarande återkoppling och en återkallningsfråga. Detta blir grunden även på den nya webbplatsen. Befintliga övningar blir kandidater för återbruk efter kontroll av innehåll och Gy25-koppling.

Övningarnas interna svårighetssteg ska heta exempelvis **steg 1–3**, så att de inte förväxlas med Gy25:s ämnesnivåer.

### Struktur och tema

Från [paulbelfrage.se](https://paulbelfrage.se/) hämtas tydlig ämnesnavigation, vänstermeny på större skärmar, mobilmeny, ljusa paneler och en lugn lärmiljö. Från [Webbutveckling 1](https://paul-pauliskolan.github.io/webb1/) hämtas grupperingen i innehållsområden, tydliga länkrutor och ett läromedelsliknande upplägg.

Stilmallarna visar en ljus grund med blå accenter på huvudsidan och gröna accenter i Webb 1. Mitt förslag är:

- Ljust grågrön bakgrund, vita innehållsboxar och mörk text.
- Grön huvudaccent `#0f766e`, med blått som kompletterande länkfärg.
- Tunna ramar, lätt rundade hörn och diskreta skuggor.
- Luft mellan avsnitten och begränsad radlängd i förklarande texter.
- Lättläst brödtext; släktskapet med Webb 1 kan förstärkas med Georgia i längre läsavsnitt.
- Samma navigation och kortstruktur i alla ämnen. Ämnesnamn visas alltid även om ämnen får egna färgmarkeringar.

Detta är en designriktning utifrån sidornas struktur och CSS, inte en färdig visuellt testad layout.

## 3. Föreslagen webbplatsstruktur

```text
Start
├── Matematik
│   ├── Algebra och formler
│   ├── Funktioner och förändring
│   └── Sannolikhet och statistik
├── Fysik
│   ├── Krafter och rörelse
│   ├── Energi
│   └── Elektricitet och vågor
├── Svenska
│   ├── Text och argumentation
│   ├── Språkets uppbyggnad
│   └── Läsning och analys
├── Engelska
│   ├── Grammar in context
│   ├── Text structure and communication
│   └── Reading and interpretation
└── Om materialet och Gy25-kopplingarna
```

Startsidan visar fyra stora ämnesboxar och en kort instruktion: **Välj ämne → välj område → undersök och förklara.**

Varje ämnessida innehåller en kort introduktion, filter för ämnesnivå och innehållsområde samt övningsboxar. Rekommenderade startövningar visas först. Varje visualisering får en egen länk som läraren kan dela direkt med en klass.

En övningssida innehåller mål, förkunskaper, en inledande fråga, själva visualiseringen, återkoppling och en avslutande uppgift. Kopplingen till centralt innehåll finns i ett tydligt avsnitt. Det ska vara enkelt att gå tillbaka till ämnessidan.

## 4. Gy25 och hur prioriteringen görs

I Gy25 används **ämnen och nivåer**. Webbplatsen bör därför visa exempelvis *Svenska, nivå 1* och *Matematik, nivå 1c*, även om elever ibland säger ”kurs”. Det centrala innehållet anges per nivå. Se [Skolverkets beskrivning av ämnesbetyg](https://www.skolverket.se/prov-och-bedomning/betyg/fran-bedomningar-till-betyg/betygssattning-i-amnen-gy25).

**Ämnesplanerna rangordnar inte elevernas svårigheter.** Urvalet nedan är min preliminära pedagogiska bedömning, grundad i begreppens abstraktion, vilka förkunskaper de kräver och vad en interaktiv modell kan göra synligt. Det är inte en statistiskt fastställd lista över de svåraste momenten.

Jag prioriterar områden där eleven behöver:

1. Skilja mellan begrepp som lätt blandas ihop.
2. Koppla samman flera uttrycksformer, exempelvis situation, bild, text och formel.
3. Förstå något som är osynligt eller svårt att följa i ett statiskt exempel.
4. Använda förståelsen i många senare moment.

Första versionens ordning bör sedan justeras med dina undervisningserfarenheter och korta elevförsök. Ett avancerat moment behöver inte byggas före ett grundläggande moment som blockerar fortsatt lärande.

## 5. Första urvalet per ämne

Tabellernas innehållskopplingar är korta parafraser, inte citat. Visualiseringarnas utformning och beskrivna förståelsehinder är förslag. Prioritet 1 byggs först inom respektive ämne; talen jämför inte svårighetsgrad mellan ämnen.

### Matematik

| Prioritet | Visualisering och förståelsehinder | Eleven får undersöka | Gy25-koppling |
|---|---|---|---|
| 1 | **Formler som balans.** Att lösa ut en variabel riskerar att bli en mekanisk flyttregel. | Utför samma operation på två led och följ varför likheten består. | Matematik 1a, 1b, 1c: hantering av formler och algebraiska uttryck. |
| 2 | **En funktion – fyra uttrycksformer.** Sambandet mellan situation, formel, tabell och graf kan vara oklart. | Ändra lutning och startvärde; se alla uttrycksformer uppdateras tillsammans. | Matematik 1b, 1c: funktionsrepresentationer och räta linjens ekvation. |
| 3 | **Linjär eller exponentiell förändring?** Samma ökning och samma procentuella ökning kan blandas ihop. | Jämför två förlopp från samma startvärde och förutsäg nästa steg. | Matematik 1a, 1b, 1c: exponentialfunktioner, jämförelser med linjära funktioner och förändringsfaktor. |
| 4 | **Sannolikhet med och utan återläggning.** Första utfallets påverkan på nästa är svår att hålla reda på. | Dra objekt ur en behållare och följ ett sannolikhetsträd. | Matematik 1a, 1b, 1c: beroende och oberoende händelser samt sannolikhet i flera steg. |

Källa: [Skolverket – Matematik, Gy25](https://syllabuswebb.skolverket.se/subject/MATE/1/pdf), centralt innehåll för respektive nivå, s. 2–6. Gemensamma övningar behöver fortfarande anpassas till nivåernas omfattning och sammanhang.

### Fysik

| Prioritet | Visualisering och förståelsehinder | Eleven får undersöka | Gy25-koppling |
|---|---|---|---|
| 1 | **Kraft är inte hastighet.** Rörelse kan felaktigt tolkas som bevis för en kraft i rörelseriktningen. | Bygg kraftdiagram och jämför balanserade krafter med förändrad rörelse. | Fysik 1a1 och 1b: krafter som orsak till hastighetsförändring samt rätlinjig rörelse. |
| 2 | **Rörelse och grafer.** Grafens höjd och lutning kan blandas ihop. | Följ ett rörligt föremål samtidigt med läge–tid- och hastighet–tid-grafer. | Fysik 1a1 och 1b: likformig och accelererad rörelse samt grafanalys. |
| 3 | **Vart tar energin vägen?** Minskad rörelseenergi kan uppfattas som att energi försvinner. | Följ energifördelningen i en rörelse med och utan friktion. | Fysik 1a1 och 1b: energiformer, energiprincipen och arbete. |
| 4 | **Ström, spänning och resistans.** Storheternas olika roller behöver bli tydliga. | Ändra en enkel krets och jämför mätvärden på flera platser. | Fysik 1a1 och 1b: spänning, ström, resistans och elektriska kretsar. |

Källa: [Skolverket – Fysik, Gy25](https://www.skolverket.se/undervisning/gymnasieskolan/amnesplaner-i-gymnasieskolan/hitta-program-och-amnen-i-gymnasieskolan-gy25/amne-gy2025?url=907561864%2Fsyllabuscw%2Fjsp%2Fsubject.htm%3FsubjectCode%3DFYSK%26courseCode%3DFYSK1B00X%26version%3D1%26tos%3Dgy%26origin%3Dgy2025), nivå 1a1 och 1b. Modellerna ska ange sina antaganden, exempelvis försummat luftmotstånd.

### Svenska

| Prioritet | Visualisering och förståelsehinder | Eleven får undersöka | Gy25-koppling |
|---|---|---|---|
| 1 | **Bygg ett argument.** Tes, skäl, belägg och bemötande kan vara svåra att skilja åt. | Ordna textdelar och synliggör vilka påståenden de stöder. | Svenska 1: argumenterande skrivande samt texters struktur och språkliga drag. |
| 2 | **Vems röst hörs?** Källans innehåll och elevens slutsats kan flyta ihop. | Markera citat, referat och egen kommentar i ett stycke och bearbeta det. | Svenska 1: citat- och referatteknik samt kritisk läsning. |
| 3 | **Ord, fras och sats.** Ordklass och satsdel beskriver olika saker men kan blandas ihop. | Växla mellan ordklassmarkering och frasernas funktion i samma mening. | Svenska 2: grammatik och samspelet mellan ord, fraser och satser. |
| 4 | **Från återberättande till analys.** Att beskriva handlingen räcker inte för att förklara hur texten fungerar. | Knyt textställen till berättarteknik och pröva en underbyggd tolkning. | Svenska 1: skönlitterär analys, motiv, berättarteknik och stildrag. |

Källa: [Skolverket – Svenska, Gy25](https://syllabuswebb.skolverket.se/subject/SVEN/1/pdf), nivå 1–2, s. 2–3. Språkliga grunder kan introduceras på nivå 1; den uttryckliga kopplingen för fördjupad grammatikanalys ovan är nivå 2.

### Engelska

| Prioritet | Visualisering och förståelsehinder | Eleven får undersöka | Gy25-koppling |
|---|---|---|---|
| 1 | **Time and tense.** Svensk och engelsk tidsanvändning överensstämmer inte alltid. | Koppla korta situationer till tidslinjer och jämför simple past med present perfect. | Engelska 1: grammatiska strukturer i egen kommunikation samt uttryck för tidsaspekt. |
| 2 | **Build the sentence.** Hjälpverb och ordföljd förändras mellan påståenden, frågor och negationer. | Bygg om samma budskap och följ verbens funktion. | Engelska 1: grammatiska strukturer och meningsbyggnad. |
| 3 | **Make the text connect.** Korrekta enskilda meningar garanterar inte ett sammanhängande resonemang. | Byt sambandsord och se hur orsak, kontrast och slutsats förändras. | Engelska 1: textbindning och uttryck som skapar struktur och sammanhang. |
| 4 | **Read between the lines.** Bokstavligt innehåll och underförstådd betydelse kräver olika läsning. | Markera ledtrådar och jämför möjliga tolkningar av en kort text eller dialog. | Engelska 2: strategier för slutsatser om syfte, synsätt och underförstådd betydelse. |

Källa: [Skolverket – Engelska, Gy25](https://syllabuswebb.skolverket.se/subject/ENGE/1/pdf), nivå 1–2, s. 2–4. Valet av specifika tempus är en didaktisk konkretisering av bredare innehåll, inte en uttrycklig tempuslista i ämnesplanen. Övningarna bör huvudsakligen vara på engelska.

## 6. Så ska en klickbar visualiseringsbox fungera

En box är en ruta på ämnessidan som beskriver visualiseringen besökaren kommer till. **Hela rutan är klickbar och leder till själva visualiseringen på en egen sida.** Beskrivningen ska göra det tydligt vad besökaren kommer att se och kunna undersöka efter klicket, tillsammans med syfte och koppling till centralt innehåll.

Flödet är: **Ämnessida → klick på en beskrivande box → visualisering.** Rutan fungerar som en sammanhållen länk och ska även kunna öppnas med tangentbord.

Exempel på färdig boxtext:

> **Kraft är inte hastighet**  
> Fysik · nivå 1a1 / 1b · cirka 10 minuter  
> En interaktiv modell där du ändrar krafterna på ett föremål och ser hur rörelsen påverkas. Kraftpilar visar krafternas riktning och storlek.  
> **Syfte:** Förstå varför ett föremål kan röra sig med konstant hastighet när den sammanlagda kraften är noll.  
> **Du gör:** Bygger ett kraftdiagram, förutsäger rörelsen och testar din förklaring.  
> **Centralt innehåll:** Krafter och förändring av hastighet; rätlinjig rörelse.  
> **Öppna visualiseringen →**

Texten ”Öppna visualiseringen” visar vart klicket leder; hela boxen har samma destination.

På övningssidan kompletteras boxen med exakt ämnesnivå, nivåkod, länk till Skolverket och en tydligt märkt parafras eller ett kort citat ur relevant innehållspunkt. För exemplet är nivåkoderna FYSK1A10X och FYSK1B00X.

Alla boxar får samma grundfält: titel, syfte, ämnesnivå, elevaktivitet, innehållskoppling och länk. Tidsåtgång och förkunskaper kan hjälpa eleven att välja. Arbetsmaterial ska märkas som planerat och får inte ha en knapp som antyder att en färdig övning finns.

## 7. Gemensam pedagogisk form

1. **Förutsäg:** Eleven tar ställning innan utfallet visas.
2. **Undersök:** Eleven ändrar en sak i taget eller jämför genomtänkta exempel.
3. **Förklara:** Återkopplingen beskriver sambandet och varför ett svar fungerar eller behöver omprövas.
4. **Använd igen:** Eleven löser en ny variant med mindre stöd.

I språkämnen kan visualisering betyda färgmarkerade samband, flyttbara textdelar, tidslinjer eller två texter bredvid varandra. Tolkningsfrågor behöver ge utrymme för flera välgrundade svar. En fast svarsmall passar främst avgränsade frågor.

Övningarna ska fungera på mobil och dator, kunna användas med tangentbord och ha alternativ till enbart dra-och-släpp. Färg kompletteras med text eller symboler. Animationer ska kunna pausas och övningar återställas.

## 8. Föreslagen byggordning

**Första prototypen:** Startsida, fem ämnessidor och en fungerande övning per ämne: formler som balans, kraft är inte hastighet, bygg ett argument och time and tense. Då kan både den gemensamma strukturen och skillnaderna mellan ämnen prövas.

**Första innehållsversionen:** Utöka till de 20 förslagen ovan, med prioritet 1–2 före 3–4 inom varje ämne. Kontrollera varje koppling till centralt innehåll och låt elevförsök påverka ordningen.

**Vidare utveckling:** Lägg till högre ämnesnivåer och fler ämnen. Gör motsvarande granskning av ämnesplaner innan nya områden får en Gy25-märkning. Denna första genomgång täcker de fem föreslagna startämnena, inte gymnasiets samtliga ämnen eller moment.

## 9. Vad detta dokument ska göra möjligt att bedöma

- Stämmer tolkningen av en fristående webbplats med en undersida per ämne?
- Är kombinationen av dina kurssidornas navigation och Webb 1:s ljusa gröna tema rätt riktning?
- Är de fem startämnena och den föreslagna prioriteringen relevanta för dina elever?
- Beskriver exempelboxen syfte och innehållskoppling tillräckligt tydligt?

Nästa steg är att omsätta denna inriktning i en första webbplatsprototyp när du har gett din återkoppling.


## Tillägg: kemi och första webbplatsutkastet

Kemi ingår som ett eget ämne. Den första versionen prioriterar balansering av reaktionsformler och begränsande reaktant. Därefter föreslås kemisk bindning och ämnens egenskaper (nivå 1) samt dynamisk jämvikt (nivå 2). Prioriteringen är pedagogisk, inte en rangordning från Skolverket.

Gy25-koppling: Kemi nivå 1, KEMI1000X, behandlar materiens oförstörbarhet, reaktionsformler, substansmängdförhållanden och begränsande reaktanter. Nivå 2 behandlar jämvikter. Källa: [Skolverkets ämnesplan i kemi](https://syllabuswebb.skolverket.se/subject/KEMI/1/pdf), s. 2–3.

Första fungerande utkastet innehåller fem ämnessidor och tio visualiseringar, två per ämne. Varje beskrivande box är klickbar i sin helhet och leder till visualiseringens egen sida. Detta är en första del av den större innehållsplanen ovan.


## Reviderad riktning: övningar från originalet

Webbplatsen återanvänder originalpresentationens tio övningsmoduler på egna sidor: egna svar, flera varianter, tre stödnivåer, kontroll med återkoppling och återkallningsfråga. Kemi innehåller roterbara schematiska 3D-modeller av CO₂, H₂O, NH₃, CH₄, BF₃ och SF₆. Eleven bedömer geometri, vinkel och polaritet innan dipolerna visas. Modellerna använder originalets tredimensionella koordinater; atomstorlekar och bindningslängder är inte skalenliga. Biblioteket omfattar nu 16 sidor med övningar och undersökningar.
