import "./App.css";

const Pokemon = ({ Data }) => {
  const { name, sprites, types, weight, height } = Data;
  return (
    <div className="pokemonCard">
      <img src={sprites.front_default} className="pokemon-img" />
      <h2>{name}</h2> <p>Type: {types.map((type) => type.type.name)}</p>
      <p>Vikt: {weight} kg</p>
      <p>Längd: {height} m</p>
    </div>
  );
};

export default Pokemon;
