import React from "react";

function TaskList() {
  return (
    <div className="flex gap-10 justify-evenly flex-wrap mt-10 ">

      <div className="bg-red-500 w-[20%] px-10 py-10 rounded-md ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-yellow-500 w-[20%] px-10 py-10 rounded-md ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-blue-500 w-[20%] px-10 py-10 rounded-md ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-green-500 w-[20%] px-10 py-10 rounded-md ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      
    </div>
  );
}

export default TaskList;
