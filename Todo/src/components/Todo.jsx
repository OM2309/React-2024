import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [store, setStore] = useState([]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setStore([...store, todo]);
    console.log("Todo added:", todo);

    // Clear the input field after adding todo
    setTodo("");
  };

  const deleteTodo = (todoToDelete) => {
    setStore((prevStore) => prevStore.filter((item) => item !== todoToDelete));
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex gap-2 items-center mt-20">
        <input
          type="text"
          placeholder="Enter your todo"
          className="bg-slate-100 rounded-md py-2.5 px-2 w-80"
          value={todo}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      <div className="flex items-center justify-center mt-4 -ml-8 flex-col">
        {store.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <p className="bg-[#2D3250] text-white w-80 py-2 px-2 rounded-md">
              {item}
            </p>
            <button onClick={() => deleteTodo(item)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-trash-2"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
