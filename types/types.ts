export interface User {
  name: string;
  email: string;
}

export interface Todo {
  id: string;
  category: Array<"task" | "objective" | "work" | "personal">;
  taskName: string;
  taskDescription: string;
  dueDate: Date;
  status: "Done" | "Pending" | "Canceled";
  linkToItem?: string;
}
