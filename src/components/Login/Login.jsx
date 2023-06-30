import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import { logIn } from "../Redux/authReducer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit , setError, formState: { errors }} = useForm();

  const captchaUrl = useSelector(state => state.auth.captchaUrl);
  const isAuth = useSelector(state => state.auth.isAuth);

  const handleRegistration = async (data) => {
    try {
        await dispatch(logIn(data.email, data.password, data.RememberMe, data.captcha));
    } catch (error) {
      setError("common", {
        type: "manual",
        message: "Failed to log in. Please check your credentials.",
      });
    }
  };

  if (isAuth) {
    navigate("/profile");
    return null;
  }

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div className={`${styles.formControl} ${errors.email ? styles.error : ""}`}>
        <input name="email" placeholder="email" {...register('email', {
          required: "Email is required!"
        })} />
      </div>
      <div className={`${styles.formControl} ${errors.password ? styles.error : ""}`}>
        <input type="password" name="password" placeholder="password" {...register('password', {
          required: "Password is required!"
        })} />
      </div>
      <div className={`${styles.formControl} ${errors.RememberMe ? styles.error : ""}`}>
        <input type="checkbox" name="Remember Me!"  {...register('RememberMe')} />
        {errors.email && <div style={{color: "red" }}>{errors.email.message}</div>}
        {errors.password && <div style={{color: "red" }}>{errors.password.message}</div>}
        <label>Remember Me!</label>
      </div>
      <button>Submit</button>
      {captchaUrl && (
        <div className={`${styles.formControl} ${errors.captcha ? styles.error : ""}`}>
          <input name="captcha" placeholder="captcha" {...register('captcha', {
            required: "Captcha is required!"
          })} />
        </div>
      )}
      {captchaUrl && <img src={captchaUrl} alt="Captcha" />}
    </form>
  );
};

export default Login;
