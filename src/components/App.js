import Browse from "./Browse.tsx";
import Signup from "./Signup.tsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
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
