import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { urls } from "@/shared/urls";
import { RouterProvider } from "react-router";
import Home from "@/pages/Home";
import Layout from "@/shared/Layout";
import Basket from "@/pages/Basket";
import { ToastContainer } from "react-toastify";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Checkout from "@/pages/Checkout";
import Wishlist from "@/pages/Wishlist";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ProtectedRoute from "@/shared/components/ProtectedRoute";
import CategoryPage from "@/pages/CategoryPage";
import PageNotFound from "@/pages/PageNotFound";
import ProtectedRouteProfile from "@/shared/components/ProtectedRouteProfile";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        <Route path={urls.HOME} element={<Layout />}>
          <Route path={urls.HOME} element={<Home />} />
          <Route path={urls.BASKET} element={<Basket />} />
          <Route path={urls.CONTACT} element={<Contact />} />
          <Route path={urls.ABOUT} element={<About />} />
          <Route
            path={urls.REGISTER}
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path={urls.LOGIN}
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path={urls.PROFILE}
            element={
              <ProtectedRouteProfile>
                <Profile />
              </ProtectedRouteProfile>
            }
          />
          <Route path={urls.CHECKOUT} element={<Checkout />} />
          <Route path={urls.WISHLIST} element={<Wishlist />} />
          <Route path={urls.PRODUCT_ID} element={<ProductDetail />} />
          <Route path={urls.CATEGORY} element={<CategoryPage />} />
          <Route path={urls.NOT_fOUND} element={<PageNotFound />} />
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
