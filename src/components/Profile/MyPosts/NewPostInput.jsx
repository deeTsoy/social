import React from "react";
import { useForm } from "react-hook-form";
import styles from "./MyPosts.module.css"




const NewPostInput = (props) => {


    const { register, handleSubmit, reset , formState: { errors } } = useForm({mode : "onBlur"});

    const onSubmit = (data)=> {
        props.addNewPost(data);
        reset();
    }
    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formControl + " " + (errors.newPostData ? styles.error : "")}>
            <textarea name="newPostData" placeholder={"Enter your message"} {...register('newPostData',
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
            {errors.newPostData && <div style={{color: "red" }}>{errors.newPostData.message}</div>}
        </div>
        <div>
            <button>Add post</button>
        </div>
        </form>
    )
}
export default NewPostInput;