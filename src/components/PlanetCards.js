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

// convert planet-summary div layer into a component.
const PlanetSummary = styled.div`
    width: 50%;
`;

// convert planet-summary paragraph into a component.
const PlanetParagraph = styled.p`
    overflow-y: scroll;
    height: 200px;
`;


function PlanetCards ({date, explanation, hdurl, title, copyright}) {
    return (
        <PlanetCard >
            {/* Curious if I need to include something else to have the styled components 
            take in alt and src attributes. Update Cool img styled-components take in attributes 
            without additional syntax.*/}
            <PlanetImage src={hdurl} alt={title} />
            <PlanetSummary>
                <h2>{title}</h2>
                <h4>{date}</h4>
                <PlanetParagraph>{explanation}</PlanetParagraph>
                <p>{copyright}</p>
            </PlanetSummary>
        </PlanetCard>
    )
}

export default PlanetCards;