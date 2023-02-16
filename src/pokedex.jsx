import React from "react";
import Pokecard from "./pokecard";

const Pokedex = (props) => {
  return (
    <div>
      {props.isWinner ? <h2 className="win">This hand wins!!</h2> : null}
      <p>Total experience: {props.experience}</p>
      <div className="flex gap-25 mt-10">
        {props.data?.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
