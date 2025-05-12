import React from "react";
import ButtonCustom from "./ButtonCustom";

// interface todoItemParameter can also be called todoItemProps which is more commonly used
interface TodoItemProps {
  taskName: string;
  taskDescription: string;
  dueDate: Date;
  status: "Done" | "Pending" | "Canceled";
  linkToItem: string;
  buttonTitle: string;
}

const TodoItem = (values: TodoItemProps) => {
  return (
    <div className="flex flex-col w-full gap-2 border p-4 rounded-2xl hover:bg-gray-400">
      <h4>{values.taskName}</h4>
      <div className="p-2 flex flex-col">
        <p>{values.taskDescription}</p>
        <small>{values.dueDate.toLocaleDateString()}</small>
        <caption>{values.status}</caption>
      </div>
      <div className="flex justify-end w-full p-4">
        <ButtonCustom linkto={values.linkToItem} title={values.buttonTitle} />
      </div>
    </div>
  );
};

export default TodoItem;
