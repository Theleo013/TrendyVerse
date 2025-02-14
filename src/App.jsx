import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { urls } from "./shared/urls";
import { RouterProvider } from "react-router";
import Home from "@/pages/Home";
import Layout from "@/shared/Layout";
import Basket from "@/pages/Basket";
import { ToastContainer } from "react-toastify";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        <Route path={urls.HOME} element={<Layout />}>
          <Route path={urls.HOME} element={<Home />} />
          <Route path={urls.BASKET} element={<Basket />} />
          {/* <Route path={urls.CONTACT} element={} */}
          {/* <Route path={urls.ABOUT} element={<About />} /> */}
          <Route path={urls.REGISTER} element={<Register />} />
          <Route path={urls.LOGIN} element={<Login />} />
        </Route>
      </React.Fragment>
    )
  );
  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
