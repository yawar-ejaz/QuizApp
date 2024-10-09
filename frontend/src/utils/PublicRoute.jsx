import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ user }) => {
  if (!user) {
    return <Outlet />;
  } else {
    return <Navigate to={"/dashboard"} replace />;
  }
};

export default PublicRoute;
