"use client";
import React from "react";
import ButtonCustom from "./ButtonCustom";
import { Pencil, PencilSimpleLine, Trash } from "phosphor-react";
import { Todo } from "@/types/types";

// interface todoItemParameter can also be called todoItemProps which is more commonly used

const TodoItem = (values: Todo) => {
  console.log(values);
  return (
    <div className="flex w-full gap-2 border p-4 rounded-2xl hover:bg-gray-400">
      <div className="p-2 flex flex-col w-full">
        <h6>{values.taskName}</h6>
        <p className="line-clamp-4">{values.taskDescription}</p>
        <small>{values.dueDate.toLocaleDateString()}</small>
        <aside>{values.status}</aside>
      </div>
      <div className="flex flex-col gap-2 min-w-[130px] justify-end p-1 h-fit">
        <ButtonCustom linkto={`/${values.id}`} title="view more" />
        <ButtonCustom title="delete" icon={<Trash size={20} color="red" />} />
        <ButtonCustom
          linkto={values.linkToItem}
          title="edit"
          icon={<PencilSimpleLine size={20} color="blue" />}
        />
      </div>
    </div>
  );
};

export default TodoItem;
