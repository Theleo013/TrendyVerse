import React from "react";
import { Header, Footer } from "@/shared/components";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/shared/components/ScrollToTop";

const Layout = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
