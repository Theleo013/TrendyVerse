import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router";
import { urls } from "@/shared/urls";
import Layout from "@/shared/Layout";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "@/shared/components/ProtectedRoute";
import ProtectedRouteProfile from "@/shared/components/ProtectedRouteProfile";

const Home = lazy(() => import("@/pages/Home"));
const Contact = lazy(() => import("@/pages/Contact"));
const About = lazy(() => import("@/pages/About"));
const Basket = lazy(() => import("@/pages/Basket"));
const Register = lazy(() => import("@/pages/Register"));
const Login = lazy(() => import("@/pages/Login"));
const Profile = lazy(() => import("@/pages/Profile"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const Wishlist = lazy(() => import("@/pages/Wishlist"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const CategoryPage = lazy(() => import("@/pages/CategoryPage"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));

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
          <Route path={urls.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={urls.CATEGORY} element={<CategoryPage />} />
          <Route path={urls.NOT_fOUND} element={<PageNotFound />} />
        </Route>
      </React.Fragment>
    )
  );
  return (
    <React.Fragment>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
