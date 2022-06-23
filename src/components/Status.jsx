import React, { useEffect } from "react";
import './Status.scss';

export default function Status({ status }) {

    function setStatus(status) {
        let value = '';

        switch (status) {
            case 0:
                return value = 'zero';
            case 1:
                return value = 'one';
            case 2:
                return value = 'two';
            case 3:
                return value = 'three';
            case 4:
                return value = 'four';
            case 5:
                return value = 'five';
        }
    }
    
    return (
        <div className="StatusCats">
            <div className={`${setStatus(status)}`}>
            </div>
        </div>
    )
}

