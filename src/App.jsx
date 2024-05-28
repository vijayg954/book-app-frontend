import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider";
import About from "./components/About";
import Contactme from "./components/Contactme";
function App() {
  const [authuser,setauthuser]=useAuth()
  console.log(authuser)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/course" element={authuser?<Courses></Courses>:<Navigate to="/signup"></Navigate>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Contactme" element={<Contactme></Contactme>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
