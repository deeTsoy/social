import {  useRef } from 'react';

function AddPhotoInput({ addPhoto }) {
    const onPhotoChangeHandler = (e) => {
        if (e.target.files) {
            addPhoto(e.target.files[0]);
        }
    };

    const inputRef = useRef(null);

    const selectFileHandler = () => {
        inputRef.current?.click();
    };

    return (
        <div>
            <button onClick={selectFileHandler}>
                Change avatar
            </button>
            <input
                style={{ display: 'none' }}
                ref={inputRef}
                type="file"
                onChange={onPhotoChangeHandler}
            />
        </div>
    );
}

export default AddPhotoInput;