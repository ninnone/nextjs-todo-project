"use client";
import React, { useState } from "react";
import Link from "next/link"; // ✅ Needed to add the link
import TodoItem from "@/components/ui/TodoItem";
import AddTodoModal from "@/components/ui/AddTodoForm";
import { Todo } from "@/types/types";
import useStore from "@/context/store";

const page = () => {
  const { list, addToList } = useStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todo: Todo) => {
    // setTodos((prev) => [...prev, todo]);
    addToList(todo);
  };

  return (
    <main className="container mx-auto my-4 min-h-[78vh]">
      <h3 className="text-2xl font-bold mb-2">My Todo List</h3>

      <p className="text-gray-700 mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eum,
        hic aliquid voluptatibus cupiditate accusamus ad sunt consequatur minus
        rerum tempore odio? Sit quaerat odio ullam asperiores obcaecati, ipsum
        autem?
      </p>

      {/* ✅ Button linking to the form page */}
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ➕ Add a New Task
      </button>

      {/* ✅ Your task list */}
      <div className="my-10 flex flex-col gap-4 items-center h-[60vh] overflow-y-scroll overflow-hidden">
        {list.map((item) => (
          <TodoItem
            key={item.taskName} // ✅ Added key to avoid the warning
            {...item}
            status={item.status as "Done" | "Pending" | "Canceled"}
          />
        ))}
      </div>
      <AddTodoModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddTodo}
      />
    </main>
  );
};

export default page;
