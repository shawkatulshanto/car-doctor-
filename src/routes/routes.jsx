import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/home/home/home";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>
      children:[
        {
            path: '/',
           element: <Home></Home>
        }
      ]
    },
  ]);


  export default router;