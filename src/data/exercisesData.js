const data = [
    {
        id: 'push1',
        name: 'Wyciskanie sztangi w leżeniu na ławce poziomej',
        eName: 'Barbell Bench Press',
        muscles: ['klatka piersiowa', 'triceps'],
        description: 'Bench press sztangą to popularne i skuteczne ćwiczenie siłowe, które angażuje głównie mięśnie klatki piersiowej, trójgłowy ramienia oraz mięśnie przednie i środkowe aktony barkowe. Ćwiczenie to polega na leżeniu na ławce treningowej, trzymaniu sztangi nad klatką piersiową i wypychaniu jej do góry, a następnie opuszczaniu ku klatce piersiowej zachowując kąt pachowy nie większy niż 60 stopni. Jest doskonałym sposobem na rozwijanie siły górnej partii ciała, wzmocnienie układu nerwowego oraz globalny rozwój górnych parti ciała.',
        difficulty: 4,
        typ: 'złożone',
        advice: [
            'ustaw łopatki w retrakcji i depresji',
            'kąt pachowy nie powinnien wynosić więcej niż 60 stopni',
            'zrób delikatny mostek w odcinku piersiowym kręgosłupa',
            'postaw stopy stabilnie na podłożu',
            'w pozycji wyjściowej spróbuj wykonać ruch jakbyś chciał połamać sztange (aktywacja najszerszego grzebietu) ',
            'wyciskaj delikatnie za siebie'
        ],
        photo: 'barbell-bench-press'
    },

    {
        id: "push2",
        name: "Wyciskanie hantli w leżeniu na ławce poziomej",
        eName: "Dumbbell Bench Press",
        muscles: ["klatka piersiowa", "triceps"],
        description: "Wyciskanie hantli w leżeniu na ławce poziomej to łatwiejsza technicznie wersja wyciskania sztangą, za to z wyższymi wymaganiami dotyczącymi stabilizacji oraz kontroli, które angażuje głównie mięśnie klatki piersiowej, trójgłowy ramienia oraz do stabilizacji mięśnie przednie i środkowe aktony barkowe. Ćwiczenie to polega na leżeniu na ławce treningowej, trzymaniu hantli nad klatką piersiową i wypychaniu ich do góry, a następnie opuszczaniu ku klatce piersiowej zachowując kontrolowany ruch. Jest doskonałą alternatywą jeżeli chcemy poprawić stabilizację oraz kontrolę, lub zlikwidować nierówności w sile mięśni.",
        difficulty: 3,
        typ: "złożone",
        advice: [
            "ustaw łopatki w retrakcji i depresji",
            "utrzymuj stałą kontrolę ruchu hantli",
            "zrób delikatny mostek w odcinku piersiowym kręgosłupa",
            "postaw stopy stabilnie na podłożu",
            "utrzymuj równowagę między obiema rękami",
        ],
        photo: "dumbbell-bench-press"
    },

    {
        id: "push3",
        name: "Wyciskanie hantli nad głową",
        eName: "dumbbels overhead press",
        muscles: ["barki", "triceps"],
        description: "Wyciskanie hantli nad głową to skuteczne ćwiczenie angażujące głównie mięśnie naramienne w szególności przedni akton , tricepsa oraz górnej części pleców. Ćwiczenie to polega na staniu prosto i wypychaniu hantli do góry nad głowę, utrzymując kontrolowany ruch. Wyciskanie nad głową rozwija siłę barków, poprawia stabilizację i jest ważnym elementem treningu górnej partii ciała.",
        difficulty: 4,
        typ: "zlożone",
        advice: [
            "utrzymuj stałą kontrolę ruchu hantli",
            "zachowaj stabilność korpusu",
            "unikaj nadmiernego wygięcia w odcinku lędźwiowym kręgosłupa",
            "utrzymuj neutralną pozycję głowy",
            "upewnij się że posiadasz odpowiednią mobilnośc obręczy barkowej",
        ],
        photo: "dumbbels-overhead-press"
    },
    {
        id: "push4",
        name: "Wyciskanie sztangi nad głową",
        eName: "Barbell Overhead Press",
        muscles: ["barki", "triceps"],
        description: "Wyciskanie sztangi nad głową to skuteczne ćwiczenie angażujące głównie mięśnie ramion, tricepsa oraz górnej części pleców. Ćwiczenie to polega na staniu prosto, trzymaniu sztangi na wysokości klatki piersiowej i wypychaniu jej do góry nad głowę, utrzymując kontrolowany ruch. Wyciskanie nad głową rozwija siłę ramion, poprawia stabilizację i jest ważnym elementem treningu górnej partii ciała.",
        difficulty: 4,
        typ: "złożone",
        advice: [
            "utrzymuj stałą kontrolę ruchu sztangi",
            "unikaj nadmiernego wygięcia w odcinku lędźwiowym kręgosłupa",
            "utrzymuj napięcie mięśni pośladkowych oraz brzucha",
            "utrzymuj neutralną pozycję głowy",
            "upewnij się że posiadasz odpowiednią mobilnośc obręczy barkowej",
        ],
        photo: "barbell-overhead-press"
    },
    {
        id: "push5",
        name: "Rozpiętki",
        eName: "Flyes",
        muscles: ["klatka piersiowa"],
        description: "Rozpiętki hantlami to ćwiczenie skupiające się głównie na rozciąganiu mięśni klatki piersiowej. Ćwiczenie to polega na rozciąganiu mięśnia piersiowego, można wykonać je hantlami lub na tak zwanej 'bramkie' . Rozpiętki są doskonałym sposobem na rozwijanie pełności mięśniowej klatki piersiowej oraz poprawę elastyczności mięśni.",
        difficulty: 3,
        typ: "izolowane",
        advice: [
            "utrzymuj stałe delikatne zgięcie łokcia",
            "nie pomagaj sobie grawitacja, odciązająć wyciąg masą własnego ciała",
            "rozciągnij klatke maksymalnie, do momentu w którym nie pojawia się dyskomfort",
            "kontroluj faze ekscentryczną",
            "nie dokładaj cięzaru kosztem techniki",
        ],
        photo: "flyes"
    },
    {
        id: "push6",
        name: "Pompki na poręczach równoległych",
        eName: "Dips",
        muscles: ["klatka piersiowa", "triceps"],
        description: "Dipy na poręczach równoległych to skuteczne ćwiczenie angażujące głównie mięśnie tricepsa, klatki piersiowej oraz przednie aktony barkowe. Ćwiczenie to polega na uginaniu stawu łokciowego utrzymując niezmienna pozcycje reszty ciała, a następnie wypychaniu się z powrotem do góry. Dipy rozwijają siłę górnej partii ciała i są doskonałym ćwiczeniem na rozbudowę tricepsa.",
        difficulty: 3,
        typ: "złożone",
        advice: [
            "utrzymuj stabilność ciała",
            "opuśc barki w dół, kierująć łopatke w dół- nie opieraj ciężaru na stawach a na mięśniach",
            "utrzymuj kontrolę nad ruchem",
            "utrzymuj stałą pozycje ciała, unikaj bujania",
            "w zależności od ustawienia ciała ćwiczenie w większym stopniu będzie obciążać triceps, klatke lub barki",
        ],
        photo: "dips"
    },
    {
        id: "push7",
        name: "Wyciskania poziome na maszynie",
        eName: "Machine Horizontal Press",
        muscles: ["klatka piersiowa", "triceps"],
        description: "Wyciskania poziome na maszynie to ćwiczenie siłowe, które angażuje głównie mięśnie klatki piersiowej, tricepsa oraz przednie aktony barkowe. Ćwiczenie to wykorzystuje  maszynę, na której siedzisz lub leżysz i wykonujesz ruch wyciskania poziomo (względem ciała). To dobry dodatek do planu jeżeli maszym limiterem jest uklad nerwowy lub potrzebujemy bardzo dużej objętości treningowej.",
        difficulty: 2,
        typ: "izolowane",
        advice: [
            "dostosuj maszynę do własnych parametrów ciała",
            "zwracaj uwage na tempo",
            "nie stosuj jako baze do rozbudowy klatki piersiowej"
        ],
        photo: "machine-horizontal-press"
    },
    {
        id: "push8",
        name: "Wyciskania pionowe na maszynie",
        eName: "Machine Vertical Press",
        muscles: ["barki", "triceps"],
        description: "Wyciskania pionowe na maszynie to ćwiczenie siłowe, które angażuje głównie  przednie aktony barkowe oraz mięśnie klatki piersiowej, tricepsa . Ćwiczenie to wykorzystuje  maszynę, na której siedzisz lub stoisz i wykonujesz ruch wyciskania pionowego (w kierunku sufitu). To dobre ćwiczenie w przypadku braku mobliności obręczy barkowej do OHP oraz jako uzupełnienie w wysoko-ojętościowym treningu. ",
        difficulty: 2,
        typ: "izolowane",
        advice: [
            "dostosuj maszynę do własnych parametrów ciała",
            "zwracaj uwagę na tempo",
            "nie stosuj jako bazę do rozbudowy barków"
        ],
        photo: "machine-vertical-press"
    },

    {
        id: "push10",
        name: "Wyciskanie francuskie",
        eName: "French Press",
        muscles: ["triceps"],
        description: "Wyciskanie francuskie to ćwiczenie izolujące tricepsy. Wykorzystuje się do niego sztangę lub hantle. Ćwiczenie polega na leżeniu na ławce, trzymaniu sztangi lub hantli nad głową i zginaniu rąk w łokciach, aby opuścić obciążenie za głowę, a następnie prostowaniu ramion. To doskonałe ćwiczenie do izolowanego treningu tricepsa, pomagając w budowaniu siły i objętości w tej partii mięśniowej.",
        difficulty: 3,
        typ: "izolowane",
        advice: [
            "istnieje kilka wersji tego ćwiczenia, z zablokowanym stawem barkowym, z ruchomym stawem barkowym, z zablokowanym stawem barkowym jednak z łokciem odwiedzonym za głowe ",
            "w przypadku hantli utrzymuj jednakowe tempo ruchu dla obu rąk",
            "połóż się na skraju ławki aby ta nie skracała zakresu twojego ruchu"

        ],
        photo: "french-press"
    },
    {
        id: "push11",
        name: "Prostowanie ramion na wyciągu górnym stojąc",
        eName: "Cable Tricep Extension",
        muscles: ["triceps"],
        description: "Prostowanie ramion na wyciągu górnym stojąc to ćwiczenie izolujące tricepsy. Wykorzystuje się do niego wyciąg górny z linką lub uchwytami. Ćwiczenie polega na staniu przed wyciągiem, trzymaniu uchwytów i wypychaniu ich w dół, prostując jednocześnie ramiona. To skuteczny sposób na rozwijanie siły tricepsa i kształtowanie tej partii mięśniowej.",
        difficulty: 2,
        typ: "izolowane",
        advice: [
            "utrzymuj stała pozycje ciała",
            "kontroluj ruch",
            "nie kompensuj cięzaru kładąć sie na nim",
            "utrzymaj lekkie pochylenie",
        ],
        photo: "cable-tricep-extension"
    },
    {
        id: "push12",
        name: "Wyciskanie leżąc wąskim chwytem",
        eName: "Close Grip Bench Press",
        muscles: ["klatka piersiowa", "triceps"],
        description: "Wyciskanie leżąc wąskim chwytem to ćwiczenie siłowe, które skupia się głównie na mięśniach klatki piersiowej i tricepsa. Wykonuje się je na ławce, trzymając sztangę wąsko, z łokciami przy ciele. Ćwiczenie to rozwija siłę tricepsa i może być stosowane jako uzupełnienie treningu klatki piersiowej. Wąski chwyt powoduje większe zaangażowanie tricepsa.",
        difficulty: 3,
        typ: "złożone",
        advice: [
            "trzymaj łokcie blisko ciała",
            "utrzymuj kontrolę nad ruchem sztangi",
            "dopasuj szerokość chwytu do swoich preferencji",
            "zrób delikatny mostek w odcinku piersiowym kręgosłupa",
        ],
        photo: "close-grip-bench-press"
    }



]

export default data