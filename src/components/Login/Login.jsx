import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css"
import { connect } from "react-redux";
import { logIn } from "../Redux/authReducer";
import { useNavigate } from "react-router-dom";


const Login = (props) => {

    const { register, handleSubmit , setError, formState: { errors }} = useForm();
    const handleRegistration = async (data) => {
        try {
          await props.logIn(data.email, data.password, data.RememberMe);
        } catch (error) {
            setError("common", {
                type: "manual",
                message: "Failed to log in. Please check your credentials.",
              })
        }
      };
    
    let navigate = useNavigate();
    if(props.isAuth) {
        return navigate("/profile");
    }


    return (
        <form onSubmit={handleSubmit(handleRegistration)}>
        <div className={styles.formControl + " " + (errors.name ? styles.error : "")}>
            <input name="email" placeholder={"email"} {...register('email', {   
                required: "Name are email!"
            })} />
        </div>
        <div className={styles.formControl + " " + (errors.password ? styles.error : "")}>
            <input type="password" name="password" placeholder={"password"} {...register('password', {   
                required: "Password are required!"
            })} />
        </div>
        <div className={styles.formControl + " " + (errors.RememberMe ? styles.error : "")}>
            <input type="checkbox" name="Remember Me!"  {...register('RememberMe')} />
            {errors.name && <div style={{color: "red" }}>{errors.name.message}</div>}
            {errors.password && <div style={{color: "red" }}>{errors.password.message}</div>}
            <label>Remember Me!</label>
        </div>
        <button>Submit</button>
        </form>
    )
}
const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth
}) 

export default connect(mapStateToProps, {logIn} )(Login);
