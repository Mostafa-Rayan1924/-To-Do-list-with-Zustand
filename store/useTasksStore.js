import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [],
  addTask: (title) =>
    set((state) => {
      return {
        tasks: [
          ...state.tasks,
          { id: Math.random(), title: title, completed: false },
        ],
      };
    }),
  delTask: (id) =>
    set((state) => {
      return {
        tasks: state.tasks.filter((item) => item.id != id),
      };
    }),
  doneTask: (id) =>
    set((state) => {
      let updatedTask = state.tasks.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      );
      return {
        tasks: updatedTask,
      };
    }),
  editTitleTask: (id, title) =>
    set((state) => {
      let updatedTask = state.tasks.map((item) =>
        item.id == id ? { ...item, title: title } : item
      );
      return { tasks: updatedTask };
    }),
}));
