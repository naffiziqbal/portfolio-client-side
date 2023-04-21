import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import Login from "../UserCredintial/Login";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div>Loading......</div>;
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default ProtectedRoutes;
