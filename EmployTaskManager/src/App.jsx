import React, { useContext, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployDashbord from "./Components/Dashbord/EmployDashbord";
import AdminDashbord from "./Components/Dashbord/AdminDashbord";
import { AuthContext } from "./Context/ContextProvider";


function App() {

  const AuthData = useContext(AuthContext);
  

  const [user, setUser] = useState(null);
  const [lodiginUser ,setLogdinUser] = useState(null)

  const handleLogin = (email, password) => {

    if (email == "admin@me.com" && password == "123") {
      setUser({role:"admin"});
      localStorage.setItem("LogdinUser", JSON.stringify({role:'admin'}));

    } else if (AuthData) {
      const employees = AuthData.employees.find((e)=>(email == e.email && e.password == password));
      if(employees){
        setLogdinUser(employees);
        setUser({role:employees});
        localStorage.setItem("LogdinUser", JSON.stringify({role:'employee'}));
      }
      

    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashbord /> : <EmployDashbord data={lodiginUser} />}
    </>
  );
}

export default App;
