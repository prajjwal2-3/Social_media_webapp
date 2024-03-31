import Browse from "./Browse.tsx";
import Signup from "./Signup.tsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import Friends from "./Friends.tsx";
import News from "./News.tsx";
import Layout from "./Layout.tsx";

function App() {

const data = useSelector((state)=>state.user.user)
var [isUser, setIsUser] = useState(sessionStorage.getItem("username"));
useEffect(()=>{
  const storeduser = sessionStorage.getItem("username")
  if (storeduser !== isUser) {
    setIsUser(storeduser);
  }
},[data])
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
      
          {isUser ? (
            
            <Route path='/*' element={<Layout />} />
          
          ) : (
            <Route path='/' element={<Signup />} />
          )}
       
       
          
        </Routes>   
       </BrowserRouter>
    </div>
  );
}
export default App;
