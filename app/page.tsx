"use client";
import AddTodoModal from "@/components/ui/AddTodoForm";
import TodoItem from "@/components/ui/TodoItem";
import useStore from "@/context/store";
import { Todo } from "@/types/types";
import { Plus } from "phosphor-react";
import { useState } from "react";

const Page = () => {
  const { list, addToList } = useStore();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddTodo = (todo: Todo) => {
    // setTodos((prev) => [...prev, todo]);
    addToList(todo);
  };

  return (
    <main className="container mx-auto my-4 min-h-[78vh]">
      <h3 className="text-2xl font-bold mb-2">My Todo List</h3>

      <p className="text-gray-600 mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eum,
        hic aliquid voluptatibus cupiditate accusamus ad sunt consequatur minus
        rerum tempore odio? Sit quaerat odio ullam asperiores obcaecati, ipsum
        autem?
      </p>

      {/* ✅ Button linking to the form Page */}
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="flex gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
      >
        <Plus size={20} /> <p>Add a New Task</p>
      </button>

      {/* ✅ Your task list */}
      <div className="my-10 flex flex-col gap-4 items-center h-[60vh] overflow-y-scroll overflow-hidden">
        {list.map((item) => (
          <TodoItem
            key={item.id} // ✅ Added key to avoid the warning
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

export default Page;
