import React from 'react';
import { useState } from 'react';


const ProfileStatus= (props) => {
const [editer,setEditer] = useState(false);
const [status, setStatus] = useState(props.status)

const activateEditor = () =>{
    setEditer(true);
}
const deActivateEditor = () =>{
    setEditer(false);
    props.updateStatus(status)
} 

const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
}
    return(
        <div>
            {!editer &&
                <div> 
                    <span onDoubleClick={activateEditor}>{props.status || "NO Status"}</span>
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