import { Todo, User } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface OptionProps {
  id: number;
  quantity: number;
}

type Store = {
  todo: Todo | null;
  user: User | null;
  list: Array<Todo>;
};

type Actions = {
  addToList: (item: Todo) => void;
  editList: (item: Todo) => void;
  removeFromList: (id: string) => void;
  emptyList: () => void;
  login: (user: User) => void;
  logout: () => void;
};

const initialState: Store = {
  list: [
    {
      id: "1",
      taskName: "My first task",
      taskDescription:
        "My first task description. Hic aliquid voluptatibus cupiditate accusamus ad sunt consequatur minus rerum tempore odio.",
      dueDate: new Date(),
      status: "Pending",
      category: ["objective", "work", "personal"],
    },
    {
      id: "2",
      taskName: "Buy groceries",
      taskDescription: "Need to buy vegetables, rice, and oil for the week.",
      dueDate: new Date(),
      status: "Pending",
      category: ["objective", "work", "personal"],
    },
  ],
  todo: null,
  user: null,
};

const useStore = create<Store & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,
      addToList: (item) => set({ list: [item, ...get().list] }),
      editList: (item) =>
        set({
          list: get().list.map((listItem) =>
            listItem.id === item.id ? item : listItem
          ),
        }),
      removeFromList: (id) =>
        set({
          list: get().list.filter((element) => !element.id.includes(id)),
        }),
      emptyList: () => set({ list: [] }),
      login: (user) => set({ user: user }),
      logout: () => set(initialState),
    }),
    { name: "listStore" }
  )
);

export default useStore;
