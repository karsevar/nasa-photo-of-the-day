import React, {useState, useEffect} from 'react';
import axios from 'axios';

import PlanetCards from './PlanetCards';

function Planets() {
    const [planet, setPlanet] = useState([]);
    
    useEffect(() => {

        // Will need to create a for loop to log mulitple planet queries on the dom.
        const counter = 25;

        // const dateArray = ['2012-03-14','2012-03-15','2012-03-16','2012-03-17', '2012-03-18'];

        for(let i=0; i < counter; i++) {

            axios 
                .get(`https://api.nasa.gov/planetary/apod?api_key=v0uiXBdS2nDZXSwnqMZkNxa1d7014rZx6uL3khd6&date=2012-03-${14+i}`)
                .then(response => {

                    // API check a single object was returned.
                    // console.log(response.data);

                    // Keeping the useState() object as an array because I'm planning on obtaining 
                    // multiple planet objects in the future.
                    // console.log(response.data);

                    // Will need to update the planet variable with new response data.
                    // Can't create a planet array within the useEffect() hook.
                    const planetObject = response.data 

                    setPlanet( previousState => {
                        return [...previousState, planetObject]
                    }
                    );
                    
                })
                .catch(error => {
                    console.log('error', error);
                })
            }
        
        }, []); 
    
    
    

    return (
        <div className='planets-container'>
            {console.log('useState', planet)}
            {planet.map(planetType => {
                return <PlanetCards 
                        date={planetType.date} 
                        explanation={planetType.explanation} 
                        hdurl={planetType.hdurl}
                        title={planetType.title}
                        copyright={planetType.copyright} 
                        />
            })}
        </div>
    )
}

export default Planets;