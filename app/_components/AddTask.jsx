"use client";
import useTasksStore from "@/store/useTasksStore";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlusCircle } from "react-icons/fa";

const AddTask = () => {
  let { Tasks, addTask } = useTasksStore();
  let [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTask(title);
        setTitle("");
        toast.success("Task Added Successfully !");
      }}
      className="flex items-center gap-2 ">
      <label
        htmlFor="Tilte"
        className="relative block rounded-md w-full border border-slate-800 py-2 text-textSmDark pl-4 shadow-sm focus-within:border-slate-600 focus-within:ring-1 focus-within:ring-slate-800">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="Tilte"
          required
          className="peer border-none w-full bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder="Enter Your Title Task"
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs text-white  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Title
        </span>
      </label>
      <button className="size-10 rounded-lg grid place-items-center bg-slate-800 text-white">
        <FaPlusCircle color="white" size={20} />
      </button>
      <Toaster position="bottom-right" reverseOrder={false} />
    </form>
  );
};

export default AddTask;
