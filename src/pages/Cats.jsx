import React, { useEffect, useState } from "react";

import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import './Cats.scss'
import Input from "../components/Input";
import api from "../services/api";

export default function Cats() {

    const [response, setResponse] = useState([])

    useEffect(function () {
        api.get("breeds")
            .then((resp) => setResponse(resp.data[1]))
    }, [])

    const [search, setSearch] = useState('')

    useEffect(function(){
        setResponse(response.find(search))
    },[search])

    return (
        <div className="Cats">
            <div>
                <div className="SearchCats">
                    <PageTitle title="The Cats" />
                    <div className="Search">
                        <Input placeholder='search' handleOnChange={e => setSearch(e.target.value)} />
                    </div>
                    <div className="CardsCat">
                        {response.length > 1 ? response.map(resp => {
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
                        }) : <Card
                            name={response.name}
                            description={response.description}
                            image={response.image}
                            temperament={response.temperament}
                            origin={response.origin}
                            intelligence={response.intelligence}
                            adaptability={response.adaptability}
                            energyLevel={response.energy_level}
                            socialNeeds={response.social_needs}
                            key={response.id}
                        />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}