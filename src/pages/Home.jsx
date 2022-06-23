import React, { useContext, useEffect, useState } from "react";

import api from "../services/api";
import { AuthGoogleContext } from "../contexts/authGoogle";

import Button from "../components/Button";
import PageTitle from "../components/PageTitle";

import './Home.scss'
import Menu from "../components/Menu";

export default function Home() {
    const { user, signOut } = useContext(AuthGoogleContext);

    // let userLogado = JSON.parse(new user);

    // console.log(userLogado)

    const [images, setImages] = useState([])

    useEffect(function () {
        api.get('images/search')
            .then((resp) => setImages(resp.data))
    }, [])

    const [image] = images

    return (
        <div className="Home">
            <div>
                <PageTitle title="The Cats" />
            </div>
            <div className="">
                <img className="ImgHome" src={image?.url ? image.url : ''} alt="" />
            </div>
        </div>
    )
}