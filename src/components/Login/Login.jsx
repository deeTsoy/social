import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css"

const Login = () => {

    const { register, handleSubmit, reset , formState: { errors }} = useForm();
    const handleRegistration = (data) => {
        console.log(data);
        reset(data);
    };

    return (
        <form onSubmit={handleSubmit(handleRegistration)}>
        <div className={styles.formControl + " " + (errors.name ? styles.error : "")}>
            <input name="name" placeholder={"name"} {...register('name', {   
                required: "Name are required!"
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
export default Login;
