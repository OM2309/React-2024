import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  allTodos: [],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text } = action.payload;
      const newTodo = {
        id: nanoid(),
        text: text,
      };
      state.allTodos.push(newTodo);
    },

    removeTodo: (state, action) => {
      const {id} = action.payload;
      state.allTodos = state.allTodos.filter((allTodo) => allTodo.id !== id);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
