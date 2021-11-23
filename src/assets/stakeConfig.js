export const stakeButton = {
    firstLine: {
        small: {
            code: "small",
            name: "小",
            oddsName: "1赔1",
            oddsCode: 1
        },
        big: {
            code: "big",
            name: "大",
            oddsName: "1赔1",
            oddsCode: 1
        },
        leftDouble: [{
                code: "double1",
                name: "1 1",
                oddsName: "1赔8",
                oddsCode: 8,
                diceimg: ["dice1", "dice1"]
            },
            {
                code: "double2",
                name: "2 2",
                oddsName: "1赔8",
                oddsCode: 8,
                diceimg: ["dice2", "dice2"]
            },
            {
                code: "double3",
                name: "3 3",
                oddsName: "1赔8",
                oddsCode: 8,
                diceimg: ["dice3", "dice3"]
            }
        ],
        rightDouble: [{
                code: "double4",
                name: "4 4",
                oddsName: "1赔8",
                oddsCode: 8,
                diceimg: ["dice4", "dice4"]
            },
            {
                code: "double5",
                name: "5 5",
                oddsName: "1赔8",
                oddsCode: 8,
                diceimg: ["dice5", "dice5"]
            },
            {
                code: "double6",
                name: "6 6",
                oddsName: "1赔8",
                oddsCode: 8,
                diceimg: ["dice6", "dice6"]
            }
        ],
        leftThree: [{
                code: "three1",
                name: "1 1 1",
                oddsName: "1赔150",
                oddsCode: 150,
                diceimg: ["dice1", "dice1", "dice1"]
            },
            {
                code: "three2",
                name: "2 2 2",
                oddsName: "1赔150",
                oddsCode: 150,
                diceimg: ["dice2", "dice2", "dice2"]
            },
            {
                code: "three3",
                name: "3 3 3",
                oddsName: "1赔150",
                oddsCode: 150,
                diceimg: ["dice3", "dice3", "dice3"]
            }
        ],
        rightThree: [{
                code: "three4",
                name: "4 4 4",
                oddsName: "1赔150",
                oddsCode: 150,
                diceimg: ["dice4", "dice4", "dice4"]
            },
            {
                code: "three5",
                name: "5 5 5",
                oddsName: "1赔150",
                oddsCode: 150,
                diceimg: ["dice5", "dice5", "dice5"]
            },
            {
                code: "three6",
                name: "6 6 6",
                oddsName: "1赔150",
                oddsCode: 150,
                diceimg: ["dice6", "dice6", "dice6"]
            }
        ],
        allThree: {
            code: "allThree",
            name: "全围",
            oddsName: "1赔150",
            oddsCode: 24,
            diceimg: [
                ["dice1", "dice1", "dice1"],
                ["dice2", "dice2", "dice2"],
                ["dice3", "dice3", "dice3"],
                ["dice4", "dice4", "dice4"],
                ["dice5", "dice5", "dice5"],
                ["dice6", "dice6", "dice6"]
            ]
        }
    },
    secondLine: [{
            code: "sum4",
            name: "4",
            oddsName: "1赔50",
            oddsCode: 50
        },
        {
            code: "sum5",
            name: "5",
            oddsName: "1赔18",
            oddsCode: 18
        },
        {
            code: "sum6",
            name: "6",
            oddsName: "1赔14",
            oddsCode: 14
        },
        {
            code: "sum7",
            name: "7",
            oddsName: "1赔12",
            oddsCode: 12
        },
        {
            code: "sum8",
            name: "8",
            oddsName: "1赔8",
            oddsCode: 8
        },
        {
            code: "sum9",
            name: "9",
            oddsName: "1赔6",
            oddsCode: 6
        },
        {
            code: "sum10",
            name: "10",
            oddsName: "1赔6",
            oddsCode: 6
        },
        {
            code: "sum11",
            name: "11",
            oddsName: "1赔6",
            oddsCode: 6
        },
        {
            code: "sum12",
            name: "12",
            oddsName: "1赔6",
            oddsCode: 6
        },
        {
            code: "sum13",
            name: "13",
            oddsName: "1赔8",
            oddsCode: 8
        },
        {
            code: "sum14",
            name: "14",
            oddsName: "1赔12",
            oddsCode: 12
        },
        {
            code: "sum15",
            name: "15",
            oddsName: "1赔14",
            oddsCode: 14
        },
        {
            code: "sum16",
            name: "16",
            oddsName: "1赔18",
            oddsCode: 18
        },
        {
            code: "sum17",
            name: "17",
            oddsName: "1赔50",
            oddsCode: 50
        }
    ],
    thirdLine: [{
            code: "mix12",
            name: "1 2",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [1, 2],
            diceimg: ["dice1", "dice2"]
        },
        {
            code: "mix13",
            name: "1 3",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [1, 3],
            diceimg: ["dice1", "dice3"]
        },
        {
            code: "mix14",
            name: "1 4",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [1, 4],
            diceimg: ["dice1", "dice4"]
        },
        {
            code: "mix15",
            name: "1 5",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [1, 5],
            diceimg: ["dice1", "dice5"]
        },
        {
            code: "mix16",
            name: "1 6",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [1, 6],
            diceimg: ["dice1", "dice6"]
        },
        {
            code: "mix23",
            name: "2 3",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [2, 3],
            diceimg: ["dice2", "dice3"]
        },
        {
            code: "mix24",
            name: "2 4",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [2, 4],
            diceimg: ["dice2", "dice4"]
        },
        {
            code: "mix25",
            name: "2 5",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [2, 5],
            diceimg: ["dice2", "dice5"]
        },
        {
            code: "mix26",
            name: "2 6",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [2, 6],
            diceimg: ["dice2", "dice6"]
        },
        {
            code: "mix34",
            name: "3 4",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [3, 4],
            diceimg: ["dice3", "dice4"]
        },
        {
            code: "mix35",
            name: "3 5",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [3, 5],
            diceimg: ["dice3", "dice5"]
        },
        {
            code: "mix36",
            name: "3 6",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [3, 6],
            diceimg: ["dice3", "dice6"]
        },
        {
            code: "mix45",
            name: "4 5",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [4, 5],
            diceimg: ["dice4", "dice5"]
        },
        {
            code: "mix46",
            name: "4 6",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [4, 6],
            diceimg: ["dice4", "dice6"]
        },
        {
            code: "mix56",
            name: "5 6",
            oddsName: "1赔5",
            oddsCode: 5,
            diceNum: [5, 6],
            diceimg: ["dice5", "dice6"]
        },
    ],
    fourLine: [{
            code: "single1",
            name: "一",
            oddsName: "1赔2",
            oddsCode: 2,
            diceimg: "dice1"
        },
        {
            code: "single2",
            name: "二",
            oddsName: "1赔2",
            oddsCode: 2,
            diceimg: "dice2"
        },
        {
            code: "single3",
            name: "三",
            oddsName: "1赔2",
            oddsCode: 2,
            diceimg: "dice3"
        },
        {
            code: "single4",
            name: "四",
            oddsName: "1赔2",
            oddsCode: 2,
            diceimg: "dice4"
        },
        {
            code: "single5",
            name: "五",
            oddsName: "1赔2",
            oddsCode: 2,
            diceimg: "dice5"
        },
        {
            code: "single6",
            name: "六",
            oddsName: "1赔2",
            oddsCode: 2,
            diceimg: "dice6"
        }
    ]
}

export const stakeChip = {
    small: {
        code: "small",
        oddsCode: 1
    },
    big: {
        code: "big",
        oddsCode: 1
    },
    double1: {
        code: "double1",
        oddsCode: 8,
    },
    double2: {
        code: "double2",
        oddsCode: 8,
    },
    double3: {
        code: "double3",
        oddsCode: 8,
    },
    double4: {
        code: "double4",
        oddsCode: 8,
    },
    double5: {
        code: "double5",
        oddsCode: 8,
    },
    double6: {
        code: "double6",
        oddsCode: 8,
    },
    three1: {
        code: "three1",
        oddsCode: 150,
    },
    three2: {
        code: "three2",
        oddsCode: 150,
    },
    three3: {
        code: "three3",
        oddsCode: 150,
    },
    three4: {
        code: "three4",
        oddsCode: 150,
    },
    three5: {
        code: "three5",
        oddsCode: 150,
    },
    three6: {
        code: "three6",
        oddsCode: 150,
    },
    allThree: {
        code: "allThree",
        oddsCode: 24,
    },
    sum4: {
        code: "sum4",
        oddsCode: 50
    },
    sum5: {
        code: "sum5",
        oddsCode: 18
    },
    sum6: {
        code: "sum6",
        oddsCode: 14
    },
    sum7: {
        code: "sum7",
        oddsCode: 12
    },
    sum8: {
        code: "sum8",
        oddsCode: 8
    },
    sum9: {
        code: "sum9",
        oddsCode: 6
    },
    sum10: {
        code: "sum10",
        oddsCode: 6
    },
    sum11: {
        code: "sum11",
        oddsCode: 6
    },
    sum12: {
        code: "sum12",
        oddsCode: 6
    },
    sum13: {
        code: "sum13",
        oddsCode: 8
    },
    sum14: {
        code: "sum14",
        oddsCode: 12
    },
    sum15: {
        code: "sum15",
        oddsCode: 14
    },
    sum16: {
        code: "sum16",
        oddsCode: 18
    },
    sum17: {
        code: "sum17",
        oddsCode: 50
    },
    mix12: {
        code: "mix12",
        oddsCode: 5,
    },
    mix13: {
        code: "mix13",
        oddsCode: 5,
    },
    mix14: {
        code: "mix14",
        oddsCode: 5,
    },
    mix15: {
        code: "mix15",
        oddsCode: 5,
    },
    mix16: {
        code: "mix16",
        oddsCode: 5,
    },
    mix23: {
        code: "mix23",
        oddsCode: 5,
    },
    mix24: {
        code: "mix24",
        oddsCode: 5,
    },
    mix25: {
        code: "mix25",
        oddsCode: 5,
    },
    mix26: {
        code: "mix26",
        oddsCode: 5,
    },
    mix34: {
        code: "mix34",
        oddsCode: 5,
    },
    mix35: {
        code: "mix35",
        oddsCode: 5,
    },
    mix36: {
        code: "mix36",
        oddsCode: 5,
    },
    mix45: {
        code: "mix45",
        oddsCode: 5,
    },
    mix46: {
        code: "mix46",
        oddsCode: 5,
    },
    mix56: {
        code: "mix56",
        oddsCode: 5,
    },
    single1: {
        code: "single1",
        oddsCode: 1,
    },
    single2: {
        code: "single2",
        oddsCode: 1,
    },
    single3: {
        code: "single3",
        oddsCode: 1,
    },
    single4: {
        code: "single4",
        oddsCode: 1,
    },
    single5: {
        code: "single5",
        oddsCode: 1,
    },
    single6: {
        code: "single6",
        oddsCode: 1,
    },
};