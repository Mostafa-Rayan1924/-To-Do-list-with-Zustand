"use client";
import useTasksStore from "@/store/useTasksStore";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Filteration = () => {
  const { makeAllCompleted, originalTasks, searchTask, optionsTasks } =
    useTasksStore();
  const [option, setOption] = useState("All");

  useEffect(() => {
    optionsTasks(option);
  }, [option, originalTasks]);

  return (
    <div className="my-5 flex items-center justify-center sm:justify-between flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <select
          value={option}
          onChange={(e) => {
            setOption(e.target.value);
          }}
          className="bg-darkBg p-1 hover:px-2 transition-all cursor-pointer outline-none duration-300 rounded">
          <option value="All">Default</option>
          <option value="rev">Reverse</option>
          <option value="completed">Completed</option>
          <option value="notcompleted">Not Completed</option>
        </select>

        <button
          onClick={() => {
            makeAllCompleted();
            toast.success("All Completed !");
          }}
          className="p-1 rounded hover:bg-indigo-800 transition-all duration-300 bg-indigo-600">
          Make All Completed
        </button>
      </div>

      {/* البحث */}
      <div>
        <input
          onChange={(e) => searchTask(e.target.value)} // البحث في التاسكات
          type="search"
          className="py-1.5 pl-2 w-[300px] outline-none rounded bg-darkBg"
          placeholder="Search..."
        />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default Filteration;
