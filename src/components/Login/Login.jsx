import React from "react";
import { Form, Field } from 'react-final-form'


const Login = () => {
    return (
        <Form>
            <div>
                <Field name="Login" component="input"/>
            </div>
            <div>
                <Field name="passward" component="input"/>
            </div>
        </Form>
    )
}
export default Login;