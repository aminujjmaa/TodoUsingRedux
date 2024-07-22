import { useState } from "react";
import Todos from "./component/Todos";
import AddTodo from "./component/AddTodo";
import { useSelector } from "react-redux";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-gray-400 text-center">
        Todo List
      </h1>
      <AddTodo />
      <div className="flex flex-wrap gap-y-3 justify-center flex-col items-center">
        {/*Loop and Add TodoItem here */}
        {todos.map((todo) => (
          <div key={todo.id} className="w-1/2 ">
            <Todos todo={todo} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
