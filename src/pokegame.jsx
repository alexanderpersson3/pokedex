import React from 'react';
import Pokedex from './pokedex';

const Pokegame = (props) => {
  const hand1 = [];
  const hand2 = [];
  const data = [...props.data];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    hand1.push(data[randomIndex]);
    data.splice(randomIndex, 1);
  }

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    hand2.push(data[randomIndex]);
    data.splice(randomIndex, 1);
  }

  const hand1Experience = hand1.reduce(
    (total, pokemon) => total + pokemon.base_experience,
    0
  );
  const hand2Experience = hand2.reduce(
    (total, pokemon) => total + pokemon.base_experience,
    0
  );

  return (
    <div>
      {hand1.length > 0 && (
        <Pokedex
          data={hand1}
          experience={hand1Experience}
          isWinner={hand1Experience > hand2Experience}
        />
      )}
      {hand2.length > 0 && (
        <Pokedex
          data={hand2}
          experience={hand2Experience}
          isWinner={hand2Experience > hand1Experience}
        />
      )}
    </div>
  );
};

export default Pokegame;
