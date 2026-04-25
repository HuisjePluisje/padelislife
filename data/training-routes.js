window.TRAINING_ROUTES = [
  {
    slug: "anti-bandeja-defense",
    name: "Anti-Bandeja Defense",
    summary: "Verdedigen tegen sterke bandeja- en vibora-spelers zonder automatisch naar de lob te vluchten.",
    problem: "De speler lobt te snel, geeft de netspeler overheadcomfort en verliest daardoor de regie.",
    focus: ["Low T", "body", "voeten", "chiquita", "random decision"],
    progression: [
      "Stap 1: lage bal naar T",
      "Stap 2: lage bal op voeten of body",
      "Stap 3: chiquita cross zonder float",
      "Stap 4: glasbackhand zonder lob",
      "Stap 5: lage forehand-defense zonder lob",
      "Stap 6: random decision tussen lob, low T, body en chiquita"
    ],
    defaultHabit: "Eerst kleur lezen en laag kiezen zodra je niet echt rood staat.",
    defaultUnlearn: "Automatisch lobben zodra je onder druk komt.",
    defaultNextGate: "Ga door zodra je minimaal 70% van je oranje- en groenballen laag houdt en direct bruikbaar herstelt.",
    defaultScoreGuide: {
      green: "Laag, bewust en herhaalbaar: de tegenstander moet onder volleyhoogte werken en jij blijft in een bruikbare positie.",
      orange: "Technisch raak, maar te veel float, te weinig diepte of te weinig herstel om de netspeler echt uit comfort te halen.",
      red: "Automatische of zwevende lob, halfhoge middenbal of een lage bal die juist een makkelijke bandeja uitnodigt."
    }
  },
  {
    slug: "low-ball-control",
    name: "Low Ball Control",
    summary: "Lage ballen leren sturen zonder float, zonder haast en met direct herstel naar de volgende positie.",
    problem: "De speler raakt de lage bal wel, maar krijgt te veel lift, te weinig richting of verliest daarna zijn voetenwerk.",
    focus: ["chiquita", "freeze-volley", "body", "voeten", "zachte handen"],
    progression: [
      "Stap 1: lage bal laten zakken onder netband",
      "Stap 2: lage bal koppelen aan herstelpas",
      "Stap 3: tweede lage bal onder druk houden"
    ],
    defaultHabit: "Laag houden met zachte handen en direct doorbewegen naar de volgende positie.",
    defaultUnlearn: "Te harde polsactie en kijken naar je eigen bal in plaats van herstellen.",
    defaultNextGate: "Ga door zodra de bal laag blijft zonder float en je herstelpas automatisch uit het contactritme komt.",
    defaultScoreGuide: {
      green: "De bal blijft laag, zakt na de stuit en jij blijft in balans voor de volgende actie.",
      orange: "De bal is speelbaar maar mist echte laagte, precisie of vervolgpositie.",
      red: "De bal hangt, stuit te hoog op of jij verliest direct je voetenwerk na contact."
    }
  },
  {
    slug: "return-first-volley",
    name: "Return + First Volley",
    summary: "Van service- of returnmoment meteen naar de eerste logische vervolgactie aan het net of in het midden.",
    problem: "De return of opening is bruikbaar, maar er zit geen duidelijk plan op de eerste volley of op het sluiten van middenruimte.",
    focus: ["returndiepte", "body block", "deep middle", "split-step", "eerste volley"],
    progression: [
      "Stap 1: return terugbrengen met richting",
      "Stap 2: herkennen wanneer je mag doorstappen",
      "Stap 3: eerste volley gebruiken om de rally te ordenen"
    ],
    defaultHabit: "Na return of service direct een vervolgplan koppelen aan je eerste volley en je middenpositie.",
    defaultUnlearn: "De opening los zien van de rally die erna komt.",
    defaultNextGate: "Ga door zodra je return of service in minstens 14 van 20 herhalingen direct leidt tot een bruikbare eerste volley of duidelijke middensluiting.",
    defaultScoreGuide: {
      green: "De opening geeft een duidelijk vervolgplan en de eerste volley bevestigt dat plan.",
      orange: "De bal komt terug, maar zonder echte druk of zonder sluitende positie erna.",
      red: "Je raakt de opening wel, maar laat initiatief of middencontrole direct weer los."
    }
  },
  {
    slug: "overhead-under-pressure",
    name: "Overhead Under Pressure",
    summary: "Onder tijdsdruk de juiste overheadoplossing kiezen: reset, controle-overhead of directe druk.",
    problem: "De speler leest slechte, diepe en halfhoge lobs te laat en kiest daardoor de verkeerde overhead.",
    focus: ["slechte lob", "diepe lob", "halfhoge lob", "reset-overhead", "instapmoment"],
    progression: [
      "Stap 1: lobkwaliteit lezen",
      "Stap 2: reset of controle kiezen",
      "Stap 3: druk of instap pas toevoegen als de overhead dat toelaat"
    ],
    defaultHabit: "Eerst de kwaliteit van de lob lezen, dan pas bepalen of controle, reset of druk logisch is.",
    defaultUnlearn: "Elke overhead als finish behandelen, ook wanneer de lob daar niet geschikt voor is.",
    defaultNextGate: "Ga door zodra je onder druk de juiste overheadkeuze maakt en daarna ook de juiste positie houdt.",
    defaultScoreGuide: {
      green: "De overhead past bij de lobkwaliteit en laat je in controle of druk, zonder onnodig risico.",
      orange: "Technisch raak, maar te ambitieus of te neutraal voor de situatie.",
      red: "Verkeerde overheadkeuze: een diepe reset wordt te hard, of een halfhoge lob wordt juist te passief of te wild verwerkt."
    }
  },
  {
    slug: "bandeja-control",
    name: "Bandeja Control",
    summary: "De bandeja gebruiken om het net te houden, het midden klein te maken en de rally te blijven sturen.",
    problem: "De bandeja is technisch prima, maar tactisch te vrijblijvend of zonder herstel naar voren.",
    focus: ["body", "T", "net hold", "forward recovery", "lob read"],
    progression: [
      "Stap 1: lob vroeg lezen",
      "Stap 2: controle-bandeja naar body of T",
      "Stap 3: direct netpositie herpakken"
    ],
    defaultHabit: "De bandeja zien als netbehoud en positioneringsslag, niet als losse mooie overhead.",
    defaultUnlearn: "Na de bandeja blijven hangen of te vroeg voor een winner kiezen.",
    defaultNextGate: "Ga door zodra de bandeja diep en bruikbaar blijft én je herstelpas naar voren automatisch komt.",
    defaultScoreGuide: {
      green: "De bandeja houdt de tegenstander klein en jij komt direct terug in een dominante netpositie.",
      orange: "De bandeja is technisch oké maar geeft te weinig richting of herstel naar voren.",
      red: "De overhead is te hard, te los of laat het net juist openvallen."
    }
  },
  {
    slug: "vibora-pressure-shot",
    name: "Vibora / Pressure Shot",
    summary: "Drukslagen kiezen met richting, risicoherkenning en duidelijk doel in plaats van blind versnellen.",
    problem: "De speler versnelt wel, maar de drukslag heeft geen heldere bedoeling of marge.",
    focus: ["vibora", "druk naar zijglas", "bodydruk", "risicoherkenning"],
    progression: [
      "Stap 1: drukrichting kiezen",
      "Stap 2: risico en marge bewaken",
      "Stap 3: vervolgpositie vasthouden"
    ],
    defaultHabit: "Versnellen met een concreet target en een duidelijk vervolgplan.",
    defaultUnlearn: "Harder slaan zonder te weten wat de bal moet afdwingen.",
    defaultNextGate: "Ga door zodra de drukslag de rally echt verkleint zonder dat je positie uit elkaar valt.",
    defaultScoreGuide: {
      green: "De drukslag heeft een duidelijk target, blijft binnen marge en geeft jou vervolgcontrole.",
      orange: "Er zit druk in, maar de bal is te los of het vervolg is niet klaar.",
      red: "Het wordt vooral snelheid zonder doel, waardoor de rally juist weer open gaat."
    }
  },
  {
    slug: "net-dominance",
    name: "Net Dominance",
    summary: "Netpositie vasthouden via volgorde, richting en het juiste moment om vast te zetten of af te maken.",
    problem: "De speler wint het net wel, maar gebruikt de eerste en tweede volley niet slim genoeg om het echt dicht te houden.",
    focus: ["freeze", "body/T", "eerste volley", "midden sluiten", "afmaakmoment"],
    progression: [
      "Stap 1: net vastzetten",
      "Stap 2: ruimte klein houden",
      "Stap 3: pas openen of afmaken wanneer het punt groen wordt"
    ],
    defaultHabit: "Eerst vastzetten, dan pas openen of afmaken.",
    defaultUnlearn: "Te vroeg de hoek zoeken of de eerste volley als winner behandelen.",
    defaultNextGate: "Ga door zodra je de eerste twee netballen structureel gebruikt om ruimte kleiner te maken vóór je probeert af te maken.",
    defaultScoreGuide: {
      green: "Je houdt het net klein, kiest de juiste volgorde en maakt pas af wanneer het punt daar klaar voor is.",
      orange: "Technisch goed, maar de volgorde of richting laat nog te veel lucht in de rally.",
      red: "Te vroeg openen, te vroeg forceren of het midden weer openzetten."
    }
  },
  {
    slug: "dropshot-decision",
    name: "Dropshot Decision",
    summary: "Alleen voor de stopbal kiezen wanneer balans, balhoogte en tegenstanderpositie dat echt toestaan.",
    problem: "De dropshot wordt te weinig gebruikt of juist op verkeerde momenten geforceerd.",
    focus: ["balans", "bal boven netniveau", "tegenstander diep", "drukbal eerst"],
    progression: [
      "Stap 1: herkennen wanneer de stopbal mag",
      "Stap 2: de stopbal verbergen en laag houden",
      "Stap 3: het net na de stopbal ordenen"
    ],
    defaultHabit: "De stopbal pas kiezen wanneer de rally er tactisch om vraagt.",
    defaultUnlearn: "De dropshot uit frustratie, uit show of uit onbalans spelen.",
    defaultNextGate: "Ga door zodra je alleen nog voor de stopbal kiest bij echte groene voorwaarden en het vervolg ook op orde is.",
    defaultScoreGuide: {
      green: "De stopbal komt op het juiste moment, blijft laag en wordt meteen gevolgd door goede netpositie.",
      orange: "Het idee klopt deels, maar timing of vervolg is nog kwetsbaar.",
      red: "De dropshot komt uit onbalans, te hoog of zonder dat de tegenstander echt diep staat."
    }
  },
  {
    slug: "glass-defense",
    name: "Glass Defense",
    summary: "Glas- en hoekverdediging gebruiken om eerst controle terug te pakken en daarna pas weer op te bouwen.",
    problem: "De speler blijft in de hoek hangen, kiest te snel voor hoogte of dwingt een uitweg zonder balans.",
    focus: ["backglass", "double glass", "hoekverdediging", "rebuild", "recovery"],
    progression: [
      "Stap 1: glas lezen en tijd kopen",
      "Stap 2: vanuit glas terug naar T of homebase",
      "Stap 3: van chaos terug naar bruikbare rallycontrole"
    ],
    defaultHabit: "Eerst uit de glasdruk komen met een bruikbare bal en pas daarna weer richting controle bouwen.",
    defaultUnlearn: "Vanuit glas meteen forceren of passief in de hoek blijven hangen.",
    defaultNextGate: "Ga door zodra je vanuit glas of hoek niet alleen overleeft, maar ook zichtbaar terugkomt in een werkbare positie.",
    defaultScoreGuide: {
      green: "Je gebruikt glas of hoek om tijd en richting terug te krijgen en je positie wordt zichtbaar beter.",
      orange: "De bal blijft in spel, maar zonder echte herwinning van ruimte of met te veel passiviteit.",
      red: "Je blijft vast in de hoek, forceert te vroeg of geeft een makkelijke volgende bal weg."
    }
  },
  {
    slug: "match-warm-up-random",
    name: "Match Warm-Up / Random",
    summary: "Oefeningen die meerdere wedstrijdbeslissingen aan elkaar knopen en vooral ritme, herkenning en wedstrijdoverdracht trainen.",
    problem: "De speler heeft losse slagen, maar geen heldere warme start of random wedstrijdlogica in de machineflow.",
    focus: ["patroonstart", "random read", "wedstrijdritme", "rolwissel"],
    progression: [
      "Stap 1: ritme en herkenning opbouwen",
      "Stap 2: positie koppelen aan de eerste goede bal",
      "Stap 3: een volledig puntpatroon aan elkaar houden"
    ],
    defaultHabit: "Slagen zien als onderdelen van een punt in plaats van als losse herhalingen.",
    defaultUnlearn: "Een goede eerste bal slaan zonder vervolgplan of zonder wedstrijdoverdracht.",
    defaultNextGate: "Ga door zodra je meerdere goede keuzes achter elkaar kunt koppelen zonder dat je patroon uit elkaar valt.",
    defaultScoreGuide: {
      green: "De oefening voelt wedstrijdecht: keuzes, positie en tempo blijven in één lijn.",
      orange: "Technisch klopt veel, maar het patroon valt nog uit elkaar tussen de slagen.",
      red: "De oefening wordt een losse slagreeks zonder wedstrijdoverdracht."
    }
  }
];
