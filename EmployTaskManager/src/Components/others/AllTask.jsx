import React from 'react';

function AllTask() {
  // Dummy Task Data (Replace with API Data if needed)
  const tasks = [
    { id: 1, name: 'Raheem', title: 'Make A UI Design', status: 'Pending', bgColor: 'bg-red-400' },
    { id: 2, name: 'Ahmed', title: 'Develop Backend API', status: 'Completed', bgColor: 'bg-green-400' },
    { id: 3, name: 'Ali', title: 'Fix Bugs in UI', status: 'In Progress', bgColor: 'bg-blue-400' },
    { id: 4, name: 'Sara', title: 'Write Documentation', status: 'Review', bgColor: 'bg-yellow-400' },
    { id: 5, name: 'Hassan', title: 'Create Landing Page', status: 'Pending', bgColor: 'bg-purple-400' },
  ];

  return (
    <div className="w-full bg-[#1c1c1c] mt-10 p-5 overflow-auto">
      <h1 className="text-white text-2xl font-bold mb-5">All Tasks</h1>

      {/* Grid Layout for Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className={`p-4 rounded-lg shadow-lg ${task.bgColor} text-white`}>
            <h2 className="text-lg font-semibold">{task.name}</h2>
            <h3 className="text-md">{task.title}</h3>
            <h4 className="text-sm font-light mt-1">Status: {task.status}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;
