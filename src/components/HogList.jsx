import React from "react";
import HogCard from "./HogCard";

export default function HogList({hogs, ...props}) {
    
    const cards = hogs.map((hog,index) => {
        return <HogCard key={hog.name} hog={hog}/>
    });

    return (
        <div className="ui three stackable">
            {cards}
        </div>
    );
};