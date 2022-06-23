import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import './Content.scss'

import Home from "../pages/Home";
import Cats from "../pages/Cats";
import Login from "../pages/Login/Login";
import Menu from "../components/Menu";

const PrivateRoute = ({ element: Element }) => {
    const authToken = sessionStorage.getItem('@AuthFirebase:token')
    return (
        authToken ?
            <>
                < Menu />
                <Element />
            </> : <Navigate to='/' />
    )
}

export default function Content() {
    return (
        <main className="Content">
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/home" element={<PrivateRoute element={Home} />} />
                <Route exact path="/cats" element={<PrivateRoute element={Cats} />} />
            </Routes>
        </main>
    )
}