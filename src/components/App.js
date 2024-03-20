import Browse from "./Browse.tsx";
import Signup from "./Signup.tsx";
import { createBrowserRouter,Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Signup/>
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
