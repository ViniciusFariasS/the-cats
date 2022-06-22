import React, { useEffect, useState } from "react";
import api from "../services/api";


export const useCats = () => {
    const [response, setResponse] = useState([])

    useEffect(function () {
        api.get("breeds")
            .then((resp) => setResponse(resp.data))
    }, [])

    return response;
}
