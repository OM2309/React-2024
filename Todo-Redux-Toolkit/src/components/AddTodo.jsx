import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";

const AddTodo = () => {
  const [Todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: Todo }));
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center gap-2 mt-20 flex-col">
        <h1 className="font-bold uppercase text-2xl text-center text-white">
          Redux-Toolklit
        </h1>

        <div className="flex items-center justify-center gap-2 ">
          <input
            type="text"
            className="bg-gray-100 w-96 py-3 pl-4 rounded-lg font-semibold"
            placeholder="Add Todo"
            value={Todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            ADD
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
