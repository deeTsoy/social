import s from'./ProfileInfo.module.css';
import React from 'react';
import { useState } from 'react';


const ProfileStatus= (props) => {
const [status, setStatus] = useState('status');
const [editer,setEditer] = useState(false);

const activateEditor =() =>{
    setEditer(true);
}
const deActivateEditor =() =>{
    setEditer(false);
} 
    return(
        <div>
            {!editer &&
                <div> 
                    <span onDoubleClick={activateEditor}>{status}</span>
                </div> 
            }
            {editer &&
                <div> 
                    <input autoFocus ={true} onBlur = {deActivateEditor} value = {status}></input>
                </div>
            } 
        </div>
    ) 
}

export default ProfileStatus;