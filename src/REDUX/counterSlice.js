import { createSlice } from "@reduxjs/toolkit";
//import createSlice
//slice is used to define action and reducer together


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },

    reducers: {
        increment: (state) => {

            state.count++

        },

        decerement: (state) => {
            state.count--
        },

        reset: (state) => {

            //we cant directly upadte the state like state.count=0
            //bcoz it may or may not work so we make use of spread operator 
            return { ...state, count: 0 }
        },

        incrementByamount: ((state, action) => {
            state.count += action.payload
        })

    }
})

export const { increment, decerement, reset, incrementByamount } = counterSlice.actions

// actions output comes to reducer that what we are exporting reducers and reducer are not same
export default counterSlice.reducer
