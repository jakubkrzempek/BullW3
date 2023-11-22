const data = [
    //jeden dzień
    {
        idPlan: "fbw1",
        days: "1",
        priority: "none",

        day1: [
            "legs1",
            "push1",
            "pull1",
            "push3",
            "pull2",
            "legs13"
        ]

    },
    {
        idPlan: "fbw1_chest",
        days: "1",
        priority: "chest",

        day1: [
            "push1",
            "legs1",
            "pull1",
            "push3",
            "pull2",
            "push5"
        ]

    },
    {
        idPlan: "fbw1_back",
        days: "1",
        priority: "back",

        day1: [
            "legs9",
            "pull1",
            "push1",
            "pull2",
            "push3",
            "pull4"
        ]

    },

    {
        idPlan: "fbw1_legs",
        days: "1",
        priority: "legs",

        day1: [
            "legs1",
            "push1",
            "pull1",
            "push3",
            "pull2",
            "legs7",
            "legs6"
        ]

    },

    {
        idPlan: "fbw1_glute",
        days: "1",
        priority: "glute",

        day1: [
            "legs1",
            "push1",
            "legs12",
            "pull1",
            "legs11",
            "push3",
            "pull2",

        ]
    },

    //dwa dni

    {
        idPlan: "fbw2",
        days: "2",
        priority: "none",

        day1: [
            "legs1",
            "push1",
            "pull2",
            "push13",
            "pull6",
            "push10",
            "abs1",
            "legs14"
        ],
        day2: [
            "legs9",
            "push4",
            "pull1",
            "push6",
            "pull7",
            "abs2",
            "legs15"
        ],

    },

    {
        idPlan: "fbw2-chest",
        days: "2",
        priority: "chest",

        day1: [
            "push1",
            "legs1",
            "pull2",
            "push13",
            "pull6",
            "push10",
            "abs1",
            "legs14"
        ],
        day2: [
            "push4",
            "legs9",
            "pull1",
            "push6",
            "pull7",
            "push5",
            "abs2",
            "legs15"
        ],

    },
    {
        idPlan: "fbw2-back",
        days: "2",
        priority: "back",

        day1: [
            "pull2",
            "push1",
            "pull3",
            "legs1",
            "pull6",
            "push10",
            "abs1",
            "legs14"

        ],
        day2: [
            "pull1",
            "push4",
            "legs9",
            "push6",
            "pull7",
            "pull4",
            "abs2",
            "legs15"
        ],

    },

    {
        idPlan: "fbw2-legs",
        days: "2",
        priority: "legs",

        day1: [
            "legs1",
            "push1",
            "pull2",
            "push13",
            "pull6",
            "push10",
            "legs7",
            "abs1",
            "legs14",

        ],
        day2: [
            "legs9",
            "push4",
            "pull1",
            "push6",
            "pull7",
            "legs6",
            "abs2",
            "legs15"
        ],

    },
    {
        idPlan: "fbw2-glute",
        days: "2",
        priority: "glute",

        day1: [
            "legs1",
            "push1",
            "pull2",
            "legs5",
            "push13",
            "pull6",
            "push10",
            "abs1",
            "legs14"
        ],
        day2: [
            "legs11",
            "push4",
            "legs12",
            "pull1",
            "push6",
            "pull7",
            "abs2",
            "legs15"
        ],

    },



    // trzy dni 

    {
        idPlan: "fbw3",
        days: "3",
        priority: "none",

        day1: [
            "legs1",
            "push1",
            "pull2",
            "pull7",
            "push13",
            "abs1"
        ],
        day2: [
            "legs9",
            "push3",
            "push5",
            "legs6",
            "push11",
            "pull4",
            "legs14"
        ],
        day3: [
            "legs3",
            "push6",
            "pull3",
            "push13",
            "legs13",
            "pull5",
            "leg15"

        ],

    },
    {
        idPlan: "fbw3-chest",
        days: "3",
        priority: "chest",

        day1: [
            "push1",
            "legs1",
            "pull2",
            "push6",
            "pull7",
            "push13",
            "abs1"
        ],
        day2: [
            "push3",
            "legs9",
            "push5",
            "legs6",
            "push11",
            "pull4",
            "legs14"
        ],
        day3: [
            "push6",
            "legs3",
            "push14",
            "pull3",
            "push13",
            "legs13",
            "leg15"

        ],

    },

    {
        idPlan: "fbw3-back",
        days: "3",
        priority: "back",

        day1: [
            "legs1",
            "pull2",
            "push1",
            "pull8",
            "push13",
            "pull7",
            "abs1"
        ],
        day2: [
            "legs9",
            "pull1",
            "push3",
            "legs6",
            "push11",
            "pull4",
            "legs14"
        ],
        day3: [
            "legs3",
            "push6",
            "pull3",
            "push13",
            "legs13",
            "pull5",
            "leg15"

        ],

    },

    {
        idPlan: "fbw3-legs",
        days: "3",
        priority: "legs",

        day1: [
            "legs1",
            "push1",
            "pull2",
            "legs6",
            "pull7",
            "push13",
            "abs1"
        ],
        day2: [
            "legs9",
            "push3",
            "legs4",
            "push11",
            "legs7",
            "pull4",
            "legs14"
        ],
        day3: [
            "legs3",
            "push6",
            "pull3",
            "legs13",
            "push13",
            "pull5",
            "leg15"

        ],

    },
    {
        idPlan: "fbw3-glute",
        days: "3",
        priority: "glute",

        day1: [
            "legs1",
            "push1",
            "pull2",
            "pull7",
            "push13",
            "abs1"
        ],
        day2: [
            "legs11",
            "push3",
            "push5",
            "legs6",
            "push11",
            "pull4",
            "legs14"
        ],
        day3: [
            "legs12",
            "push6",
            "pull3",
            "push13",
            "legs13",
            "pull5",
            "leg15"

        ],

    },
    //4dni

    {
        idPlan: "pushPull4",
        days: "4",
        priority: "none",

        day1: [
            "legs1",
            "push1",
            "push10",
            "abs1",
            "legs14"
        ],
        day2: [
            "legs9",
            "pull2",
            "pull6",
            "pull4",
            "legs13"
        ],
        day3: [
            "push4",
            "legs6",
            "push6",
            "push13",
            "legs15",
        ],
        day4: [
            "pull1",
            "legs7",
            "pull8",
            "pull9",
            "abs2",
        ],

    },
    {
        idPlan: "pushPull4-chest",
        days: "4",
        priority: "chest",

        day1: [
            "push1",
            "legs1",
            "push6",
            "abs1",
            "legs14"
        ],
        day2: [
            "legs9",
            "pull2",
            "pull6",
            "pull4",
            "legs13"
        ],
        day3: [
            "push4",
            "legs6",
            "push12",
            "push13",
            "legs15",
        ],
        day4: [
            "pull1",
            "legs7",
            "pull8",
            "pull9",
            "abs2",
        ],

    },
    {
        idPlan: "pusPull4-back",
        days: "4",
        priority: "back",

        day1: [
            "legs1",
            "push1",
            "push10",
            "abs1",
            "legs14"
        ],
        day2: [
            "legs9",
            "pull2",
            'pull3',
            "pull4",
            "pull6",
            "legs13"
        ],
        day3: [
            "push4",
            "legs6",
            "push6",
            "push13",
            "legs15",
        ],
        day4: [
            "pull1",
            "legs7",
            "pull10",
            "pull8",
            "pull9",
            "abs2",
        ],

    },
    {
        idPlan: "pushPull4-legs",
        days: "4",
        priority: "legs",

        day1: [
            "legs1",
            "push1",
            "push10",
            "abs1",
            "legs14"
        ],
        day2: [
            "legs9",
            "pull2",
            "pull6",
            "pull4",
            "legs13"
        ],
        day3: [
            "legs3",
            "push4",
            "legs6",
            "push13",
            "legs15",
        ],
        day4: [
            "pull1",
            "legs11",
            "pull8",
            "pull9",
            "abs2",
        ],

    },
    {
        idPlan: "pushPull4-glute",
        days: "4",
        priority: "glute",

        day1: [
            "legs1",
            "push1",
            "push10",
            "abs1",
            "legs14"
        ],
        day2: [
            "legs11",
            "pull2",
            "pull6",
            "pull4",
            "legs13"
        ],
        day3: [
            "legs12",
            "push4",
            "legs6",
            "push6",
            "push13",
            "legs15",
        ],
        day4: [
            "pull1",
            "legs7",
            "pull8",
            "pull9",
            "abs2",
        ],

    },

    // pięć dni

    {
        idPlan: "pushPullLegsUpperLower5",
        days: "5",
        priority: "none",

        day1: [
            "push1",
            "push3",
            "push11",
            "push5",
            "push13"
        ],
        day2: [
            "pull1",
            "pull2",
            "pull8",
            "pull7",
            "pull4"
        ],
        day3: [
            "legs1",
            "legs5",
            "legs7",
            "legs6",
            "abs1"
        ],
        day4: [
            "push12",
            "pull10",
            "push14",
            "push13",
            "pull9"
        ],
        day5: [
            "legs4",
            "legs11",
            "legs13",
            "abs2"
        ],

    },
    {
        idPlan: "pushPullLegsUpperLower5-chest",
        days: "5",
        priority: "chest",

        day1: [
            "push1",
            "push3",
            "push6",
            "push5",
            "push13"
        ],
        day2: [
            "pull1",
            "pull2",
            "pull8",
            "pull7",
            "pull4"
        ],
        day3: [
            "legs1",
            "legs5",
            "legs7",
            "legs6",
            "abs1"
        ],
        day4: [
            "push12",
            "pull10",
            "push14",
            "push13",
            "pull9"
        ],
        day5: [
            "legs4",
            "legs11",
            "legs13",
            "abs2"
        ],

    },

    {
        idPlan: "pushPullLegsUpperLower5-back",
        days: "5",
        priority: "back",

        day1: [
            "push1",
            "push3",
            "push11",
            "push5",
            "push13"
        ],
        day2: [
            "pull1",
            "pull2",
            "pull8",
            "pull7",
            "pull4"
        ],
        day3: [
            "legs1",
            "legs5",
            "legs7",
            "legs6",
            "abs1"
        ],
        day4: [
            "push12",
            "pull10",
            "pull3",
            "push13",
            "pull9"
        ],
        day5: [
            "legs4",
            "legs11",
            "legs13",
            "abs2"
        ],

    },

    {
        idPlan: "pushPullLegsUpperLower5-legs",
        days: "5",
        priority: "legs",

        day1: [
            "push1",
            "push3",
            "push11",
            "push5",
            "push13"
        ],
        day2: [
            "pull1",
            "pull2",
            "pull8",
            "pull7",
            "pull4"
        ],
        day3: [
            "legs1",
            "legs5",
            "legs7",
            "legs6",
            "abs1"
        ],
        day4: [
            "push12",
            "pull10",
            "push14",
            "push13",
            "pull9"
        ],
        day5: [
            "legs2",
            "legs11",
            "legs4",
            "legs13",
            "abs2"
        ],

    },

    {
        idPlan: "pushPullLegsUpperLower5-glute",
        days: "5",
        priority: "glute",

        day1: [
            "legs12",
            "push1",
            "push3",
            "push11",
            "push5",
            "push13"
        ],
        day2: [
            "pull1",
            "pull2",
            "pull8",
            "pull7",
            "pull4"
        ],
        day3: [
            "legs1",
            "legs5",
            "legs7",
            "legs6",
            "abs1"
        ],
        day4: [
            "push12",
            "pull10",
            "push14",
            "push13",
            "pull9"
        ],
        day5: [
            "legs11",
            "legs4",
            "legs13",
            "abs2"
        ],

    },
]

export default data