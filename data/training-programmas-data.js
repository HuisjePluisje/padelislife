window.TRAINING_PROGRAMS_DATA = {
  "version": "v1",
  "title": "Padel Studio - 30 trainingsprogramma's",
  "scope": "30 trainingsprogramma’s op KNLTB-niveau: 8-9, 7-8 en 6-7. Programma’s worden gefilterd op niveau en handigheid, niet op persoonsnaam.",
  "routing": {
    "rightHanded": {
      "handedness": "right-handed",
      "exerciseUrlParam": "handedness=right",
      "padelShooterSide": "Padel Studio - Rechts"
    },
    "leftHanded": {
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links"
    }
  },
  "implementationNote": "Deze trainingsprogramma's zijn routes bovenop de bestaande oefeningen 01–39. Verander de oefening-detailstructuur niet; link alleen door naar exercise.html?id=XX&handedness=left/right.",
  "programs": [
    {
      "id": "TP-001",
      "title": "Achterglas vertrouwen: eerst terug in de rally",
      "player": "rechtshandige speler",
      "playerType": "knltb_8_9_right_handed",
      "level": "beginner",
      "durationMinutes": 60,
      "handedness": "right-handed",
      "exerciseUrlParam": "handedness=right",
      "padelShooterSide": "Padel Studio - Rechts",
      "goal": "De rechtshandige speler leert glasballen rustig lezen en kiest eerst voor terugspelen/neutraliseren in plaats van paniek of te snel aanvallen.",
      "logicalFlow": "Van simpel neutraliseren naar backglass lezen en daarna pas een beperkte keuze: hoog resetten of laag veilig terug.",
      "exerciseIds": [
        "39",
        "11",
        "13",
        "01"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "39",
          "title": "Defense to Neutral",
          "url": "exercise.html?id=39&handedness=right"
        },
        {
          "exerciseId": "11",
          "title": "Glas Defense - T Heroveren - Rebuild",
          "url": "exercise.html?id=11&handedness=right"
        },
        {
          "exerciseId": "13",
          "title": "Backglass Forehand: High Reset or Low Exit",
          "url": "exercise.html?id=13&handedness=right"
        },
        {
          "exerciseId": "01",
          "title": "Glasbackhand Decision: Lob of Low T",
          "url": "exercise.html?id=01&handedness=right"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral",
          "focus": "defense to neutral als basisregel"
        },
        {
          "minutes": 12,
          "exerciseId": "11",
          "exerciseTitle": "Glas Defense - T Heroveren - Rebuild",
          "focus": "glasbal terug naar veilige zone"
        },
        {
          "minutes": 12,
          "exerciseId": "13",
          "exerciseTitle": "Backglass Forehand: High Reset or Low Exit",
          "focus": "forehandglas rustig lezen"
        },
        {
          "minutes": 12,
          "exerciseId": "01",
          "exerciseTitle": "Glasbackhand Decision: Lob of Low T",
          "focus": "backhandglas met reset/low T keuze"
        },
        {
          "minutes": 12,
          "transfer": "Rally start met glasbal; score alleen als de bal speelbaar terugkomt én herstelpositie klopt."
        },
        {
          "minutes": 4,
          "log": "Noteer: directe fouten, goede resets, herstelpositie."
        }
      ],
      "successCriterionKpi": "Minimaal 14 van 20 glasballen speelbaar terug; maximaal 4 directe fouten uit de hoek/achterglas.",
      "transferGame": "Rally start achterin. De rechtshandige speler krijgt 1 punt extra wanneer de speler na glas eerst neutraal terugkomt en daarna goed herstelt.",
      "coachNote": "Beginnerregel: geen bajada, geen winnerdrang. Eerst bal lezen, terugspelen en positie herstellen.",
      "rightHandedVariant": "Rechtshandig, KNLTB 8-9, Padel Studio - Rechts",
      "leftHandedVariant": "niet van toepassing"
    },
    {
      "id": "TP-002",
      "title": "Lage forehand: chiquita of lob zonder haast",
      "player": "rechtshandige speler",
      "playerType": "knltb_8_9_right_handed",
      "level": "beginner",
      "durationMinutes": 60,
      "handedness": "right-handed",
      "exerciseUrlParam": "handedness=right",
      "padelShooterSide": "Padel Studio - Rechts",
      "goal": "De rechtshandige speler traint een rustige keuze uit de lage forehand: laag terug, chiquita wanneer het kan, lob wanneer het moet.",
      "logicalFlow": "Eerst simpele forehand-keuze, daarna lob als veilige optie en pas aan het einde een eenvoudige chiquita-instap.",
      "exerciseIds": [
        "02",
        "10",
        "04",
        "39"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "02",
          "title": "Lage Forehand: Chiquita of Lob Decision",
          "url": "exercise.html?id=02&handedness=right"
        },
        {
          "exerciseId": "10",
          "title": "Lob - Positioneren - Druk Zetten",
          "url": "exercise.html?id=10&handedness=right"
        },
        {
          "exerciseId": "04",
          "title": "Chiquita Entry: Low Feet → Step In → Control",
          "url": "exercise.html?id=04&handedness=right"
        },
        {
          "exerciseId": "39",
          "title": "Defense to Neutral",
          "url": "exercise.html?id=39&handedness=right"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral",
          "focus": "rustig neutraliseren"
        },
        {
          "minutes": 12,
          "exerciseId": "02",
          "exerciseTitle": "Lage Forehand: Chiquita of Lob Decision",
          "focus": "lage forehand decision"
        },
        {
          "minutes": 12,
          "exerciseId": "10",
          "exerciseTitle": "Lob - Positioneren - Druk Zetten",
          "focus": "lob gebruiken om tijd te kopen"
        },
        {
          "minutes": 12,
          "exerciseId": "04",
          "exerciseTitle": "Chiquita Entry: Low Feet → Step In → Control",
          "focus": "chiquita als simpele instap, zonder forceren"
        },
        {
          "minutes": 12,
          "transfer": "2-keuze spel: lob wanneer rood, laag wanneer oranje/groen."
        },
        {
          "minutes": 4,
          "log": "Aantal juiste keuzes en aantal halfhoge ballen."
        }
      ],
      "successCriterionKpi": "In 12 van 20 reeksen kiest rechtshandige speler bewust: laag, lob of neutraliseren; minder dan 5 halfhoge weggeefballen.",
      "transferGame": "Punt start met lage forehand. De rechtshandige speler noemt vóór contact ‘laag’ of ‘lob’. Alleen bewuste keuzes tellen.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "Rechtshandig, KNLTB 8-9, Padel Studio - Rechts",
      "leftHandedVariant": "niet van toepassing"
    },
    {
      "id": "TP-003",
      "title": "Return basis: diep spelen en positie kiezen",
      "player": "rechtshandige speler",
      "playerType": "knltb_8_9_right_handed",
      "level": "beginner",
      "durationMinutes": 60,
      "handedness": "right-handed",
      "exerciseUrlParam": "handedness=right",
      "padelShooterSide": "Padel Studio - Rechts",
      "goal": "De rechtshandige speler leert dat een return geen losse slag is: diep spelen, split-step maken en dan kiezen: blijven of doorstappen.",
      "logicalFlow": "Van returndiepte naar body block en dan eenvoudige samenwerking/middenafspraak.",
      "exerciseIds": [
        "03",
        "15",
        "36",
        "39"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "03",
          "title": "Return Deep - Doorstappen - Net Volley",
          "url": "exercise.html?id=03&handedness=right"
        },
        {
          "exerciseId": "15",
          "title": "Return Body Block → Deep Middle → Close Middle",
          "url": "exercise.html?id=15&handedness=right"
        },
        {
          "exerciseId": "36",
          "title": "Middenbal-afspraken Duo",
          "url": "exercise.html?id=36&handedness=right"
        },
        {
          "exerciseId": "39",
          "title": "Defense to Neutral",
          "url": "exercise.html?id=39&handedness=right"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral",
          "focus": "neutrale start en herstel"
        },
        {
          "minutes": 12,
          "exerciseId": "03",
          "exerciseTitle": "Return Deep - Doorstappen - Net Volley",
          "focus": "diepe return als trigger"
        },
        {
          "minutes": 12,
          "exerciseId": "15",
          "exerciseTitle": "Return Body Block → Deep Middle → Close Middle",
          "focus": "body block en deep middle"
        },
        {
          "minutes": 12,
          "exerciseId": "36",
          "exerciseTitle": "Middenbal-afspraken Duo",
          "focus": "middenbalafspraken met linkshandige speler"
        },
        {
          "minutes": 12,
          "transfer": "Eerste-vijf-ballen spel vanaf return."
        },
        {
          "minutes": 4,
          "log": "Diepe returns, onterechte doorstapmomenten, communicatie."
        }
      ],
      "successCriterionKpi": "Minimaal 70% returns landt diep genoeg of body/midden; rechtshandige speler stapt alleen door bij een goede return.",
      "transferGame": "Speel alleen de eerste 5 ballen van het punt. Stop daarna en scoor positievoordeel: achteruitgeduwd, neutraal of net gewonnen.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "Rechtshandig, KNLTB 8-9, Padel Studio - Rechts",
      "leftHandedVariant": "niet van toepassing"
    },
    {
      "id": "TP-004",
      "title": "Lob als veilige uitweg",
      "player": "rechtshandige speler",
      "playerType": "knltb_8_9_right_handed",
      "level": "beginner",
      "durationMinutes": 60,
      "handedness": "right-handed",
      "exerciseUrlParam": "handedness=right",
      "padelShooterSide": "Padel Studio - Rechts",
      "goal": "De rechtshandige speler bouwt een betrouwbare lob op als uitweg onder druk, zonder automatisch na elke bal naar voren te rennen.",
      "logicalFlow": "Eerst lob-positioneren, daarna low-low-lob, daarna transition lob alleen wanneer de bal en balans goed zijn.",
      "exerciseIds": [
        "10",
        "28",
        "20",
        "39"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "10",
          "title": "Lob - Positioneren - Druk Zetten",
          "url": "exercise.html?id=10&handedness=right"
        },
        {
          "exerciseId": "28",
          "title": "Low-Low-Lob Pattern",
          "url": "exercise.html?id=28&handedness=right"
        },
        {
          "exerciseId": "20",
          "title": "Transition Lob → Airborne Volley Decision",
          "url": "exercise.html?id=20&handedness=right"
        },
        {
          "exerciseId": "39",
          "title": "Defense to Neutral",
          "url": "exercise.html?id=39&handedness=right"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral",
          "focus": "eerst neutraliseren"
        },
        {
          "minutes": 12,
          "exerciseId": "10",
          "exerciseTitle": "Lob - Positioneren - Druk Zetten",
          "focus": "lob en positioneren"
        },
        {
          "minutes": 12,
          "exerciseId": "28",
          "exerciseTitle": "Low-Low-Lob Pattern",
          "focus": "low-low-lob patroon"
        },
        {
          "minutes": 12,
          "exerciseId": "20",
          "exerciseTitle": "Transition Lob → Airborne Volley Decision",
          "focus": "transition lob met gecontroleerde eerste volley"
        },
        {
          "minutes": 12,
          "transfer": "Lob telt alleen als de speler tijd koopt; daarna herstel checken."
        },
        {
          "minutes": 4,
          "log": "Lobdiepte, te korte lobs, herstel na lob."
        }
      ],
      "successCriterionKpi": "Minimaal 13 van 20 lobs zijn hoog/diep genoeg om tijd te kopen; herstel volgt direct na contact.",
      "transferGame": "Rally start onder druk. De rechtshandige speler scoort wanneer de lob de tegenstander achter de servicelijn dwingt en de speler goed herstelt.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "Rechtshandig, KNLTB 8-9, Padel Studio - Rechts",
      "leftHandedVariant": "niet van toepassing"
    },
    {
      "id": "TP-005",
      "title": "Volleybasis: vasthouden voor afmaken",
      "player": "rechtshandige speler",
      "playerType": "knltb_8_9_right_handed",
      "level": "beginner",
      "durationMinutes": 60,
      "handedness": "right-handed",
      "exerciseUrlParam": "handedness=right",
      "padelShooterSide": "Padel Studio - Rechts",
      "goal": "De rechtshandige speler leert aan het net eerst controle en positie vasthouden, niet meteen afmaken.",
      "logicalFlow": "Van basisvolleys naar freeze volley en daarna pas simpele finish-or-freeze keuze.",
      "exerciseIds": [
        "07",
        "24",
        "08",
        "36"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "07",
          "title": "Forehand and Backhand Volley Combos",
          "url": "exercise.html?id=07&handedness=right"
        },
        {
          "exerciseId": "24",
          "title": "Freeze Volley → Angle Open → Finish",
          "url": "exercise.html?id=24&handedness=right"
        },
        {
          "exerciseId": "08",
          "title": "Finish or Freeze - Netduel Decisions",
          "url": "exercise.html?id=08&handedness=right"
        },
        {
          "exerciseId": "36",
          "title": "Middenbal-afspraken Duo",
          "url": "exercise.html?id=36&handedness=right"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "07",
          "exerciseTitle": "Forehand and Backhand Volley Combos",
          "focus": "forehand/backhand volley basis"
        },
        {
          "minutes": 12,
          "exerciseId": "24",
          "exerciseTitle": "Freeze Volley → Angle Open → Finish",
          "focus": "freeze volley en hoek openen"
        },
        {
          "minutes": 12,
          "exerciseId": "08",
          "exerciseTitle": "Finish or Freeze - Netduel Decisions",
          "focus": "finish or freeze keuze"
        },
        {
          "minutes": 10,
          "exerciseId": "36",
          "exerciseTitle": "Middenbal-afspraken Duo",
          "focus": "middencommunicatie bij net"
        },
        {
          "minutes": 14,
          "transfer": "Netduel met verplichte controlebal vóór finish."
        },
        {
          "minutes": 4,
          "log": "Netfouten, goede freeze balls, te snelle finishes."
        }
      ],
      "successCriterionKpi": "Minimaal 15 van 20 volleys blijven laag/speelbaar; rechtshandige speler kiest vaker freeze/control dan wild finishen.",
      "transferGame": "Netduel: winnaar telt alleen als er eerst één controlevolley of freeze volley is gespeeld.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "Rechtshandig, KNLTB 8-9, Padel Studio - Rechts",
      "leftHandedVariant": "niet van toepassing"
    },
    {
      "id": "TP-006",
      "title": "Hoekverdediging zonder paniek",
      "player": "rechtshandige speler",
      "playerType": "knltb_8_9_right_handed",
      "level": "beginner",
      "durationMinutes": 60,
      "handedness": "right-handed",
      "exerciseUrlParam": "handedness=right",
      "padelShooterSide": "Padel Studio - Rechts",
      "goal": "De rechtshandige speler traint moeilijke hoekballen terug naar neutraal krijgen zonder te forceren.",
      "logicalFlow": "Van corner defense naar low T reset, daarna double glass alleen rustig en als lees-oefening.",
      "exerciseIds": [
        "16",
        "26",
        "21",
        "39"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "16",
          "title": "Corner Defense: Reset, T-Ball or Chiquita",
          "url": "exercise.html?id=16&handedness=right"
        },
        {
          "exerciseId": "26",
          "title": "Corner Defense → Low T Reset",
          "url": "exercise.html?id=26&handedness=right"
        },
        {
          "exerciseId": "21",
          "title": "Double Glass Escape → Slow Rebuild",
          "url": "exercise.html?id=21&handedness=right"
        },
        {
          "exerciseId": "39",
          "title": "Defense to Neutral",
          "url": "exercise.html?id=39&handedness=right"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral",
          "focus": "defense to neutral"
        },
        {
          "minutes": 12,
          "exerciseId": "16",
          "exerciseTitle": "Corner Defense: Reset, T-Ball or Chiquita",
          "focus": "corner defense basiskeuze"
        },
        {
          "minutes": 12,
          "exerciseId": "26",
          "exerciseTitle": "Corner Defense → Low T Reset",
          "focus": "low T reset"
        },
        {
          "minutes": 12,
          "exerciseId": "21",
          "exerciseTitle": "Double Glass Escape → Slow Rebuild",
          "focus": "double glass rustig lezen"
        },
        {
          "minutes": 12,
          "transfer": "Hoekstart: binnen 3 ballen naar neutraal."
        },
        {
          "minutes": 4,
          "log": "Paniekslagen, resets, low T kwaliteit."
        }
      ],
      "successCriterionKpi": "Minimaal 12 van 20 hoekballen komen terug als reset of low T; geen harde paniekslagen uit balans.",
      "transferGame": "Punt start in de hoek. De rechtshandige speler wint het mini-punt als de speler binnen 3 ballen weer neutraal staat.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "Rechtshandig, KNLTB 8-9, Padel Studio - Rechts",
      "leftHandedVariant": "niet van toepassing"
    },
    {
      "id": "TP-007",
      "title": "Body defense: bal op je af zonder blokkeren",
      "player": "rechtshandige speler",
      "playerType": "knltb_8_9_right_handed",
      "level": "beginner",
      "durationMinutes": 60,
      "handedness": "right-handed",
      "exerciseUrlParam": "handedness=right",
      "padelShooterSide": "Padel Studio - Rechts",
      "goal": "De rechtshandige speler leert ballen op het lichaam compact op te vangen en daarna open ruimte of midden te vinden.",
      "logicalFlow": "Eerst body jam overleven, daarna open cross, daarna neutraliseren als default.",
      "exerciseIds": [
        "27",
        "23",
        "15",
        "39"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "27",
          "title": "Body Jam from Defense",
          "url": "exercise.html?id=27&handedness=right"
        },
        {
          "exerciseId": "23",
          "title": "Body Defense → Open Space Cross",
          "url": "exercise.html?id=23&handedness=right"
        },
        {
          "exerciseId": "15",
          "title": "Return Body Block → Deep Middle → Close Middle",
          "url": "exercise.html?id=15&handedness=right"
        },
        {
          "exerciseId": "39",
          "title": "Defense to Neutral",
          "url": "exercise.html?id=39&handedness=right"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral",
          "focus": "compact verdedigen"
        },
        {
          "minutes": 12,
          "exerciseId": "27",
          "exerciseTitle": "Body Jam from Defense",
          "focus": "body jam from defense"
        },
        {
          "minutes": 12,
          "exerciseId": "23",
          "exerciseTitle": "Body Defense → Open Space Cross",
          "focus": "body defense naar open space"
        },
        {
          "minutes": 12,
          "exerciseId": "15",
          "exerciseTitle": "Return Body Block → Deep Middle → Close Middle",
          "focus": "deep middle als veilige uitgang"
        },
        {
          "minutes": 12,
          "transfer": "Body-start mini-rally; punt voor compact block + herstel."
        },
        {
          "minutes": 4,
          "log": "Compacte blocks, racket te groot, herstel."
        }
      ],
      "successCriterionKpi": "12 van 20 bodyballen worden compact verwerkt zonder achteruit te vallen of racket te groot te maken.",
      "transferGame": "Tegenstander/machine speelt body. De rechtshandige speler krijgt punt voor compacte block + herstel, niet voor hard slaan.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "Rechtshandig, KNLTB 8-9, Padel Studio - Rechts",
      "leftHandedVariant": "niet van toepassing"
    },
    {
      "id": "TP-008",
      "title": "Chiquita beginner: laag spelen en niet haasten",
      "player": "rechtshandige speler",
      "playerType": "knltb_8_9_right_handed",
      "level": "beginner-plus",
      "durationMinutes": 60,
      "handedness": "right-handed",
      "exerciseUrlParam": "handedness=right",
      "padelShooterSide": "Padel Studio - Rechts",
      "goal": "rechtshandige speler maakt kennis met de chiquita als rustige lage bal naar voeten, niet als trucje of winner.",
      "logicalFlow": "Eerst low-feet chiquita, daarna chiquita entry, daarna eerste volley alleen als de bal echt goed is.",
      "exerciseIds": [
        "25",
        "04",
        "34",
        "39"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "25",
          "title": "Backglass → Low Feet Chiquita",
          "url": "exercise.html?id=25&handedness=right"
        },
        {
          "exerciseId": "04",
          "title": "Chiquita Entry: Low Feet → Step In → Control",
          "url": "exercise.html?id=04&handedness=right"
        },
        {
          "exerciseId": "34",
          "title": "Chiquita + Eerste Volley",
          "url": "exercise.html?id=34&handedness=right"
        },
        {
          "exerciseId": "39",
          "title": "Defense to Neutral",
          "url": "exercise.html?id=39&handedness=right"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral",
          "focus": "neutraal blijven als chiquita niet kan"
        },
        {
          "minutes": 12,
          "exerciseId": "25",
          "exerciseTitle": "Backglass → Low Feet Chiquita",
          "focus": "backglass naar low feet chiquita"
        },
        {
          "minutes": 12,
          "exerciseId": "04",
          "exerciseTitle": "Chiquita Entry: Low Feet → Step In → Control",
          "focus": "chiquita entry"
        },
        {
          "minutes": 12,
          "exerciseId": "34",
          "exerciseTitle": "Chiquita + Eerste Volley",
          "focus": "chiquita + eerste volley, vereenvoudigd"
        },
        {
          "minutes": 12,
          "transfer": "Alleen instappen na lage bal naar voeten."
        },
        {
          "minutes": 4,
          "log": "Lage chiquita’s, onterechte instap, fouten in net."
        }
      ],
      "successCriterionKpi": "Minimaal 10 van 20 chiquita’s blijven laag genoeg; rechtshandige speler stapt alleen in na een groene bal.",
      "transferGame": "Chiquita-spel: na een goede lage bal mag rechtshandige speler één stap vooruit, maar niet blind naar het net sprinten.",
      "coachNote": "Deze training is beginner-plus. Als rechtshandige speler veel directe fouten maakt: oefening 34 overslaan en terug naar 25 + 39.",
      "rightHandedVariant": "Rechtshandig, KNLTB 8-9, Padel Studio - Rechts",
      "leftHandedVariant": "niet van toepassing"
    },
    {
      "id": "TP-009",
      "title": "Eerste drie ballen: service/return met plan",
      "player": "rechtshandige speler",
      "playerType": "knltb_8_9_right_handed",
      "level": "beginner",
      "durationMinutes": 60,
      "handedness": "right-handed",
      "exerciseUrlParam": "handedness=right",
      "padelShooterSide": "Padel Studio - Rechts",
      "goal": "De rechtshandige speler krijgt simpele patronen voor de eerste drie ballen, zodat punten minder rommelig starten.",
      "logicalFlow": "Van serve/ball 3 naar return deep, daarna middenafspraak zodat duo-patronen duidelijker worden.",
      "exerciseIds": [
        "18",
        "03",
        "15",
        "36"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "18",
          "title": "Serve + Ball 3 Plan Right Side",
          "url": "exercise.html?id=18&handedness=right"
        },
        {
          "exerciseId": "03",
          "title": "Return Deep - Doorstappen - Net Volley",
          "url": "exercise.html?id=03&handedness=right"
        },
        {
          "exerciseId": "15",
          "title": "Return Body Block → Deep Middle → Close Middle",
          "url": "exercise.html?id=15&handedness=right"
        },
        {
          "exerciseId": "36",
          "title": "Middenbal-afspraken Duo",
          "url": "exercise.html?id=36&handedness=right"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "18",
          "exerciseTitle": "Serve + Ball 3 Plan Right Side",
          "focus": "serve + ball 3 simpel plan"
        },
        {
          "minutes": 12,
          "exerciseId": "03",
          "exerciseTitle": "Return Deep - Doorstappen - Net Volley",
          "focus": "return deep + wel/niet doorstappen"
        },
        {
          "minutes": 12,
          "exerciseId": "15",
          "exerciseTitle": "Return Body Block → Deep Middle → Close Middle",
          "focus": "body block en deep middle"
        },
        {
          "minutes": 12,
          "exerciseId": "36",
          "exerciseTitle": "Middenbal-afspraken Duo",
          "focus": "middenafspraken met linkshandige speler"
        },
        {
          "minutes": 12,
          "transfer": "eerste-vijf-ballen score op positievoordeel."
        },
        {
          "minutes": 4,
          "log": "Duidelijke starts, communicatie, onnodige fouten."
        }
      ],
      "successCriterionKpi": "In 70% van de reeksen is na drie ballen duidelijk: blijven, doorstappen of midden dekken.",
      "transferGame": "Speel alleen de eerste drie tot vijf ballen. Daarna stoppen en beoordelen wie positievoordeel heeft.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "Rechtshandig, KNLTB 8-9, Padel Studio - Rechts",
      "leftHandedVariant": "niet van toepassing"
    },
    {
      "id": "TP-010",
      "title": "Beginner wedstrijdmix: rustig kiezen onder druk",
      "player": "rechtshandige speler",
      "playerType": "knltb_8_9_right_handed",
      "level": "beginner",
      "durationMinutes": 60,
      "handedness": "right-handed",
      "exerciseUrlParam": "handedness=right",
      "padelShooterSide": "Padel Studio - Rechts",
      "goal": "De rechtshandige speler combineert de belangrijkste beginnersthema’s in een simpele wedstrijdvorm: neutraliseren, lobben, laag spelen, net vasthouden.",
      "logicalFlow": "Eerst defense to neutral, daarna random defense, daarna volleybasis en eindigen met lichte scoreborddruk.",
      "exerciseIds": [
        "39",
        "29",
        "07",
        "10",
        "38"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "39",
          "title": "Defense to Neutral",
          "url": "exercise.html?id=39&handedness=right"
        },
        {
          "exerciseId": "29",
          "title": "Random Defense Decision: Lob, Body, T or Chiquita",
          "url": "exercise.html?id=29&handedness=right"
        },
        {
          "exerciseId": "07",
          "title": "Forehand and Backhand Volley Combos",
          "url": "exercise.html?id=07&handedness=right"
        },
        {
          "exerciseId": "10",
          "title": "Lob - Positioneren - Druk Zetten",
          "url": "exercise.html?id=10&handedness=right"
        },
        {
          "exerciseId": "38",
          "title": "Golden Point Druk",
          "url": "exercise.html?id=38&handedness=right"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral",
          "focus": "basisregel: eerst neutraal"
        },
        {
          "minutes": 12,
          "exerciseId": "29",
          "exerciseTitle": "Random Defense Decision: Lob, Body, T or Chiquita",
          "focus": "random defense eenvoudig maken"
        },
        {
          "minutes": 10,
          "exerciseId": "07",
          "exerciseTitle": "Forehand and Backhand Volley Combos",
          "focus": "volleybasis bij net"
        },
        {
          "minutes": 10,
          "exerciseId": "10",
          "exerciseTitle": "Lob - Positioneren - Druk Zetten",
          "focus": "lob als tijdkoop"
        },
        {
          "minutes": 16,
          "transfer": "lichte golden-point/tiebreakvorm met bonus voor juiste keuze."
        },
        {
          "minutes": 4,
          "log": "Juiste keuzes, fouten, baltype dat lastig blijft."
        }
      ],
      "successCriterionKpi": "65% juiste keuzes onder lichte random druk; niet meer dan 6 directe fouten in de transfergame.",
      "transferGame": "Mini-tiebreak tot 7. De rechtshandige speler krijgt bonuspunt voor juiste keuze, ook als de bal niet perfect is.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "Rechtshandig, KNLTB 8-9, Padel Studio - Rechts",
      "leftHandedVariant": "niet van toepassing"
    },
    {
      "id": "TP-011",
      "title": "Achterglas Decision: reset, low T of chiquita",
      "player": "linkshandige speler",
      "playerType": "advanced_60",
      "level": "advanced",
      "durationMinutes": 60,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "De linkshandige speler traint uit de glasbackhand bewuste keuzes in plaats van automatische lobs.",
      "logicalFlow": "Van backglass decision naar bajada/chiquita-keuze en daarna random defense onder ruis.",
      "exerciseIds": [
        "01",
        "31",
        "25",
        "29"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "01",
          "title": "Glasbackhand Decision: Lob of Low T",
          "url": "exercise.html?id=01&handedness=left"
        },
        {
          "exerciseId": "31",
          "title": "Bajada Decision",
          "url": "exercise.html?id=31&handedness=left"
        },
        {
          "exerciseId": "25",
          "title": "Backglass → Low Feet Chiquita",
          "url": "exercise.html?id=25&handedness=left"
        },
        {
          "exerciseId": "29",
          "title": "Random Defense Decision: Lob, Body, T or Chiquita",
          "url": "exercise.html?id=29&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "01",
          "exerciseTitle": "Glasbackhand Decision: Lob of Low T",
          "focus": "glasbackhand decision"
        },
        {
          "minutes": 12,
          "exerciseId": "31",
          "exerciseTitle": "Bajada Decision",
          "focus": "bajada/glas decision rood-oranje-groen"
        },
        {
          "minutes": 12,
          "exerciseId": "25",
          "exerciseTitle": "Backglass → Low Feet Chiquita",
          "focus": "low-feet chiquita na glas"
        },
        {
          "minutes": 12,
          "exerciseId": "29",
          "exerciseTitle": "Random Defense Decision: Lob, Body, T or Chiquita",
          "focus": "random defense keuze"
        },
        {
          "minutes": 12,
          "transfer": "achterglas-start: score op keuze + vervolgpositie."
        },
        {
          "minutes": 4,
          "log": "Keuze vóór contact, halfhoge ballen, herstel."
        }
      ],
      "successCriterionKpi": "Minimaal 14 van 20 keuzes vóór contact correct benoemd; oranje/groen blijft onder volleyhoogte.",
      "transferGame": "Punt start uit achterglas. Punt telt dubbel als linkshandige speler laag speelt, positie wint en daarna niet forceert.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "niet van toepassing",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-012",
      "title": "Bajada naar aanval",
      "player": "linkshandige speler",
      "playerType": "advanced_60",
      "level": "advanced",
      "durationMinutes": 60,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "De linkshandige speler leert hoge glasballen benutten met gecontroleerde bajada en daarna vervolgdruk.",
      "logicalFlow": "Eerst forehandglas lezen, dan bajada-techniek, dan decision, dan chiquita/eerste volley als vervolgroute.",
      "exerciseIds": [
        "13",
        "30",
        "31",
        "34"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "13",
          "title": "Backglass Forehand: High Reset or Low Exit",
          "url": "exercise.html?id=13&handedness=left"
        },
        {
          "exerciseId": "30",
          "title": "Bajada uit Achterglas",
          "url": "exercise.html?id=30&handedness=left"
        },
        {
          "exerciseId": "31",
          "title": "Bajada Decision",
          "url": "exercise.html?id=31&handedness=left"
        },
        {
          "exerciseId": "34",
          "title": "Chiquita + Eerste Volley",
          "url": "exercise.html?id=34&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "13",
          "exerciseTitle": "Backglass Forehand: High Reset or Low Exit",
          "focus": "forehandglas high reset/low exit"
        },
        {
          "minutes": 12,
          "exerciseId": "30",
          "exerciseTitle": "Bajada uit Achterglas",
          "focus": "bajada techniek uit achterglas"
        },
        {
          "minutes": 12,
          "exerciseId": "31",
          "exerciseTitle": "Bajada Decision",
          "focus": "bajada decision"
        },
        {
          "minutes": 12,
          "exerciseId": "34",
          "exerciseTitle": "Chiquita + Eerste Volley",
          "focus": "chiquita + eerste volley als vervolg"
        },
        {
          "minutes": 12,
          "transfer": "bajada-start: drukbal of bewuste reset telt."
        },
        {
          "minutes": 4,
          "log": "Bajada-kansen, geforceerde ballen, vervolgpositie."
        }
      ],
      "successCriterionKpi": "12 van 20 bajada-kansen worden als drukbal gespeeld zonder onnodige fout; rode ballen worden niet geforceerd.",
      "transferGame": "Alleen scoren na een bajada die laag/diep druk zet of na een bewuste reset bij rood.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "niet van toepassing",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-013",
      "title": "Chiquita Entry + eerste volley",
      "player": "linkshandige speler",
      "playerType": "advanced_60",
      "level": "advanced",
      "durationMinutes": 60,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "linkshandige speler koppelt lage voetenballen aan direct terrein winnen en een beheerste eerste volley.",
      "logicalFlow": "Van chiquita entry naar backglass low feet, daarna eerste volley en finish/freeze decision.",
      "exerciseIds": [
        "04",
        "25",
        "34",
        "08"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "04",
          "title": "Chiquita Entry: Low Feet → Step In → Control",
          "url": "exercise.html?id=04&handedness=left"
        },
        {
          "exerciseId": "25",
          "title": "Backglass → Low Feet Chiquita",
          "url": "exercise.html?id=25&handedness=left"
        },
        {
          "exerciseId": "34",
          "title": "Chiquita + Eerste Volley",
          "url": "exercise.html?id=34&handedness=left"
        },
        {
          "exerciseId": "08",
          "title": "Finish or Freeze - Netduel Decisions",
          "url": "exercise.html?id=08&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "04",
          "exerciseTitle": "Chiquita Entry: Low Feet → Step In → Control",
          "focus": "chiquita entry"
        },
        {
          "minutes": 12,
          "exerciseId": "25",
          "exerciseTitle": "Backglass → Low Feet Chiquita",
          "focus": "backglass naar low feet"
        },
        {
          "minutes": 12,
          "exerciseId": "34",
          "exerciseTitle": "Chiquita + Eerste Volley",
          "focus": "chiquita + eerste volley"
        },
        {
          "minutes": 12,
          "exerciseId": "08",
          "exerciseTitle": "Finish or Freeze - Netduel Decisions",
          "focus": "finish or freeze"
        },
        {
          "minutes": 12,
          "transfer": "scoren alleen na chiquita-entry of goede eerste volley."
        },
        {
          "minutes": 4,
          "log": "Lage ballen, eerste stap, eerste volley keuze."
        }
      ],
      "successCriterionKpi": "Na 70% van de goede chiquita’s volgt direct een eerste stap vooruit; eerste volley wordt niet geforceerd.",
      "transferGame": "Punt telt alleen als linkshandige speler via lage bal naar voeten het net terugpakt of druk creëert.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "niet van toepassing",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-014",
      "title": "Anti-Bandeja Defense",
      "player": "linkshandige speler",
      "playerType": "advanced_60",
      "level": "advanced",
      "durationMinutes": 60,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "De linkshandige speler leert tegen sterke overheadspelers niet steeds de middelmatige lob te geven.",
      "logicalFlow": "Van no-lob/low T naar low-low-lob en defense to neutral: eerst onder volleyhoogte werken, daarna pas hoog.",
      "exerciseIds": [
        "01",
        "26",
        "28",
        "39"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "01",
          "title": "Glasbackhand Decision: Lob of Low T",
          "url": "exercise.html?id=01&handedness=left"
        },
        {
          "exerciseId": "26",
          "title": "Corner Defense → Low T Reset",
          "url": "exercise.html?id=26&handedness=left"
        },
        {
          "exerciseId": "28",
          "title": "Low-Low-Lob Pattern",
          "url": "exercise.html?id=28&handedness=left"
        },
        {
          "exerciseId": "39",
          "title": "Defense to Neutral",
          "url": "exercise.html?id=39&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "01",
          "exerciseTitle": "Glasbackhand Decision: Lob of Low T",
          "focus": "glasbackhand zonder automatische lob"
        },
        {
          "minutes": 12,
          "exerciseId": "26",
          "exerciseTitle": "Corner Defense → Low T Reset",
          "focus": "corner low T reset"
        },
        {
          "minutes": 12,
          "exerciseId": "28",
          "exerciseTitle": "Low-Low-Lob Pattern",
          "focus": "low-low-lob patroon"
        },
        {
          "minutes": 12,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral",
          "focus": "defense to neutral"
        },
        {
          "minutes": 12,
          "transfer": "anti-bandeja game: lage ballen breken ritme."
        },
        {
          "minutes": 4,
          "log": "Automatische lobs, lage ballen, halfhoge fouten."
        }
      ],
      "successCriterionKpi": "Minimaal 12 van 20 oranje/groene ballen blijven laag genoeg om de volley onder schouderhoogte te dwingen.",
      "transferGame": "Tegenstander mag alleen scoren met bandeja. De linkshandige speler krijgt bonus voor lage T/body die overheadritme breekt.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "niet van toepassing",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-015",
      "title": "Bandeja/Víbora Decision",
      "player": "linkshandige speler",
      "playerType": "advanced_60",
      "level": "advanced",
      "durationMinutes": 60,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "De linkshandige speler traint overheadkeuzes: vasthouden met bandeja, snijden/drukken met víbora of terug naar net herstellen.",
      "logicalFlow": "Van lob-read naar recovery-bandeja, daarna víbora/bandeja-keuze en counterbandeja naar finish window.",
      "exerciseIds": [
        "14",
        "05",
        "32",
        "22"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "14",
          "title": "Lob Read → Bandeja Body → Net Hold",
          "url": "exercise.html?id=14&handedness=left"
        },
        {
          "exerciseId": "05",
          "title": "Volley - Volley - Bandeja - Forward Recovery",
          "url": "exercise.html?id=05&handedness=left"
        },
        {
          "exerciseId": "32",
          "title": "Víbora of Bandeja",
          "url": "exercise.html?id=32&handedness=left"
        },
        {
          "exerciseId": "22",
          "title": "Counterbandeja → Step In → Finish Window",
          "url": "exercise.html?id=22&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "14",
          "exerciseTitle": "Lob Read → Bandeja Body → Net Hold",
          "focus": "lob read en body bandeja"
        },
        {
          "minutes": 12,
          "exerciseId": "05",
          "exerciseTitle": "Volley - Volley - Bandeja - Forward Recovery",
          "focus": "bandeja forward recovery"
        },
        {
          "minutes": 12,
          "exerciseId": "32",
          "exerciseTitle": "Víbora of Bandeja",
          "focus": "víbora of bandeja decision"
        },
        {
          "minutes": 12,
          "exerciseId": "22",
          "exerciseTitle": "Counterbandeja → Step In → Finish Window",
          "focus": "counterbandeja naar finish window"
        },
        {
          "minutes": 12,
          "transfer": "overhead-start: net terugpakken is scorevoorwaarde."
        },
        {
          "minutes": 4,
          "log": "Keuze, diepte, herstel naar net."
        }
      ],
      "successCriterionKpi": "In 10 van 15 overheadsituaties is keuze en herstel logisch: geen wilde winner wanneer vasthouden beter is.",
      "transferGame": "Elke lob op De linkshandige speler moet eindigen in bandeja/víbora + herstel. Punt telt alleen als netpositie opnieuw klopt.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "niet van toepassing",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-016",
      "title": "Linkshandige midden-dominantie",
      "player": "linkshandige speler",
      "playerType": "advanced_60",
      "level": "advanced",
      "durationMinutes": 60,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "De linkshandige speler gebruikt de linkshandige forehand om het midden te controleren en tegenstanders vast te zetten.",
      "logicalFlow": "Van forehand middle lock naar volley combos, backhand volley lock en cross-body-DTL patroon.",
      "exerciseIds": [
        "35",
        "07",
        "19",
        "09",
        "24"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "35",
          "title": "Forehand Midden Lock",
          "url": "exercise.html?id=35&handedness=left"
        },
        {
          "exerciseId": "07",
          "title": "Forehand and Backhand Volley Combos",
          "url": "exercise.html?id=07&handedness=left"
        },
        {
          "exerciseId": "19",
          "title": "Backhand Volley Lock → Middle Squeeze",
          "url": "exercise.html?id=19&handedness=left"
        },
        {
          "exerciseId": "09",
          "title": "Cross - Body - DTL",
          "url": "exercise.html?id=09&handedness=left"
        },
        {
          "exerciseId": "24",
          "title": "Freeze Volley → Angle Open → Finish",
          "url": "exercise.html?id=24&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "35",
          "exerciseTitle": "Forehand Midden Lock",
          "focus": "forehand midden lock"
        },
        {
          "minutes": 10,
          "exerciseId": "07",
          "exerciseTitle": "Forehand and Backhand Volley Combos",
          "focus": "volley combos"
        },
        {
          "minutes": 10,
          "exerciseId": "19",
          "exerciseTitle": "Backhand Volley Lock → Middle Squeeze",
          "focus": "backhand volley lock"
        },
        {
          "minutes": 12,
          "exerciseId": "09",
          "exerciseTitle": "Cross - Body - DTL",
          "focus": "cross-body-DTL patroon"
        },
        {
          "minutes": 10,
          "exerciseId": "24",
          "exerciseTitle": "Freeze Volley → Angle Open → Finish",
          "focus": "freeze volley naar finish"
        },
        {
          "minutes": 8,
          "transfer": "netduel: eerst vastzetten, dan openen."
        },
        {
          "minutes": 2,
          "log": "Middencontrole en te snelle versnellingen."
        }
      ],
      "successCriterionKpi": "15 van 20 netballen hebben een duidelijke bedoeling: midden lock, body, freeze of DTL openen.",
      "transferGame": "Netduel waarin linkshandige speler pas mag versnellen nadat de speler eerst midden/body heeft vastgezet.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "niet van toepassing",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-017",
      "title": "Drop Volley / Dejada na netdominantie",
      "player": "linkshandige speler",
      "playerType": "advanced_60",
      "level": "advanced",
      "durationMinutes": 60,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "De linkshandige speler voegt touch toe aan het netspel: niet alleen hard/diep, maar ook kort wanneer tegenstanders hangen.",
      "logicalFlow": "Van controlevolleys naar freeze, dan drop volley, daarna finish-or-freeze onder keuze-druk.",
      "exerciseIds": [
        "07",
        "24",
        "33",
        "08"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "07",
          "title": "Forehand and Backhand Volley Combos",
          "url": "exercise.html?id=07&handedness=left"
        },
        {
          "exerciseId": "24",
          "title": "Freeze Volley → Angle Open → Finish",
          "url": "exercise.html?id=24&handedness=left"
        },
        {
          "exerciseId": "33",
          "title": "Drop Volley / Dejada",
          "url": "exercise.html?id=33&handedness=left"
        },
        {
          "exerciseId": "08",
          "title": "Finish or Freeze - Netduel Decisions",
          "url": "exercise.html?id=08&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "07",
          "exerciseTitle": "Forehand and Backhand Volley Combos",
          "focus": "volleycontrole"
        },
        {
          "minutes": 12,
          "exerciseId": "24",
          "exerciseTitle": "Freeze Volley → Angle Open → Finish",
          "focus": "freeze en hoek openen"
        },
        {
          "minutes": 12,
          "exerciseId": "33",
          "exerciseTitle": "Drop Volley / Dejada",
          "focus": "drop volley/dejada"
        },
        {
          "minutes": 12,
          "exerciseId": "08",
          "exerciseTitle": "Finish or Freeze - Netduel Decisions",
          "focus": "finish or freeze decision"
        },
        {
          "minutes": 12,
          "transfer": "drop alleen na setup-bal; anders puntverlies."
        },
        {
          "minutes": 4,
          "log": "Juiste dropmomenten, drops in net, te voorspelbaar."
        }
      ],
      "successCriterionKpi": "Minimaal 8 van 15 dropvolley-kansen zijn bewust gekozen en technisch zacht genoeg; geen drop uit slechte positie.",
      "transferGame": "Netduel: drop volley mag alleen na voorafgaande diepe/freeze bal die tegenstander naar achter houdt.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "niet van toepassing",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-018",
      "title": "Serve wide + ball 3",
      "player": "linkshandige speler",
      "playerType": "advanced_60",
      "level": "advanced",
      "durationMinutes": 60,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "linkshandige speler maakt van service geen startschot maar een plan: wide openen, ball 3 kiezen en midden/net dekken.",
      "logicalFlow": "Van specifieke linkshandige serve wide naar bestaande serve+ball3, return/doorstap en body-block scenario’s.",
      "exerciseIds": [
        "37",
        "18",
        "03",
        "15"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "37",
          "title": "Serve Wide + Ball 3",
          "url": "exercise.html?id=37&handedness=left"
        },
        {
          "exerciseId": "18",
          "title": "Serve + Ball 3 Plan Right Side",
          "url": "exercise.html?id=18&handedness=left"
        },
        {
          "exerciseId": "03",
          "title": "Return Deep - Doorstappen - Net Volley",
          "url": "exercise.html?id=03&handedness=left"
        },
        {
          "exerciseId": "15",
          "title": "Return Body Block → Deep Middle → Close Middle",
          "url": "exercise.html?id=15&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "37",
          "exerciseTitle": "Serve Wide + Ball 3",
          "focus": "serve wide + ball 3 linkshandig"
        },
        {
          "minutes": 12,
          "exerciseId": "18",
          "exerciseTitle": "Serve + Ball 3 Plan Right Side",
          "focus": "serve + ball 3 plan"
        },
        {
          "minutes": 12,
          "exerciseId": "03",
          "exerciseTitle": "Return Deep - Doorstappen - Net Volley",
          "focus": "return deep/doorstappen als tegenbeeld"
        },
        {
          "minutes": 12,
          "exerciseId": "15",
          "exerciseTitle": "Return Body Block → Deep Middle → Close Middle",
          "focus": "body block + deep middle"
        },
        {
          "minutes": 12,
          "transfer": "eerste-vijf-ballen spel op positievoordeel."
        },
        {
          "minutes": 4,
          "log": "Serveplaatsing, ball 3 keuze, netdekking."
        }
      ],
      "successCriterionKpi": "70% van de eerste-drie-ballenreeksen eindigt met positievoordeel of duidelijke neutrale controle.",
      "transferGame": "Speel alleen de eerste vijf ballen. Score: +1 voor positievoordeel na bal 3, +1 voor juiste midden/netdekking.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "niet van toepassing",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-019",
      "title": "Corner & Double Glass onder druk",
      "player": "linkshandige speler",
      "playerType": "advanced_60",
      "level": "advanced",
      "durationMinutes": 60,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "De linkshandige speler traint moeilijke hoek- en dubbelglasballen om niet alleen te overleven maar logisch te rebuilden.",
      "logicalFlow": "Van corner defense naar double glass, daarna backhand pressure en body defense naar open space, eindigend random.",
      "exerciseIds": [
        "16",
        "21",
        "12",
        "23",
        "29"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "16",
          "title": "Corner Defense: Reset, T-Ball or Chiquita",
          "url": "exercise.html?id=16&handedness=left"
        },
        {
          "exerciseId": "21",
          "title": "Double Glass Escape → Slow Rebuild",
          "url": "exercise.html?id=21&handedness=left"
        },
        {
          "exerciseId": "12",
          "title": "Backhand Under Pressure - Counter Cycle",
          "url": "exercise.html?id=12&handedness=left"
        },
        {
          "exerciseId": "23",
          "title": "Body Defense → Open Space Cross",
          "url": "exercise.html?id=23&handedness=left"
        },
        {
          "exerciseId": "29",
          "title": "Random Defense Decision: Lob, Body, T or Chiquita",
          "url": "exercise.html?id=29&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "16",
          "exerciseTitle": "Corner Defense: Reset, T-Ball or Chiquita",
          "focus": "corner defense keuze"
        },
        {
          "minutes": 10,
          "exerciseId": "21",
          "exerciseTitle": "Double Glass Escape → Slow Rebuild",
          "focus": "double glass escape"
        },
        {
          "minutes": 10,
          "exerciseId": "12",
          "exerciseTitle": "Backhand Under Pressure - Counter Cycle",
          "focus": "backhand under pressure"
        },
        {
          "minutes": 10,
          "exerciseId": "23",
          "exerciseTitle": "Body Defense → Open Space Cross",
          "focus": "body defense open space"
        },
        {
          "minutes": 10,
          "exerciseId": "29",
          "exerciseTitle": "Random Defense Decision: Lob, Body, T or Chiquita",
          "focus": "random defense decision"
        },
        {
          "minutes": 8,
          "transfer": "hoekstart: binnen 3 ballen naar neutraal."
        },
        {
          "minutes": 4,
          "log": "Paniekslagen, rebuilds, juiste exits."
        }
      ],
      "successCriterionKpi": "Minimaal 65% van de corner/double-glass situaties eindigt in neutral, low T/body of gecontroleerde rebuild.",
      "transferGame": "Start elk punt in de hoek. De linkshandige speler scoort extra als de speler binnen drie ballen weer T/midden heroverd heeft.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "niet van toepassing",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-020",
      "title": "Golden Point: wedstrijdkeuzes onder druk",
      "player": "linkshandige speler",
      "playerType": "advanced_60",
      "level": "advanced",
      "durationMinutes": 60,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "De linkshandige speler combineert defense, netkeuze, middenafspraken en finish/freeze onder scoreborddruk.",
      "logicalFlow": "Van random defense naar golden point, middenbalafspraken en finish/freeze als laatste beslislaag.",
      "exerciseIds": [
        "29",
        "38",
        "36",
        "08",
        "24"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "29",
          "title": "Random Defense Decision: Lob, Body, T or Chiquita",
          "url": "exercise.html?id=29&handedness=left"
        },
        {
          "exerciseId": "38",
          "title": "Golden Point Druk",
          "url": "exercise.html?id=38&handedness=left"
        },
        {
          "exerciseId": "36",
          "title": "Middenbal-afspraken Duo",
          "url": "exercise.html?id=36&handedness=left"
        },
        {
          "exerciseId": "08",
          "title": "Finish or Freeze - Netduel Decisions",
          "url": "exercise.html?id=08&handedness=left"
        },
        {
          "exerciseId": "24",
          "title": "Freeze Volley → Angle Open → Finish",
          "url": "exercise.html?id=24&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "29",
          "exerciseTitle": "Random Defense Decision: Lob, Body, T or Chiquita",
          "focus": "random defense warm-up"
        },
        {
          "minutes": 12,
          "exerciseId": "38",
          "exerciseTitle": "Golden Point Druk",
          "focus": "golden point druk"
        },
        {
          "minutes": 10,
          "exerciseId": "36",
          "exerciseTitle": "Middenbal-afspraken Duo",
          "focus": "middenafspraken rechts-/linkshandig"
        },
        {
          "minutes": 10,
          "exerciseId": "08",
          "exerciseTitle": "Finish or Freeze - Netduel Decisions",
          "focus": "finish or freeze"
        },
        {
          "minutes": 8,
          "exerciseId": "24",
          "exerciseTitle": "Freeze Volley → Angle Open → Finish",
          "focus": "freeze volley naar finish"
        },
        {
          "minutes": 8,
          "transfer": "golden-point tiebreak met scenario-call."
        },
        {
          "minutes": 4,
          "log": "Fouttype onder druk, keuzes, communicatie."
        }
      ],
      "successCriterionKpi": "In golden-pointvorm minimaal 60% juiste keuze onder druk; geen twee punten achter elkaar dezelfde onbewuste fout.",
      "transferGame": "Golden-point tiebreak: elke rally start met scenario-call. Na punt direct benoemen: juiste keuze of verkeerde keuze.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de routekaart.",
      "rightHandedVariant": "niet van toepassing",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-021",
      "title": "Achterglas naar aanval: decision, bajada, chiquita",
      "player": "linkshandige speler",
      "playerType": "advanced_90",
      "level": "advanced",
      "durationMinutes": 90,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "Vanuit diep achterglas niet alleen overleven, maar gecontroleerd kiezen tussen reset, low exit, bajada of chiquita-entry.",
      "logicalFlow": "Eerst glasbackhand lezen, daarna bajada-decision, daarna bajada-techniek, daarna low-feet chiquita en afsluiten met random wedstrijddruk.",
      "exerciseIds": [
        "01",
        "31",
        "30",
        "34",
        "29"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "01",
          "title": "Glasbackhand Decision: Lob of Low T",
          "url": "exercise.html?id=01&handedness=left"
        },
        {
          "exerciseId": "31",
          "title": "Bajada Decision: rood, oranje of groen uit achterglas",
          "url": "exercise.html?id=31&handedness=left"
        },
        {
          "exerciseId": "30",
          "title": "Bajada uit Achterglas: hoog glas omzetten naar druk",
          "url": "exercise.html?id=30&handedness=left"
        },
        {
          "exerciseId": "34",
          "title": "Chiquita + Eerste Volley: laag instappen zonder haast",
          "url": "exercise.html?id=34&handedness=left"
        },
        {
          "exerciseId": "29",
          "title": "Random Defense Decision: Lob, Body, T or Chiquita",
          "url": "exercise.html?id=29&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "01",
          "exerciseTitle": "Glasbackhand Decision: Lob of Low T",
          "focus": "warming-up met glasbackhand lezen en rustig herstellen"
        },
        {
          "minutes": 14,
          "exerciseId": "01",
          "exerciseTitle": "Glasbackhand Decision: Lob of Low T",
          "focus": "no-lob constraint: hoog resetten alleen bij rood"
        },
        {
          "minutes": 14,
          "exerciseId": "31",
          "exerciseTitle": "Bajada Decision: rood, oranje of groen uit achterglas",
          "focus": "rood/oranje/groen decision uit glas"
        },
        {
          "minutes": 14,
          "exerciseId": "30",
          "exerciseTitle": "Bajada uit Achterglas: hoog glas omzetten naar druk",
          "focus": "bajada-techniek: druk zonder winnerdrang"
        },
        {
          "minutes": 12,
          "exerciseId": "34",
          "exerciseTitle": "Chiquita + Eerste Volley: laag instappen zonder haast",
          "focus": "chiquita + eerste volley als vervolg op groene bal"
        },
        {
          "minutes": 10,
          "exerciseId": "29",
          "exerciseTitle": "Random Defense Decision: Lob, Body, T or Chiquita",
          "focus": "random defense decision onder ruis"
        },
        {
          "minutes": 14,
          "transfer": "wedstrijdstart uit achterglas; score op juiste keuze + vervolgpositie."
        },
        {
          "minutes": 4,
          "log": "Noteer: automatische lobben, halfhoge fouten, beste lage oplossing."
        }
      ],
      "successCriterionKpi": "Minimaal 18 van 30 beslissingen vóór contact juist benoemd; minimaal 70% van oranje/groene ballen blijft laag genoeg om de netspeler onder schouderhoogte te laten werken.",
      "transferGame": "Start elk punt met een diepe glasbal op linkshandige speler. Punt telt dubbel als de speler via low exit, bajada of chiquita positie wint zonder halfhoge middenbal.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de 90-minuten routekaart.",
      "rightHandedVariant": "n.v.t. — KNLTB 6-7 90-minutenprogramma",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-022",
      "title": "Bajada-dag: hoge glasbal omzetten naar druk",
      "player": "linkshandige speler",
      "playerType": "advanced_90",
      "level": "advanced",
      "durationMinutes": 90,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "Bajada trainen als gecontroleerde drukbal, niet als blinde winnerpoging.",
      "logicalFlow": "Van forehandglas en glasdefense naar bajada, daarna decision, daarna eerste volley of freeze-besluit.",
      "exerciseIds": [
        "13",
        "11",
        "30",
        "31",
        "34",
        "08"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "13",
          "title": "Backglass Forehand: High Reset or Low Exit",
          "url": "exercise.html?id=13&handedness=left"
        },
        {
          "exerciseId": "11",
          "title": "Glas Defense - T Heroveren - Rebuild",
          "url": "exercise.html?id=11&handedness=left"
        },
        {
          "exerciseId": "30",
          "title": "Bajada uit Achterglas: hoog glas omzetten naar druk",
          "url": "exercise.html?id=30&handedness=left"
        },
        {
          "exerciseId": "31",
          "title": "Bajada Decision: rood, oranje of groen uit achterglas",
          "url": "exercise.html?id=31&handedness=left"
        },
        {
          "exerciseId": "34",
          "title": "Chiquita + Eerste Volley: laag instappen zonder haast",
          "url": "exercise.html?id=34&handedness=left"
        },
        {
          "exerciseId": "08",
          "title": "Finish or Freeze - Netduel Decisions",
          "url": "exercise.html?id=08&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "13",
          "exerciseTitle": "Backglass Forehand: High Reset or Low Exit",
          "focus": "forehandglas als warming-up: hoog resetten of laag eruit"
        },
        {
          "minutes": 12,
          "exerciseId": "11",
          "exerciseTitle": "Glas Defense - T Heroveren - Rebuild",
          "focus": "glasdefense naar T heroveren"
        },
        {
          "minutes": 16,
          "exerciseId": "30",
          "exerciseTitle": "Bajada uit Achterglas: hoog glas omzetten naar druk",
          "focus": "bajada uit achterglas: contactpunt en richting"
        },
        {
          "minutes": 14,
          "exerciseId": "31",
          "exerciseTitle": "Bajada Decision: rood, oranje of groen uit achterglas",
          "focus": "bajada decision: rood/oranje/groen"
        },
        {
          "minutes": 12,
          "exerciseId": "34",
          "exerciseTitle": "Chiquita + Eerste Volley: laag instappen zonder haast",
          "focus": "na groene bajada/chiquita direct eerste volley voorbereiden"
        },
        {
          "minutes": 10,
          "exerciseId": "08",
          "exerciseTitle": "Finish or Freeze - Netduel Decisions",
          "focus": "finish or freeze na drukbal"
        },
        {
          "minutes": 14,
          "transfer": "bajada-startpunten: 1 punt voor juiste drukbal, extra punt als vervolgpositie klopt."
        },
        {
          "minutes": 4,
          "log": "Noteer: te vroeg raken, te hard forceren, herstel na contact."
        }
      ],
      "successCriterionKpi": "Minimaal 12 van 20 bajada’s landen diep/T/body zonder directe fout; minimaal 8 keer correcte vervolgstap na de bajada.",
      "transferGame": "Punt start met hoge glasbal. De linkshandige speler mag pas voor winner gaan nadat de speler eerst een drukbal op T/body of voeten heeft gespeeld.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de 90-minuten routekaart.",
      "rightHandedVariant": "n.v.t. — KNLTB 6-7 90-minutenprogramma",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-023",
      "title": "Anti-bandeja defense: laag blijven tegen overhead-druk",
      "player": "linkshandige speler",
      "playerType": "advanced_90",
      "level": "advanced",
      "durationMinutes": 90,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "Tegen sterke bandeja- en víbora-spelers de automatische lob-reflex doorbreken en vaker laag neutraliseren.",
      "logicalFlow": "Van glasbackhand decision naar corner low T, low-low-lob en defense-to-neutral, met random decision als eindblok.",
      "exerciseIds": [
        "01",
        "26",
        "28",
        "39",
        "29"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "01",
          "title": "Glasbackhand Decision: Lob of Low T",
          "url": "exercise.html?id=01&handedness=left"
        },
        {
          "exerciseId": "26",
          "title": "Corner Defense → Low T Reset",
          "url": "exercise.html?id=26&handedness=left"
        },
        {
          "exerciseId": "28",
          "title": "Low-Low-Lob Pattern",
          "url": "exercise.html?id=28&handedness=left"
        },
        {
          "exerciseId": "39",
          "title": "Defense to Neutral: van overleven naar neutraal zonder forceren",
          "url": "exercise.html?id=39&handedness=left"
        },
        {
          "exerciseId": "29",
          "title": "Random Defense Decision: Lob, Body, T or Chiquita",
          "url": "exercise.html?id=29&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral: van overleven naar neutraal zonder forceren",
          "focus": "warming-up: neutraal maken zonder forceren"
        },
        {
          "minutes": 14,
          "exerciseId": "01",
          "exerciseTitle": "Glasbackhand Decision: Lob of Low T",
          "focus": "glasbackhand: lob alleen als rood echt rood is"
        },
        {
          "minutes": 14,
          "exerciseId": "26",
          "exerciseTitle": "Corner Defense → Low T Reset",
          "focus": "corner defense naar low T reset"
        },
        {
          "minutes": 14,
          "exerciseId": "28",
          "exerciseTitle": "Low-Low-Lob Pattern",
          "focus": "low-low-lob patroon: hoogte pas na twee lage oplossingen"
        },
        {
          "minutes": 12,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral: van overleven naar neutraal zonder forceren",
          "focus": "defense to neutral in plaats van counter forceren"
        },
        {
          "minutes": 10,
          "exerciseId": "29",
          "exerciseTitle": "Random Defense Decision: Lob, Body, T or Chiquita",
          "focus": "random defense: lob/body/T/chiquita"
        },
        {
          "minutes": 14,
          "transfer": "anti-bandeja game: overhead van tegenstander telt alleen als de speler comfortabel boven schouderhoogte krijgt."
        },
        {
          "minutes": 4,
          "log": "Noteer: lobkwaliteit, lage bal onder volleyhoogte, herstel na neutraliseren."
        }
      ],
      "successCriterionKpi": "Minimaal 15 van 25 exits zijn laag of hoog genoeg; maximaal 5 halfhoge ballen in de bandeja-zone.",
      "transferGame": "Tegenstander zoekt overhead. De linkshandige speler krijgt score voor elke lage bal die een volley onder schouderhoogte afdwingt.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de 90-minuten routekaart.",
      "rightHandedVariant": "n.v.t. — KNLTB 6-7 90-minutenprogramma",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-024",
      "title": "Overhead-keuze: bandeja, víbora of counterbandeja",
      "player": "linkshandige speler",
      "playerType": "advanced_90",
      "level": "advanced",
      "durationMinutes": 90,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "Niet elke hoge bal als dezelfde overhead behandelen; leren kiezen op lobkwaliteit, positie en tijd.",
      "logicalFlow": "Eerst lob lezen en net vasthouden, daarna bandeja-recovery, víbora/bandeja decision, counterbandeja en finish/freeze.",
      "exerciseIds": [
        "14",
        "05",
        "32",
        "22",
        "08"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "14",
          "title": "Lob Read → Bandeja Body → Net Hold",
          "url": "exercise.html?id=14&handedness=left"
        },
        {
          "exerciseId": "05",
          "title": "Volley - Volley - Bandeja - Forward Recovery",
          "url": "exercise.html?id=05&handedness=left"
        },
        {
          "exerciseId": "32",
          "title": "Víbora of Bandeja: overhead-keuze bij lobkwaliteit",
          "url": "exercise.html?id=32&handedness=left"
        },
        {
          "exerciseId": "22",
          "title": "Counterbandeja → Step In → Finish Window",
          "url": "exercise.html?id=22&handedness=left"
        },
        {
          "exerciseId": "08",
          "title": "Finish or Freeze - Netduel Decisions",
          "url": "exercise.html?id=08&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "14",
          "exerciseTitle": "Lob Read → Bandeja Body → Net Hold",
          "focus": "warming-up: lob read en body-bandeja"
        },
        {
          "minutes": 14,
          "exerciseId": "14",
          "exerciseTitle": "Lob Read → Bandeja Body → Net Hold",
          "focus": "bandeja body/T om net vast te houden"
        },
        {
          "minutes": 12,
          "exerciseId": "05",
          "exerciseTitle": "Volley - Volley - Bandeja - Forward Recovery",
          "focus": "volley-volley-bandeja-forward recovery"
        },
        {
          "minutes": 16,
          "exerciseId": "32",
          "exerciseTitle": "Víbora of Bandeja: overhead-keuze bij lobkwaliteit",
          "focus": "víbora of bandeja decision"
        },
        {
          "minutes": 12,
          "exerciseId": "22",
          "exerciseTitle": "Counterbandeja → Step In → Finish Window",
          "focus": "counterbandeja naar finish window"
        },
        {
          "minutes": 10,
          "exerciseId": "08",
          "exerciseTitle": "Finish or Freeze - Netduel Decisions",
          "focus": "finish or freeze na overheaddruk"
        },
        {
          "minutes": 14,
          "transfer": "overhead-keuzegame: punt mag pas eindigen na bewuste overhead-keuze en herstelactie."
        },
        {
          "minutes": 4,
          "log": "Noteer: te harde bandeja, te late recovery, verkeerde víbora-keuze."
        }
      ],
      "successCriterionKpi": "Minimaal 16 van 25 overheads hebben de juiste keuze: hold, druk, counter of finish-window; na 80% van de overheads volgt herstel naar net.",
      "transferGame": "Lob-start. linkshandige speler roept vóór de slag “bandeja”, “víbora” of “reset” en krijgt score op keuze + herstel.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de 90-minuten routekaart.",
      "rightHandedVariant": "n.v.t. — KNLTB 6-7 90-minutenprogramma",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-025",
      "title": "Linkshandige midden-dominantie: T, body en squeeze",
      "player": "linkshandige speler",
      "playerType": "advanced_90",
      "level": "advanced",
      "durationMinutes": 90,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "Het linkshandige voordeel op rechts benutten door midden/T/body bewust te domineren met forehand en volley.",
      "logicalFlow": "Van forehand midden-lock naar volleycombo’s, backhand lock, cross-body-DTL, freeze/angle en duo-middenafspraken.",
      "exerciseIds": [
        "35",
        "07",
        "19",
        "09",
        "24",
        "36"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "35",
          "title": "Forehand door Midden: linkshandige druk op T/body",
          "url": "exercise.html?id=35&handedness=left"
        },
        {
          "exerciseId": "07",
          "title": "Forehand and Backhand Volley Combos",
          "url": "exercise.html?id=07&handedness=left"
        },
        {
          "exerciseId": "19",
          "title": "Backhand Volley Lock → Middle Squeeze",
          "url": "exercise.html?id=19&handedness=left"
        },
        {
          "exerciseId": "09",
          "title": "Cross - Body - DTL",
          "url": "exercise.html?id=09&handedness=left"
        },
        {
          "exerciseId": "24",
          "title": "Freeze Volley → Angle Open → Finish",
          "url": "exercise.html?id=24&handedness=left"
        },
        {
          "exerciseId": "36",
          "title": "Middenbal-afspraken: rechtshandig links + linkshandig rechts",
          "url": "exercise.html?id=36&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "35",
          "exerciseTitle": "Forehand door Midden: linkshandige druk op T/body",
          "focus": "warming-up: forehand door midden en T/body-richting"
        },
        {
          "minutes": 14,
          "exerciseId": "35",
          "exerciseTitle": "Forehand door Midden: linkshandige druk op T/body",
          "focus": "linkshandige forehand midden-lock"
        },
        {
          "minutes": 12,
          "exerciseId": "07",
          "exerciseTitle": "Forehand and Backhand Volley Combos",
          "focus": "forehand/backhand volleycombinaties"
        },
        {
          "minutes": 12,
          "exerciseId": "19",
          "exerciseTitle": "Backhand Volley Lock → Middle Squeeze",
          "focus": "backhand volley lock naar middle squeeze"
        },
        {
          "minutes": 12,
          "exerciseId": "09",
          "exerciseTitle": "Cross - Body - DTL",
          "focus": "cross-body-DTL als keuze, niet als reflex"
        },
        {
          "minutes": 10,
          "exerciseId": "24",
          "exerciseTitle": "Freeze Volley → Angle Open → Finish",
          "focus": "freeze volley en angle openen"
        },
        {
          "minutes": 8,
          "exerciseId": "36",
          "exerciseTitle": "Middenbal-afspraken: rechtshandig links + linkshandig rechts",
          "focus": "middenbal-afspraken binnen righty/lefty-teamlogica"
        },
        {
          "minutes": 10,
          "transfer": "netdrukgame: scoren via midden eerst, daarna pas angle/finish."
        },
        {
          "minutes": 4,
          "log": "Noteer: welke middenbal is van linkshandige speler, welke van partner, waar valt de eerste twijfel?"
        }
      ],
      "successCriterionKpi": "Minimaal 18 van 30 netballen hebben duidelijke intentie: T, body, squeeze, freeze of open angle.",
      "transferGame": "Netduel waarin De linkshandige speler alleen mag versnellen nadat de speler eerst midden/body heeft vastgezet.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de 90-minuten routekaart.",
      "rightHandedVariant": "n.v.t. — KNLTB 6-7 90-minutenprogramma",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-026",
      "title": "Netdruk met touch: freeze, dejada en finish",
      "player": "linkshandige speler",
      "playerType": "advanced_90",
      "level": "advanced",
      "durationMinutes": 90,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "Vanaf net niet alleen hard of diep spelen, maar afwisselen tussen vastzetten, angle openen, drop volley en finish.",
      "logicalFlow": "Volleybasis naar freeze, daarna drop volley/dejada, daarna finish-or-freeze, afgesloten met scoreborddruk.",
      "exerciseIds": [
        "07",
        "24",
        "33",
        "08",
        "38"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "07",
          "title": "Forehand and Backhand Volley Combos",
          "url": "exercise.html?id=07&handedness=left"
        },
        {
          "exerciseId": "24",
          "title": "Freeze Volley → Angle Open → Finish",
          "url": "exercise.html?id=24&handedness=left"
        },
        {
          "exerciseId": "33",
          "title": "Drop Volley / Dejada: zacht afmaken na netdruk",
          "url": "exercise.html?id=33&handedness=left"
        },
        {
          "exerciseId": "08",
          "title": "Finish or Freeze - Netduel Decisions",
          "url": "exercise.html?id=08&handedness=left"
        },
        {
          "exerciseId": "38",
          "title": "Golden Point Druk: keuzevastheid onder scorebordstress",
          "url": "exercise.html?id=38&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "07",
          "exerciseTitle": "Forehand and Backhand Volley Combos",
          "focus": "warming-up: volleycontrole links/rechts"
        },
        {
          "minutes": 14,
          "exerciseId": "07",
          "exerciseTitle": "Forehand and Backhand Volley Combos",
          "focus": "forehand/backhand volleycombo’s met richting"
        },
        {
          "minutes": 14,
          "exerciseId": "24",
          "exerciseTitle": "Freeze Volley → Angle Open → Finish",
          "focus": "freeze volley → angle open → finish"
        },
        {
          "minutes": 16,
          "exerciseId": "33",
          "exerciseTitle": "Drop Volley / Dejada: zacht afmaken na netdruk",
          "focus": "drop volley/dejada na netdominantie"
        },
        {
          "minutes": 12,
          "exerciseId": "08",
          "exerciseTitle": "Finish or Freeze - Netduel Decisions",
          "focus": "finish or freeze decision"
        },
        {
          "minutes": 8,
          "exerciseId": "38",
          "exerciseTitle": "Golden Point Druk: keuzevastheid onder scorebordstress",
          "focus": "scoreborddruk op zachte bal: geen cadeau-drop"
        },
        {
          "minutes": 14,
          "transfer": "netduel met verplichte opbouw: vastzetten → openen → afmaken of zacht leggen."
        },
        {
          "minutes": 4,
          "log": "Noteer: te vroege drops, balhoogte, herstel na korte bal."
        }
      ],
      "successCriterionKpi": "Minimaal 10 succesvolle zachte keuzes uit 20; drop/dejada mag alleen na echte netdruk of open ruimte.",
      "transferGame": "Netduel tot 11. De linkshandige speler krijgt extra punt als de speler eerst freeze of body speelt en daarna pas dejada/finish kiest.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de 90-minuten routekaart.",
      "rightHandedVariant": "n.v.t. — KNLTB 6-7 90-minutenprogramma",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-027",
      "title": "Eerste drie ballen: serve, return en ball 3 met plan",
      "player": "linkshandige speler",
      "playerType": "advanced_90",
      "level": "advanced",
      "durationMinutes": 90,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "De rally vanaf de start sturen: serve wide, return deep/body, ball 3 en positievoordeel.",
      "logicalFlow": "Serve wide + ball 3, bestaande serve-plan, return-deep doorstappen, body-block, en middenbalafspraken.",
      "exerciseIds": [
        "37",
        "18",
        "03",
        "15",
        "36"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "37",
          "title": "Serve Wide + Ball 3: eerste drie ballen met plan",
          "url": "exercise.html?id=37&handedness=left"
        },
        {
          "exerciseId": "18",
          "title": "Serve + Ball 3 Plan Right Side",
          "url": "exercise.html?id=18&handedness=left"
        },
        {
          "exerciseId": "03",
          "title": "Return Deep - Doorstappen - Net Volley",
          "url": "exercise.html?id=03&handedness=left"
        },
        {
          "exerciseId": "15",
          "title": "Return Body Block → Deep Middle → Close Middle",
          "url": "exercise.html?id=15&handedness=left"
        },
        {
          "exerciseId": "36",
          "title": "Middenbal-afspraken: rechtshandig links + linkshandig rechts",
          "url": "exercise.html?id=36&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "37",
          "exerciseTitle": "Serve Wide + Ball 3: eerste drie ballen met plan",
          "focus": "warming-up: serve wide patroon zonder haast"
        },
        {
          "minutes": 16,
          "exerciseId": "37",
          "exerciseTitle": "Serve Wide + Ball 3: eerste drie ballen met plan",
          "focus": "serve wide + ball 3 als linkshandige speler"
        },
        {
          "minutes": 12,
          "exerciseId": "18",
          "exerciseTitle": "Serve + Ball 3 Plan Right Side",
          "focus": "serve + ball 3 plan right side"
        },
        {
          "minutes": 14,
          "exerciseId": "03",
          "exerciseTitle": "Return Deep - Doorstappen - Net Volley",
          "focus": "return deep → doorstappen → net volley"
        },
        {
          "minutes": 12,
          "exerciseId": "15",
          "exerciseTitle": "Return Body Block → Deep Middle → Close Middle",
          "focus": "return body block → deep middle → close middle"
        },
        {
          "minutes": 8,
          "exerciseId": "36",
          "exerciseTitle": "Middenbal-afspraken: rechtshandig links + linkshandig rechts",
          "focus": "middenbal-afspraken na return/serve"
        },
        {
          "minutes": 16,
          "transfer": "first-five game: alleen eerste vijf ballen spelen, daarna positievoordeel scoren."
        },
        {
          "minutes": 4,
          "log": "Noteer: serve-richting, ball-3 keuze, te vroeg naar net of te laat sluiten."
        }
      ],
      "successCriterionKpi": "In 70% van de reeksen staat linkshandige speler na bal 3 of 4 in minstens neutrale positie; minimaal 12 goede ball-3 keuzes.",
      "transferGame": "Speel alleen de eerste vijf ballen van elk punt. Daarna stoppen en scoren op positievoordeel.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de 90-minuten routekaart.",
      "rightHandedVariant": "n.v.t. — KNLTB 6-7 90-minutenprogramma",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-028",
      "title": "Corner & double glass: uit de hoek naar neutraal",
      "player": "linkshandige speler",
      "playerType": "advanced_90",
      "level": "advanced",
      "durationMinutes": 90,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "Moeilijke hoek- en dubbelglasballen niet overhaasten, maar eerst neutraal worden en daarna pas initiatief zoeken.",
      "logicalFlow": "Corner defense, double glass escape, low T reset, defense to neutral, body defense en random decision.",
      "exerciseIds": [
        "16",
        "21",
        "26",
        "39",
        "23",
        "29"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "16",
          "title": "Corner Defense: Reset, T-Ball or Chiquita",
          "url": "exercise.html?id=16&handedness=left"
        },
        {
          "exerciseId": "21",
          "title": "Double Glass Escape → Slow Rebuild",
          "url": "exercise.html?id=21&handedness=left"
        },
        {
          "exerciseId": "26",
          "title": "Corner Defense → Low T Reset",
          "url": "exercise.html?id=26&handedness=left"
        },
        {
          "exerciseId": "39",
          "title": "Defense to Neutral: van overleven naar neutraal zonder forceren",
          "url": "exercise.html?id=39&handedness=left"
        },
        {
          "exerciseId": "23",
          "title": "Body Defense → Open Space Cross",
          "url": "exercise.html?id=23&handedness=left"
        },
        {
          "exerciseId": "29",
          "title": "Random Defense Decision: Lob, Body, T or Chiquita",
          "url": "exercise.html?id=29&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "16",
          "exerciseTitle": "Corner Defense: Reset, T-Ball or Chiquita",
          "focus": "warming-up: corner decision zonder paniek"
        },
        {
          "minutes": 14,
          "exerciseId": "16",
          "exerciseTitle": "Corner Defense: Reset, T-Ball or Chiquita",
          "focus": "corner defense: reset, T-ball of chiquita"
        },
        {
          "minutes": 14,
          "exerciseId": "21",
          "exerciseTitle": "Double Glass Escape → Slow Rebuild",
          "focus": "double glass escape naar slow rebuild"
        },
        {
          "minutes": 12,
          "exerciseId": "26",
          "exerciseTitle": "Corner Defense → Low T Reset",
          "focus": "corner defense naar low T reset"
        },
        {
          "minutes": 12,
          "exerciseId": "39",
          "exerciseTitle": "Defense to Neutral: van overleven naar neutraal zonder forceren",
          "focus": "defense to neutral"
        },
        {
          "minutes": 10,
          "exerciseId": "23",
          "exerciseTitle": "Body Defense → Open Space Cross",
          "focus": "body defense naar open space cross"
        },
        {
          "minutes": 6,
          "exerciseId": "29",
          "exerciseTitle": "Random Defense Decision: Lob, Body, T or Chiquita",
          "focus": "random defense als vermoeidheidsblok"
        },
        {
          "minutes": 10,
          "transfer": "corner-startpunten: binnen drie ballen neutraal of beter."
        },
        {
          "minutes": 4,
          "log": "Noteer: panieklob, bal naast/achter lichaam, herstel naar T."
        }
      ],
      "successCriterionKpi": "Minimaal 20 van 30 hoek/dubbelglasballen komen speelbaar terug; minimaal 12 keer is de herstelpositie correct na de bal.",
      "transferGame": "Startpunt in de hoek. Score als linkshandige speler binnen drie ballen van overleven naar neutraal komt.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de 90-minuten routekaart.",
      "rightHandedVariant": "n.v.t. — KNLTB 6-7 90-minutenprogramma",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-029",
      "title": "Defense to counter: van bodydruk naar instappen",
      "player": "linkshandige speler",
      "playerType": "advanced_90",
      "level": "advanced",
      "durationMinutes": 90,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "Onder druk op lichaam/backhand niet alleen blokkeren, maar ruimte openen en een gecontroleerd vervolg kiezen.",
      "logicalFlow": "Body jam, backhand under pressure, body defense naar open space, bajada decision en chiquita/eerste volley.",
      "exerciseIds": [
        "27",
        "12",
        "23",
        "31",
        "34",
        "08"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "27",
          "title": "Body Jam from Defense",
          "url": "exercise.html?id=27&handedness=left"
        },
        {
          "exerciseId": "12",
          "title": "Backhand Under Pressure - Counter Cycle",
          "url": "exercise.html?id=12&handedness=left"
        },
        {
          "exerciseId": "23",
          "title": "Body Defense → Open Space Cross",
          "url": "exercise.html?id=23&handedness=left"
        },
        {
          "exerciseId": "31",
          "title": "Bajada Decision: rood, oranje of groen uit achterglas",
          "url": "exercise.html?id=31&handedness=left"
        },
        {
          "exerciseId": "34",
          "title": "Chiquita + Eerste Volley: laag instappen zonder haast",
          "url": "exercise.html?id=34&handedness=left"
        },
        {
          "exerciseId": "08",
          "title": "Finish or Freeze - Netduel Decisions",
          "url": "exercise.html?id=08&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "27",
          "exerciseTitle": "Body Jam from Defense",
          "focus": "warming-up: body jam met korte compacte swing"
        },
        {
          "minutes": 12,
          "exerciseId": "27",
          "exerciseTitle": "Body Jam from Defense",
          "focus": "body jam from defense"
        },
        {
          "minutes": 14,
          "exerciseId": "12",
          "exerciseTitle": "Backhand Under Pressure - Counter Cycle",
          "focus": "backhand under pressure counter cycle"
        },
        {
          "minutes": 12,
          "exerciseId": "23",
          "exerciseTitle": "Body Defense → Open Space Cross",
          "focus": "body defense naar open space cross"
        },
        {
          "minutes": 14,
          "exerciseId": "31",
          "exerciseTitle": "Bajada Decision: rood, oranje of groen uit achterglas",
          "focus": "decision: rood/oranje/groen na druk"
        },
        {
          "minutes": 10,
          "exerciseId": "34",
          "exerciseTitle": "Chiquita + Eerste Volley: laag instappen zonder haast",
          "focus": "chiquita + eerste volley wanneer groen echt groen is"
        },
        {
          "minutes": 6,
          "exerciseId": "08",
          "exerciseTitle": "Finish or Freeze - Netduel Decisions",
          "focus": "finish/freeze alleen na positievoordeel"
        },
        {
          "minutes": 10,
          "transfer": "bodydruk-game: punt telt als linkshandige speler eerst ruimte opent voordat de speler versnelt."
        },
        {
          "minutes": 4,
          "log": "Noteer: blokkeren zonder doel, te snelle counter, herstel na open cross."
        }
      ],
      "successCriterionKpi": "Minimaal 15 van 25 verdedigende ballen worden niet teruggelegd in het racket; minimaal 8 succesvolle step-in momenten.",
      "transferGame": "Tegenstander speelt bewust body/backhand. De linkshandige speler scoort extra als de speler eerst neutraliseert en daarna pas countert.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de 90-minuten routekaart.",
      "rightHandedVariant": "n.v.t. — KNLTB 6-7 90-minutenprogramma",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    },
    {
      "id": "TP-030",
      "title": "Match simulation: random, scoreborddruk en keuzevastheid",
      "player": "linkshandige speler",
      "playerType": "advanced_90",
      "level": "advanced",
      "durationMinutes": 90,
      "handedness": "left-handed",
      "exerciseUrlParam": "handedness=left",
      "padelShooterSide": "Padel Studio - Links",
      "goal": "Alle KNLTB 6-7e bouwstenen onder wedstrijdruis combineren: defense, overhead, midden, touch en scoreborddruk.",
      "logicalFlow": "Random defense, golden point pressure, overhead decision, midden-dominantie, drop/finish en laatste transfergame.",
      "exerciseIds": [
        "29",
        "38",
        "32",
        "35",
        "33",
        "08"
      ],
      "exerciseLinks": [
        {
          "exerciseId": "29",
          "title": "Random Defense Decision: Lob, Body, T or Chiquita",
          "url": "exercise.html?id=29&handedness=left"
        },
        {
          "exerciseId": "38",
          "title": "Golden Point Druk: keuzevastheid onder scorebordstress",
          "url": "exercise.html?id=38&handedness=left"
        },
        {
          "exerciseId": "32",
          "title": "Víbora of Bandeja: overhead-keuze bij lobkwaliteit",
          "url": "exercise.html?id=32&handedness=left"
        },
        {
          "exerciseId": "35",
          "title": "Forehand door Midden: linkshandige druk op T/body",
          "url": "exercise.html?id=35&handedness=left"
        },
        {
          "exerciseId": "33",
          "title": "Drop Volley / Dejada: zacht afmaken na netdruk",
          "url": "exercise.html?id=33&handedness=left"
        },
        {
          "exerciseId": "08",
          "title": "Finish or Freeze - Netduel Decisions",
          "url": "exercise.html?id=08&handedness=left"
        }
      ],
      "blocks": [
        {
          "minutes": 8,
          "exerciseId": "29",
          "exerciseTitle": "Random Defense Decision: Lob, Body, T or Chiquita",
          "focus": "warming-up: random defense op 70% intensiteit"
        },
        {
          "minutes": 14,
          "exerciseId": "29",
          "exerciseTitle": "Random Defense Decision: Lob, Body, T or Chiquita",
          "focus": "random defense decision: lob/body/T/chiquita"
        },
        {
          "minutes": 14,
          "exerciseId": "38",
          "exerciseTitle": "Golden Point Druk: keuzevastheid onder scorebordstress",
          "focus": "golden point druk: keuzevastheid onder scorebordstress"
        },
        {
          "minutes": 12,
          "exerciseId": "32",
          "exerciseTitle": "Víbora of Bandeja: overhead-keuze bij lobkwaliteit",
          "focus": "overhead-keuze onder vermoeidheid"
        },
        {
          "minutes": 12,
          "exerciseId": "35",
          "exerciseTitle": "Forehand door Midden: linkshandige druk op T/body",
          "focus": "linkshandige midden-dominantie als veilige drukroute"
        },
        {
          "minutes": 10,
          "exerciseId": "33",
          "exerciseTitle": "Drop Volley / Dejada: zacht afmaken na netdruk",
          "focus": "drop/dejada alleen na duidelijke netdominantie"
        },
        {
          "minutes": 6,
          "exerciseId": "08",
          "exerciseTitle": "Finish or Freeze - Netduel Decisions",
          "focus": "finish/freeze slotbeslissing"
        },
        {
          "minutes": 10,
          "transfer": "tiebreak-simulatie tot 7 met verplichte scenario-starts."
        },
        {
          "minutes": 4,
          "log": "Noteer: beste keuze onder druk, slechtste reflex, herhaalprogramma voor volgende week."
        }
      ],
      "successCriterionKpi": "Minimaal 65% juiste keuzes onder random/scoreborddruk; minder dan 4 directe fouten op ballen die eerst geneutraliseerd hadden moeten worden.",
      "transferGame": "Tiebreak tot 7 met vaste startscenario’s: achterglas, lob op linkshandige speler, netduel, bodydruk en golden point.",
      "coachNote": "Gebruik de oefeningdetailpagina’s voor exacte uitvoering, PadelShooter-instellingen, scoring en volledige uitwerking. Dit programma is de 90-minuten routekaart.",
      "rightHandedVariant": "n.v.t. — KNLTB 6-7 90-minutenprogramma",
      "leftHandedVariant": "Linkshandig, KNLTB 6-7, speelt rechts, Padel Studio - Links"
    }
  ]
};
