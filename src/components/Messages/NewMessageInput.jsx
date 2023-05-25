import React from "react";
import { useForm } from "react-hook-form";

const NewMessageInput = (props) => {

    const { register, handleSubmit, reset , formState: { errors } } = useForm({mode : "onBlur"});


    const onSubmit = (data)=> {
        props.onSubmit(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <textarea name="newMessageData" placeholder={"Enter your message"} {...register('newMessageData', 
            {   required: "Text are required!",
                maxLength:  {
                    value : 50,
                    message: 'need less!'
                },
                minLength: {
                    value : 5,
                    message: 'need more!'
                }
            })} />
            {errors.newMessageData && <div style={{color: "red" }}>{errors.newMessageData.message}</div>}
        </div>
        <button>Submit</button>
        </form>
    )
}
export default NewMessageInput;