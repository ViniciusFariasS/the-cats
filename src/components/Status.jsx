import React from "react";
import './Status.scss';

export default function Status(props) {
    let classes = 'status'
    classes += props.nada ? 'nada' : ''
    classes += props.pouco ? 'pouco' : ''
    classes += props.medio ? 'medio' : ''
    classes += props.muito ? 'muito' : ''
    classes += props.extremo ? 'extremo' : ''

    return (
        <div className="StatusCats">
            <div className={classes}>
            </div>
            <div className={classes}>
            </div>
            <div className={classes}>
            </div>
            <div className={classes}>
            </div>
            <div className={classes}>
            </div>
        </div>
    )
}

