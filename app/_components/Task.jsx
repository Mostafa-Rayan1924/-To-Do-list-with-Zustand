"use client";
import { useTasksStore } from "@/store/useTasksStore";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const Task = ({ item }) => {
  let { delTask, doneTask, editTitleTask } = useTasksStore();
  let handleEdit = () => {
    let confirm = window.prompt(
      `are you want to edit ${item.title}`,
      item.title
    );
    if (confirm) editTitleTask(item.id, confirm);
  };
  return (
    <div
      className={`mx-5 border-2 transition-all duration-300 ${
        item.completed ? "border-indigo-600" : ""
      } p-2.5 rounded-lg mb-2`}>
      <div className="flex items-center gap-2 flex-wrap justify-between">
        <h2 className="text-xl font-bold">{item?.title}</h2>
        <div className="flex items-center gap-4">
          <input
            onChange={() => doneTask(item.id)}
            checked={item.completed}
            type="checkbox"
          />
          <button
            onClick={() => delTask(item.id)}
            class="size-10 text-center leading-5 rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            <MdDelete />
          </button>
          <button
            onClick={handleEdit}
            class="size-10  text-center rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            <MdEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
