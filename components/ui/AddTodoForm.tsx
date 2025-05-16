"use client";

import { Todo } from "@/types/types";
import { useState } from "react";
import { createPortal } from "react-dom";

interface AddTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (todo: Todo) => void;
}

const categories = ["task", "objective", "work", "personal"] as const;

export default function AddTodoModal({
  isOpen,
  onClose,
  onSave,
}: AddTodoModalProps) {
  const [form, setForm] = useState<Omit<Todo, "id">>({
    category: [],
    taskName: "",
    taskDescription: "",
    dueDate: new Date(),
    status: "Pending",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      category: checked
        ? [...prev.category, value as Todo["category"][number]]
        : prev.category.filter((cat) => cat !== value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      ...form,
      id: crypto.randomUUID(),
      dueDate: new Date(form.dueDate),
    };
    onSave(newTodo);
    onClose();
    setForm({
      category: [],
      taskName: "",
      taskDescription: "",
      dueDate: new Date(),
      status: "Pending",
    });
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/20 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <h2 className="text-xl font-bold mb-4">Add New Todo</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="taskName"
            placeholder="Task Name"
            className="w-full border px-3 py-2 rounded"
            value={form.taskName}
            onChange={handleChange}
            required
          />
          <textarea
            name="taskDescription"
            placeholder="Task Description"
            className="w-full border px-3 py-2 rounded"
            value={form.taskDescription}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dueDate"
            className="w-full border px-3 py-2 rounded"
            value={form.dueDate.toISOString().split("T")[0]}
            onChange={(e) =>
              setForm({ ...form, dueDate: new Date(e.target.value) })
            }
            required
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
            <option value="Canceled">Canceled</option>
          </select>
          {/* <input
            type="url"
            name="linkToItem"
            placeholder="Link to Item"
            className="w-full border px-3 py-2 rounded"
            value={form.linkToItem}
            onChange={handleChange}
          /> */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={cat}
                  checked={form.category.includes(cat)}
                  onChange={handleCategoryChange}
                />
                {cat}
              </label>
            ))}
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
