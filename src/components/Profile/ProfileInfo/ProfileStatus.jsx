import s from'./ProfileInfo.module.css';
import React from 'react';
import { useState, useRef } from 'react';


const ProfileStatus= (props) => {
const [status, setStatus] = useState('status');
const [editer,setEditer] = useState(false);
const volue = useRef();

const activateEditor = () =>{
    setEditer(true);
}
const deActivateEditor = () =>{
    setEditer(false);
} 
const updateValue = () => {
    let text = volue.target.value;
    setStatus(text);
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
                    <input ref={volue} autoFocus ={true} onBlur = {deActivateEditor} value = {status}></input>
                </div>
            } 
        </div>
    ) 
}

export default ProfileStatus;