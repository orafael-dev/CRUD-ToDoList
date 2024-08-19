/* eslint-disable react/prop-types */
const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div 
    style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
    className="todo bg-[#845afc] flex items-end justify-between mb-2 rounded-md p-2" key={todo.id}>
      <div className="content text-white">
        <p>{todo.text}</p>
        <p className="category text-gray-400"> ({todo.category}) </p>
      </div>
      <div>
        <button
        onClick={() => completeTodo(todo.id)} 
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">
          Completar
        </button>
        <button 
        onClick={() => removeTodo(todo.id)}
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2">
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
