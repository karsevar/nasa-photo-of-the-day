import React, {useState, useEffect} from 'react';
import axios from 'axios';

import PlanetCards from './PlanetCards';

function Planets() {
    const [planet, setPlanet] = useState([]);
    
    useEffect(() => {
        axios 
            .get('https://api.nasa.gov/planetary/apod?api_key=v0uiXBdS2nDZXSwnqMZkNxa1d7014rZx6uL3khd6&date=2012-03-14')
            .then(response => {

                // API check a single object was returned.
                // console.log(response.data);

                // Keeping the useState() object as an array because I'm planning on obtaining 
                // multiple planet objects in the future.
                // console.log(response.data);

                // Will need to update the planet variable with new response data.
                // Can't create a planet array within the useEffect() hook.
                const planetObject = response.data 
                setPlanet([
                    planetObject
                ]);

                console.log(planetObject);
                
            })
            .catch(error => {
                console.log('error', error);
            })
    }, []);

    return (
        <div className='planets-container'>
            {planet.map(planetType => {
                return <PlanetCards 
                        date={planetType.date} 
                        explanation={planetType.explanation} 
                        hdurl={planetType.hdurl} 
                        />
            })}
        </div>
    )
}

export default Planets;