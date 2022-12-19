import { createSlice } from "@reduxjs/toolkit";
export const calcSlice = createSlice({
    name:'calculator',
    initialState: {
        result:'',
        history:[],
        number:'',
    },
    reducers:{
        addNumber: (state,action) => {
            state.number += action.payload
        },
        addResult: (state,action) => {
            state.result = action.payload
            state.history.push(`${state.number} = ${state.result}`)
        },
        clear: (state) => {
            state.number = ""
            state.result = ""
        }
    }
})  

export const { addNumber, addResult, addHistory, clear } = calcSlice.actions
export default calcSlice.reducer;