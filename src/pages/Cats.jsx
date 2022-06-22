import React from "react";

import { useCats } from "../hooks/useCats";

import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import './Cats.scss'

export default function Cats() {
    const cats = useCats();

    return (
        <div >
            <PageTitle title="The Cats" />
            <div className="Cats">
                {cats.map((resp) => (
                    <Card
                        name={resp.name}
                        description={resp.description}
                        image={resp.image}
                        intelligence={resp.intelligence}
                        adaptability={resp.adaptability}
                        energyLevel={resp.energy_level}
                        socialNeeds={resp.social_needs}
                        key={resp.id}
                    />
                ))}
            </div>
        </div>
    )
}