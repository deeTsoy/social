import React from 'react';
import { useState, useEffect } from 'react';


const ProfileStatus= ({updateUserStatus, status}) => {
const [editer,setEditer] = useState(false);
const [localStatus, setLocalStatus] = useState(status)

useEffect(() => {
    setLocalStatus(status);
  }, [status]);

const activateEditor = () =>{
    setEditer(true);
}
const deActivateEditor = () =>{
    setEditer(false);
    updateUserStatus(localStatus);
} 

const onStatusChange = (e) => {
    setLocalStatus( e.currentTarget.value);
}
    return(
        <div>
            {!editer &&
                <div> <b>Status: </b>
                    <span onDoubleClick={activateEditor}>{localStatus || "NO Status"}</span>
                </div> 
            }
            {editer &&
                <div> 
                    <input autoFocus ={true} onChange={onStatusChange} onBlur = {deActivateEditor}></input>
                </div>
            } 
        </div>
    ) 
}

export default ProfileStatus;