"use client";
import { useState } from "react";
import Task from "./_components/Task";
import { useTasksStore } from "@/store/useTasksStore";
import { GiBearFace } from "react-icons/gi";
export default function Home() {
  let { tasks, addTask } = useTasksStore();
  let [inp, setInp] = useState("");
  let handleAddTask = () => {
    addTask(inp);
    setInp("");
  };
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl flex items-center justify-center md:text-6xl  mt-5">
        Zustand <GiBearFace className="mx-1" size={40} /> To Do List
      </h1>
      <div className="  w-full flex justify-center items-center h-[80vh]">
        <div className="max-w-full  sm:w-[500px]  ">
          <div className="flex items-center mb-5  gap-5">
            <label
              htmlFor="Username"
              className="relative w-full block rounded-md border py-2 border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
              <input
                onChange={(e) => setInp(e.target.value)}
                value={inp}
                type="text"
                className="peer border-none pl-2 w-full placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="title"
              />
              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Title
              </span>
            </label>
            <button
              onClick={handleAddTask}
              className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
              addTask
            </button>
          </div>
          <div className=" overflow-y-auto max-h-[400px]">
            {tasks.map((item) => (
              <Task key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <h4 className="fixed top-20 animate-bounce right-10 grid place-items-center bg-indigo-600 size-10 rounded-full text-white">
        {tasks.filter((item) => item.completed).length}
      </h4>
    </div>
  );
}
