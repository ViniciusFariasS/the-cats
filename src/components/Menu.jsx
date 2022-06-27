import React, { useContext } from "react";

import { AuthGoogleContext } from "../contexts/authGoogle";

import './Menu.scss'

import { Link } from "react-router-dom";
import Button from "./Button";

export default function Menu() {
    const { user, signed, signOut } = useContext(AuthGoogleContext);

    return (
        <div className="Menu" >

            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Cats">Cats</Link>
                    </li>
                </ul>
            </nav>

            <div className="MenuButton">
                <span>Bem vindo {user?.displayName }</span>
                <Button text="Sair" handleOnClick={signOut} />
            </div>
        </div >
    )
}