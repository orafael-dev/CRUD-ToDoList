import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import crudlogo from "./assets/crud_ai.png"

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar Javascript",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Fazer compras",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Reunião 15h",
      category: "Trabalho",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }]

    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo =>  todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo )
    setTodos(newTodos)
  }

  return (
    <div
      className="
  app bg-[#1b1a41] max-w-[600px] mx-auto  py-[20px] px-[30px] rounded-xl mt-2 overflow-y-auto"
    >
      <img src={crudlogo} alt="Crudlogo" />
      <TodoForm addTodo={addTodo}/>
      <div className="
      todo-list
      mb-5 pb-5 border-b border-gray-600
      ">
        {todos.map((todo) => (
          <Todo key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
