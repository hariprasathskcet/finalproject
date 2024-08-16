import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddView from "./components/AddView";
import Home from "./Home";
import LastPage from "./lastPage";
import Login from "./Login";
import Register from "./Register";
import About from "./About";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Register/>
  },
  {
    path:"/About",
    element:<About></About>
  },
  {
    path:"/AddView",
    element:<AddView/>
  },
{
  path:"/lastPage",
  element:<LastPage></LastPage>
},
{
  path:"/home",
  element:<Home/>
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);