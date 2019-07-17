import React from 'react';

function PlanetCards ({date, explanation, hdurl, title, copyright}) {
    return (
        <div className='planet-card'>
            <img className='planet-image' src={hdurl} />
            <div className='planet-summary'>
                <h2>{title}</h2>
                <h4>{date}</h4>
                <p>{explanation}</p>
                <p>{copyright}</p>
            </div>
        </div>
    )
}

export default PlanetCards;