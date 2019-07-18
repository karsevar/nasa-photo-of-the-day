import React from 'react';
import styled from 'styled-components';

// converted App.css style for className PlanetCard into a component.
const PlanetCard = styled.div`
    width: 100%;
    height: 380px;
    background: white;
    border: 1px red solid;

    display: flex;
    justify-content: space-around;
`;

// converted <img className='planet-image' /> styles into a component.
const PlanetImage = styled.img`
    width: 350px;
    height: 350px;

    margin-top: 20px;
    margin-left: 10px;
    margin-right: 20px;
`;


function PlanetCards ({date, explanation, hdurl, title, copyright}) {
    return (
        <PlanetCard >
            {/* Curious if I need to include something else to have the styled components 
            take in alt and src attributes */}
            <PlanetImage src={hdurl} alt={title} />
            <div className='planet-summary'>
                <h2>{title}</h2>
                <h4>{date}</h4>
                <p>{explanation}</p>
                <p>{copyright}</p>
            </div>
        </PlanetCard>
    )
}

export default PlanetCards;