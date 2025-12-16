import React from "react";
import HogTile from "./HogTile";

export default function HogList({hogs, ...props}) {
    
    const cards = hogs.map((hog,index) => {
        return <HogTile key={hog.name} hog={hog}/>
    });

    return (
        <div className="ui three stackable">
            {cards}
        </div>
    );
};