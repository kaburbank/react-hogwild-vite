import HogDetails from "./HogDetails";
import { useState } from "react";

export default function HogCard({ hog, ...props }) {
    const [ showDetails, setShowDetails ] = useState(false);
    const [ isHidden, setIsHidden ] = useState(false);

    function handleCardClick() {
        setShowDetails( ( previous ) => !previous );
    };

    if (isHidden) {
        return null;
    };

    return (
        <>
            <div aria-label="hog card" className="ui card eight wide column" onClick={ handleCardClick }>
                <div className="content">
                    <h3 className="header">{hog.name}</h3>
                </div>
                <div className="image">
                    <img alt={`Photo of ${hog.name || 'hog name'}`} src={hog.image} /> 
                </div>
                <div className="extra content">
                    { showDetails ? <HogDetails hog={hog} /> : null }
                    < button className="ui button" onClick={ (e) => setIsHidden( (previous) => ! previous )}> Hide Me </button>
                </div>
            </div>            
        </>
    );
};