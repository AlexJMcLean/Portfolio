import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const { authData } = useSelector((state) => state.auth);
  console.log(authData);
  if (authData === null) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default PrivateRoute;
