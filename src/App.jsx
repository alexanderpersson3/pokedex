import React from 'react';
import Pokedex from './pokedex';
import Pokegame from './pokegame';
import './App.css';

const App = (props) => {
  return <Pokegame data={props.data} />;
};

export default App;
