import { useContext } from "react"
import { AuthGoogleContext } from "../contexts/authGoogle"
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoutes = () => {
    const { signed } = useContext(AuthGoogleContext);
    return signed ? <Outlet /> : <Navigate to="/" />
}