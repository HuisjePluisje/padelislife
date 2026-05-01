(function () {
  const data = window.TRAINING_PROGRAMS_DATA;
  if (!data || !Array.isArray(data.programs)) {
    return;
  }

  const knltbById = {
    "TP-001": "KNLTB 8-9",
    "TP-002": "KNLTB 8-9",
    "TP-003": "KNLTB 8-9",
    "TP-004": "KNLTB 8-9",
    "TP-005": "KNLTB 8-9",
    "TP-006": "KNLTB 8-9",
    "TP-007": "KNLTB 8-9",
    "TP-008": "KNLTB 8-9",
    "TP-009": "KNLTB 8-9",
    "TP-010": "KNLTB 8-9",
    "TP-011": "KNLTB 7-8",
    "TP-012": "KNLTB 7-8",
    "TP-013": "KNLTB 7-8",
    "TP-014": "KNLTB 6-7",
    "TP-015": "KNLTB 6-7",
    "TP-016": "KNLTB 6-7",
    "TP-017": "KNLTB 7-8",
    "TP-018": "KNLTB 7-8",
    "TP-019": "KNLTB 6-7",
    "TP-020": "KNLTB 6-7",
    "TP-021": "KNLTB 6-7",
    "TP-022": "KNLTB 6-7",
    "TP-023": "KNLTB 6-7",
    "TP-024": "KNLTB 6-7",
    "TP-025": "KNLTB 6-7",
    "TP-026": "KNLTB 6-7",
    "TP-027": "KNLTB 6-7",
    "TP-028": "KNLTB 6-7",
    "TP-029": "KNLTB 6-7",
    "TP-030": "KNLTB 6-7"
  };

  const themeById = {
    "TP-001": "Achterglas",
    "TP-002": "Laag verdedigen zonder automatische lob",
    "TP-003": "Serve + eerste drie ballen",
    "TP-004": "Achterglas",
    "TP-005": "Netspel",
    "TP-006": "Achterglas",
    "TP-007": "Laag verdedigen zonder automatische lob",
    "TP-008": "Chiquita & doorstappen",
    "TP-009": "Serve + eerste drie ballen",
    "TP-010": "Wedstrijdmix",
    "TP-011": "Laag verdedigen zonder automatische lob",
    "TP-012": "Achterglas",
    "TP-013": "Chiquita & doorstappen",
    "TP-014": "Laag verdedigen zonder automatische lob",
    "TP-015": "Bandeja / víbora",
    "TP-016": "Netspel",
    "TP-017": "Netspel",
    "TP-018": "Serve + eerste drie ballen",
    "TP-019": "Achterglas",
    "TP-020": "Wedstrijdmix",
    "TP-021": "Achterglas",
    "TP-022": "Achterglas",
    "TP-023": "Laag verdedigen zonder automatische lob",
    "TP-024": "Bandeja / víbora",
    "TP-025": "Netspel",
    "TP-026": "Netspel",
    "TP-027": "Serve + eerste drie ballen",
    "TP-028": "Achterglas",
    "TP-029": "Laag verdedigen zonder automatische lob",
    "TP-030": "Wedstrijdmix"
  };

  const themeContent = {
    "Achterglas": {
      situation:
        "De rally start diep achterin, vaak via het achterglas of vanuit de hoek. Je eerste taak is niet winnen, maar weer controle krijgen over richting, hoogte en herstelpositie.",
      why:
        "Deze route is bedoeld voor spelers die te snel willen oplossen vanuit achterglas. Je traint eerst neutraal worden, daarna pas de keuze tussen reset, lage uitweg of gecontroleerde aanval.",
      shotSelection:
        "Eerst een herkenbare glasbal, daarna herhaalde druk op dezelfde zone en pas daarna een bal waarop je moet kiezen tussen herstellen, laag uitspelen of doorstappen.",
      transferTitle: "Uit de hoek naar neutraal",
      transferStart: "De bal start diep in de hoek of via het achterglas.",
      transferRule:
        "Kom eerst terug naar een speelbare neutrale bal voordat je versnelt. Alleen als de bal echt groen wordt, mag je daarna druk opbouwen.",
      transferExtra:
        "Je binnen drie ballen neutraal of beter bent én je vervolgpositie klopt.",
      transferBad:
        "Je panieklob of halfhoge middenbal geeft, of je vanuit achterglas al probeert te forceren.",
      transferEval: "Kreeg je eerst rust in het punt, of wilde je te snel naar aanval?",
      mentalFocus:
        "Eerst lezen, dan slaan. Een glasbal hoeft niet mooi te zijn, maar moet wel het volgende probleem kleiner maken.",
      scoreboardRule:
        "Op 30-30, deuce of golden point geen aanval uit twijfel. Eerst neutraal of laag veilig terug naar een zone die de tegenstander niet direct laat afmaken.",
      evaluationQuestions: [
        "Wanneer wilde je vanuit achterglas te vroeg aanvallen?",
        "Welke bal werd te hoog, te kort of te voorspelbaar?",
        "Wanneer koos je goed voor reset of lage uitweg?"
      ]
    },
    "Laag verdedigen zonder automatische lob": {
      situation:
        "Je staat onder druk achterin, maar niet elke moeilijke bal vraagt om een lob. Zodra je redelijk in balans bent, kan laag verdedigen slimmer zijn: door de T, op het lichaam of naar de voeten.",
      why:
        "Deze route breekt de reflex dat verdedigen automatisch hoog spelen betekent. Tegen goede bandeja- of víbora-spelers is een halfhoge lob vaak juist een uitnodiging.",
      shotSelection:
        "De ballen bouwen op van druk naar keuze: eerst een verdedigende bal, dan herhaalde of verdiepte druk, en daarna een moment waarop je bewust kiest tussen hoog resetten of laag verdedigen.",
      transferTitle: "Laag blijven onder druk",
      transferStart: "De bal start diep in de hoek of via het achterglas.",
      transferRule:
        "Je mag alleen lobben als de lob echt hoog én diep genoeg kan worden gespeeld. Als dat niet kan, speel je laag door de T, op het lichaam of naar de voeten.",
      transferExtra:
        "Je lage bal de netspeler onder volleyhoogte laat spelen en jij daarna positie herstelt.",
      transferBad:
        "Een halfhoge of korte lob in de bandeja-zone speelt, ook als die bal toevallig binnen valt.",
      transferEval: "Was de lob echt nodig, of kon je laag verdedigen?",
      mentalFocus:
        "Niet automatisch reageren met een lob. Eerst voelen of de bal rood, oranje of groen is en pas dan de juiste hoogte kiezen.",
      scoreboardRule:
        "Onder scoreborddruk geen veilige schijn-lob spelen. Liever compact laag terug naar T, lichaam of voeten dan een voorspelbare overheadbal weggeven.",
      evaluationQuestions: [
        "Welke keuze voelde vandaag te automatisch?",
        "Wanneer koos je bewust laag in plaats van hoog?",
        "Gaf je de tegenstander comfort of moest hij onder volleyhoogte werken?"
      ]
    },
    "Chiquita & doorstappen": {
      situation:
        "Je krijgt een werkbare bal vanuit achterin of middenveld. De kans zit niet alleen in de chiquita zelf, maar vooral in de eerste stap erna en de controle op de eerste volley.",
      why:
        "Veel spelers spelen wel een lage bal, maar winnen daarna geen positie. Deze route maakt de overgang van chiquita naar doorstappen en eerste volley concreet.",
      shotSelection:
        "Eerst een controlebal, daarna een lage bal naar de voeten en vervolgens een bevestigingsbal waarop je test of de speler ook echt vooruitgaat of juist blijft kijken.",
      transferTitle: "Chiquita met eerste stap",
      transferStart: "De bal start vanuit achterin of middenveld. Je krijgt één bal waarop je controle hebt.",
      transferRule:
        "Speel alleen chiquita als je balans hebt. Na een goede chiquita maak je direct de eerste stap naar voren.",
      transferExtra:
        "De chiquita laag naar de voeten gaat én je eerste stap vooruit klopt.",
      transferBad:
        "Chiquita speelt en blijft kijken. Of een chiquita forceert vanuit een rode situatie.",
      transferEval: "Was dit echt een groene bal, of wilde je te vroeg aanvallen?",
      mentalFocus:
        "Een chiquita is geen trucje. Hij is pas goed als je hem koppelt aan positie, timing en een rustige eerste volley.",
      scoreboardRule:
        "Op belangrijke punten alleen chiquita als de bal echt werkbaar is. Anders kies je voor diepte, lichaam of reset.",
      evaluationQuestions: [
        "Wanneer stapte je goed door na een lage bal?",
        "Waar bleef je kijken in plaats van aansluiten?",
        "Was je eerste volley controle of haast?"
      ]
    },
    "Netspel": {
      situation:
        "Je hebt het net en moet het punt opbouwen zonder direct te willen afmaken. De eerste vraag is niet of je kunt finishen, maar of je de tegenstander klein kunt houden.",
      why:
        "Veel netspel wordt zwak doordat de eerste volley al als winner wordt behandeld. Deze route leert controle, druk en finish van elkaar onderscheiden.",
      shotSelection:
        "Eerst controlevolley of vaste netbal, daarna herhaalde druk en pas daarna een moment waarop openen, dejada of finish logisch wordt.",
      transferTitle: "Net vasthouden",
      transferStart: "Je begint aan het net. De eerste bal is een volley- of bandeja-situatie.",
      transferRule:
        "Je probeert het net vast te houden zonder direct de winnaar te zoeken. Speel eerst diep of op het lichaam. Pas openen of afmaken als de bal echt kort of kwetsbaar wordt.",
      transferExtra:
        "Je drie ballen lang netpositie houdt zonder te forceren.",
      transferBad:
        "Te vroeg versnelt of een lage bal toch hard wil afmaken.",
      transferEval: "Heb je het punt opgebouwd, of probeerde je te vroeg te winnen?",
      mentalFocus:
        "Netdruk is vaak rustig en volwassen. Eerst vastzetten, daarna pas openen.",
      scoreboardRule:
        "Op scorebordpunten is een goede eerste volley bijna altijd beter dan een spectaculaire eerste volley.",
      evaluationQuestions: [
        "Wanneer probeerde je te vroeg te winnen?",
        "Welke bal mocht nog gewoon controle zijn?",
        "Waar won je juist controle zonder direct het punt te winnen?"
      ]
    },
    "Bandeja / víbora": {
      situation:
        "De tegenstander lobt en jij moet kiezen of deze overhead bedoeld is om het net te houden, druk te zetten of te resetten.",
      why:
        "Bandeja en víbora worden vaak vanuit techniek gedacht. Deze route dwingt de keuze terug naar situatie, diepte van de lob en herstel naar het net.",
      shotSelection:
        "Eerst een diepe lob waarop netbehoud logisch is, daarna een kortere of halfhoge bal waarop je bewust kiest tussen bandeja, víbora of een gecontroleerde tegenbal.",
      transferTitle: "Verdedigen tegen bandeja",
      transferStart:
        "De rally start met een verdedigende bal vanuit achterin. De tegenstander, trainer of machine geeft daarna een bandeja-achtige bal terug.",
      transferRule:
        "Je eerste taak is niet winnen, maar de overhead neutraliseren of er zelf de juiste overheadkeuze aan koppelen. Speel laag, compact en gecontroleerd terug of houd het net met de juiste overhead.",
      transferExtra:
        "Na de overhead of tegen-overhead laag genoeg blijft om de tegenstander onder volleyhoogte te laten werken of zelf het net houdt.",
      transferBad:
        "Automatisch opnieuw lobt zonder hoogte of diepte, of een te harde overhead kiest uit een matige positie.",
      transferEval: "Kreeg de tegenstander comfort, of moest hij onder volleyhoogte werken?",
      mentalFocus:
        "Diepe lob is vaak netbehoud. Kortere lob kan druk worden. Niet elke overhead is een aanvalskans.",
      scoreboardRule:
        "Op belangrijke punten liever een volwassen bandeja om het net te houden dan een te gretige víbora die je uit positie trekt.",
      evaluationQuestions: [
        "Was de gekozen overhead logisch voor de diepte van de lob?",
        "Waar verloor je onnodig netpositie na contact?",
        "Wanneer hield je goed druk zonder te forceren?"
      ]
    },
    "Serve + eerste drie ballen": {
      situation:
        "Het punt start met service of return. De training draait om de eerste drie ballen en de vraag of je vervolgplan klopt.",
      why:
        "Veel spelers hebben wel een redelijke service of return, maar geen idee wat bal twee en drie daarna moeten doen. Deze route zet de opening van het punt op rails.",
      shotSelection:
        "De eerste bal opent, de tweede bal bevestigt de richting en de derde bal test of je het patroon vasthoudt of te vroeg forceert.",
      transferTitle: "Eerste drie ballen",
      transferStart: "Het punt start met service of return.",
      transferRule:
        "De eerste drie ballen moeten een logisch patroon vormen. Bijvoorbeeld: service naar glas of lichaam, eerste volley diep of op het lichaam, derde bal niet forceren maar positie vasthouden.",
      transferExtra:
        "De derde bal past bij de eerste twee ballen.",
      transferBad:
        "Na een goede eerste bal meteen een te moeilijke winnaar zoeken.",
      transferEval: "Had je een plan na de service of return?",
      mentalFocus:
        "De opening van het punt hoeft niet spectaculair te zijn. Wel duidelijk, diep genoeg en gekoppeld aan bal drie.",
      scoreboardRule:
        "Op scorebordpunten geen gratis fout in de eerste drie ballen. Liever een volwassen body- of middenbal dan een hero-shot.",
      evaluationQuestions: [
        "Had je een vervolgplan na de eerste bal?",
        "Wanneer werd bal drie te ambitieus?",
        "Waar gaf je te snel initiatief weg?"
      ]
    },
    "Wedstrijdmix": {
      situation:
        "Je combineert meerdere rallyproblemen in één sessie en test of je keuzes overeind blijven zodra de situatie wisselt of de score druk toevoegt.",
      why:
        "Deze route is bedoeld om losse trainingsblokken samen te brengen. Niet elk blok is nieuw; de waarde zit juist in het schakelen tussen patronen zonder je basis te verliezen.",
      shotSelection:
        "Van voorspelbare start naar herhaalde druk, daarna een keuze onder ruis en tenslotte een puntvorm waarin je het hoofdthema onder score of scenario-call moet terugzien.",
      transferTitle: "Wedstrijdtoepassing",
      transferStart: "Het punt start met een scenario-call, random eerste bal of tiebreak-achtige situatie.",
      transferRule:
        "Je gebruikt het hoofdprincipe van de training, niet je eerste impuls. Kies betrouwbaar voordat je probeert te forceren.",
      transferExtra:
        "Je de juiste keuze blijft herkennen wanneer score, richting of tegenstand verandert.",
      transferBad:
        "Onder lichte druk terugvalt in oude reflexen of een mooie bal boven een logische bal kiest.",
      transferEval: "Welke keuze bleef overeind en welke viel terug onder druk?",
      mentalFocus:
        "Wedstrijddruk vraagt niet om meer creativiteit, maar om een betrouwbaarder basispatroon.",
      scoreboardRule:
        "Op 30-30, deuce of golden point kies je voor het meest volwassen patroon van vandaag. Geen nieuwe dingen proberen.",
      evaluationQuestions: [
        "Welke keuze voelde vandaag te automatisch?",
        "Wanneer probeerde je te vroeg te winnen?",
        "Welke oefening moet volgende training terugkomen?"
      ]
    }
  };

  function getProfile(program) {
    if (program.handedness === "left-handed") {
      return {
        handednessLabel: "Linkshandige speler",
        playSideLabel: "Speelt rechts",
        profileSummary: `Linkshandige speler · speelt rechts · ${knltbById[program.id]}`,
        handednessParam: "left"
      };
    }

    return {
      handednessLabel: "Rechtshandige speler",
      playSideLabel: "Speelt links/rechts volgens programma",
      profileSummary: `Rechtshandige speler · ${knltbById[program.id]}`,
      handednessParam: "right"
    };
  }

  function enrichProgram(program) {
    const themeLabel = themeById[program.id] || "Wedstrijdmix";
    const exerciseLinkById = {};
    program.exerciseLinks.forEach((link) => {
      exerciseLinkById[link.exerciseId] = link;
    });

    const profile = getProfile(program);
    const exerciseBlocks = program.blocks
      .filter((block) => block.exerciseId)
      .map((block, index, list) => ({
        ...block,
        link: exerciseLinkById[block.exerciseId] || null,
        sequenceIndex: index,
        exerciseCount: list.length
      }));

    return {
      ...program,
      knltbLabel: knltbById[program.id],
      themeLabel,
      themeContent: themeContent[themeLabel],
      durationLabel: `${program.durationMinutes} minuten`,
      handednessLabel: profile.handednessLabel,
      playSideLabel: profile.playSideLabel,
      profileSummary: profile.profileSummary,
      handednessParam: profile.handednessParam,
      exerciseBlocks,
      transferBlock: program.blocks.find((block) => block.transfer) || null,
      logBlock: program.blocks.find((block) => block.log) || null
    };
  }

  const programs = data.programs.map(enrichProgram);

  window.TrainingProgramsCore = {
    programs,
    findProgramById(id) {
      return programs.find((program) => program.id === id) || null;
    }
  };
})();
