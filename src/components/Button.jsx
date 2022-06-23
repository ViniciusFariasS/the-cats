import React from "react";
import './Button.scss';

export default function Button({ text, handleOnClick, flag }) {
    return (
        <div >
            <button className='Btn' hidden={flag} onClick={handleOnClick}>{text}</button>
        </div>
    )
}