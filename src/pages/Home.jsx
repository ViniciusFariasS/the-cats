import React, { useEffect, useState } from "react";

import PageTitle from "../components/PageTitle";
import './Home.scss'
import api from "../services/api";

export default function Home() {
    const [images, setImages] = useState([])

    useEffect(function () {
        api.get('images/search')
            .then((resp) => setImages(resp.data))
    }, [])

    const [image]  = images

    console.log(image);

    return (
        <div >
            <PageTitle title="The Cats" />
            <div className="Home">
                <img src={image?.url ? image.url : ''} alt="" />
            </div>
        </div>
    )
}