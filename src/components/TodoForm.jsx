import { useState } from "react"
import { MdAddCircle } from "react-icons/md"

// eslint-disable-next-line react/prop-types
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value || !category) return
    addTodo(value, category)
    setValue("")
    setCategory("")
  }

  return (
    <div className="todo-form py-2">
      
      <form className="flex justify-center items-center" onSubmit={handleSubmit}>
        <input
        value={value} 
        onChange={(e) => setValue(e.target.value) }
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-3/5 p-2.5 mt-2 placeholder-gray-900 my-2" type="text" placeholder="Digite o título" />
        <select
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-2/5 p-2.5 mt-2 placeholder-gray-900 my-2 ml-2">
            <option value="">Categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type="submit" className=" flex  flex-col justify-center items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-2 py-1 text-center ml-2 ">
        <MdAddCircle />
        ADD
        </button>
      </form>
    </div>
  )
}

export default TodoForm
