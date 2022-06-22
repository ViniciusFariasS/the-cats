import React from "react";
import './Menu.scss'

import cat from '../_assets/images/TheCats.png';

import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <aside className="Menu">
            <nav>
                <img src={cat} alt="The Cats" />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Cats">Cats</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}