import React, { useEffect, useState } from "react";

import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import './Cats.scss'
import Input from "../components/Input";
import api from "../services/api";

export default function Cats() {

    const [response, setResponse] = useState([])
    const [cats, setCats] = useState([]);

    useEffect(function () {
        api.get("breeds")
            .then((resp) => {
                setResponse(resp.data);
            })
    }, [])

    const [search, setSearch] = useState('')

    useEffect(function () {
        setCats(response);
    }, [response])

    useEffect(() => {
        setCats(response.filter(cat => cat.name.toLowerCase().match(search.toLowerCase())));
    }, [search])

    return (
        <div className="Cats">
            <div>
                <div className="SearchCats">
                    <PageTitle title="The Cats" />
                    <div className="Search">
                        <Input placeholder='search' handleOnChange={e => setSearch(e.target.value)} />
                    </div>
                    <div className="CardsCat">
                        {cats?.map(resp => (
                            <Card
                                name={resp.name}
                                description={resp.description}
                                image={resp.image}
                                temperament={resp.temperament}
                                origin={resp.origin}
                                intelligence={resp.intelligence}
                                adaptability={resp.adaptability}
                                energyLevel={resp.energy_level}
                                socialNeeds={resp.social_needs}
                                key={resp.id}
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}