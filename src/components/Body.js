import { createBrowserRouter, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";






const Body = ({isLogin, setLogin}) => {
  
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login isLogin={isLogin} setLogin={setLogin}/>,
    },
    {
      path: "/browse",
      element: <Browse isLogin={isLogin} setLogin={setLogin}/>,
    },
  ]);

 

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
