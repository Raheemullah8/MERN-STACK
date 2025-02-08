import React, { useContext, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployDashbord from "./Components/Dashbord/EmployDashbord";
import AdminDashbord from "./Components/Dashbord/AdminDashbord";
import { AuthContext } from "./Context/ContextProvider";


function App() {

  const data = useContext(AuthContext);
  console.log(data);

  const [user, setUser] = useState("");

  const handleLogin = (email, password) => {

    if (email == "admin@me.com" && password == "123") {
      setUser("admin");

    } else if (email == "user@me.com" && password == "123") {
      setUser("user");

    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashbord /> : <EmployDashbord />}
    </>
  );
}

export default App;
