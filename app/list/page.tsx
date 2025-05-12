"use client";

import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [todos, setTodos] = useState([
    { title: "My first task", slug: "my_first_task" },
    { title: "Buy groceries", slug: "buy_groceries" },
    { title: "Finish homework", slug: "finish_homework" },
  ]);

  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;

    const newTask = {
      title: taskTitle,
      slug: taskTitle.toLowerCase().replace(/\s+/g, "_"),
    };

    setTodos([...todos, newTask]);
    setTaskTitle("");
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My To-Do List</h1>

      <ul className="space-y-2 mb-6">
        {todos.map((todo) => (
          <li
            key={todo.slug}
            className="bg-gray-100 p-3 rounded hover:bg-gray-200"
          >
            <Link href={`/list/${todo.slug}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>

      {/* Form to add a new task */}
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          placeholder="New task..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
    </main>
  );
};

export default Page;
