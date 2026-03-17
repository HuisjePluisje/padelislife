window.STRATEGY_TOPICS = [
  {
    slug: "aanvallen",
    title: "Aanvallen",
    eyebrow: "Hoofdstrategie 01",
    image:
      "https://images.pexels.com/photos/35646550/pexels-photo-35646550.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Aanvallen in padel is niet harder slaan, maar versnellen vanuit balans, naar een doel dat iets oplevert en met de volgende positie al in gedachten.",
    lead:
      "De kernvraag is steeds dezelfde: is deze bal echt groen, of maak je van een oranje bal stiekem een gokbal?",
    ballStates: {
      green:
        "Je bent voor de bal, stabiel en je ziet ruimte die je ook echt kunt bereiken. Dan mag tempo of richting omhoog.",
      orange:
        "Je hebt nog initiatief, maar niet genoeg vrijheid voor de kleine hoek. Dan blijft druk opbouwen slimmer dan forceren.",
      red:
        "Je valt achter de bal of uit je as. Dan is aanvallen meestal een slechte vermomming van paniek."
    },
    strokes: [
      {
        name: "Volley",
        strategy: "Gebruik de volley om laagte en richting te sturen, niet om elk contact hard af te maken."
      },
      {
        name: "Bandeja",
        strategy: "De bandeja houdt het net vast en zet druk zonder dat je je basis verliest."
      },
      {
        name: "Smash",
        strategy: "Een smash hoort alleen bij een rijpe bal. Geen automatische keuze alleen omdat de bal hoog is."
      }
    ],
    situations: [
      "Lage volley voorin zonder duidelijke open hoek.",
      "Bandeja na een diepe lob van een verdedigend team.",
      "Korte hoge lob die wel of niet echt smashbaar is.",
      "Body-aanval tegen een snelle blokker aan het net.",
      "Tweede volley na een half geslaagde netovername.",
      "Aanvallen tegen een team dat veel door het midden verdedigt."
    ],
    subtopics: [
      {
        slug: "drukbal-vs-winnerbal",
        title: "Drukbal vs winnerbal",
        summary: "Eerst de tegenstander kleiner maken, pas daarna het punt afmaken.",
        explanation:
          "Veel fouten ontstaan omdat spelers een drukmoment verwarren met een afmaakmoment. De rally win je vaak met de bal na de eerste aanval, niet met de eerste aanval zelf.",
        ballStates: {
          green: "Je mag winnerdenken als de bal rijp is en je herstel logisch blijft.",
          orange: "Speel druk, niet mooi. Body, voeten of midden zijn dan vaak beter dan lijn.",
          red: "Geen winnerlogica. Eerst uit gevaar blijven en weer positie organiseren."
        },
        strokes: ["Volley", "Bandeja", "Smash"],
        situations: [
          "Eerste volley na een goede return.",
          "Bandeja op een lob die nét niet kort genoeg is.",
          "Forehandvolley midden voor communicatiebreuk."
        ]
      },
      {
        slug: "aanvallen-op-voeten",
        title: "Aanvallen op voeten",
        summary: "Lage oplossingen forceren een moeilijke volgende bal.",
        explanation:
          "Voetenaanval werkt omdat het de tegenstander uit zijn lengte haalt. Het is vaak de meest betrouwbare manier om druk te bouwen zonder onnodig risico.",
        ballStates: {
          green: "Ideaal moment om voeten aan te spelen, zeker dicht bij het net.",
          orange: "Nog steeds bruikbaar, zolang je compact blijft en niet naar een mini-doel mikt.",
          red: "Alleen als noodsturing. Anders eerst neutraliseren."
        },
        strokes: ["Volley", "Halfvolley"],
        situations: [
          "Netduel op kniehoogte.",
          "Eerste controlevolley na doorstappen.",
          "Laag contactpunt bij de servicelijn."
        ]
      },
      {
        slug: "aanvallen-op-body",
        title: "Aanvallen op body",
        summary: "Body vermindert tijd en armruimte zonder dat je een kleine hoek hoeft te forceren.",
        explanation:
          "Bodyspel is in padel vaak slimmer dan lijnspel. Zeker tegen snelle spelers maakt het de tegenstander klein en breekt het ritme.",
        ballStates: {
          green: "Sterke keuze als je de tegenstander laat reageren in plaats van anticiperen.",
          orange: "Vaak veiliger dan hoekzoekend spel.",
          red: "Alleen compact sturen, niet nog proberen te versnellen."
        },
        strokes: ["Volley", "Vibora", "Bajada"],
        situations: [
          "Bandeja of vibora naar lichaam.",
          "Return gevolgd door drukbal naar body.",
          "Duo dat te breed uit elkaar staat."
        ]
      },
      {
        slug: "afmaken-aan-het-net",
        title: "Afmaken aan het net",
        summary: "Afmaken hoort pas na ordening, niet direct na het eerste beetje voordeel.",
        explanation:
          "Het net is een afmaakzone, maar alleen voor spelers die ook hun balans en herstel onder controle hebben. Zonder dat wordt afmaken gokken.",
        ballStates: {
          green: "Je lichaam is voor de bal en de ruimte is groot genoeg om verantwoord af te maken.",
          orange: "Nog een drukbal en het net houden is meestal beter.",
          red: "Niet afmaken. Terug naar controle."
        },
        strokes: ["Volley", "Smash"],
        situations: [
          "Tweede volley na drukopbouw.",
          "Makkelijke hoge bal dicht op het net.",
          "Open hoek na zwakke blokvolley."
        ]
      },
      {
        slug: "door-het-midden-aanvallen",
        title: "Aanvallen door het midden",
        summary: "Door het midden spelen is vaak de meest volwassen aanvalslijn.",
        explanation:
          "Middenaanval lijkt minder spectaculair, maar levert in padel vaak de hoogste kwaliteit op omdat hij communicatie breekt en je marge bewaart.",
        ballStates: {
          green: "Sterk moment om midden te kiezen wanneer beide tegenstanders compact moeten reageren.",
          orange: "Nog steeds een veilige druklijn met weinig weggeefrisico.",
          red: "Geen aanvalslijn; eerst speelbaar blijven."
        },
        strokes: ["Volley", "Drive", "Bandeja"],
        situations: [
          "Twee tegenstanders dicht bij elkaar aan het net.",
          "Eerste drukbal na service of return.",
          "Middenbal die niet rijp genoeg is voor de kleine hoek."
        ]
      },
      {
        slug: "aanvallen-op-trage-lob",
        title: "Aanvallen op een trage lob",
        summary: "Niet elke hoge bal vraagt om een smash; vaak vraagt hij om een volwassen overheadkeuze.",
        explanation:
          "Een trage lob verleidt spelers tot te veel ambitie. De goede vraag is niet of je hard kunt slaan, maar welke overhead de rally voor jouw team het best ordent.",
        ballStates: {
          green: "Je staat vroeg, onder de bal en kunt kiezen tussen behouden of afmaken.",
          orange: "Bandeja of gecontroleerde vibora houdt het punt vaak sterker dan een half-rijpe smash.",
          red: "Te laat of achter de bal betekent: geen heldenslag, alleen herstel."
        },
        strokes: ["Bandeja", "Vibora", "Smash"],
        situations: [
          "Lob die lang in de lucht hangt maar niet kort genoeg valt.",
          "Tegenstander verwacht een harde overhead.",
          "Tweede overhead in dezelfde rally."
        ]
      }
    ]
  },
  {
    slug: "verdedigen",
    title: "Verdedigen",
    eyebrow: "Hoofdstrategie 02",
    image:
      "https://images.pexels.com/photos/35248265/pexels-photo-35248265.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Verdedigen is in padel actief organiseren: tijd kopen, ruimte terugwinnen en jezelf opnieuw in de rally zetten.",
    lead:
      "Rood betekent niet verloren. Rood betekent dat de opdracht verandert: eerst speelbaar maken, dan pas terugvechten.",
    ballStates: {
      green: "Zeldzaam in defense, maar dan mag je denken aan omschakelen of counteren.",
      orange: "Je bent weer werkbaar. Dan bouw je terug naar neutraal zonder te haasten.",
      red: "Onder druk: hoogte, glasgebruik en herstel hebben voorrang."
    },
    strokes: [
      {
        name: "Lob",
        strategy: "De lob koopt tijd en verplaatst de rally. Niet mooi, maar functioneel hoog en diep."
      },
      {
        name: "Glasverdediging",
        strategy: "Laat het glas voor je werken en zie de slag als start van herstel, niet als eindpunt."
      },
      {
        name: "Blokverdediging",
        strategy: "Compact blokkeren houdt de bal speelbaar wanneer je weinig armruimte hebt."
      }
    ],
    situations: [
      "Diepe hoekbal op backglass of zijwand.",
      "Bodydruk zonder armruimte.",
      "Te korte lob waarna de tegenstander boven de bal komt.",
      "Twee netspelers die laag en compact blijven drukken.",
      "Verdedigen nadat je partner te laat terugzakt.",
      "Snelle drive naar je voeten terwijl je nog achterin hangt."
    ],
    subtopics: [
      {
        slug: "verdedigen-vanuit-de-hoek",
        title: "Verdedigen vanuit de hoek",
        summary: "Hoekverdediging begint met ruimte maken, niet met haast.",
        explanation:
          "In de hoek verliezen spelers vaak hun patroon omdat ze te snel willen reageren. De slimme oplossing is juist eerst de hoek laten werken en dan functioneel hoogte kiezen.",
        ballStates: {
          green: "Alleen groen als je echt uit de hoek bent en opnieuw voor de bal komt.",
          orange: "Werkbaar: je kunt kiezen tussen hoge reset of neutrale drive.",
          red: "Gebruik glas en hoogte. Geen heldenbal."
        },
        strokes: ["Glasverdediging", "Lob"],
        situations: [
          "Diepe bal naar backglass.",
          "Bal die achterwand en zijwand pakt.",
          "Tegenstander blijft body of midden drukken."
        ]
      },
      {
        slug: "verdedigen-op-body",
        title: "Verdedigen op body",
        summary: "Bodyverdediging draait om compactheid en vroege voorbereiding.",
        explanation:
          "Bodydruk beperkt armruimte. Dan is blokkeren of sturen vaak slimmer dan toch nog vol willen slaan.",
        ballStates: {
          green: "Groen bestaat hier alleen als de tegenstander je juist te veel tijd geeft.",
          orange: "Compact terugspelen en direct organiseren.",
          red: "Klein houden, hoog of neutraal, en uit de druk komen."
        },
        strokes: ["Blokverdediging", "Drive"],
        situations: [
          "Netspeler jaagt op je romp.",
          "Retourbal komt recht op je af.",
          "Snelle bandeja naar lichaam."
        ]
      },
      {
        slug: "slechte-lob-oplossen",
        title: "Na een slechte lob",
        summary: "Geen halve stap naar voren blijven hangen als je lob te kort is.",
        explanation:
          "Een slechte lob vraagt snelle acceptatie. Je staat niet meer in aanval, dus je moet meteen terug en compact organiseren voor de overhead die komt.",
        ballStates: {
          green: "Niet realistisch; de lob gaf het initiatief al weg.",
          orange: "Nog net werkbaar als je direct terugzakt en de volgende bal leest.",
          red: "Vol terug en compact, anders word je uit elkaar getrokken."
        },
        strokes: ["Lob", "Glasverdediging"],
        situations: [
          "Te korte resetlob op forehand-overhead.",
          "Bandeja van de tegenstander naar body.",
          "Tweede overhead achter elkaar."
        ]
      },
      {
        slug: "counter-moment",
        title: "Counter-moment herkennen",
        summary: "Na defense ontstaat soms ineens een kans om terug te slaan.",
        explanation:
          "Een counter is geen standaardreactie, maar een venster. Alleen als de bal hoger, trager of korter komt en jij weer voor de bal bent, mag je omschakelen.",
        ballStates: {
          green: "Je ziet het venster, bent op tijd en kunt initiatief nemen.",
          orange: "Nog niet counteren; eerst neutraal houden.",
          red: "Defense blijft defense. Geen geforceerde omslag."
        },
        strokes: ["Bajada", "Drive", "Lob"],
        situations: [
          "Na twee drukballen komt een hogere tussenbal.",
          "Tegenstander laat een volley te veel hangen.",
          "Lobduel waarbij jij eerder voor de bal komt."
        ]
      },
      {
        slug: "verdedigen-via-midden",
        title: "Verdedigen via midden",
        summary: "Midden is in defense vaak slimmer dan een kleine ontsnappingshoek.",
        explanation:
          "Onder druk zoeken spelers soms te vroeg de lijn of cross-hoek. Via midden houd je de rally vaak veel beter speelbaar en dwing je nog een goede bal af.",
        ballStates: {
          green: "Alleen groen als je na de verdedigende bal zelf weer initiatief kunt pakken.",
          orange: "Typische kleur voor midden-defense: veilig en bruikbaar.",
          red: "Nog steeds liever hoog of neutraal dan risico naar lijn."
        },
        strokes: ["Lob", "Drive", "Blokverdediging"],
        situations: [
          "Bodybal zonder ruimte voor volle swing.",
          "Hoekbal waarbij cross te klein voelt.",
          "Rally waarin je vooral tijd wilt kopen."
        ]
      },
      {
        slug: "wanneer-lob-vs-drive",
        title: "Wanneer lob, wanneer drive",
        summary: "De keuze tussen hoogte en lijncontrole bepaalt of je uit defense komt of erin blijft hangen.",
        explanation:
          "Veel spelers hebben wel een lob en een drive, maar niet de beslisregel ertussen. De keuze hoort te komen uit tijd, balans en de positie van de tegenstanders.",
        ballStates: {
          green: "Je kunt kiezen omdat je weer voor de bal bent en hun netpositie leest.",
          orange: "Vaak is de veilige lob of neutrale midden-drive het slimst.",
          red: "Geen drive-forcering; eerst hoogte of bruikbaarheid."
        },
        strokes: ["Lob", "Drive", "Glasverdediging"],
        situations: [
          "Bal uit de hoek met nét genoeg tijd.",
          "Tegenstander staat iets te dicht op het net.",
          "Je partner is nog niet terug in positie."
        ]
      }
    ]
  },
  {
    slug: "transitie",
    title: "Transitie",
    eyebrow: "Hoofdstrategie 03",
    image:
      "https://images.pexels.com/photos/32897040/pexels-photo-32897040.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Transitie is het gebied tussen verdedigen en aanvallen. Juist daar worden rally’s logisch of rommelig.",
    lead:
      "Niet elke overgangsbal moet spectaculair zijn. De beste transitiebal maakt de rally eerst weer bruikbaar.",
    ballStates: {
      green: "Je mag doorschuiven of druk verhogen omdat je positie het toelaat.",
      orange: "Controle met intentie. Nog geen heldenbal, wel richting.",
      red: "Eerst tijd kopen en opnieuw organiseren."
    },
    strokes: [
      {
        name: "Chiquita",
        strategy: "Een chiquita is een overgangsbal om ruimte te winnen en eventueel naar voren te bewegen."
      },
      {
        name: "Lob",
        strategy: "De lob is vaak de veiligste brug van defense naar een betere positie."
      },
      {
        name: "Controlevolley",
        strategy: "De eerste volley na overgang is meestal een landing, geen winnaar."
      }
    ],
    situations: [
      "Van achteruit terug naar servicelijn.",
      "Na een goede lob wel of niet doorstappen.",
      "Chiquita spelen tegen twee dichte netspelers.",
      "Eerste volley na herstel in mid-court.",
      "Na een hoge reset bepalen of je nog één bal nodig hebt.",
      "Overgang van oranje naar groen zonder ongeduld."
    ],
    subtopics: [
      {
        slug: "net-terugpakken",
        title: "Het net terugpakken",
        summary: "Net terugpakken doe je via tijd, laagte of geduld, niet via haast.",
        explanation:
          "De meeste spelers lopen te vroeg naar voren. Een geslaagde netovername begint met een bal die je ook echt de tijd geeft om te bewegen.",
        ballStates: {
          green: "Je hebt tijd en de tegenstander moet omhoog of achteruit spelen.",
          orange: "Nog even bouwen. Eerst een overgangsbal, dan pas verder.",
          red: "Niet lopen. Eerst de rally stabiliseren."
        },
        strokes: ["Lob", "Chiquita", "Controlevolley"],
        situations: [
          "Diepe lob waarna tegenstander achteruit moet.",
          "Chiquita onder servicelijn waarna je kunt volgen.",
          "Zwakkere volley uitgelokt door geduld."
        ]
      },
      {
        slug: "de-chiquita",
        title: "De chiquita",
        summary: "Slim als overgangsbal, slecht als paniekbal.",
        explanation:
          "De chiquita werkt alleen als je voldoende tijd hebt, laag kunt blijven en weet wat je erna wilt doen. Anders wordt hij alleen maar kort zonder functie.",
        ballStates: {
          green: "Je bent op tijd en kunt na de slag echt volgen.",
          orange: "Speel hem alleen als je nog controle over de balhoogte hebt.",
          red: "Geen chiquita. De bal is te laat of te laag."
        },
        strokes: ["Chiquita"],
        situations: [
          "Middenbal in neutrale rally.",
          "Tegenstander dicht op het net.",
          "Na een verdedigende bal net genoeg tijd gekocht."
        ]
      },
      {
        slug: "eerste-bal-na-herstel",
        title: "De eerste bal na herstel",
        summary: "De eerste bal na herstel is meestal een ordeningsbal.",
        explanation:
          "Na een moeilijke fase willen spelers meteen terugdomineren. Meestal is het slimmer om eerst positie en ritme vast te leggen met een controlebal.",
        ballStates: {
          green: "Pas groen als je lichaam echt weer voor de bal komt.",
          orange: "Typische kleur voor deze fase: controle met richting.",
          red: "Nog steeds onder druk; niet doen alsof je al vrij bent."
        },
        strokes: ["Controlevolley", "Drive"],
        situations: [
          "Eerste volley na terugpakken van servicelijn.",
          "Mid-courtbal na een hoge lob.",
          "Zachte tussenbal na hoekverdediging."
        ]
      },
      {
        slug: "tempoverandering",
        title: "Na tempoverandering opnieuw organiseren",
        summary: "Elke versnelling of vertraging vraagt een nieuwe organisatie.",
        explanation:
          "Spelers vergeten vaak dat een langzame bal of juist versnelling ook hun positie verandert. De rally blijft dus lezen en organiseren vragen.",
        ballStates: {
          green: "Je hebt de verandering zelf veroorzaakt en blijft in controle.",
          orange: "Je leest de verandering maar moet nog herordenen.",
          red: "Je bent verrast en dus eerst bezig met overleven."
        },
        strokes: ["Chiquita", "Lob", "Volley"],
        situations: [
          "Na een stopachtige lage bal.",
          "Na een diepe versnelling door midden.",
          "Na een hoge reset met veel tijd."
        ]
      },
      {
        slug: "servicelijn-als-overgangszone",
        title: "De servicelijn als overgangszone",
        summary: "Veel spelers blijven hier hangen terwijl het juist een doorgeefpunt is.",
        explanation:
          "De servicelijn is zelden een plek om lang te wonen. Je gebruikt hem als landing, meetpunt en besliszone: blijf je nog even controleren of mag je door?",
        ballStates: {
          green: "Je komt gecontroleerd aan en kunt meteen verder naar voren denken.",
          orange: "Je landt hier kort, ordent en speelt nog één bruikbare bal.",
          red: "Je bent hier beland zonder plan en wordt direct opnieuw vastgezet."
        },
        strokes: ["Controlevolley", "Drive", "Lob"],
        situations: [
          "Na een hoge lob net terug richting net.",
          "Na chiquita eerst landen, dan beslissen.",
          "Na verdedigende bal in niemandsland terechtkomen."
        ]
      },
      {
        slug: "reset-voor-je-doorstapt",
        title: "Eerst resetten, dan doorstappen",
        summary: "Naar voren lopen zonder resetlogica maakt transitie rommelig en kwetsbaar.",
        explanation:
          "De fout zit vaak niet in het lopen zelf maar in het moment. Eerst moet de bal de tegenstander iets ontnemen: tijd, hoogte of comfort. Pas dan is doorstappen logisch.",
        ballStates: {
          green: "Je reset heeft echt tijd gekocht en je volgende pas is verdiend.",
          orange: "Nog niet lopen; speel eerst nog één bruikbare overgangsbal.",
          red: "Je probeert positie te winnen zonder dat de bal dat ondersteunt."
        },
        strokes: ["Lob", "Chiquita", "Controlevolley"],
        situations: [
          "Na een hoge noodlob toch te vroeg naar voren.",
          "Na een zachte middenbal twijfel tussen blijven of gaan.",
          "Servicelijnmoment waarop nog één bal nodig is."
        ]
      }
    ]
  },
  {
    slug: "slagen",
    title: "Slagen",
    eyebrow: "Hoofdstrategie 04",
    image:
      "https://images.pexels.com/photos/36227708/pexels-photo-36227708.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Een slag krijgt pas waarde als je weet wanneer je hem gebruikt, wat het doel is en welke keuze erachter zit.",
    lead:
      "Dit is dus geen techniekbibliotheek alleen. Het is een beslisbibliotheek per slag.",
    ballStates: {
      green: "De slag mag richting of tempo geven omdat situatie en lichaam het toelaten.",
      orange: "De slag blijft functioneel en controlegericht.",
      red: "De slag wordt vooral gebruikt om in de rally te blijven of tijd te kopen."
    },
    strokes: [
      { name: "Service", strategy: "Open de rally met een plan voor bal twee." },
      { name: "Return", strategy: "Gebruik de return om de server neutraal te houden of direct uit ritme te halen." },
      { name: "Lob", strategy: "Tijd kopen of het net terugpakken." }
    ],
    situations: [
      "Servicegame starten met plan.",
      "Return onder scoredruk.",
      "Lob als reset versus lob als aanval.",
      "Bandeja kiezen in plaats van smash.",
      "Eerste volley gebruiken om te ordenen."
    ],
    subtopics: [
      {
        slug: "service-en-return",
        title: "Service en return",
        summary: "De eerste twee slagen horen bij elkaar als één beslisfase.",
        explanation:
          "Service zonder plan en return zonder vervolgpositie laten de rally direct op toeval drijven. Deze fase bepaalt vaak wie initiatief neemt.",
        ballStates: {
          green: "Je opent de rally met een duidelijk vervolgpatroon.",
          orange: "Veilige, betrouwbare start zonder het punt weg te geven.",
          red: "Alleen de rally speelbaar houden en geen gratis fouten maken."
        },
        strokes: ["Service", "Return"],
        situations: [
          "Serve plus eerste volley-plan.",
          "Diepe return door midden.",
          "Return tegen een sterke tweede bal."
        ]
      },
      {
        slug: "lob-en-reset",
        title: "Lob en reset",
        summary: "De lob is een strategische slag, geen noodgreep.",
        explanation:
          "Een goede lob verandert positie en tempo. Een slechte lob opent juist overheaddruk. Daarom hoort bij een lob altijd herstel.",
        ballStates: {
          green: "Je lob dwingt echt achteruit en geeft je tijd.",
          orange: "Bruikbaar, maar nog niet genoeg om direct te lopen.",
          red: "Te vlak of te kort; direct terug in defense."
        },
        strokes: ["Lob", "Glasverdediging"],
        situations: [
          "Resetlob uit de hoek.",
          "Aanvallende lob na neutrale bal.",
          "Lob tegen twee dichte netspelers."
        ]
      },
      {
        slug: "volley-bandeja-vibora",
        title: "Volley, bandeja en vibora",
        summary: "Drie slagen voor netbehoud en drukopbouw, elk met een ander risico-profiel.",
        explanation:
          "Een volley ordent en drukt, een bandeja behoudt, een vibora geeft extra last. Zonder die logica gaan spelers te snel naar de zwaarste optie.",
        ballStates: {
          green: "Je kiest de slag die past bij druk én herstel.",
          orange: "Meestal is volley of bandeja slimmer dan vibora.",
          red: "Geen zware overheadkeuze uit onbalans."
        },
        strokes: ["Volley", "Bandeja", "Vibora"],
        situations: [
          "Lob op je forehand-overhead.",
          "Controlevolley na netovername.",
          "Extra druk zoeken zonder het net weg te geven."
        ]
      },
      {
        slug: "smash-en-bajada",
        title: "Smash en bajada",
        summary: "Omslag- en afmaakslagen die alleen kloppen bij de juiste bal.",
        explanation:
          "Smash en bajada zijn verleidelijk omdat ze aanvallend voelen. Juist daarom moeten ze aan duidelijke voorwaarden gekoppeld zijn.",
        ballStates: {
          green: "Bal is rijp en jij bent in positie.",
          orange: "Nog geen moment voor de zware versnelling.",
          red: "Te ver uit positie voor zulke slagen."
        },
        strokes: ["Smash", "Bajada"],
        situations: [
          "Korte lob boven het net.",
          "Bajada vanuit achterzone als omslagbal.",
          "Overhaaste smash na matige lob."
        ]
      },
      {
        slug: "glasverdediging-als-beslissing",
        title: "Glasverdediging als beslissing",
        summary: "Glasverdediging is niet alleen techniek, maar ook keuze en timing.",
        explanation:
          "Goed glasspel begint met afstand, ritme en weten of je hoog, neutraal of omschakelend speelt. Zonder die beslislaag blijft het alleen een technische reactie.",
        ballStates: {
          green: "Je leest het glas vroeg en gebruikt de bal om te herorganiseren of zelfs te counteren.",
          orange: "Je speelt de bal bruikbaar en kiest voor herstel.",
          red: "Je reageert te laat en probeert te veel te corrigeren met handigheid."
        },
        strokes: ["Glasverdediging", "Lob", "Drive"],
        situations: [
          "Diepe bal op achterglas.",
          "Dubbelglas in de hoek.",
          "Bal na glas die je wel of niet mag versnellen."
        ]
      },
      {
        slug: "eerste-volley-als-beslissing",
        title: "De eerste volley als beslissing",
        summary: "De eerste volley na netwinst is zelden een winner, maar bijna altijd een ordeningsslag.",
        explanation:
          "Spelers behandelen de eerste volley vaak alsof ze al helemaal aan het net gevestigd zijn. In werkelijkheid is dit meestal de slag die bepaalt of je het net echt krijgt of meteen weer opgeeft.",
        ballStates: {
          green: "Je mag sturen en druk zetten omdat je landing en lichaam op orde zijn.",
          orange: "Kies diepte, body of midden zonder te klein te mikken.",
          red: "Alleen controle; je bent nog aan het landen."
        },
        strokes: ["Volley", "Halfvolley", "Controlevolley"],
        situations: [
          "Net overnemen na een lob.",
          "Eerste volley op een lage bal bij de servicelijn.",
          "Na chiquita of overgangsbal direct onder druk komen."
        ]
      }
    ]
  },
  {
    slug: "duo-spel",
    title: "Duo-spel",
    eyebrow: "Hoofdstrategie 05",
    image:
      "https://images.pexels.com/photos/34356351/pexels-photo-34356351.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "In padel win je niet alleen met slagen maar met hoe goed je samen beweegt, midden verdeelt en communiceert.",
    lead:
      "Een goede individuele bal is minder waard dan een goede teampositie.",
    ballStates: {
      green: "Jullie bewegen als blok en weten wie initiatief neemt.",
      orange: "Nog wel compact, maar de rolverdeling is niet helemaal helder.",
      red: "Jullie trekken gaten, kruisen elkaar of laten het midden toevallig."
    },
    strokes: [
      { name: "Middenvolley", strategy: "Door midden spelen breekt communicatie en houdt het team compact." },
      { name: "Lob", strategy: "Met een duo-lob koop je tijd voor twee spelers tegelijk." },
      { name: "Bandeja", strategy: "Overheaddiscipline is teamdiscipline; na contact samen weer naar voren." }
    ],
    situations: [
      "Partner wordt naar achteren gedwongen.",
      "Middenbal tussen twee forehands.",
      "Linkshandige speler rechts verandert middenlogica.",
      "Te veel praten versus te laat praten.",
      "Samen terugzakken na een slechte lob.",
      "Net houden terwijl één speler breed wordt getrokken."
    ],
    subtopics: [
      {
        slug: "bewegen-als-blok",
        title: "Bewegen als blok",
        summary: "Samen klein, samen groot.",
        explanation:
          "Als één speler zakt en de ander blijft hangen, ontstaan gaten. Duo-spel begint dus bij gezamenlijke diepte en breedte.",
        ballStates: {
          green: "Beide spelers lezen dezelfde fase en bewegen gelijk.",
          orange: "Nog compact genoeg, maar iemand twijfelt.",
          red: "Twee verschillende plannen in één rally."
        },
        strokes: ["Lob", "Volley"],
        situations: [
          "Partner moet naar de achterwand.",
          "Na een diepe lob samen weer naar voren.",
          "Te vroeg één speler laten jagen."
        ]
      },
      {
        slug: "middenballen",
        title: "Middenballen verdelen",
        summary: "Niet etiquette, maar logica bepaalt wie neemt.",
        explanation:
          "De beste positie, sterkste forehand of duidelijkste balans is leidend. Middenballen moeten afgesproken logica hebben.",
        ballStates: {
          green: "Één speler heeft duidelijke voorrang en de ander ondersteunt.",
          orange: "Beide kunnen erbij, dus communicatie beslist.",
          red: "Beiden gaan of beiden wachten."
        },
        strokes: ["Volley", "Drive"],
        situations: [
          "Middenvolley op schouderhoogte.",
          "Bal tussen linkshandige rechts en partner links.",
          "Snelle bodybal naar teammidden."
        ]
      },
      {
        slug: "links-en-rechts",
        title: "Links en rechts",
        summary: "De kant van de baan verandert je beslissingen, rol en eindmomenten.",
        explanation:
          "Rechts stuurt vaker en bewaakt meer midden, links heeft vaker eindmomenten en overheaddruk. Maar die patronen veranderen als handigheid verandert.",
        ballStates: {
          green: "De rollen zijn duidelijk en complementair.",
          orange: "De standaardrol werkt, maar vraagt bijsturing.",
          red: "Jullie spelen zonder rolbewustzijn."
        },
        strokes: ["Return", "Bandeja", "Volley"],
        situations: [
          "Linkshandig op rechts.",
          "Rechtshandige speler die te veel eindmomenten forceert vanaf rechts.",
          "Overheadverdeling bij hoge lob."
        ]
      },
      {
        slug: "communicatie",
        title: "Communicatie",
        summary: "Kort, vroeg en simpel.",
        explanation:
          "Communicatie werkt alleen als ze tijdig en compact is. Geen lange zinnen midden in het punt, wel vaste woorden en vaste triggers.",
        ballStates: {
          green: "Vroege, duidelijke cue die direct gedrag stuurt.",
          orange: "De cue komt, maar net te laat.",
          red: "Geen cue of juist te veel ruis."
        },
        strokes: ["Alle slagen"],
        situations: [
          "Middenbal in hoge snelheid.",
          "Switch na lob.",
          "Wie neemt de overhead?"
        ]
      },
      {
        slug: "partner-onder-druk",
        title: "Als je partner onder druk staat",
        summary: "Je eigen positie moet dan steun geven, niet alleen jouw eigen zone bewaken.",
        explanation:
          "Veel spelers blijven te lang in hun eigen lane denken. Goede duo’s begrijpen dat partnerdruk ook jouw positie, diepte en middenverantwoordelijkheid verandert.",
        ballStates: {
          green: "Je ondersteunt direct zonder de teamvorm open te trekken.",
          orange: "Je houdt nog wel midden, maar moet sneller lezen.",
          red: "Je laat je partner alleen of zakt juist te ver mee terug."
        },
        strokes: ["Lob", "Volley", "Middenbal"],
        situations: [
          "Partner wordt naar de achterwand gedwongen.",
          "Jij staat nog aan het net en moet kiezen: houden of mee terug.",
          "Tegenstander zoekt het gat tussen jullie."
        ]
      },
      {
        slug: "net-diepte-samen-bewaken",
        title: "Netdiepte samen bewaken",
        summary: "Goed netspel gaat niet alleen over breedte, maar ook over samen dezelfde diepte houden.",
        explanation:
          "Veel duo’s staan wel naast elkaar maar niet op dezelfde diepte. Dan wordt één speler speelbaar en de ander passief. Samen diepte bewaken maakt het net veel stabieler.",
        ballStates: {
          green: "Jullie staan compact en op gelijke diepte, klaar voor de volgende bal.",
          orange: "Iemand hangt iets achter of voor, maar het team blijft nog heel.",
          red: "De dieptelijn breekt en de tegenstander krijgt een duidelijk mikpunt."
        },
        strokes: ["Volley", "Bandeja", "Lob"],
        situations: [
          "Eén speler jaagt door terwijl de ander blijft hangen.",
          "Na overhead allebei wel naar voren, maar niet gelijk.",
          "Bij lage drukballen te ver uit elkaar zakken."
        ]
      }
    ]
  },
  {
    slug: "wedstrijdsituaties",
    title: "Wedstrijdsituaties",
    eyebrow: "Hoofdstrategie 06",
    image:
      "https://images.pexels.com/photos/31012869/pexels-photo-31012869.jpeg?auto=compress&cs=tinysrgb&w=1600",
    summary:
      "Strategie wordt pas echt nuttig wanneer je hem herkent in concrete wedstrijdproblemen, scorestanden en tegenstandersprofielen.",
    lead:
      "Niet alleen hoe speel je padel, maar wat doe je in deze rally, tegen dit team, op dit punt?",
    ballStates: {
      green: "Je blijft bij patronen die passen bij situatie en score.",
      orange: "Je voelt druk, maar houdt nog regie via eenvoudige keuzes.",
      red: "Je laat score of tegenstander je dwingen tot onlogische beslissingen."
    },
    strokes: [
      { name: "Service + bal drie", strategy: "Wedstrijdpunten beginnen vaak met een duidelijk openingspatroon." },
      { name: "Lob", strategy: "Tegen agressieve netteams is de lob vaak de eerste stabiele strategische keuze." },
      { name: "Bandeja", strategy: "Tegen lob-teams is overheaddiscipline belangrijker dan spektakel." }
    ],
    situations: [
      "30-30, breakpunt of golden point.",
      "Tegen twee agressieve netspelers.",
      "Tegen een lob-team.",
      "Achterstaan of juist een voorsprong vasthouden.",
      "Eerste game van een set met veel spanning.",
      "Wedstrijd tegen een links/rechts-combinatie."
    ],
    subtopics: [
      {
        slug: "eerste-drie-ballen",
        title: "De eerste drie ballen",
        summary: "Veel punten worden niet gewonnen met de mooiste slag, maar met de beste start.",
        explanation:
          "Service, return en eerste volley of bal drie vormen samen één strategische fase. De kwaliteit zit in de koppeling, niet in één losse slag.",
        ballStates: {
          green: "Je opent met een patroon dat je al beheerst en kunt doorzetten.",
          orange: "Betrouwbare start zonder meteen te forceren.",
          red: "Je geeft gratis initiatief weg in de eerste twee slagen."
        },
        strokes: ["Service", "Return", "Volley"],
        situations: [
          "Serve plus eerste volley.",
          "Diepe return waarna server achteruit moet.",
          "Bal drie door midden of body."
        ]
      },
      {
        slug: "grote-punten",
        title: "Grote punten",
        summary: "Grote punten vragen meestal kleinere ego’s.",
        explanation:
          "Onder scoredruk worden patronen belangrijker dan bravoure. Kies dan wat je team het meest betrouwbaar uitvoert.",
        ballStates: {
          green: "Je blijft bij je beste basispatroon met overtuiging.",
          orange: "Je vereenvoudigt maar blijft actief.",
          red: "Je experimenteert of verstijft."
        },
        strokes: ["Service", "Return", "Volley"],
        situations: [
          "30-30 in eigen servicegame.",
          "Breakpunt tegen.",
          "Golden point bij 5-5."
        ]
      },
      {
        slug: "tegen-agressieve-netspelers",
        title: "Tegen agressieve netspelers",
        summary: "Hun ritme en voorwaartse controle moeten eerst breken.",
        explanation:
          "Niet meeversnellen, maar het tempo en hun contactkwaliteit verstoren. Hoogte en bodyspel zijn dan vaak waardevoller dan direct lijnrisico.",
        ballStates: {
          green: "Je dwingt ze achteruit of klein zonder zelf uit balans te raken.",
          orange: "Nog geen aanval, wel ritmeverstoring.",
          red: "Je laat je opjagen en speelt mee in hun tempo."
        },
        strokes: ["Lob", "Body-ball", "Bandeja"],
        situations: [
          "Twee spelers dicht op het net.",
          "Snelle eerste volley van tegenstander.",
          "Bodydruk op return."
        ]
      },
      {
        slug: "achterstaan-en-voorsprong",
        title: "Achterstaan of voorsprong vasthouden",
        summary: "Achterstaan vraagt helderheid, voorstaan vraagt intentie zonder passiviteit.",
        explanation:
          "Veel spelers gaan achterstand repareren met haast en geven voorsprong weg met passiviteit. Beide fouten komen uit dezelfde bron: onduidelijke keuze.",
        ballStates: {
          green: "Je blijft trouw aan je logische patronen.",
          orange: "Je voelt score maar houdt het simpel.",
          red: "Je zoekt wonderballen of verstijft."
        },
        strokes: ["Service", "Return", "Lob"],
        situations: [
          "0-30 achter in eigen game.",
          "40-15 voor maar opeens passief.",
          "Set uitserveren."
        ]
      },
      {
        slug: "tegen-een-lob-team",
        title: "Tegen een lob-team",
        summary: "Tegen veel lob is discipline belangrijker dan frustratie.",
        explanation:
          "Lobteams willen je geduld en overheaddiscipline breken. Je wint daar niet met geforceerde smashes, maar met netbehoud, opnieuw laag maken en rustig herordenen.",
        ballStates: {
          green: "Je overheadkeuze houdt het net én de rally onder controle.",
          orange: "Je blijft geduldig en kiest behoud boven spektakel.",
          red: "Je gaat jagen op smashes die nog niet rijp zijn."
        },
        strokes: ["Bandeja", "Volley", "Smash"],
        situations: [
          "Herhaalde lob op één speler.",
          "Bandeja boven smash als de bal niet kort genoeg is.",
          "Na overhead direct weer voorwaarts herstellen."
        ]
      },
      {
        slug: "golden-point-patronen",
        title: "Golden point patronen",
        summary: "Onder maximale scoredruk wint meestal het patroon dat het vaakst bewust is geoefend.",
        explanation:
          "Golden point maakt spelers vaak impulsiever. Juist daarom wil je hier terugvallen op een klein aantal volwassen patronen per kant en per rol.",
        ballStates: {
          green: "Je kiest een vertrouwd patroon met duidelijke vervolgpositie.",
          orange: "Je vereenvoudigt maximaal zonder passief te worden.",
          red: "Je laat de druk je plan vervangen."
        },
        strokes: ["Service", "Return", "Volley"],
        situations: [
          "Golden point op eigen service.",
          "Golden point op return met twee verschillende tegenstanders.",
          "Kiezen tussen body, midden of veilige diepte."
        ]
      },
      {
        slug: "tegen-links-rechts-combi",
        title: "Tegen een links-rechts combinatie",
        summary: "Een lefty-righty of atypische rolverdeling verandert midden, overhead en returnlogica.",
        explanation:
          "Veel standaardpatronen kloppen minder goed tegen een team waarvan de middenverdeling anders ligt. Daarom moet je sneller herkennen wie welke bal wil hebben en waar de echte gaten ontstaan.",
        ballStates: {
          green: "Je leest hun rolverdeling en speelt naar de zwakkere overlegzone.",
          orange: "Je houdt het simpel via midden en veilige diepte.",
          red: "Je speelt alsof het een standaardteam is en geeft hen hun favoriete patronen."
        },
        strokes: ["Return", "Lob", "Middenvolley"],
        situations: [
          "Linkshandige speler rechts die veel midden pakt.",
          "Service terugspelen naar de minder comfortabele eerste volley.",
          "Overheads verdelen tegen twee sterke forehands."
        ]
      }
    ]
  }
];
