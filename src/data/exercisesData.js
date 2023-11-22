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
    },
    {
        id: "push13",
        name: "Wznosy bokiem",
        eName: "Dumbbell Lateral Raise",
        muscles: ["barki"],
        description: "Idealne ćwiczenie do wyizolowania barków a dokładnie głowy bocznej która odpowiada w znacznej mierze za kulistość i szerowkośc barków.",
        difficulty: 3,
        typ: "izolowane",
        advice: [
            "pochyl się minimalnie do przodu",
            "zegnij delikatnie łokcie i utrzymaj ten kąt przez cały ruch",
            "unikaj rotacji wewnętznej tzn. mały palec nie może być w górze",
            "nie pomagaj sobie reszta ciała",
        ],
        photo: "dumbbell-lateral-raise"
    },
    {
        id: "push14",
        name: "Wyciskanie hantli na skosie dodatnim",
        eName: "Incline dumbbell bench press",
        muscles: ["klata", "barki", "triceps"],
        description: "Ćwiczenie jest złotym środkiem pomiędzy zaangażowaniem barków a klatki piersiowej.",
        difficulty: 3,
        typ: "złożone",
        advice: [
            "ustaw łopatki w retrakcji i depresji",
            "utrzymuj stałą kontrolę ruchu hantli",
            "zrób delikatny mostek w odcinku piersiowym kręgosłupa",
            "postaw stopy stabilnie na podłożu",
            "utrzymuj równowagę między obiema rękami",
        ],
        photo: "dumbbell-lateral-raise"
    },
    {
        id: "pull1",
        name: "Podciąganie na drążku",
        eName: "Pull-up",
        muscles: ["najszerszy grzbietu", "czworoboczny", "biceps"],
        description: "Podciąganie na drążku to doskonałe ćwiczenie wzmacniające mięśnie najszerze grzbietu, bicepsa, czworobocznego oraz grupy mięśni obłych . Ćwiczenie to polega na przyciągnięciu się do drążka. To efektywny sposób na rozwijanie siły pleców",
        difficulty: 3,
        typ: "złożone",
        advice: [
            "ustaw wyprostowane nogi delikatnie przed soba, napinając tym samym brzuch",
            "wykorzystaj pełen zakres ruchu, prostuj łokcie oraz broda nad drążek",
            "opuszczaj się w sposób kontrolowany",
            "możesz eksperymentowąc z chwytem (podchwyt, nachwyt, neutralny)"
        ],
        photo: "pull-up"
    },
    {
        id: "pull2",
        name: "Wiosłowanie w opadzie",
        eName: "Bent over row",
        muscles: ["najszerszy grzbietu", 'biceps'],
        description: "Najpopularniejsze ćwiczenie na plecy w płażczyźnie poziomej,może być wykonywane zarówno hantlami jak szatngą, idealne pod rozbudowe szerokości pleców w przypadku prowadzenia łokci blisko ciała. W klasycznej wersji polega na pochyleniu sie równolegle do podłoża oraz przyciagnięciu sztangi do kości biodrowej, minimalizując przy tym zmiane pozycji. Można rówież wykonań w wyciągu dolnym siedząc",
        difficulty: 3,
        typ: "złożone",
        advice: [
            "trzymaj łokcie blisko ciała aby zaangażować najszerzy grzbietu",
            "trzymaj łokcie szerzej aby zaangażować mięsień czworoboczny",
            "staraj utrzymac się pozycje jak najbardziej równoległą do podłoża ",
            "pamiętaj o odpowiedniej pracy łopatki",
        ],
        photo: "bent-over-row"
    },

    {
        id: "pull3",
        name: "Ściąganie drążka wyciągu górnego",
        eName: "Pull down",
        muscles: ["najszerszy grzbietu", "czworoboczny", "biceps"],
        description: "Najlepsza alternatywa dla podciągania, przy utrzymaniu wąskiego chwytu dobrze pracuje tutaj najszerzy grzebitu, w klasycznej wersji ćwiczenie polega na ściąganiu drążka wyciągu górnego do tułowia, dobre ćwiczenie na zwiększenie objętości niskim kosztem zmęczenia oraz zastępstwo podciągania. ",
        difficulty: 2,
        typ: "złożone",
        advice: [
            "trzymaj łokcie blisko ciała aby zaangażować najszerzy grzbietu",
            "trzymaj łokcie szerzej aby zaangażować mięsień czworoboczny",
            "staraj się nie ruszać plecami, chyba że robisz to celowo i świadomie ",
            "pamiętaj o odpowiedniej pracy łopatki, wypuszczenie w fazie ekscentrycznej , spięcie w fazie koncetrycznej",
        ],
        photo: "pull-down"
    },

    {
        id: "pull4",
        name: "Przyciąganie wyciągu górnego do twarzy",
        eName: "Face pull",
        muscles: ["barki", "czworoboczny", "stożki rotatorów"],
        description: "Jedno z ważniejszych ćwiczeń akcesoryjnych, pomaga utrzymac zdrowie barków oraz angażuje do pracy często zaniedbany tylny akton barku",
        difficulty: 3,
        typ: "izolowane",
        advice: [
            "używaj małego ciężaru, nie pochylaj sie do tyłu",
            "dobrym pomysłem będzie przybranie pozycji siedzącej",
            "pamiętaj o odpowiedniej pracy łopatki, wypuszczenie w fazie ekscentrycznej , spięcie w fazie koncetrycznej",
        ],
        photo: "face-pull"
    },
    {
        id: "pull5",
        name: "Uginanie ramion ze sztangą",
        eName: "Barbell curl",
        muscles: ["biceps"],
        description: "Klasyczne ćwiczenie izolowane na mięsień dwugłowy ramienia, polega na zgięciu ramienia aż do pełnego skurczu bicepsa i opuszczenia sztangi do pełnego wyprostu, dobre ćwiczenie do intensywnego obciążenia obu głów tego mięśnia ",
        difficulty: 1,
        typ: "izolowane",
        advice: [
            "kontroluj faze ekscentryczną ruchu",
            "nie pomagaj sobie zginaniem kręgosłupa oraz wybijaniem z nóg",
            "jeżeli podczas używania gryfu prostego odczuwasz dyskomfort, spróbuj zamienic go na gryf łamany lub hantle",
        ],
        photo: "barbell-curl"
    },
    {
        id: "pull6",
        name: "Uginanie ramion hantlami",
        eName: "Dumbbell curl",
        muscles: ["biceps"],
        description: "Klasyczne ćwiczenie izolowane na mięsień dwugłowy ramienia, polega na zgięciu ramienia aż do pełnego skurczu bicepsa i opuszczenia hantli do pełnego wyprostu, dobre ćwiczenie do intensywnego obciążenia obu głów tego mięśnia ",
        difficulty: 1,
        typ: "izolowane",
        advice: [
            "kontroluj faze ekscentryczną ruchu",
            "nie pomagaj sobie zginaniem kręgosłupa oraz wybijaniem z nóg",
            "nie bój się eksperymentować ilością powtórzeń i tempem",
        ],
        photo: "dumbbell-curl"
    },
    {
        id: "pull7",
        name: "Uginanie ramion na modlitewniku",
        eName: "Preacher Curl",
        muscles: ["biceps"],
        description: "Ćwiczenie pozwalające na lepsze wyizolowanie bicepsów, likwiduję możliwość pomagania innymi partiami",
        difficulty: 1,
        typ: "izolowane",
        advice: [
            "kontroluj faze ekscentryczną ruchu",
            "ćwicz blisko upadku mięśniowego",
            "nie bój się eksperymentować ilością powtórzeń i tempem",
        ],
        photo: "preacher-curl"
    },

    {
        id: "pull8",
        name: "Narciarz",
        eName: "Lat pulldown",
        muscles: ["najszerszy grzbietu"],
        description: "Ciekawe ćwiczenia angażujące zarówno najszerzy grzbietu jak i grupe mięśni obłych, nazwa wzieła się od podobieństw ruchu do odpychania się kijami przez narciarzy, dobre ćwiczenie atakujące plecy z niecy innej perspektywy",
        difficulty: 3,
        typ: "izolowane",
        advice: [
            "kontroluj faze ekscentryczną ruchu",
            "ćwicz blisko upadku mięśniowego",
            "możesz wykonać delikatny ruch tułowia aby pracować w pełnym zakresie ruchu",
            "staraj sieę wykonywać napór na drążek tak jakbyś chciał go połamać"
        ],
        photo: "lat-pulldown"
    },
    {
        id: "pull9",
        name: "Uginanie ramion na ławce skosu dodatniego w rozciągniętej pozycji bicepsa",
        eName: "Seated incline dumbbell biceps curl",
        muscles: ["biceps"],
        description: "Jedno z najlepszych ćwiczeń do treningu bicepsa w jego najbardziej rozciąniętej pozycji, pozycja startowa to pozycja w której siedząc na ławce o skosie dodatnim , ręce mamy prostopadle do podłoża. Nastepnie zginamy ramiona, w zależnie od wersji ruszając przy tym łokciami lub nie",
        difficulty: 2,
        typ: "izolowane",
        advice: [
            "kontroluj faze ekscentryczną ruchu",
            "ćwicz blisko upadku mięśniowego",
            "nie bój się eksperymentować ilością powtórzeń i tempem",
            "w zależności od wersji możesz w dolnej fazie ruchu wykorzystać tzw. stretch reflex lub zrobić na dole pauze"
        ],
        photo: "seated-incline-dumbbell-biceps-curl"
    },
    {
        id: "pull10",
        name: "Przyciąganie linki wyciągu dolnego w siadzie ",
        eName: "Seated Cable Row",
        muscles: ["najszerszy grzbietu", 'biceps'],
        description: "Podstawowa alternatywa dla wiosłowania sztangą, która poprzez wykorzystanie wyciągu dolnego zapeni nam stałe napięcie mięśniowe oraz zlikwiduje limiter w postaci prostownika grzbietu",
        difficulty: 2,
        typ: "izolowane",
        advice: [
            "trzymaj łokcie blisko ciała aby zaangażować najszerzy grzbietu",
            "trzymaj łokcie szerzej aby zaangażować mięsień czworoboczny",
            "staraj się nie ruszać tułowiem ",
            "pamiętaj o odpowiedniej pracy łopatki",
        ],
        photo: "seated-cable-row"
    },


    {
        id: "legs1",
        name: "Przysiad ze sztanga",
        eName: "Squat",
        muscles: ["czworogłowy uda", "dwugłowy uda", "pośladki"],
        description: "Jeden z trzech podstawowych ruchów w treningu siłowym, często wykorzystywany wzorzec ruchowy w życiu codziennym, istotne ćwiczenie w globalnym rozwoju. Prawidłowo wykonywane pozwala zachowąć zdrowie kręgosłupa, oraz balans sił całego ciała. Doskonale rozwija mięsień czworogłowy ale może być również głównym ćwiczeń rozwijającym pośladki.",
        difficulty: 5,
        typ: "złożone",
        advice: [
            "kontroluj faze ekscentryczną ruchu",
            "zachowaj napięcie mięśni brzucha",
            "pchaj kolana do zewnątrz (wkręcenie stóp w podłoge), oraz do przodu",
            "upewnij się że jesteś w stanie zrobić głęboki przysiad bez odrywania pięt od podłoża, jeżeli nie popraw mobilnośc stawu skokowego",
            "środek cięzkości powinien znajdować sie w całym ruchu na środku stopy",
            "utrzymaj neutralne ustawienie głowy"
        ],
        photo: "squat"
    },
    {
        id: "legs2",
        name: "Przysiad ze sztanga z przodu",
        eName: "Front squat",
        muscles: ["czworogłowy uda", "dwugłowy uda", 'czworoboczny', "pośladki"],
        description: "Trudniejsza wariacja klasycznego przysiadu która bardziej zaangażuje mięśień czworogłowy uda, wzmocni także góre pleców. Ćwiczenie to wymaga większej stabilizacji, wprowadzenie tego ćwiczenia do planu może przełożyć nie pozytywnie na siłe w wielu innych ćwiczeniach",
        difficulty: 5,
        typ: "złożone",
        advice: [
            "kontroluj faze ekscentryczną ruchu",
            "zachowaj napięcie mięśni brzucha",
            "pchaj kolana do zewnątrz (wkręcenie stóp w podłoge), oraz do przodu",
            "upewnij się że jesteś w stanie zrobić głęboki przysiad bez odrywania pięt od podłoża, jeżeli nie popraw mobilnośc stawu skokowego",
            "upewnij się że nie pojawia się garb w odcinku piersiowym kręgosłupa",
            "utrzymaj neutralne ustawienie głowy"
        ],
        photo: "front-squat"
    },
    {
        id: "legs3",
        name: "Przysiad na hack squat",
        eName: "Hack squat",
        muscles: ["czworogłowy uda", "dwugłowy uda", "pośladki"],
        description: "Uproszczona wersja przysiadu na maszynie która wyłącza praca prostownika pleców, dobra alternatywa jeżeli mamy problemy z krengosłupem lub po prostu jest on przemęczony po innych ćwiczeniach, dzięki możiwości dowolnego ustawienia stóp możemy zwięszyć prace porządanych parti.",
        difficulty: 3,
        typ: "izolowane",
        advice: [
            "kontroluj faze ekscentryczną ruchu",
            "zachowaj napięcie mięśni brzucha",
            "pchaj kolana do zewnątrz (wkręcenie stóp w podłoge), oraz do przodu",
            "jeżeli chcesz zwiększyć prace czworogłowych uda ustaw stopy niżej",
            "jeżeli chcesz zwiększyć prace pośladków  ustaw stopy wyżej",


        ],
        photo: "hack-squat"
    },
    {
        id: "legs4",
        name: "Wypychanie ciężaru na suwnicy",
        eName: "Leg Press",
        muscles: ["czworogłowy uda", "dwugłowy uda", "pośladki"],
        description: "Uproszczona wersja przysiadu na maszynie która wyłącza praca prostownika pleców, dobra alternatywa jeżeli mamy problemy z krengosłupem lub po prostu jest on przemęczony po innych ćwiczeniach, dzięki możiwości dowolnego ustawienia stóp możemy zwięszyć prace porządanych parti.",
        difficulty: 2,
        typ: "izolowane",
        advice: [
            "kontroluj faze ekscentryczną ruchu",
            "pchaj kolana do zewnątrz (wkręcenie stóp w podłoge), oraz do przodu",
            "jeżeli chcesz zwiększyć prace czworogłowych uda ustaw stopy niżej",
            "jeżeli chcesz zwiększyć prace pośladków  ustaw stopy wyżej",
            "możesz ćwiczyć także unilataralnie (jednonóż)"

        ],
        photo: "leg-press"
    },
    {
        id: "legs5",
        name: "Wykroki z hantlami",
        eName: "Dumbbell lunge",
        muscles: ["pośladki", "dwugłowy uda", "czworogłowy uda"],
        description: "Wykroki są ćwiczeniem które angażuje głównie mięśnie dolnej partii ciała, takie jak pośladki, uda, i mięśnie przywodzące. Poprawiaja stabilizacje i kontrole na ciałem a także wzmacniaja siłe chwytu.",
        difficulty: 3,
        typ: "złożone",
        advice: [
            "kontroluj faze ekscentryczną ruchu",
            "pchaj kolana do zewnątrz",
            "jeżeli chcesz zwiększyć prace czworogłowych rób krótszy wykrok",
            "jeżeli chcesz zwiększyć prace pośladków  rób dłuższy wykrok",
            "nie obijaj kolanem o podłoże",
            "Jeżeli masz problem ze stabilnością , napnij brzuch, wykonuj ćwiczenie wolniej oraz stosuj pauzy"

        ],
        photo: "dumbbell-lunge"
    },

    {
        id: "legs6",
        name: "Prostowanie nóg w siadzie",
        eName: "Leg extension",
        muscles: ["czworogłowy uda"],
        description: "Dobe ćwiczenie uzupełniające , jako jedne z nielicznych jest w stanie wyizolować tylko mięsień czworogłowy, nie zaleca się stosować tego ćwiczenia jako podstawe budowy ud z racji na niekorzystne przeciwdziałanie maszyny na naturalna rotacje kolana do zewnątrz.",
        difficulty: 1,
        typ: "izolowane",
        advice: [
            "Stosuj jako dodatek nie podstawowe ćwiczenie",
            "staraj sie utzymać kolana w lekkiej rotacji zewnętrznej",
            "kontroluj początek i koniec ruchu, unikaj zrywów i szarpania",


        ],
        photo: "leg-extension"
    },
    {
        id: "legs7",
        name: "Uginanie nóg leżąc	",
        eName: "Leg curl",
        muscles: ["dwugłowu uda"],
        description: "Dobe ćwiczenie uzupełniające , jako  jedno z nielicznych pozwala na wyizolowanie mięśni dwugłowych uda.",
        difficulty: 1,
        typ: "izolowane",
        advice: [
            "Stosuj jako dodatek nie podstawowe ćwiczenie",
            "aby zmaksymalizować prace mięśni dwugłowych uda nie napinaj łydek ( nie zadzieraj stóp )",
            "kontroluj początek i koniec ruchu, unikaj zrywów i szarpania",


        ],
        photo: "leg-curl"
    },

    {
        id: "legs9",
        name: "Martwy ciąg klasyczny",
        eName: "Deadlift",
        muscles: ["pośladki", "czworogłowy uda", "dwugłowu uda", "prostownik grzbietu"],
        description: "Król ćwiczeń silowch, doskonale rozwija tak naprawde całe ciało, pośrednio przyczyni się do rozwoju wszsytkich struktur ciała.  Jeżeli zaczynasz i nie masz przeciwskazań zdrowotnych - absolutny 'must have'",
        difficulty: 5,
        typ: "złożone",
        advice: [

            "zsynchronizuj prostowanie nóg z wypychaniem biodra",
            "zainteresuj się pojęciem 'hip-hinge",
            "utrzymaj napięcie brzucha oraz ściągniete łopatki",
            "jeżeli nie jesteś w stanie utrzymać prostych pleców, zmniejsz ciężar, wzmocnij prostownik grzbietu- to jest twój czynnik limitujący",
            "utrzymaj neutralne ustawienie głowy",
            "pilnuj aby kolana nie schodziły sie do środka",
            "prowadz sztange po nogach",
            "jeżeli chcesz dynamicznie wyjść z dołu ruchu wybierz najpier luz między obciążeniem a sztanga."




        ],
        photo: "leg-curl"
    },
    {
        id: "legs10",
        name: "Martwy ciąg sumo",
        eName: "Sumo deadlift",
        muscles: ["pośladki", "czworogłowy uda", "dwugłowu uda", "prostownik grzbietu"],
        description: "Król ćwiczeń silowch, doskonale rozwija tak naprawde całe ciało, pośrednio przyczyni się do rozwoju wszsytkich struktur ciała.  Jeżeli zaczynasz i nie masz przeciwskazań zdrowotnych - absolutny 'must have'. Od klasycznego martwego ciągu różni się między innymi szerszym ustawienim stóp, angażuje bardziej mięścnie tylnej taśmy nóg",
        difficulty: 5,
        typ: "złożone",
        advice: [

            "zsynchronizuj prostowanie nóg z wypychaniem biodra",
            "zainteresuj się pojęciem 'hip-hinge",
            "utrzymaj napięcie brzucha oraz ściągniete łopatki",
            "jeżeli nie jesteś w stanie utrzymać prostych pleców, zmniejsz ciężar, wzmocnij prostownik grzbietu- to jest twój czynnik limitujący",
            "utrzymaj neutralne ustawienie głowy",
            "pilnuj aby kolana nie schodziły sie do środka",
            "prowadz sztange po nogach",
            "jeżeli chcesz dynamicznie wyjść z dołu ruchu wybierz najpier luz między obciążeniem a sztanga."




        ],
        photo: "sumo-deadlift"
    },

    {
        id: "legs11",
        name: "Martwy ciąg rumuński",
        eName: "Romanian deadlift",
        muscles: ["pośladki", "dwugłowu uda", "prostownik grzbietu"],
        description: "Martwy ciąg na przy minimalnym zgięciu kolan, bez odkładania sztangi na ziemie, zdecydowanie bardziej angażuje tylna taśme nóg a do tego gwarantuje bardzo dobre rozciągniecie tych parti co przekłada sie na prace w pełnym zakresie ruchu. Istotą tego ćwiczenia jest ruch hip hinge",
        difficulty: 4,
        typ: "złożone",
        advice: [

            "zgięcie w kolanie ma być minimalne",
            "zainteresuj się pojęciem 'hip-hinge",
            "utrzymaj napięcie brzucha oraz ściągniete łopatki",
            "jeżeli nie jesteś w stanie utrzymać prostych pleców, zmniejsz ciężar, wzmocnij prostownik grzbietu- to jest twój czynnik limitujący",
            "utrzymaj neutralne ustawienie głowy",
            "prowadz sztange po nogach"





        ],
        photo: "romanian-deadlift"
    },

    {
        id: "legs12",
        name: "unoszenie bioder z plecami umieszczonymi na podwyższeniu",
        eName: "Hip thrust",
        muscles: ["pośladki"],
        description: "Ulubione ćwiczenie więszości trenujących kobiet, bardzo mocne ćwiczenie jeżeli zależy nam na rozbudowie mięśni pośladkowych",
        difficulty: 3,
        typ: "złożone",
        advice: [

            "Ustaw stopy szeroko, a kolana w linii z palcami stóp.",
            "pełny wyprost w stawie biodrowym",
            "ustal pozycje pleców oraz wysokośc podparcia zgodnie ze swoją strukturą kostną",


        ],
        photo: "hip-thrust"
    },
    {
        id: "legs13",
        name: "Spacer farmera",
        eName: "Farmer's walk",
        muscles: ["przedramie", "brzuch"],
        description: "Jedno z najbardziej niedocenionych ćwiczeń, świetne jako ćwiczenie właściwe ale również jako rozgrzewka. Wzmacnia siłe i stabilizacje całego ciała, można wykonywać jednorącz aby zwiększyć prace mięśni skośnych brzucha.",
        difficulty: 3,
        typ: "złożone",
        advice: [

            "utrzymuj napięcie brzucha, pośladków, oraz łopatek",
            "rób małe kroki"



        ],
        photo: "farmers-walk"
    },
    {
        id: "legs14",
        name: "Wspięcia na palce stojąc",
        eName: "Standing calf raise",
        muscles: ["łydki"],
        description: "Najlepsze ćwiczenia na rozwój objętości łydki, z racji pozycji stojącej angażuje w większym stopniu mięsień brzuchaty łydki",
        difficulty: 2,
        typ: "izolacja",
        advice: [

            "na dole ruchu (pełne rozciągnięcie) zrób dosyć długą pauze aby wyłączyć prace achillesa",
            "skup się na odpowienim tempie oraz pełnym zakresie ruchu",


        ],
        photo: "standing-calf-raise"
    },

    {
        id: "legs15",
        name: "Wspięcia na palce siedząć",
        eName: "Seated calf raise",
        muscles: ["łydki"],
        description: "Dzięki pozycji siedzącej w większym stopni angażuje mięśień strzałkowy łydki",
        difficulty: 2,
        typ: "izolacja",
        advice: [

            "na dole ruchu (pełne rozciągnięcie) zrób dosyć długą pauze aby wyłączyć prace achillesa",
            "skup się na odpowienim tempie oraz pełnym zakresie ruchu",


        ],
        photo: "standing-calf-raise"
    },

    {
        id: "abs1",
        name: "Spięcia brzucha na wyciągu",
        eName: "Cable crunch",
        muscles: ["brzuch"],
        description: "Bardzo dobre ćwiczenie izolujące mięśnie brzucha, nie jest to ćwiczenie łatwe technicznie, ale warto się go nauczyć ponieważ może stanowić duży krok w budowie tzw 'sześciopaka'",
        difficulty: 4,
        typ: "izolacja",
        advice: [

            "nie wykonuj ruchu w biodrze , utrzymuj stałe jego zgięcie",
            "nie kładź się na ciężarze",
            "wykonuj ruch jakbyś chciał złączyć klate z miednicą"


        ],
        photo: "cable-crunch"
    },

    {
        id: "abs2",
        name: "Deska",
        eName: "plank",
        muscles: ["brzuch"],
        description: "Dobre ćwiczenie izometryczne, które poprawi stabilizacje naszego ciała oraz siłe mięśni głębokich, zwiększy nasza siłe oraz bezpieczeństwo w wielu innych ćwiczeniach.",
        difficulty: 2,
        typ: "izolacja",
        advice: [

            "nie unoś biodra do góry",
            "łopatka, głowa oraz pośladki maja znajdować się w jednej lini",
            "unieś łopatki w góre"


        ],
        photo: "plank"
    },
]

