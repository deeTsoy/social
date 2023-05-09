import React from "react";
import { useForm } from "react-hook-form";

const NewPostInput = (props) => {

    const { register, handleSubmit } = useForm();


    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
        <div>
            <textarea name="newPostData" placeholder={"Enter your message"} {...register('newPostData')} />
        </div>
        <button>Add post</button>
        </form>
    )
}
export default NewPostInput;