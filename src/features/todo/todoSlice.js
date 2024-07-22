import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState   = {
    todos: []
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(),
                todo:action.payload,
                
            }
           state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos= state.todos.filter((todo)=> todo.id!= action.payload)
        },
        updateTodo: (state, action)=>{
            const newText= action.payload;
            state.todos.map((text)=> text.id!==action.payload? text: text.todo=newText)
            
        
        }
    }
})


export const {addTodo, removeTodo,updateTodo }= todoSlice.actions;
export default todoSlice.reducer;
