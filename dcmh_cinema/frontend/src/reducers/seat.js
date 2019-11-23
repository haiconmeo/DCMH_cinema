var initialState =[
    {id: 0, name : 'A1',value: true, price : 75000},
    {id: 1, name : 'A2',value: true, price : 75000},
    {id: 2, name : 'A3',value: true, price : 75000},
    {id: 3, name : 'A4',value: true, price : 75000},
    {id: 4, name : 'A5',value: true, price : 75000},
    {id: 5, name : 'A6',value: true, price : 75000},
    {id: 6, name : 'A7',value: true, price : 75000},
    {id: 7, name : 'A8',value: true, price : 75000},
    {id: 8, name : 'A9',value: true, price : 75000},
    {id: 9, name : 'A10',value: true, price : 75000},

    {id: 10, name : 'B1',value: true, price : 75000},
    {id: 11, name : 'B2',value: true, price : 75000},
    {id: 12, name : 'B3',value: false, price : 75000},
    {id: 13, name : 'B4',value: false, price : 75000},
    {id: 14, name : 'B5',value: false, price : 75000},
    {id: 15, name : 'B6',value: false, price : 75000},
    {id: 16, name : 'B7',value: false, price : 75000},
    {id: 17, name : 'B8',value: false, price : 75000},
    {id: 18, name : 'B9',value: true, price : 75000},
    {id: 19, name : 'B10',value: true, price : 75000},

    {id: 20, name : 'C1',value: true, price : 75000},
    {id: 21, name : 'C2',value: true, price : 75000},
    {id: 22, name : 'C3',value: false, price : 75000},
    {id: 23, name : 'C4',value: false, price : 75000},
    {id: 24, name : 'C5',value: false, price : 75000},
    {id: 25, name : 'C6',value: false, price : 75000},
    {id: 26, name : 'C7',value: false, price : 75000},
    {id: 27, name : 'C8',value: false, price : 75000},
    {id: 28, name : 'C9',value: true, price : 75000},
    {id: 29, name : 'C10',value: true, price : 75000},

    {id: 30, name : 'D1',value: true, price : 75000},
    {id: 31, name : 'D2',value: true, price : 75000},
    {id: 32, name : 'D3',value: true, price : 75000},
    {id: 33, name : 'D4',value: true, price : 75000},
    {id: 34, name : 'D5',value: false, price : 75000},
    {id: 35, name : 'D6',value: false, price : 75000},
    {id: 36, name : 'D7',value: true, price : 75000},
    {id: 37, name : 'D8',value: true, price : 75000},
    {id: 38, name : 'D9',value: true, price : 75000},
    {id: 39, name : 'D10',value: true, price : 75000},

    {id: 40, name : 'E1',value: true, price : 90000},
    {id: 41, name : 'E2',value: true, price : 90000},
    {id: 42, name : 'E3',value: true, price : 90000},
    {id: 43, name : 'E4',value: true, price : 90000},
    {id: 44, name : 'E5',value: false, price : 90000},
    {id: 45, name : 'E6',value: false, price : 90000},
    {id: 46, name : 'E7',value: true, price : 90000},
    {id: 47, name : 'E8',value: true, price : 90000},
    {id: 48, name : 'E9',value: true, price : 90000},
    {id: 49, name : 'E10',value: true, price : 90000},

    {id: 50, name : 'F1',value: true, price : 90000},
    {id: 51, name : 'F2',value: true, price : 90000},
    {id: 52, name : 'F3',value: false, price : 90000},
    {id: 53, name : 'F4',value: false, price : 90000},
    {id: 54, name : 'F5',value: false, price : 90000},
    {id: 55, name : 'F6',value: false, price : 90000},
    {id: 56, name : 'F7',value: false, price : 90000},
    {id: 57, name : 'F8',value: true, price : 90000},
    {id: 58, name : 'F9',value: true, price : 90000},
    {id: 59, name : 'F10',value: true, price : 90000},

    {id: 50, name : 'G1',value: true, price : 90000},
    {id: 51, name : 'G2',value: true, price : 90000},
    {id: 52, name : 'G3',value: true, price : 90000},
    {id: 53, name : 'G4',value: true, price : 90000},
    {id: 54, name : 'G5',value: false, price : 90000},
    {id: 55, name : 'G6',value: false, price : 90000},
    {id: 56, name : 'G7',value: true, price : 90000},
    {id: 57, name : 'G8',value: true, price : 90000},
    {id: 58, name : 'G9',value: true, price : 90000},
    {id: 59, name : 'G10',value: true, price : 90000},

    {id: 60, name : 'H1',value: true, price : 75000},
    {id: 61, name : 'H2',value: true, price : 75000},
    {id: 62, name : 'H3',value: true, price : 75000},
    {id: 63, name : 'H4',value: true, price : 75000},
    {id: 64, name : 'H5',value: true, price : 75000},
    {id: 65, name : 'H6',value: true, price : 75000},
    {id: 66, name : 'H7',value: true, price : 75000},
    {id: 67, name : 'H8',value: true, price : 75000},
    {id: 68, name : 'H9',value: true, price : 75000},
    {id: 69, name : 'H10',value: true, price : 75000},
  ]

const seat = ( state = initialState, action ) =>{
    console.log()
    switch (action.type){
        default: 
            return [...state];
    }
}

export default seat;