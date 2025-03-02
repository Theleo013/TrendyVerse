import { urls } from "@/shared/urls";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRouteProfile = ({ children }) => {
  const { user } = useSelector((state) => state.auth) || {};

  if (!user) {
    return <Navigate to={urls.REGISTER} replace />;
  }

  return children;
};

export default ProtectedRouteProfile;
