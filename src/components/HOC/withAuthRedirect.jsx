import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const navigate = useNavigate();

    if (!isAuth) {
      navigate("/login");
      return null; // Render nothing while redirecting
    }

    return <Component {...props} />;
  };

  return RedirectComponent;
};

export default withAuthRedirect;
