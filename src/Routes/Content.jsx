import React from "react";
import { Routes, Route } from 'react-router-dom';

import './Content.scss'

import Home from "../pages/Home";
import Cats from "../pages/Cats";


export default function Content() {
    return (
        <main className="Content">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Cats" element={<Cats />} />
            </Routes>
        </main>
    )
}