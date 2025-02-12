

const employees = [
  {
    "id": 1,
    "firstname": "Ahmed",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "new": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Complete Report",
        "taskDescription": "Prepare the quarterly report for management.",
        "taskDate": "2025-02-14",
        "taskCategory": "Report",
        "active": true,
        "new": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Bilal",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "new": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Update Website Content",
        "taskDescription": "Revise the homepage content with the latest info.",
        "taskDate": "2025-02-13",
        "taskCategory": "Content",
        "active": true,
        "new": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Sara",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "new": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Team Workshop",
        "taskDescription": "Conduct a workshop on new project methodologies.",
        "taskDate": "2025-02-13",
        "taskCategory": "Training",
        "active": true,
        "new": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Fatima",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "new": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Prepare Marketing Strategy",
        "taskDescription": "Create a new marketing strategy for the upcoming product launch.",
        "taskDate": "2025-02-14",
        "taskCategory": "Marketing",
        "active": true,
        "new": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Zain",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "new": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Audit Financial Records",
        "taskDescription": "Review and audit the financial records for the quarter.",
        "taskDate": "2025-02-14",
        "taskCategory": "Finance",
        "active": true,
        "new": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];





  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Review Employee Performance",
          "taskDescription": "Review the performance evaluations for all employees.",
          "taskDate": "2025-02-13",
          "taskCategory": "HR",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update System Software",
          "taskDescription": "Ensure all systems are updated with the latest security patches.",
          "taskDate": "2025-02-14",
          "taskCategory": "IT",
          "active": true,
          "new": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]
  
  

export const setLocalStroge = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStroge = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees, admin);
  
  // Return both admin and employees in an object
  return { admin, employees };
};

