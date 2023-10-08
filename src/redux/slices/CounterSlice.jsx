
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}


export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment : (state) => {
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        }
    }

})

// //  creteSlice na 2 output hoy banne ne export karava pade

// 1. actions creater 
// action creater ma tame jetla pan function banavya hoy aetla badha aave
// sliceName.actions mathi te badha function ne destructing karine export karavana 

export const {increment, decrement} = CounterSlice.actions;

// 2. reducer
// reducer is functionality for redux 
// jetla pan function bane ae reducer ma bane aetle ae functionality provide kare chhe

export default CounterSlice.reducer;