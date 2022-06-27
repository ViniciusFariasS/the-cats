import { useContext } from "react";

import { Navigate } from 'react-router-dom';
import cats from '../../_assets/images/TheCats.png'

import { AuthGoogleContext } from "../../contexts/authGoogle";

import './Login.scss'

import Button from "../../components/Button";

export default function Login() {
    const { signInGoogle, signed } = useContext(AuthGoogleContext)

    async function loginGoogle() {
        await signInGoogle();
    }
    if (!signed) {
        return (
            <div className="Login">
                <img src={cats}  />
                <Button text="Sign in with google" handleOnClick={loginGoogle} />
            </div>
        )
    } else {
        return <Navigate to="/home" />
    }
};