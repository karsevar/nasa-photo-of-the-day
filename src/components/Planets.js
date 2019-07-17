import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Planets() {
    const [planet, setPlanet] = useState([]);
    
    useEffect(() => {
        axios 
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log('error', error);
            })
    })
}

export default Planets;