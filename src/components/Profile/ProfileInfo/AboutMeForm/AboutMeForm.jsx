import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import styles from "./AboutMeForm.module.css"

function AboutMeForm({aboutMe}) {
    const [editer,setEditer] = useState(false);
    const [localaboutMe, setLocalaboutMe] = useState(aboutMe)

    useEffect(() => {
        setLocalaboutMe(aboutMe);
      }, [aboutMe]);
    
    const activateEditor = () =>{
        setEditer(true);
    }
    const deActivateEditor = () =>{
        setEditer(false);
        updateUserAboutMe(localaboutMe);
    } 
    
    const onStatusChange = (e) => {
        setLocalaboutMe( e.currentTarget.value);
    }

    const { register, handleSubmit , setError, formState: { errors }} = useForm();
    
    const handleRegistration = async (data) => {
        try {
          await sdgsdgsgd(data.email, data.password, data.RememberMe);
        } catch (error) {
            setError("common", {
                type: "manual",
                message: "Failed to log in. Please check your credentials.",
              })
        }
      };

    return (
        <form onSubmit={handleSubmit(handleRegistration)}>
            <div>
            {!editer &&
                <div> 
                    <span onDoubleClick={activateEditor}>{localaboutMe || "NO local about Me"}</span>
                </div> 
            }
            {editer &&
                <div> 
                    <input 
                    autoFocus ={true} 
                    onChange={onStatusChange} 
                    onBlur = {deActivateEditor} 
                    name="fullName" 
                    placeholder={"full Name"} 
                    {...register('fullName', {   
                required: "Name!"
            })} />
                </div>
            } 
        </div>

        <button>Submit</button>
        </form>
    )
}

export default AboutMeForm;