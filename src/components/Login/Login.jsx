import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
            <input name="name" placeholder={"name"} {...register('name')} />
        </div>
        <div>
            <input type="password" name="password" placeholder={"password"} {...register('password')} />
        </div>
        <div>
            <input type="checkbox" name="Remember Me!"  {...register('RememberMe!')} />
            <label>Remember Me!</label>
        </div>
        <button>Submit</button>
        </form>
    )
}
export default Login;
