import React from "react";
import './PageTitle.scss'

export default function PageTitle(props) {
    return (
        <div className="PageTitle">
            <h1>{props.title}</h1>        
        </div>
    )
}