import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  return (
    <div className="
    app max-w-[600px] m-auto mb-[300px] bg-[#1b1a41] text-white
    py-5 px-7 rounded-lg">
      <h1
      className=" text-center"
      >
        Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo">
            <div className="content">
              <p className="my-2 mx-0">{todo.text}</p>
              <p className="my-2 mx-0">({todo.category})</p>
            </div>
            <div>
              <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Completar</button>
              <button className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
