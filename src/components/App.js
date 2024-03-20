import Browse from "./Browse.tsx";
import Signup from "./Signup.tsx";
import { createBrowserRouter,Outlet,useNavigate } from 'react-router-dom';
import { useSelector, UseSelector } from "react-redux";
import Header from "./Header.tsx";
function App() {

  return (
    <div className="App">
      <Header/>
<Outlet/>
    </div>
  );
}
export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
       path:'/login',
       element:<Signup/>
      },
      {
        path:'/browse',
        element:<Browse/>
      }
    ]
  }
])

export default App;
