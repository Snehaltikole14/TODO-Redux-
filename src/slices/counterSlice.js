import { createSlice } from "@reduxjs/toolkit"

const counterSlice =createSlice({
    name : "counter",
    initialState :0,
    reducers: {
        increment :(state)=> {
            return state+1;
        },
        decrement :(state) => {
            return state-1;
        },
        reset :(state) => {
            return state = 0;
        },
        changeByValue : (state,action) => {
            return state + action.payload;
        }
       
        
    },
});

// exporting actions
export const{increment,decrement,reset,changeByValue} =counterSlice.actions;

// exporting reducers
 export const counterReducer = counterSlice.reducer;

