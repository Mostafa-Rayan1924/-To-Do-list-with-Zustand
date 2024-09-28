"use client";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import useTasksStore from "@/store/useTasksStore";
import { GiClick } from "react-icons/gi";

const Task = ({ task, index }) => {
  let { delTask, editTask, DoneTask } = useTasksStore();
  let handleEditTask = () => {
    let prompt = window.prompt(`Edit Task : ${task.title}`);
    if (prompt) {
      editTask(task.id, prompt);
      toast.success("Task Edited Successfully !");
    } else {
      prompt = task.title;
      toast.error("Task Not Edited ");
    }
  };
  let handleDelTask = () => {
    let confirm = window.confirm("Are you sure you want to delete ?");
    if (confirm) {
      delTask(task.id);
      toast.success("Task Deleted Successfully !");
    }
  };
  let handleDoneTask = () => {
    DoneTask(task.id);
    toast.success("Task Edited Successfully !");
  };

  return (
    <div className="flex  items-center gap-3 sm:justify-between flex-wrap pt-3">
      <div className="flex items-center gap-4">
        <h2>{index + 1}.</h2>
        <h2
          className={`text-textSmDark ${
            task.isCompleted ? "line-through" : ""
          } `}>
          {task.title}
        </h2>
      </div>
      {/* actions */}
      <div className="flex items-center justify-center w-full sm:w-auto gap-2">
        <div
          onClick={handleEditTask}
          className="p-1 w-full sm:w-auto rounded bg-yellow-500 cursor-pointer transition-all duration-300 hover:bg-yellow-600 text-white">
          <MdEdit className="mx-auto" />
        </div>
        <div
          onClick={handleDelTask}
          className="p-1  w-full sm:w-auto rounded bg-red-500 cursor-pointer  transition-all duration-300 hover:bg-red-600 text-white">
          <MdDelete className="mx-auto" />
        </div>
        <div
          onClick={handleDoneTask}
          className={`p-1  w-full sm:w-auto  text-center rounded ${
            task.isCompleted
              ? "bg-green-500 hover:bg-green-600"
              : "bg-slate-800 hover:bg-slate-900"
          }  cursor-pointer  transition-all duration-300  text-white`}>
          {task.isCompleted ? (
            <MdFileDownloadDone className="mx-auto" />
          ) : (
            <GiClick className="mx-auto" />
          )}
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default Task;
