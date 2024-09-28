"use client";

import AddTask from "./_components/AddTask";
import Filteration from "./_components/Filteration";
import Tasks from "./_components/Tasks";

export default function Home() {
  return (
    <div className="max-w-4xl   flex justify-center items-start mx-auto ">
      <div className="container max-h-[650px] sm:max-h-[550px] overflow-y-auto bg-cardDark p-2 sm:py-2.5 sm:px-4 rounded-lg mx-3 sm:mx-0  my-20  ">
        <h2 className="text-center text-3xl my-5 uppercase">
          Personal Todo List
        </h2>
        <AddTask />
        <Filteration />
        <Tasks />
      </div>
    </div>
  );
}
