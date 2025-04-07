import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Main from "./Components/Main";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true, element: <Home />
        },
        {
          path: "home", element: <Home />
        },
        {
          path: "users", element: <Users />
        },
      ]
    },
    
  ])
  
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
