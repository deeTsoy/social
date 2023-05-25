import React from "react";
import { useForm } from "react-hook-form";





const NewPostInput = (props) => {


    const { register, handleSubmit, reset , formState: { errors } } = useForm();


    return (
        <form  onSubmit={handleSubmit(props.onSubmit)}>
        <div>
            <textarea name="newPostData" placeholder={"Enter your message"} {...register('newPostData',
            {   required: "Text are required!",
                maxLength: 30,
                minLength: 5,
            })} />
            {errors.newPostData && <div style={{color: "red" }}>{errors.newPostData.message}</div>}
        </div>
        <div>
            <button>Add post</button>
        </div>
        </form>
    )
}
export default NewPostInput;