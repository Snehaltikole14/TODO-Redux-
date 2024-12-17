import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeByValue, decrement, increment, reset } from './slices/counterSlice'
import { completedTodo, deleteTodo } from './slices/todoSlice'
import { addTodo } from './slices/todoSlice'



 
function App(){
  const [task, setTask] = useState("");

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  // Filter completed and incomplete todos
  const completedTodos = todos.filter((todo) => todo.completed);
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h1 className="text-gray-600 text-center font-bold text-5xl mt-10">
        To do Application
      </h1>

      <input
        className="h-10 w-96 border-2 border-black p-2 rounded mt-10 items-center justify-center  mx-auto ml-96"
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        className=" h-10  border-2 border-black rounded ml-5 text-white bg-gray-500 w-32"
        onClick={() => dispatch(addTodo({ id: Date.now(), task: task }))}
      >
        Add Todo
      </button>
      <div className =''>
      <div className="mt-8">
        <h2 className="text-center font-bold text-2xl mb-4">
          Incomplete Todos
        </h2>
        <ol className="text-center font-bold">
          {incompleteTodos.map((todo) => (
            <li key={todo.id} className="mb-2">
              {todo.task}{" "}
              <button
                className="border-2 border-black rounded ml-4 w-9 bg-red-700 text-white h-8"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                X
              </button>
              <button
                className="border-2 font-bold border-black ml-2 p-1 rounded bg-green-500 text-white"
                onClick={() => dispatch(completedTodo(todo.id))}
              >
                Complete
              </button>
            </li>
          ))}
          
        </ol>
      </div>

     
        <div className="mt-10">
          <h2 className="text-center font-bold text-2xl mb-4">
            Completed Todos
          </h2>
          <ol className="text-center font-bold text-gray-500">
            {completedTodos.length > 0 ? (
              completedTodos.map((todo) => (
                <li key={todo.id} className="mb-2">
                  {todo.task}
                </li>
              ))
            ) : (
              <p>No completed todos yet.</p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
    

export default App
