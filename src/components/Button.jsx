import React from "react";
import './Button.scss';

export default function Button({ text, handleOnClick}) {
    return (
        <div >
            <button className='Btn' onClick={handleOnClick}>{text}</button>
        </div>
    )
}