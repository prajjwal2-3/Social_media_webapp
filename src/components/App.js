import Browse from "./Browse.tsx";
import Signup from "./Signup.tsx";
import { createBrowserRouter,Outlet,useNavigate } from 'react-router-dom';
import { useSelector, UseSelector } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Header.tsx";
import Home from "./Home.js";
import { useState } from "react";
function App() {
  const isuser = localStorage.getItem("username")
  // const isuser = useSelector((state)=>state.user.user)
//  const isuser=true
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          {isuser ? (
            <Route path='/' element={<Browse />} />
          ) : (
            <Route path='/' element={<Signup />} />
          )}
        </Routes>   
       </BrowserRouter>
    </div>
  );
}


export default App;
