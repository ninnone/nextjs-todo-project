import React from "react";
import Link from "next/link"; // ✅ Needed to add the link
import TodoItem from "@/components/ui/TodoItem";

const page = () => {
  return (
    <main className="container mx-auto my-10 min-h-screen">
      <h3 className="text-2xl font-bold mb-2">My Todo List</h3>

      <p className="text-gray-700 mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eum,
        hic aliquid voluptatibus cupiditate accusamus ad sunt consequatur minus
        rerum tempore odio? Sit quaerat odio ullam asperiores obcaecati, ipsum
        autem?
      </p>

      {/* ✅ Button linking to the form page */}
      <Link
        href="/list"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ➕ Add a New Task
      </Link>

      {/* ✅ Your task list */}
      <div className="my-10 flex flex-col gap-4 justify-center items-center">
        {[
          {
            taskName: "My first task",
            taskDescription:
              "My first task description. Hic aliquid voluptatibus cupiditate accusamus ad sunt consequatur minus rerum tempore odio.",
            dueDate: new Date("now"),
            status: "Pending",
            linkToItem: `/list/my_first_task`,
            buttonTitle: `Open first task`,
          },
          {
            taskName: "Buy groceries",
            taskDescription:
              "Need to buy vegetables, rice, and oil for the week.",
            dueDate: new Date("now"),
            status: "Pending",
            linkToItem: `/list/buy_groceries`,
            buttonTitle: `Open grocery task`,
          },
        ].map((item) => (
          <TodoItem
            key={item.taskName} // ✅ Added key to avoid the warning
            {...item}
            status={item.status as "Done" | "Pending" | "Canceled"}
          />
        ))}
      </div>
    </main>
  );
};

export default page;
