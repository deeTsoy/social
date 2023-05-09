import React from "react";
import { useForm } from "react-hook-form";

const NewMessageInput = (props) => {

    const { register, handleSubmit } = useForm();


    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
        <div>
            <textarea name="newMessageData" placeholder={"Enter your message"} {...register('newMessageData')} />
        </div>
        <button>Submit</button>
        </form>
    )
}
export default NewMessageInput;