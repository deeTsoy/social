import React from "react";
import { useForm } from "react-hook-form";

const NewMessageInput = (props) => {

    const { register, handleSubmit } = useForm();


    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
        <div>
            <textarea name="newMessageData" placeholder={"Enter your message"} {...register('newMessageData', 
            {   required: true,
                maxLength: 30,
                minLength: 5
            })} />
        </div>
        <button>Submit</button>
        </form>
    )
}
export default NewMessageInput;