import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ user }) => {
    if (user) {        
        return <Outlet />;
    }
    else {
        return <Navigate to={"/"} replace />;
    }
}

export default PrivateRoute;