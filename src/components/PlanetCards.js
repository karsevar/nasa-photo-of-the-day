import React from 'react';
import styled from 'styled-components';

// converted App.css style for className PlanetCard into a component.
const PlanetCard = styled.div`
    width: 100%;
    height: 380px;
    background: white;
    margin-bottom: 20px;
    border-radius: 5px;

    display: flex;
    justify-content: space-around;
    background-color: #F1F3F7
`;

// converted <img className='planet-image' /> styles into a component.
const PlanetImage = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 5px;

    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
`;

// convert planet-summary div layer into a component.
const PlanetSummary = styled.div`
    width: 50%;
    padding: 0px 40px 0px 20px;
    background-color: #E3EAF3
`;

// convert planet-summary paragraph into a component.
const PlanetParagraph = styled.p`
    overflow-y: scroll;
    height: 200px;
    background-color: #F1F3F7; 

    padding: 5px;
    border: 1px #E0E2E5 inset;
`;

// styles for h2 
const PlanetH2 = styled.h2`
    padding-bottom: 10px;
    border-bottom: 2px #ABADAF solid;
`;

const DateH4 = styled.h4`
    padding-bottom: 10px;
    border-bottom: 2px #ABADAF solid;
`;


function PlanetCards ({date, explanation, hdurl, title, copyright}) {
    return (
        <PlanetCard>
            {/* Curious if I need to include something else to have the styled components 
            take in alt and src attributes. Update Cool img styled-components take in attributes 
            without additional syntax.*/}
            <PlanetImage src={hdurl} alt={title} />
            <PlanetSummary>
                <PlanetH2>{title}</PlanetH2>
                <DateH4>{date}</DateH4>
                <PlanetParagraph>{explanation}</PlanetParagraph>
                <p>{copyright}</p>
            </PlanetSummary>
        </PlanetCard>
    )
}

export default PlanetCards;