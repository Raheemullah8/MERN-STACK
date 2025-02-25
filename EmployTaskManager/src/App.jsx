import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployDashbord from "./Components/Dashbord/EmployDashbord";
import AdminDashbord from "./Components/Dashbord/AdminDashbord";
import { AuthContext } from "./Context/ContextProvider";

function App() {

  const AuthData = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [lodiginUser ,setLogdinUser] = useState(null)

  useEffect(()=>{
     const employees = localStorage.getItem('LogdinUser');
     if(employees){
      const userData = JSON.parse(employees)
      setUser(userData.role);
      setLogdinUser(userData.data);
     }
  },[])
  const handleLogin = (email, password) => {

    if (email == "admin@me.com" && password == "123") {
      setUser({role:"admin"});
      localStorage.setItem("LogdinUser", JSON.stringify({role:'admin'}));

    } else if (AuthData) {
      const employee = AuthData.employees.find((e)=>(email == e.email && e.password == password));
      if(employee){
        setLogdinUser(employee);
        setUser('employee');
        localStorage.setItem("LogdinUser", JSON.stringify({role:'employee',data:employee}));
      }
      

    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashbord changeUser={setUser} /> : (user == 'employee' ?<EmployDashbord changeUser={setUser} data={lodiginUser}/> : null ) }
    </>
  );
}

export default App;

