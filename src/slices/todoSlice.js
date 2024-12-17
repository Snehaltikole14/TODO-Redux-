import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: Date.now(), task: " " }],
    
  },
  reducers: {
    addTodo: (state, action) => {
      const givenTodo = action.payload;
      state.todos.push(givenTodo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    completedTodo: (state, action) => {
       state.todos = state.todos.map((todo) =>
         todo.id === action.payload ? { ...todo, completed: true } : todo
     

       );

     
    },
  },
});



export const {addTodo,deleteTodo,completedTodo} =todoSlice.actions;

export const todoReducer =todoSlice.reducer;