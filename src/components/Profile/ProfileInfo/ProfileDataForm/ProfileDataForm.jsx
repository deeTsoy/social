import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import styles from "./ProfileDataForm.module.css"

 const ProfileDataForm =({profile, updateContacts}) => {
    const [localContacts, setLocalContacts] = useState(profile.contacts)

    useEffect(() => {
        setLocalContacts(profile.contacts);
      }, [localContacts]);
    
    const onContactsChange = (e) => {
        profile.contacts( e.currentTarget.value);
    }

    const { register, handleSubmit } = useForm();
    
    const handleSave =  (data) => {
       console.log(data)
      };

    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <div>
                <div> 
                    <input 
                    autoFocus ={true} 
                    onChange={onContactsChange}  
                    name="full Name" 
                    placeholder={"full Name"} 
                    {...register('fullName', {   
                required: "Name!"
            })} />
                </div>
                <div> 
                    <input 
                    autoFocus ={true} 
                    onChange={onContactsChange}  
                    name="Looking for a job" 
                    placeholder={"Looking for a job"}
                    {...register('LookingForJob', {   
                required: "LookingForJob!"
            })} />
                </div>
                <div> 
                    <input 
                    autoFocus ={true} 
                    onChange={onContactsChange}  
                    name="Skills" 
                    placeholder={"Skills"} 
                    {...register('Skills', {   
                required: "Skills!"
            })} />
                </div>
                <div> 
                    <input 
                    autoFocus ={true} 
                    onChange={onContactsChange}  
                    name="Contacts" 
                    placeholder={"Contacts"} 
                    {...register('Contacts', {   
                required: "Contacts!"
            })} />
                </div>
            </div>

        <button>Submit</button>
        </form>
    )
}

export default ProfileDataForm;