import { create } from "zustand";

const useTasksStore = create((set, get) => ({
  Tasks: JSON.parse(localStorage.getItem("Tasks")) || [],
  originalTasks: JSON.parse(localStorage.getItem("Tasks")) || [],
  // إضافة Task جديدة
  addTask: (title) =>
    set((state) => {
      const newTasks = [
        ...state.originalTasks,
        { id: Math.random(), isCompleted: false, title },
      ];
      localStorage.setItem("Tasks", JSON.stringify(newTasks));
      return {
        Tasks: newTasks,
        originalTasks: newTasks,
      };
    }),

  // حذف Task
  delTask: (id) =>
    set((state) => {
      const updatedTasks = state.originalTasks.filter((task) => task.id !== id);
      localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
      return {
        Tasks: updatedTasks,
        originalTasks: updatedTasks,
      };
    }),

  // تعديل Task
  editTask: (id, msg) =>
    set((state) => {
      const updatedTasks = state.originalTasks.map((item) =>
        item.id === id ? { ...item, title: msg } : item
      );
      localStorage.setItem("Tasks", JSON.stringify(updatedTasks));

      return {
        Tasks: updatedTasks,
        originalTasks: updatedTasks,
      };
    }),

  // إتمام Task
  DoneTask: (id) =>
    set((state) => {
      const updatedTasks = state.originalTasks.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      );
      localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
      return {
        Tasks: updatedTasks,
        originalTasks: updatedTasks,
      };
    }),

  searchTask: (search) => {
    if (search == "") {
      set((state) => ({
        Tasks: state.originalTasks,
      }));
    } else {
      const filteredTasks = get().originalTasks.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      set({ Tasks: filteredTasks });
    }
  },
  makeAllCompleted: () => {
    set((state) => {
      let updatedTasks = state.originalTasks.map((item) => {
        return { ...item, isCompleted: true };
      });
      localStorage.setItem("Tasks", JSON.stringify(updatedTasks));

      return {
        Tasks: updatedTasks,
        originalTasks: updatedTasks,
      };
    });
  },
  optionsTasks: (option) => {
    switch (option) {
      case "All":
        set((state) => {
          return {
            Tasks: state.originalTasks,
          };
        });
        break;
      case "rev":
        // باخد نسخة منها قبل ما اعدلها عشان لو رجعت للافتراضي يرجع تاني
        const currentTasks = get().originalTasks.slice();
        const updatedTasks = [...currentTasks].reverse();
        set({ Tasks: updatedTasks });
        break;
      case "completed":
        const filteredTasksCompleted = get().originalTasks.filter(
          (item) => item.isCompleted
        );
        set({ Tasks: filteredTasksCompleted });
        break;

      case "notcompleted":
        const filteredTasksNotCompleted = get().originalTasks.filter(
          (item) => !item.isCompleted
        );
        set({ Tasks: filteredTasksNotCompleted });
        break;
      default:
        set((state) => ({
          Tasks: state.originalTasks,
        }));
        break;
    }
  },
}));

export default useTasksStore;
