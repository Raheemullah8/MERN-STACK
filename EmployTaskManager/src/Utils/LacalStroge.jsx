const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        title: "Task 1",
        description: "Complete the monthly report",
        date: "2025-02-07",
        category: "Reporting",
      },
      {
        active: true,
        completed: true,
        title: "Task 2",
        description: "Organize team meeting",
        date: "2025-02-06",
        category: "Meetings",
      },
      {
        active: false,
        completed: false,
        title: "Task 3",
        description: "Follow up on project progress",
        date: "2025-02-05",
        category: "Follow-up",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStroge = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStroge = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees, admin);
  return (admin, employees);
};
