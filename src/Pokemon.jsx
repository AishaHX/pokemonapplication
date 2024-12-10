/**
 * 
 komponenten ska visa ut följande data för användarens val av Pokemon:

    Namn

    Bild på Pokemon

    Typ/Typer din pokemon har (dvs “types” i API:et)

    Vikt

    Längd} 

 */

function Pokemon({ Data }) {
  const { name, sprites, types, weight, height } = Data;
  return (
    <div className="pokemonCard">
      <img src={sprites.front_default} />
      <p>Namn: {name}</p>
      <p>Type: {types.map((type) => type.type.name)}</p>
      <p>Vikt: {weight}</p>
      <p>Längd: {height}</p>
    </div>
  );
}

export default Pokemon;
