import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    let location = useLocation();


    if (!isAuth) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }else{
      return <Component {...props} />;
    }
  };

  return RedirectComponent;
};

export default withAuthRedirect;
