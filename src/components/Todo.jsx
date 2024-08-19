import { MdCheckCircle, MdDelete } from "react-icons/md";

/* eslint-disable react/prop-types */
const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div 
    style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
    className="todo bg-[#845afc] flex items-end justify-between mb-2 rounded-md p-2 hover:bg-[#513a90] transition-colors" key={todo.id}>
      <div className="content text-gray-200 max-w-[80%] text-wrap break-words max-h-[94px] overflow-hidden">
        <p>{todo.text}</p>
        <p className="category text-gray-400"> ({todo.category}) </p>
      </div>
      <div>
        <button
        onClick={() => completeTodo(todo.id)} 
        className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">
          <MdCheckCircle className="text-lg" />
        </button>
        <button 
        onClick={() => removeTodo(todo.id)}
        className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">
          <MdDelete className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
