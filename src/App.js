import React from "react";
import styled from 'styled-components';

import Planets from './components/Planets';

// no more need for App.css
// import "./App.css";

/*
// import api key:

Get Your API Key
Your API key for masonkarsevar@gmail.com is:
v0uiXBdS2nDZXSwnqMZkNxa1d7014rZx6uL3khd6

// With actual student key:
https://api.nasa.gov/planetary/apod?api_key=v0uiXBdS2nDZXSwnqMZkNxa1d7014rZx6uL3khd6

// With demo key:
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14
// api example.


*/

// converting .App div layer into a styled-component.
const AppDiv = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppDiv>
      <Planets />
    </AppDiv>
  );
}

export default App;
