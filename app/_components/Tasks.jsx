"use client";
import useTasksStore from "@/store/useTasksStore";
import Task from "./Task";
import { useEffect } from "react";

const Tasks = () => {
  let { Tasks, initializeTasks } = useTasksStore();
  useEffect(() => {
    if (typeof window !== "undefined") {
      initializeTasks();
    }
  }, []);

  return (
    <div>
      <h2 className="text-textSmDark mb-5">All Tasks Note Here...</h2>
      <div className="flex flex-col   gap-4 divide-y-2 divide-slate-800 mb-5">
        {Tasks.length > 0 ? (
          Tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))
        ) : (
          <h2 className="text-center text-2xl text-textSmDark">No Tasks Yet</h2>
        )}
      </div>
    </div>
  );
};

export default Tasks;
