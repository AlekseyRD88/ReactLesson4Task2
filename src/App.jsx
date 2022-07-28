import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return(
    <>
    <Clock location="New York" />
    <Clock location="Kyiv" />
    <Clock location="London" />
    </>
  );
};

export default App;