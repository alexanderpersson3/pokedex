const Pokecard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt={props.name}
      />
      <p>Type: {props.type}</p>
      <p>Experience: {props.base_experience}</p>
    </div>
  );
};

export default Pokecard;
