import React, {useEffect } from "react";
import Login from "./Components/Auth/Login";
import EmployDashbord from "./Components/Dashbord/EmployDashbord";
import AdminDashbord from "./Components/Dashbord/AdminDashbord";
import { getLocalStroge, setLocalStroge } from "./Utils/LacalStroge";

function App() {
useEffect(()=>{
// setLocalStroge()
getLocalStroge()

})
  return (
    <>
      <Login />
      {/* <EmployDashbord/>  */}
      {/* <AdminDashbord/> */}
    </>
  );
}

export default App;
