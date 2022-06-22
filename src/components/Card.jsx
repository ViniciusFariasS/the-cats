import React, { useEffect, useState } from "react";

import './Card.scss';

import cat from '../_assets/images/cat.png';

import Status from "./Status";

const Card = ({ name, description, image, intelligence, adaptability, energyLevel, socialNeeds }) => {
    return (
        <div className="Card">
            <div className="Title">
                <img src={image?.url ? image.url : cat} alt="gato" />
                <h1>{name}</h1>
            </div>
            <div className="ContentCard">
                <span>{description}</span>
            </div>
            <div className="Status">
                <Status pouco/>
                <span>{intelligence}</span>
                <span>{adaptability}</span>
                <span>{energyLevel}</span>
                <span>{socialNeeds}</span>
            </div>
        </div>
    )
}

export default Card