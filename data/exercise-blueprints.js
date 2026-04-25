window.EXERCISE_BLUEPRINTS = [
  {
    id: "01",
    category: "TRANSITIE & DOORSTAPPEN",
    title: "Glasbackhand Decision: Lob of Low T",
    shortTitle: "Glasbackhand Decision",
    summary: "Train uit de glasbackhand wanneer je hoog reset, wanneer je laag naar T/body speelt en wanneer je juist met een chiquita mag instappen.",
    context: "Je wordt diep in de backhandhoek vastgezet. Voor een linkshandige speler die rechts speelt is dit een klassiek beslismoment: niet elke glasbal vraagt om een lob. Soms koop je tijd met hoogte, maar vaak is laag door midden of naar de voeten tactisch slimmer.",
    matchContext: "Tegen een speler met een goede bandeja is een middelmatige lob geen oplossing maar een uitnodiging. Deze oefening leert wanneer je juist geen automatische lob speelt, zodat de tegenstander onder volleyhoogte moet werken en jij weer regie krijgt.",
    level: "average",
    levelLabel: "Gemiddeld",
    knltb: "6-7",
    type: "transitie",
    typeLabel: "Transitie naar net",
    sequence: "3-ball sequence",
    repeats: "20 herhalingen",
    totalBalls: "60 ballen",
    categoryColor: "#0D5517",
    playerVariant: {
      left: [
        "Linkshandig rechts: lees de backglass-bal eerst op hoogte en afstand tot je lichaam. Jouw default is niet lobben, maar classificeren.",
        "Oranje en groen mogen juist laag naar T, body of voeten vertrekken, zodat jij de sterke forehandvolley van de tegenstander onder zijn schouder dwingt.",
        "Na een groene chiquita stap je door met je eerste pas schuin voorwaarts richting midden, niet recht op de bal af."
      ],
      right: [
        "Rechtshandig links: spiegel de beslislogica vanuit de backhandhoek aan de andere kant van de baan.",
        "Ook hier is de opdracht om alleen hoog te spelen als de bal echt achter je of buiten je balans komt.",
        "Bij groen stap je door vanuit de backhandhoek en gebruik je de eerste volley om controle te bevestigen, niet om te gokken."
      ]
    },
    goal: [
      {
        title: "Hoofddoel",
        text: "Je traint drie duidelijke oplossingen uit de glasbackhand: rood = hoog resetten, oranje = laag naar T/body, groen = chiquita naar voeten en instappen."
      },
      {
        type: "list",
        title: "Tactische doelen",
        items: [
          "Herkennen wanneer de lob echt nodig is en wanneer laag spelen meer waarde heeft.",
          "De tegenstander met een lage T- of bodybal onder volleyhoogte dwingen in plaats van hem een comfortabele bandeja te geven.",
          "Na een groene oplossing direct ruimte naar voren nemen zonder de eerste volley te forceren.",
          "Na een rode oplossing wél herstellen, maar niet automatisch het net najagen."
        ]
      }
    ],
    setup: [
      { title: "Positie", text: "Start 0,5 tot 1 meter voor het achterglas in de backhandhoek." },
      { title: "Houding", text: "Neutrale basis, racketkop iets open en voeten klaar om achteruit-in-zijwaarts te draaien." },
      { title: "Voetenwerk", text: "Voor linkshandig rechts: eerste remstap met rechts, daarna indraaien zodat je de bal niet naast maar vóór het beslismoment leest." },
      { title: "Cyclus", text: "3-ball sequence, 20 herhalingen, 60 ballen totaal." }
    ],
    targets: [
      { name: "HIGH RESET", text: "Rood: hoge cross-lob of hoge reset die echt tijd koopt en niet kort in de bandeja-zone valt." },
      { name: "LOW T / BODY", text: "Oranje: lage bal door T of tegen het lichaam zodat de netspeler onder schouderhoogte moet volleren." },
      { name: "FEET ENTRY", text: "Groen: korte chiquita naar voeten waarna jij direct de eerste stap vooruit maakt." }
    ],
    steps: [
      { title: "Bal 1 - Lees rood, oranje of groen", text: "Gebruik het glas en beslis vóór contact. Rood: bal achter je of uit balans = hoge reset/lob. Oranje: bal naast je en redelijk stabiel = lage T- of bodybal. Groen: bal vóór je en controle = chiquita naar voeten." },
      { title: "Bal 2 - Positie koppelen aan je keuze", text: "Na rood herstel je eerst naar een bruikbare verdedigingspositie. Na oranje schuif je compact naar midden om de lage reactie op te vangen. Na groen stap je door richting servicelijn en speel je de eerste volley als controlebal." },
      { title: "Bal 3 - Bevestig de juiste vervolglogica", text: "Rood blijft neutraal. Oranje houdt de tegenstander laag met nog een body/T-keuze. Groen bevestigt de netovername met een rustige eerste volley of lage drukbal naar voeten." }
    ],
    score: [
      "Juiste classificatie vóór contact: rood, oranje of groen.",
      "Uitvoering past bij de keuze: hoog en diep, laag naar T/body of zacht naar voeten.",
      "Tegenstander wordt bij oranje/groen onder volleyhoogte gedwongen.",
      "Herstelpositie klopt met de gekozen oplossing: eerst neutraliseren, vasthouden of instappen."
    ],
    coaching: [
      "Niet elke moeilijke glasbal vraagt om hoogte; de kwaliteit van je balans bepaalt de keuze.",
      "Een lage T- of bodybal kan tactisch sterker zijn dan een halfgoede lob tegen een goede bandeja.",
      "Na groen is je eerste stap vooruit onderdeel van de slag, geen los moment erna."
    ],
    machine: [
      "Bal 1: diepe backglass-bal naar de backhandhoek, medium-hard, zodat de speler echt moet lezen of hij achter, naast of vóór de bal komt.",
      "Bal 2: vervolgbal vanuit mid-court, medium tempo, bedoeld als reactie op rood/oranje/groen.",
      "Bal 3: lage of halfhoge bevestigingsbal, medium-slow, voor herstel, controlevolley of tweede lage drukbal."
    ],
    coachView: [
      {
        title: "Observatie",
        bullets: [
          "Spelers maken van de glasbackhand te vaak één automatische oplossing: hoog cross en hopen.",
          "De lob vertrekt vaak zonder genoeg hoogte of diepte en geeft de bandeja-speler juist ritme.",
          "Bij een bruikbare bal naast of vóór het lichaam wordt te weinig laag door midden of naar voeten gespeeld."
        ]
      },
      {
        title: "Beslisregel",
        bullets: [
          "🔴 Rood: uit balans of bal achter je = hoog resetten of hoog cross lobben.",
          "🟠 Oranje: redelijk stabiel, bal naast je = laag naar T of body, zonder forceren.",
          "🟢 Groen: bal vóór je met controle = chiquita naar voeten en direct instappen."
        ]
      },
      {
        title: "Wanneer géén lob?",
        bullets: [
          "Als de tegenstander stabiel klaarstaat voor een comfortabele bandeja.",
          "Als jouw lob niet tegelijk hoog én diep genoeg kan worden gespeeld.",
          "Als je redelijk in balans bent en de bal laag naar T/body kunt houden.",
          "Als de tegenstander juist comfortabel overheadritme zoekt."
        ]
      },
      {
        title: "Niet doen",
        bullets: [
          "Niet automatisch lobben zodra je onder druk staat.",
          "Geen halfhoge bal door het midden die op ideale bandeja-hoogte hangt.",
          "Geen harde passeerslag uit de glasbackhand zonder balans.",
          "Geen bal nakijken na een groene keuze; de stap vooruit hoort erbij."
        ]
      },
      {
        title: "Coach Tips",
        bullets: [
          "Cue: niet de reflex, maar de kleur kiezen.",
          "Cue: laag door midden is vaak slimmer dan halfhoog over hem heen.",
          "Cue: groen betekent niet haasten, maar gecontroleerd vooruit.",
          "Laat de speler vóór contact rood, oranje of groen benoemen."
        ]
      }
    ]
  },
  {
    id: "02",
    category: "TRANSITIE & DOORSTAPPEN",
    title: "Lage Forehand: Chiquita of Lob Decision",
    shortTitle: "Forehand Decision",
    summary: "Beslis uit een lage forehand of je laag naar voeten/body speelt, hoog reset of juist diep lobt wanneer de netspeler te ver naar voren hangt.",
    context: "Je krijgt een lage forehand in mid-court of iets daarachter. Hier ontstaat vaak de oude reflex: lob en hopen. Deze oefening maakt de keuze specifieker en koppelt die meteen aan herstel of doorstappen.",
    matchContext: "In wedstrijden verlies je veel punten niet op de eerste lage forehand, maar op de verkeerde oplossing erna. Tegen een comfortabele netspeler wil je vaak eerst laag maken; pas als hij te ver naar voren hangt of jij rood bent, krijgt hoogte voorrang.",
    level: "beginner",
    levelLabel: "Beginner",
    knltb: "8-9",
    type: "transitie",
    typeLabel: "Transitie naar net",
    sequence: "4-ball sequence",
    repeats: "20 herhalingen",
    totalBalls: "80 ballen",
    categoryColor: "#0D5517",
    playerVariant: {
      left: [
        "Linkshandig rechts: lees eerst of je de bal vóór je krijgt. Alleen dan mag de lage forehand echt een chiquita-entry worden.",
        "Wanneer de netspeler comfortabel blijft staan, gebruik je body of lage T als target in plaats van blind over hem heen te spelen.",
        "Hangt de tegenstander te ver naar voren of te dicht op het net, dan mag de lob de ruimte achter hem juist wel aanspreken."
      ],
      right: [
        "Rechtshandig links: spiegel dezelfde beslisboom vanaf de andere forehandzijde.",
        "Ook hier blijft de opdracht: niet alles hoog oplossen, maar kiezen tussen chiquita, lage body/T, lob of hoge reset.",
        "De herstelpositie na contact is even belangrijk als de keuze zelf."
      ]
    },
    goal: [
      {
        title: "Hoofddoel",
        text: "Je traint de lage forehand als beslismoment: goed staan = laag spelen, tegenstander te ver voorin = lob, uit balans = hoge reset."
      },
      {
        type: "list",
        title: "Tactische doelen",
        items: [
          "Niet automatisch de lob kiezen als oude standaardoplossing.",
          "De netspeler onder volleyhoogte dwingen met een lage chiquita of body/T-bal wanneer dat kan.",
          "Hoog alleen gebruiken als het tactisch klopt: rood of tegenstander te ver naar voren.",
          "Na contact direct herstellen naar homebase of doorstappen naar servicelijn, afhankelijk van de gekozen bal."
        ]
      }
    ],
    setup: [
      { title: "Positie", text: "Start in mid-court aan de forehandzijde, klaar om zowel laag als hoog te kunnen uitsturen." },
      { title: "Houding", text: "Basis laag, racket onder de bal, maar lichaam niet automatisch al onder de lobhoek openen." },
      { title: "Leesmoment", text: "Classificeer vóór contact: goed vóór de bal, redelijk stabiel naast de bal, of echt uit balans." },
      { title: "Cyclus", text: "4-ball sequence, 20 herhalingen, 80 ballen totaal." }
    ],
    targets: [
      { name: "LOW FEET", text: "Groen: lage chiquita naar voeten of servicelijn-drop, zodat de netspeler moet bukken." },
      { name: "BODY / T", text: "Oranje: lage bal naar lichaam of T, zonder vrije swing voor de volleyspeler." },
      { name: "DEEP LOB / RESET", text: "Rood of overcommit van de tegenstander: hoog en diep achter hem, of hoge reset om tijd te kopen." },
      { name: "RECOVERY LANE", text: "Na elke keuze direct herstel naar homebase of eerste stap vooruit richting servicelijn." }
    ],
    steps: [
      { title: "Bal 1 - Kies chiquita, body/T, lob of reset", text: "Goed vóór de bal = lage chiquita naar voeten. Tegenstander comfortabel aan net = lage body/T. Tegenstander te ver naar voren = lob. Uit balans = hoge reset zonder haast." },
      { title: "Bal 2 - Positie terugpakken", text: "Na een lage keuze herstel je compact en lees je de lage reactie. Na een goede lob mag je richting servicelijn bewegen, maar alleen als de hoogte en diepte echt tijd kochten." },
      { title: "Bal 3 - Eerste vervolgkeuze", text: "Wordt de tegenstander laag gehouden, dan speel je opnieuw onder volleyhoogte of controleer je naar T. Komt er na een lob een korte reactie, dan neem je rustig het net over." },
      { title: "Bal 4 - Controle boven haast", text: "De laatste bal is alleen een finish als de situatie groen blijft. Anders consolideer je met een lage controlebal en blijf je in goede positie." }
    ],
    score: [
      "Juiste keuze op bal 1: chiquita, body/T, lob of hoge reset.",
      "Bal blijft laag genoeg of hoog genoeg voor de gekozen oplossing.",
      "Tegenstander wordt onder volleyhoogte gedwongen wanneer laag de juiste keuze was.",
      "Herstelpositie na contact klopt: homebase terug of gecontroleerd doorstappen."
    ],
    coaching: [
      "De lage forehand is geen automatische lobbal; eerst lezen, dan spelen.",
      "Body of T is vaak waardevoller dan een matige lob tegen een speler met goede overheads.",
      "Doorstappen mag alleen als jouw eerste bal daar echt tijd of lage reactie voor heeft gekocht."
    ],
    machine: [
      "Bal 1: lage forehand naar mid-court of net daarachter, medium tempo.",
      "Bal 2: reactieballen variëren tussen lage volleyreactie, korte middenbal of extra diepte na een lob.",
      "Bal 3: vervolgbal op servicelijn- of nethoogte, medium, om herstel of eerste volley te testen.",
      "Bal 4: afsluitende druk- of controlebal, medium-slow, afhankelijk van de voorgaande keuze."
    ],
    coachView: [
      {
        title: "Observatie",
        bullets: [
          "Spelers kiezen uit een lage forehand nog te vaak blind voor de lob, ook als laag spelen beter is.",
          "Een lage kansbal wordt soms te hoog of te hard gespeeld, waardoor de netspeler comfortabel kan volleren.",
          "Na contact ontbreekt vaak de juiste herstelactie: of te laat vooruit, of juist onnodig naar voren."
        ]
      },
      {
        title: "Beslisregel",
        bullets: [
          "🟢 Groen: goed vóór de bal = lage chiquita naar voeten en eventueel instappen.",
          "🟠 Oranje: redelijk stabiel = lage body- of T-bal en direct herstellen.",
          "🔴 Rood: uit balans = hoge reset.",
          "Tegenstander te ver naar voren = lob, maar alleen als hij echt diep genoeg kan."
        ]
      },
      {
        title: "Wanneer géén lob?",
        bullets: [
          "Als de tegenstander al stabiel klaarstaat voor zijn bandeja of volley.",
          "Als jouw contactpunt te laag of te laat is om nog echt hoogte en diepte te creëren.",
          "Als je de bal laag naar voeten of body kunt spelen zonder te forceren.",
          "Als de tegenstander juist comfortabel overheadritme zoekt."
        ]
      },
      {
        title: "Niet doen",
        bullets: [
          "Geen automatische lob uit gewoonte.",
          "Geen halfhoge chiquita die boven de netband blijft hangen.",
          "Geen harde passeerslag uit lage forehand zonder balans.",
          "Geen bal nakijken na een lage keuze; herstel direct."
        ]
      },
      {
        title: "Coach Tips",
        bullets: [
          "Cue: laag is vaak de eerste aanval op een goede bandeja.",
          "Cue: kies vóór contact, niet erna.",
          "Cue: eerst kwaliteit van keuze, dan snelheid.",
          "Laat de speler benoemen waarom hij voor lob, reset of laag koos."
        ]
      }
    ]
  },
  {
    id: "03",
    category: "TRANSITIE & DOORSTAPPEN",
    title: "Return Deep - Doorstappen - Net Volley",
    shortTitle: "Return Deep naar Net",
    summary: "Na een diepe return direct herkennen of het moment daar is om het net over te nemen.",
    context: "Je speelt een goede return. Het echte vraagstuk begint daarna: blijf je veilig achter de baseline, of herken je dat de tegenstander achteruit moet en jij dus kunt instappen?",
    matchContext: "In wedstrijden wordt dit moment vaak gemist. De return is diep genoeg, maar de speler wacht, kijkt en laat de kans op initiatief alsnog voorbijgaan.",
    level: "average",
    levelLabel: "Gemiddeld",
    knltb: "6-7",
    type: "return",
    typeLabel: "Return & opening",
    sequence: "3-ball sequence",
    repeats: "27 herhalingen",
    totalBalls: "80 ballen",
    categoryColor: "#0D5517",
    playerVariant: {
      left: [
        "Linkshandig vanaf de rechterkant: return vroeg cross of midden-diep en koppel direct de doorstap.",
        "Gebruik de backhandzijde als startpositie voor een snelle eerste stap.",
        "Doorstappen alleen wanneer de return echt achter de servicelijn komt."
      ],
      right: [
        "Rechtshandige variant vanaf de linkerkant: spiegel de returnrichting en eerste netbal.",
        "De trigger blijft gelijk: diepe return + tegenstander achteruit = doorstappen.",
        "Bewaar dezelfde timing tussen return, split-step en eerste drie passen."
      ]
    },
    goal: [
      {
        title: "Hoofddoel",
        text: "Je koppelt een goede return aan een automatische netovername. Niet hopen dat de return genoeg doet, maar zelf voelen wanneer je de volgende stap moet zetten."
      },
      {
        type: "list",
        title: "Tactische doelen",
        items: [
          "Herkennen wanneer een return echt diep genoeg is om door te stappen.",
          "Niet blind sprinten, maar werken met split-step en timing in de transitie.",
          "De eerste netbal laag en bruikbaar spelen in plaats van te gretig te forceren."
        ]
      }
    ],
    setup: [
      { title: "Positie", text: "Return-homebase iets achter de baseline, klaar om zowel de return als de eerste stap naar voren te maken." },
      { title: "Houding", text: "Racket vóór het lichaam, voeten actief en gewicht reactief naar voren." },
      { title: "Cyclus", text: "3-ball sequence, 27 herhalingen, 80 ballen totaal." }
    ],
    targets: [
      { name: "Return Deep", text: "Bal 1 diep achter de servicelijn. Diepte is hier de echte trigger, niet alleen snelheid." },
      { name: "Transition Zone", text: "Split-step en eerste passen landen rond servicelijn of T, niet half in niemandsland." },
      { name: "Voeten of T", text: "De eerste netbal laag naar voeten als je groen bent, met T als veilige backup." }
    ],
    steps: [
      { title: "Bal 1 - Diepe return", text: "Neem de service vroeg vóór je lichaam en speel diep genoeg om de tegenstander achter de servicelijn te duwen. Dat is je signaal om te denken in doorstappen." },
      { title: "Bal 2 - Eerste netbal", text: "Zet door, maar met timing: eerst lopen, dan split-step, dan pas contact. Speel de eerste volley laag naar voeten of gecontroleerd naar T." },
      { title: "Bal 3 - Finish of vasthouden", text: "Als je goed bent aangekomen en de bal vóór je hebt, mag je drukken. Zo niet, hou het net met nog één logische controlebal." }
    ],
    score: [
      "1 punt: return diep achter de servicelijn.",
      "1 punt: correct doorgestapt na de diepe return.",
      "1 punt: eerste netbal laag en bruikbaar gespeeld.",
      "Extra KPI: meet hoeveel returns echt diep genoeg waren om de doorstap te rechtvaardigen."
    ],
    coaching: [
      "Diep is de trigger, niet alleen hard.",
      "Doorstappen begint direct na contact, niet pas na kijken.",
      "Gebruik dezelfde logica als bij een goede chiquita."
    ],
    machine: [
      "Bal 1: service-simulatie naar backhand of midden, medium-hard.",
      "Bal 2: eerste netbal na drukreturn, medium-slow, medium-laag.",
      "Bal 3: tweede netbal bij keuze-moment, medium, variërend."
    ],
    coachView: [
      {
        title: "Observatie",
        bullets: [
          "De return is goed genoeg, maar de speler blijft toch achter.",
          "De split-step komt te laat of ontbreekt, waardoor de eerste volley gehaast voelt.",
          "De eerste netbal wordt te veilig hoog gespeeld of juist te snel geforceerd."
        ]
      },
      {
        title: "Wat deze drill echt traint",
        bullets: [
          "Niet alleen een goede return, maar vooral de koppeling tussen return en initiatief.",
          "Het lezen van diepte als tactische trigger.",
          "Rust in de eerste volley terwijl je lichaam nog in transitie is."
        ]
      },
      {
        title: "Beslisregel per moment",
        bullets: [
          "Achter servicelijn en tegenstander achteruit = gaan.",
          "Voor servicelijn of uit balans = blijven.",
          "Bij twijfel op bal 2 altijd eerst controle."
        ]
      },
      {
        title: "Coach Tips",
        bullets: [
          "Cue: diep = doorstappen.",
          "Cue: eerst split, dan sprint.",
          "Cue: return en stap horen bij elkaar.",
          "Train de triggerherkenning visueel, niet alleen technisch."
        ]
      }
    ]
  },
  {
    id: "04",
    category: "TRANSITIE & DOORSTAPPEN",
    title: "Chiquita Entry: Low Feet → Step In → Control",
    shortTitle: "Chiquita Entry",
    summary: "De referentie-oefening voor lage ballen naar de voeten: laag houden, direct instappen en daarna eerst controleren voordat je afmaakt.",
    context: "Je speelt een lage chiquita vanuit mid-court. Zodra de tegenstander onder volleyhoogte moet werken, wil je de ruimte aan het net nemen zonder meteen te jagen op een winner.",
    matchContext: "Dit is de basisdrill voor alle lage entries. Niet de mooie bal staat centraal, maar of jouw chiquita de tegenstander echt laag dwingt en jij binnen één seconde de eerste stap vooruit zet.",
    level: "average",
    levelLabel: "Gemiddeld",
    knltb: "6-7",
    type: "transitie",
    typeLabel: "Transitie naar net",
    sequence: "4-ball sequence",
    repeats: "20 herhalingen",
    totalBalls: "80 ballen",
    categoryColor: "#0D5517",
    playerVariant: {
      left: [
        "Linkshandig rechts: dit is je referentiedrill voor de lage bal naar voeten vanaf de rechterkant.",
        "De eerste stap vooruit komt direct uit je contactritme, zodat je niet eerst kijkt of de bal mooi genoeg is.",
        "Na de entry is je eerste volley een controlevolley; finish pas als de volgende bal echt groen is."
      ],
      right: [
        "Rechtshandige links: spiegel dezelfde referentie-oefening vanaf de andere zijde van de baan.",
        "De lage chiquita blijft de trigger; niet de winner, maar de stap vooruit en de controle na contact bepalen de kwaliteit.",
        "Afmaken mag pas als de eerste controlevolley je echt voor de bal houdt."
      ]
    },
    goal: [
      {
        title: "Hoofddoel",
        text: "De chiquita gebruiken als echte entry-bal: laag naar voeten, direct eerste stap vooruit, dan controle en alleen finishen in een groene situatie."
      },
      {
        type: "list",
        title: "Tactische doelen",
        items: [
          "De bal laag genoeg houden om de tegenstander onder volleyhoogte te dwingen.",
          "Binnen één seconde de eerste stap vooruit maken na contact.",
          "De eerste volley gebruiken als controlebal, niet als gehaaste winnaar.",
          "Alleen finishen als balans, positie en volgende bal samen groen blijven."
        ]
      }
    ],
    setup: [
      { title: "Positie", text: "Start in mid-court of iets achter de servicelijn, centraal of licht naar backhand." },
      { title: "Houding", text: "Racket vóór je, basis laag en klaar om de bal met zachte hand naar beneden te begeleiden." },
      { title: "Timing", text: "De doorstap start direct na contact; wacht niet op visuele bevestiging van een perfecte stuit." },
      { title: "Cyclus", text: "4-ball sequence, 20 herhalingen, 80 ballen totaal." }
    ],
    targets: [
      { name: "LOW FEET", text: "Bal 1 zacht en laag naar voeten of net onder de servicelijn, zonder omhoog te springen." },
      { name: "STEP-IN LANE", text: "Bal 2 begint met een directe eerste stap vooruit en een split-step op tijd." },
      { name: "CONTROL VOLLEY", text: "Bal 2 of 3 eerst naar T/body om positie te bevestigen; finish alleen als bal 4 groen is." }
    ],
    steps: [
      { title: "Bal 1 - Chiquita naar voeten", text: "Speel de eerste bal zacht en laag zodat de tegenstander onder volleyhoogte moet werken. De bal mag niet mooi omhoog komen; hij moet vervelend laag blijven." },
      { title: "Bal 2 - Step in en landen", text: "Binnen één seconde na contact zet je de eerste stap vooruit. Split-step op tijd en speel daarna de eerste volley gecontroleerd naar T of body." },
      { title: "Bal 3 - Tweede lage drukbal", text: "Als de tegenstander nog laag zit, houd je hem laag met een punch-volley naar voeten of body. Geen haastige hoekbal." },
      { title: "Bal 4 - Finish alleen op groen", text: "Alleen afmaken als je duidelijk vóór de bal bent en de rally groen is. Zo niet, nog één controlebal en het net houden." }
    ],
    score: [
      "Bal 1 blijft laag en dwingt de tegenstander onder volleyhoogte.",
      "De eerste stap vooruit komt binnen één seconde na contact.",
      "De eerste volley daarna is controle, geen gehaaste winner.",
      "Finish gebeurt alleen wanneer de situatie echt groen is."
    ],
    coaching: [
      "Dit is de referentie voor lage entries: eerst laag maken, dan ruimte pakken.",
      "Een goede chiquita is pas compleet als de stap vooruit en de controlevolley kloppen.",
      "De eerste volley na instappen moet het punt ordenen, niet direct willen beslissen."
    ],
    machine: [
      "Bal 1: mid-court bal voor lage chiquita, medium-slow.",
      "Bal 2: reactiebal na de chiquita, slow-medium, zodat de speler tijdig kan landen op de eerste volley.",
      "Bal 3: lage netbal of halfvolle volleyreactie, medium, voor tweede drukbal.",
      "Bal 4: variabele laatste bal voor finish of extra controle."
    ],
    coachView: [
      {
        title: "Observatie",
        bullets: [
          "De chiquita is vaak technisch acceptabel, maar niet laag genoeg om de tegenstander echt te laten bukken.",
          "De eerste stap vooruit komt te laat doordat de speler zijn eigen bal nakijkt.",
          "Na instappen wordt de eerste volley nog te vaak als winner gezien in plaats van als landing."
        ]
      },
      {
        title: "Wat je leert",
        bullets: [
          "Een lage bal naar voeten herkennen als directe entry-trigger.",
          "Doorstappen zonder haast en toch op tijd aan het net landen.",
          "Eerst controleren, pas daarna afmaken."
        ]
      },
      {
        title: "Beslisregel",
        bullets: [
          "Lage chiquita = direct eerste stap vooruit.",
          "Eerste volley = controle naar T/body.",
          "Finish alleen wanneer de volgende bal nog steeds groen is."
        ]
      },
      {
        title: "Niet doen",
        bullets: [
          "Geen chiquita die hoog opstuit.",
          "Geen bal nakijken na de lage entry.",
          "Geen eerste volley forceren op winner-tempo.",
          "Niet finishen uit oranje positie."
        ]
      },
      {
        title: "Coach Tips",
        bullets: [
          "Cue: laag maken, dan gaan.",
          "Cue: eerste volley is landing.",
          "Cue: finish is verdiend, niet geforceerd.",
          "Gebruik deze drill als blauwdruk voor alle lage instapballen."
        ]
      }
    ]
  },
  {
    id: "05",
    category: "NET-DOMINANTIE",
    title: "Volley - Volley - Bandeja - Forward Recovery",
    shortTitle: "Bandeja Recovery",
    summary: "Behoud het net na een lob door de bandeja te zien als transitiemoment in plaats van eindpunt.",
    context: "Je staat aan het net, speelt twee volleys en krijgt dan een lob over je heen. Het leerpunt zit in het moment ná de bandeja.",
    matchContext: "Veel spelers spelen een prima bandeja, maar blijven daarna achter hangen. Daardoor verliezen ze alsnog het net.",
    level: "advanced",
    levelLabel: "Advanced",
    knltb: "4-5",
    type: "net",
    typeLabel: "Netdominantie",
    sequence: "4-ball sequence",
    repeats: "20 herhalingen",
    totalBalls: "80 ballen",
    categoryColor: "#0D3B66",
    playerVariant: {
      left: ["Linkshandig vanaf rechts: eerste volleys opbouwen, daarna achteruit voor bandeja en meteen weer vooruit.", "Gebruik de bandeja vooral gecontroleerd naar het midden-diepe gebied.", "Forward recovery is de echte KPI van de oefening."],
      right: ["Rechtshandige spiegeling vanaf links met dezelfde lob-reactie en bandeja-recovery.", "Houd de bandeja centraal en diep in plaats van direct op winner te spelen.", "Focus blijft: hit -> go, net terugpakken terwijl de bal in de lucht is."]
    },
    goal: "Leer dat een lob niet automatisch netverlies betekent: na de bandeja direct forward recovery inzetten en het net opnieuw innemen.",
    setup: ["Positie: net-homebase met racket vóór je.", "Start met twee volleys aan het net en verwacht daarna een lob.", "Cycli: 4 ballen per herhaling, 20 herhalingen."],
    targets: [
      { name: "T en Voeten", text: "Volleys afwisselen tussen controle naar T en druk naar voeten." },
      { name: "Bandeja Midden", text: "Bandeja veilig diep naar midden zodat je tijd wint." },
      { name: "Remzone", text: "0,5 meter voor glas als rempunt en vertrekpunt voor je recovery." }
    ],
    steps: [
      { title: "Bal 1 - Controlevolley", text: "Speel de eerste volley rustig naar T en blijf in net-homebase." },
      { title: "Bal 2 - Drukvolley", text: "Gebruik de tweede volley om de tegenstander te laten bukken." },
      { title: "Bal 3 - Bandeja onder controle", text: "Reageer vroeg op de lob, rem af en speel een gecontroleerde bandeja naar midden-diep." },
      { title: "Bal 4 - Forward recovery", text: "Zodra de bandeja weg is, twee explosieve passen vooruit en het net opnieuw pakken." }
    ],
    score: ["1 punt: bal 2 met druk.", "1 punt: bandeja diep en bruikbaar.", "1 punt: forward recovery direct ingezet.", "1 punt: net opnieuw bereikt."],
    coaching: ["Bandeja is geen eindslag maar een doorgangsstation.", "Eerst remmen, dan slaan, dan direct gaan.", "De speler moet voelen dat het net van hem blijft."],
    machine: ["Bal 1: netvolley, medium, nethoogte.", "Bal 2: tweede volley, medium, nethoogte.", "Bal 3: hoge lob, medium.", "Bal 4: mid-court of netbal na bandeja, medium."],
    coachView: [
      { title: "Observatie", bullets: ["Na de bandeja blijft de speler te vaak hangen.", "De lob wordt mentaal gezien als verloren punt.", "De recovery naar voren start te laat."] },
      { title: "Wat je leert", bullets: ["Een lob niet zien als netverlies, maar als herpositioneringsmoment.", "De bandeja gebruiken om tijd en controle te houden.", "Direct opnieuw netdominantie claimen terwijl de bal nog in het spel is."] },
      { title: "Beslisregel", bullets: ["Volleys bouwen op, bandeja houdt controle.", "Na bandeja altijd hit -> go.", "Bandeja liever midden-diep dan te scherp."] },
      { title: "Coach Tips", bullets: ["Cue: bandeja is transitie, geen finish.", "Cue: rempunt vóór glas.", "Meet vooral of het net opnieuw wordt bereikt."] }
    ]
  },
  {
    id: "06",
    category: "NET-DOMINANTIE",
    title: "Volley - Volley - Bandeja - Hit and Go",
    shortTitle: "Hit and Go Bandeja",
    summary: "Versnel het omschakelmoment na een lob zodat de speler na de bandeja direct het net terugclaimt.",
    context: "Je staat comfortabel aan het net, maar moet snel achteruit voor een bandeja en daarna direct weer vooruit.",
    matchContext: "Het doel is niet de mooiste bandeja, maar het automatiseren van hit-and-go om netdominantie te houden.",
    level: "advanced",
    levelLabel: "Advanced",
    knltb: "4-5",
    type: "net",
    typeLabel: "Netdominantie",
    sequence: "4-ball sequence",
    repeats: "20 herhalingen",
    totalBalls: "80 ballen",
    categoryColor: "#0D3B66",
    playerVariant: {
      left: ["Linkshandig vanaf rechts: behoud rust in de eerste volleys en train vooral de directe voorwaartse reactie na de bandeja.", "De forehandkant mag dominant voelen, maar de recovery moet neutraal en snel zijn.", "Gebruik deze drill als pure 'hit and go' automatisering."],
      right: ["Rechtshandige spiegelversie met dezelfde focus op bandeja en directe recovery.", "Laat de speler de bandeja niet 'afkijken', maar de stap naar voren al starten in het contactritme.", "Het net terugpakken is de maatstaf, niet de hardheid van de bandeja."]
    },
    goal: "Automatiseer het moment na de bandeja: meteen opnieuw naar voren bewegen en de netdominantie behouden.",
    setup: ["Positie: net-homebase, racket voor borst, voeten actief.", "Lob is verwacht onderdeel van de cyclus.", "Cycli: 4 ballen per herhaling, 20 herhalingen."],
    targets: [
      { name: "T of Voeten", text: "Volleys wisselen tussen controle en punchdruk." },
      { name: "Bandeja Midden", text: "Bandeja veilig, 50-60% power, vooral diep en bruikbaar." },
      { name: "Forward Recovery", text: "Twee explosieve stappen vooruit direct na het bandeja-contact." }
    ],
    steps: [
      { title: "Bal 1 - Controle", text: "Open met een stabiele volley naar T." },
      { title: "Bal 2 - Punch", text: "Gebruik de tweede volley om meer druk te leggen." },
      { title: "Bal 3 - Lob en bandeja", text: "Ga vroeg achteruit, kom onder de bal en speel een veilige bandeja." },
      { title: "Bal 4 - Direct vooruit", text: "Gebruik hit-and-go: direct twee passen vooruit om weer op net te landen." }
    ],
    score: ["1 punt: bandeja diep in zone.", "1 punt: hit-and-go direct uitgevoerd.", "1 punt: net opnieuw bereikt.", "1 punt: laatste volley bruikbaar."],
    coaching: ["De recovery moet sneller zijn dan de gedachte.", "Bandeja op 50-60%, niet op pure power.", "Het net is de dominante positie en moet direct worden teruggepakt."],
    machine: ["Bal 1: controlevolley, medium.", "Bal 2: punch-volley, medium.", "Bal 3: hoge lob, medium-slow.", "Bal 4: netvolley na recovery, medium."],
    coachView: [
      { title: "Observatie", bullets: ["De speler reageert wel goed op de lob, maar blijft achter na de bandeja.", "Er is nog te veel kijken naar de bal in plaats van bewegen.", "Forward recovery is het echte leerpunt."] },
      { title: "Wat je leert", bullets: ["Het moment na contact sneller maken dan je twijfel.", "Bandeja spelen met genoeg rust om daarna meteen te gaan.", "Het net opnieuw innemen als vaste reflex."] },
      { title: "Beslisregel", bullets: ["Rust op bal 1 en 2.", "Bandeja gecontroleerd, nooit gehaast hard.", "Zodra de bandeja geraakt is, begint de recovery."] },
      { title: "Coach Tips", bullets: ["Cue: hit -> go.", "Cue: net terug, nu meteen.", "Meet of de speler weer op net-homebase landt."] }
    ]
  },
  {
    id: "07",
    category: "NET-DOMINANTIE",
    title: "Forehand and Backhand Volley Combos",
    shortTitle: "Volley Combos",
    summary: "Gebruik de forehandvolley dominant en de backhandvolley gecontroleerd, met bewuste variatie in richting.",
    context: "Aan het net moet je je forehand als wapen gebruiken zonder voorspelbaar te worden, terwijl je backhand stabiel moet blijven.",
    matchContext: "In wedstrijden zijn spelers vaak óf te voorspelbaar met hun forehand óf vermijden ze de backhand te veel.",
    level: "average",
    levelLabel: "Gemiddeld",
    knltb: "6-7",
    type: "net",
    typeLabel: "Netdominantie",
    sequence: "4-ball sequence",
    repeats: "20 herhalingen",
    totalBalls: "80 ballen",
    categoryColor: "#0D3B66",
    playerVariant: {
      left: ["Linkshandige opzet vanaf rechts: forehand is het primaire wapen en krijgt meer volume in de feed.", "Backhand blijft onderdeel van de drill, maar vooral als stabiele backup.", "Binnen forehand moet de speler leren variëren: cross, body, DTL."],
      right: ["Rechtshandige spiegeling vanaf links: forehand blijft dominante volleyzijde.", "Spiegel de doelzones voor cross en DTL.", "Backhand blijft controlezijde; variatie zit vooral in de forehand."] 
    },
    goal: "Maak de forehandvolley dominant zonder voorspelbaar te worden en gebruik de backhand als betrouwbare tweede optie.",
    setup: ["Positie: net-homebase op jouw dominante kant.", "Verdeling: ongeveer 70% ballen naar forehand, 30% naar backhand.", "Cycli: 4 ballen per herhaling, 20 herhalingen."],
    targets: [
      { name: "Cross Deep", text: "Default-richting voor marge, diepte en controle." },
      { name: "Body / Midden", text: "Variatie om twijfel te creëren tussen de tegenstanders." },
      { name: "DTL", text: "Alleen als verrassing, vooral vanaf de dominante forehandzijde." }
    ],
    steps: [
      { title: "Bal 1 - Forehand default", text: "Open met de forehandvolley naar cross als veilige standaard." },
      { title: "Bal 2 - Forehand variatie", text: "Voeg body of DTL toe om onvoorspelbaar te blijven." },
      { title: "Bal 3 - Backhand backup", text: "Speel de backhandvolley met controle, meestal cross." },
      { title: "Bal 4 - Vrije keuze", text: "Lees de ruimte en kies bewust tussen cross, body of DTL." }
    ],
    score: ["1 punt: forehandvolley in goede standaardzone.", "1 punt: variatie gebruikt op het juiste moment.", "1 punt: backhand stabiel onder controle.", "1 punt: laatste keuze tactisch logisch."],
    coaching: ["Forehand moet een wapen zijn, geen neutrale slag.", "Backhand hoeft niet dominant te zijn, wel stabiel.", "Variatie werkt pas als de basisrichting eerst betrouwbaar is."],
    machine: ["Bal 1: forehandvolley, medium.", "Bal 2: forehandvolley opnieuw, medium.", "Bal 3: backhandvolley, medium.", "Bal 4: variërende volley, medium."],
    coachView: [
      { title: "Observatie", bullets: ["De forehand wordt nog te weinig uitgespeeld als dominant wapen.", "Backhand wordt soms vermeden in plaats van gecontroleerd gebruikt.", "Zonder variatie wordt de speler te voorspelbaar."] },
      { title: "Wat je leert", bullets: ["De forehandvolley bewust als hoofdwapen gebruiken.", "De backhand niet vermijden, maar inzetten als stabiele bouwsteen.", "Variatie pas toevoegen wanneer de basisrichting betrouwbaar is."] },
      { title: "Beslisregel", bullets: ["Default is cross.", "Body gebruik je als verstoring.", "DTL alleen wanneer de ruimte echt open ligt."] },
      { title: "Coach Tips", bullets: ["Cue: forehand eerst domineren.", "Cue: backhand hoeft niet mooi, wel solide.", "Werk met 70/30-verhouding in de feed."] }
    ]
  },
  {
    id: "08",
    category: "NET-DOMINANTIE",
    title: "Finish or Freeze - Netduel Decisions",
    shortTitle: "Finish or Freeze",
    summary: "Maak onder hoog tempo een heldere keuze: afmaken naar voeten of het duel vastzetten naar body/T.",
    context: "In een snel netduel moet je niet alleen technisch goed slaan, maar ook snel de juiste keuze maken.",
    matchContext: "De fout zit vaak in twijfel: te veilig wanneer je moet finishen, of te gretig wanneer je eerst moet vastzetten.",
    level: "advanced",
    levelLabel: "Advanced",
    knltb: "3-5",
    type: "decision",
    typeLabel: "Beslissen onder druk",
    sequence: "4-ball sequence",
    repeats: "20 herhalingen",
    totalBalls: "80 ballen",
    categoryColor: "#0D3B66",
    playerVariant: {
      left: ["Linkshandig aan het net, vooral op de forehandzijde, met snelle keuze tussen finish en freeze.", "Gebruik voeten als finishzone en body/T als veiligheidsrem.", "Het mentale commando moet simpel blijven: finish of freeze."],
      right: ["Rechtshandige spiegeling met dezelfde keuze-architectuur.", "Behoud voeten als finishzone en body/T als tempo-breker.", "De beslissing moet binnen één ritme vallen, niet na twijfel."]
    },
    goal: "Laat de speler onder tempo sneller herkennen of hij moet afmaken of eerst moet vastzetten voor nog één bal.",
    setup: ["Positie: net-homebase, snel tempo, variërend links en rechts.", "Werk met 4 ballen waarin de laatste twee echte keuze-momenten zijn.", "Cycli: 20 herhalingen."],
    targets: [
      { name: "Voeten", text: "Finish-optie wanneer de speler comfortabel vóór de bal komt." },
      { name: "Body of T", text: "Freeze-optie wanneer het duel te snel of te oncomfortabel is." }
    ],
    steps: [
      { title: "Bal 1 en 2 - Opbouw", text: "Twee volleys om tempo en ritme van het netduel op te bouwen." },
      { title: "Bal 3 - Eerste keuze", text: "Lees de bal: comfortabel betekent finish, oncomfortabel betekent freeze." },
      { title: "Bal 4 - Bevestiging", text: "Maak dezelfde logica nog één keer onder hoger tempo waar." }
    ],
    score: ["1 punt: juiste keuze op bal 3.", "1 punt: juiste target geraakt.", "1 punt: juiste keuze op bal 4.", "1 punt: geen twijfel zichtbaar in uitvoering."],
    coaching: ["Eerst situatie lezen, dan committen.", "Voeten is finish, body/T is freeze.", "Geen halfslachtige tussenkeuze."],
    machine: ["Bal 1: controlevolley, medium.", "Bal 2: punch-volley, medium.", "Bal 3: snelle volley, medium-fast.", "Bal 4: snelle keuzevolley, medium-fast."],
    coachView: [
      { title: "Observatie", bullets: ["Speler speelt te vaak 'netjes terug' zonder plan.", "Of hij forceert terwijl de situatie nog niet groen is.", "De keuze moet simpeler en sneller."] },
      { title: "Wat je leert", bullets: ["Onder tempo sneller kiezen tussen druk zetten en vastzetten.", "Comfort herkennen als groen signaal voor finish.", "Twijfel vertalen naar controle in plaats van naar een halve keuze."] },
      { title: "Beslisregel", bullets: ["Groen = voeten.", "Oranje = body/T.", "Twijfel betekent automatisch freeze."] },
      { title: "Coach Tips", bullets: ["Cue: noem het woord hardop in je hoofd.", "Cue: finish of freeze, nooit ertussen.", "Gebruik de score om besluitvorming zichtbaar te maken."] }
    ]
  },
  {
    id: "09",
    category: "RUIMTE CREËREN & UITSPELEN",
    title: "Cross - Body - DTL",
    shortTitle: "Cross Body DTL",
    summary: "Speel netdominante tegenstanders uit positie met een logisch patroon van trekken, twijfelen laten en afmaken.",
    context: "Je staat onder druk van een dominant netduo en moet ruimte creëren in plaats van telkens dezelfde veilige bal spelen.",
    matchContext: "Deze oefening gaat over patroonherkenning: eerst breed trekken, dan het midden verstoren, daarna de open lijn gebruiken.",
    level: "advanced",
    levelLabel: "Advanced",
    knltb: "3-5",
    type: "ruimte",
    typeLabel: "Ruimte creëren",
    sequence: "4-ball sequence",
    repeats: "20 herhalingen",
    totalBalls: "80 ballen",
    categoryColor: "#4A1C6A",
    playerVariant: {
      left: ["Linkshandig vanuit rechterkant: cross trekt de tegenstander naar links, daarna body en DTL naar de open ruimte.", "Gebruik vooral je forehand als aanjager van het patroon.", "Laat de speler de ruimte eerst zien vóór hij hem bespeelt."],
      right: ["Rechtshandige spiegeling: cross trekt naar rechts, waarna body en DTL de open ruimte benutten.", "Behoud dezelfde driedelige logica: trekken, verwarren, afmaken.", "DTL is pas logisch als de tegenstander echt uit positie is."] 
    },
    goal: "Breek netdominantie door niet steeds dezelfde veilige cross te spelen, maar de tegenstander stapsgewijs uit positie te halen.",
    setup: ["Positie: baseline-homebase of mid-court, centraal.", "Werk met een patroon van drie keuzes: cross, body, DTL.", "Cycli: 4 ballen per herhaling."],
    targets: [
      { name: "Cross Deep", text: "Eerste bal diep cross om de tegenstander te verplaatsen." },
      { name: "Body / Midden", text: "Tweede bal naar het lichaam om twijfel te forceren." },
      { name: "DTL Deep", text: "Derde bal langs de lijn zodra de ruimte open ligt." }
    ],
    steps: [
      { title: "Bal 1 - Cross", text: "Trek de tegenstander breed en laat hem bewegen." },
      { title: "Bal 2 - Body", text: "Speel direct naar body of midden terwijl de tegenstander nog in beweging is." },
      { title: "Bal 3 - DTL", text: "Gebruik de vrije lijn voor de afmaker of duidelijke versnelling." },
      { title: "Bal 4 - Doorspelen", text: "Blijf het initiatief houden of maak het punt af." }
    ],
    score: ["1 punt: cross diep en bruikbaar.", "1 punt: bodybal op het juiste moment.", "1 punt: DTL in de open ruimte.", "1 punt: patroon volledig en logisch uitgevoerd."],
    coaching: ["Cross creëert ruimte, body creëert twijfel, DTL gebruikt de ruimte.", "DTL zonder voorbereidende cross is meestal te vroeg.", "De speler moet de tegenstander leren lezen in plaats van alleen het target."],
    machine: ["Bal 1: drive/mid-court voor cross, medium.", "Bal 2: volley-return voor body, medium.", "Bal 3: volley-return voor DTL, medium.", "Bal 4: variërende doorspeelbal, medium."],
    coachView: [
      { title: "Observatie", bullets: ["Spelers blijven te veilig cross spelen en worden voorspelbaar.", "Body wordt te weinig als tussenstap gebruikt.", "DTL komt soms te vroeg en dan zonder ruimte."] },
      { title: "Wat je leert", bullets: ["Ruimte niet forceren, maar eerst creëren.", "De tegenstander lezen terwijl hij nog in beweging is.", "DTL alleen spelen wanneer de lijn echt vrijgemaakt is."] },
      { title: "Beslisregel", bullets: ["Eerst trekken.", "Dan twijfel creëren.", "Pas dan de lijn gebruiken."] },
      { title: "Coach Tips", bullets: ["Cue: trek, blok, prik.", "Cue: zie de tegenstander bewegen.", "Laat de speler de lege ruimte benoemen vóór de DTL."] }
    ]
  },
  {
    id: "10",
    category: "RUIMTE CREËREN & UITSPELEN",
    title: "Lob - Positioneren - Druk Zetten",
    shortTitle: "Lob naar Netdruk",
    summary: "Gebruik de lob offensief: tegenstander van het net krijgen en zelf direct de voorste positie innemen.",
    context: "Je staat achterin tegen een team dat het net domineert. De lob moet hier een aanval worden, geen vluchtbal.",
    matchContext: "Het gemiste moment in wedstrijden is vaak niet de lob zelf, maar het feit dat de speler daarna niet doorbeweegt naar voren.",
    level: "average",
    levelLabel: "Gemiddeld",
    knltb: "6-7",
    type: "ruimte",
    typeLabel: "Ruimte creëren",
    sequence: "3-ball sequence",
    repeats: "27 herhalingen",
    totalBalls: "80 ballen",
    categoryColor: "#4A1C6A",
    playerVariant: {
      left: ["Linkshandige speler gebruikt de lob als wapen om de tegenstander van het net te trekken en zelf naar voren te gaan.", "De netovername is de echte actie, niet alleen de lobkwaliteit.", "Voeten of body worden daarna gebruikt om de rollen volledig om te draaien."],
      right: ["Rechtshandige spiegeling met dezelfde gedachte: lob als aanval, niet als noodslag.", "De speler moet direct net-homebase innemen terwijl de tegenstander achteruit gaat.", "De eerste volley na de lob bepaalt of de rolwissel echt lukt."] 
    },
    goal: "Leer een lob gebruiken als offensieve start van een netovername in plaats van als passieve verdedigingsbal.",
    setup: ["Positie: baseline-homebase of mid-court, centraal.", "Start van achteruit tegen een netdominante tegenstander.", "Cycli: 3 ballen, 27 herhalingen."],
    targets: [
      { name: "Lob Deep", text: "Lob 3-4 meter hoog en diep genoeg om de tegenstander ver achteruit te sturen." },
      { name: "Voeten of Body", text: "Eerste volley nadat jij het net hebt gepakt." }
    ],
    steps: [
      { title: "Bal 1 - Lob als aanval", text: "Speel hoog en diep zodat de tegenstander van het net weg moet." },
      { title: "Bal 2 - Positioneren", text: "Gebruik de tijd in de lucht om 4-5 stappen vooruit te zetten naar net-homebase." },
      { title: "Bal 3 - Druk zetten", text: "Speel de eerste volley laag naar voeten of body en maak de rolwissel compleet." }
    ],
    score: ["1 punt: lob hoog en diep.", "1 punt: net op tijd gepakt.", "1 punt: eerste volley onder druk gespeeld."],
    coaching: ["Lob = net pakken.", "De speler mag de lob niet bewonderen.", "De eerste volley na de lob is waar de aanval echt begint."],
    machine: ["Bal 1: mid-court drive voor lob, medium.", "Bal 2: return na lob, medium-slow.", "Bal 3: tweede return wanneer speler aan net is, medium."],
    coachView: [
      { title: "Observatie", bullets: ["De lob wordt goed gespeeld, maar de speler blijft toch achter.", "Daardoor komen de tegenstanders opnieuw op het net.", "De kans op rolwisseling gaat verloren."] },
      { title: "Wat je leert", bullets: ["De lob behandelen als begin van aanval in plaats van eindpunt van defense.", "De vrijgekomen tijd gebruiken om zelf ruimte aan het net in te nemen.", "De eerste volley na de lob koppelen aan echte druk."] },
      { title: "Beslisregel", bullets: ["Goede lob = automatisch vooruit.", "Eerste volley is druk, geen neutralisatie.", "Als de lob niet diep genoeg is, geen blind doorstappen."] },
      { title: "Coach Tips", bullets: ["Cue: lob als aanval.", "Cue: pak de lege ruimte aan het net.", "Gebruik 3-4 meter hoogte als richtlijn voor genoeg tijd."] }
    ]
  },
  {
    id: "11",
    category: "DEFENSE & RECOVERY",
    title: "Glas Defense - T Heroveren - Rebuild",
    shortTitle: "Rebuild vanuit Glas",
    summary: "Vecht je terug in het punt door vanuit glas-defense eerst tijd te kopen en daarna gecontroleerd positie te herwinnen.",
    context: "Je wordt helemaal naar het glas gedwongen en moet leren overleven zonder passief te blijven hangen achterin.",
    matchContext: "Deze oefening is belangrijk voor rally's waarin je niet meteen kunt aanvallen, maar wel actief wilt herstellen naar controle.",
    level: "average",
    levelLabel: "Gemiddeld",
    knltb: "6-7",
    type: "defense",
    typeLabel: "Defense & recovery",
    sequence: "4-ball sequence",
    repeats: "20 herhalingen",
    totalBalls: "80 ballen",
    categoryColor: "#6B4226",
    playerVariant: {
      left: ["Linkshandige speler start op de backhandzijde en moet vanuit extreme defense de T-lijn terugpakken.", "De drill gaat niet direct over aanvallen, maar over positioneel overleven en opnieuw bouwen.", "Doorstappen naar het net is alleen de bonus als de rebuild lukt."],
      right: ["Rechtshandige spiegelversie met dezelfde opbouw: overleven, herstellen, opnieuw opbouwen.", "Verplaats glas- en cross-referenties naar de andere baanhelft.", "Het belangrijkste is het actieve herstel richting T."] 
    },
    goal: "Train een herstelcyclus vanuit extreme defense waarin de speler eerst tijd koopt en daarna actief de T-lijn terugverovert.",
    setup: ["Positie: glas-homebase, 0,5 meter voor het glas op de backhandzijde.", "Diepe feeds forceren glas-defense.", "Cycli: 4 ballen per herhaling."],
    targets: [
      { name: "Glass Cross", text: "Bal 1 hoog en diep cross om maximale tijd te winnen." },
      { name: "T", text: "Bal 2 of 3 als controlebal om de positie te stabiliseren." },
      { name: "Voeten", text: "Alleen gebruiken wanneer de rebuild echt doorgroeit naar netdruk." }
    ],
    steps: [
      { title: "Bal 1 - Glas-defense", text: "Overleven met hoogte en diepte; dit is een tijdkoop-bal." },
      { title: "Bal 2 - Recovery naar T", text: "Zodra de bal weg is, actief 2-3 passen vooruit richting controlezone." },
      { title: "Bal 3 - Stabiliseren", text: "Gebruik de volgende bal om het punt weer neutraal te maken." },
      { title: "Bal 4 - Rebuild afronden", text: "Als het kan, doorstappen; anders nog één stabiele controlebal." }
    ],
    score: ["1 punt: glas-defense hoog en diep.", "1 punt: actieve recovery naar T.", "1 punt: controlebal stabiel.", "1 punt: rebuild zonder passiviteit afgerond."],
    coaching: ["Tijd kopen is hier het eerste doel.", "Herstel moet actief zijn; blijven hangen is fout.", "Rebuild is een cyclus, geen enkele toverslag."],
    machine: ["Bal 1: zeer diepe bal, medium-hard, hoog.", "Bal 2: mid-court na recovery, medium.", "Bal 3: net of mid-court, medium.", "Bal 4: variërend vervolg, medium."],
    coachView: [
      { title: "Observatie", bullets: ["De speler blijft na glas-defense passief achterin.", "De bal is te laag of te centraal om echt tijd te winnen.", "De T-lijn wordt niet actief teruggepakt."] },
      { title: "Wat je leert", bullets: ["Eerst tijd kopen, dan positie terugwinnen.", "De T-lijn gebruiken als tussenstation, niet meteen als einddoel.", "Actief herstellen in plaats van overleven op autopilot."] },
      { title: "Beslisregel", bullets: ["Bal 1 altijd tijd kopen.", "Bal 2 is positioneel, geen winnaar.", "Alleen doorstappen wanneer de rebuild echt stabiel voelt."] },
      { title: "Coach Tips", bullets: ["Cue: overleven, herstellen, opbouwen.", "Cue: tijd kopen = bewegen.", "Laat de speler de T-lijn als tussenstation zien."] }
    ]
  },
  {
    id: "12",
    category: "DEFENSE & RECOVERY",
    title: "Backhand Under Pressure - Counter Cycle",
    shortTitle: "Counter vanuit Backhanddruk",
    summary: "Verdedig eerst slim op de backhand, herken daarna het counter-moment en breek de cyclus open.",
    context: "De tegenstander blijft druk zetten op je backhand. De uitdaging is niet meteen omslaan, maar het juiste countermoment herkennen.",
    matchContext: "Veel spelers blijven in deze cyclus alleen maar reageren. Deze drill traint het moment waarop je weer initiatief pakt.",
    level: "advanced",
    levelLabel: "Advanced",
    knltb: "3-5",
    type: "defense",
    typeLabel: "Defense & recovery",
    sequence: "4-ball sequence",
    repeats: "20 herhalingen",
    totalBalls: "80 ballen",
    categoryColor: "#6B4226",
    playerVariant: {
      left: ["Linkshandige speler start achterin met backhanddruk als terugkerende aanval van de tegenstander.", "De eerste twee ballen zijn overleven; pas daarna mag de speler actief counteren.", "Doorstappen na de counter is onderdeel van het rollen omdraaien."],
      right: ["Rechtshandige spiegeling met dezelfde drukcyclus op de backhandhoek.", "Counter pas wanneer de druk iets afneemt en het contact vóór het lichaam komt.", "De vervolgactie na de counter moet voorwaarts zijn, niet afwachtend."] 
    },
    goal: "Doorbreek een defensieve backhandcyclus door 1-2 ballen slim te overleven en daarna het countermoment agressief te nemen.",
    setup: ["Positie: backhand-homebase achterin.", "De eerste twee feeds blijven druk op dezelfde zijde houden.", "Cycli: 4 ballen per herhaling."],
    targets: [
      { name: "Defense Deep", text: "Bal 1 en 2 hoog of diep genoeg om tijd te kopen." },
      { name: "Counter Deep", text: "Bal 3 met meer intentie en diepte om het initiatief te grijpen." },
      { name: "T of Voeten", text: "Na de counter vooruitgang bevestigen met positie of druk." }
    ],
    steps: [
      { title: "Bal 1 - Overleven", text: "Speel de eerste backhanddrukbal hoog of diep om in het punt te blijven." },
      { title: "Bal 2 - Nog één defensieve bal", text: "Houd rust en wacht op een beter contactmoment." },
      { title: "Bal 3 - Countermoment", text: "Wanneer de bal iets hoger of langzamer komt, drive je hem agressiever diep terug." },
      { title: "Bal 4 - Initiatief vasthouden", text: "Stap door of zet de tegenstander opnieuw onder druk." }
    ],
    score: ["1 punt: bal 1 bruikbaar verdedigd.", "1 punt: bal 2 zonder paniek opgelost.", "1 punt: countermoment herkend en benut.", "1 punt: initiatief na bal 3 vastgehouden."],
    coaching: ["Niet elke backhanddrukbal hoeft meteen te worden omgedraaid.", "Counter is pas logisch wanneer het contact vóór het lichaam komt.", "Na de counter moet ook je positie mee naar voren."],
    machine: ["Bal 1: diepe backhanddruk, medium-hard.", "Bal 2: tweede drukbal, medium.", "Bal 3: iets tragere/hogere backhandbal voor counter.", "Bal 4: vervolgbal na counter, medium."],
    coachView: [
      { title: "Observatie", bullets: ["De speler blijft te lang in een passieve verdedigingscyclus.", "Het countermoment wordt niet herkend of te voorzichtig gespeeld.", "Na een goede counter volgt nog te weinig positie-winst."] },
      { title: "Wat je leert", bullets: ["Verdedigen zonder passief te worden.", "Het echte countermoment herkennen op basis van contactkwaliteit.", "Na de counter ook positioneel initiatief nemen."] },
      { title: "Beslisregel", bullets: ["Eerste twee ballen overleven.", "Bal 3 alleen counteren als de druk aantoonbaar afneemt.", "Na de counter hoort de speler vooruit te denken."] },
      { title: "Coach Tips", bullets: ["Cue: wacht op je moment.", "Cue: counter is initiatief, geen neutrale bal.", "Train de herkenning van hoger/langzamer als groen signaal."] }
    ]
  }
];
