import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css"
import { connect } from "react-redux";
import { logIn } from "../Redux/authReducer";
import { useNavigate } from "react-router-dom";


const Login = ({logIn,isAuth, captchaUrl}) => {


    const { register, handleSubmit , setError, formState: { errors }} = useForm();

    const handleRegistration = async (data) => {
        console.log(data)
        try {
          await logIn(data.email, data.password, data.RememberMe, data.captcha);
        } catch (error) {
            setError("common", {
                type: "manual",
                message: "Failed to log in. Please check your credentials.",
              })
        }
      };

    
    let navigate = useNavigate();
    if(isAuth) {
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
        { captchaUrl &&  <div className={styles.formControl + " " + (errors.name ? styles.error : "")}>
            <input name="captcha" placeholder={"captcha"} {...register('captcha', {   
                required: "Name are captcha!"
            })} />
        </div> }
        {captchaUrl && <img src={captchaUrl}></img>}
        </form>
    )
}
const mapStateToProps =(state) => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
}) 

export default connect(mapStateToProps, {logIn} )(Login);
