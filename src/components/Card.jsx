import React, { useEffect, useState } from "react";

import './Card.scss';

import cat from '../_assets/images/cat.png';

import Status from "./Status";
import api from "../services/api";

const Card = ({ name, temperament, origin, image, intelligence, adaptability, energyLevel, socialNeeds }) => {

    //const [images, setImages] = useState([])

    // useEffect(function () {
    //     if (imageId !== '' && imageId !== null) {
    //         api.get(`images/${imageId}`)
    //             .then(resp => setImages(resp.data));
    //     }
    //     else {
    //         setImages(cat);
    //     }
    // }, [])

    return (
        <div className="Card">
            <div className="Title">
                <img src={image?.url ? image.url : cat} alt="cat" />
                <h3>{name}</h3>
            </div>
            <div className="ContentCard">
                <span><strong>Temperament: </strong> {temperament}</span>
                <span><strong>Origin: </strong>{origin}</span>
            </div>
            <div className="Status">
                <div className="StatusItem">
                    <span>Intelligence</span>
                    <Status status={intelligence} />
                </div>
                <div className="StatusItem">
                    <span>Adaptability</span>
                    <Status status={adaptability} />
                </div>
                <div className="StatusItem">
                    <span>Energy Level</span>
                    <Status status={energyLevel} />
                </div>
                <div className="StatusItem">
                    <span>Social Needs</span>
                    <Status status={socialNeeds} />
                </div>
            </div>
        </div>
    )
}

export default Card