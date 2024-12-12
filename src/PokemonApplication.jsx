import { useEffect, useState } from "react";
import "./App.css";
import "./Pokemon";
import Pokemon from "./Pokemon";

const pokemonApi = "https://pokeapi.co/api/v2/pokemon?limit=151";

function PokemonApplication() {
  //state för att spara listan
  const [pokemonLista, setPokemonLista] = useState([]);
  //state för att spara den pokemon som användaren har valt
  const [selectedPokemon, setSelectedPokemon] = useState("");
  // state för spara en specifik pokemons detaljer
  const [detailsData, SetDetailsdata] = useState();

  useEffect(() => {
    const getPokemonLista = async () => {
      const response = await fetch(pokemonApi);
      if (!response.ok) {
        throw new Error("Misslyckades att hämta pokemon data");
      }
      const pokemonData = await response.json();
      setPokemonLista(pokemonData.results);

      //console.log(pokemonData.results[0].name);
      /*pokemonData.results.forEach((pokemon) => {
        console.log(pokemon);
        console.log(pokemon.name);
      });*/
    };
    getPokemonLista();
  }, []);

  // funktion för att hämta den valda Pokemon detaljer

  const detailsApi = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;

  const getPokemonDetails = async () => {
    const response = await fetch(detailsApi);
    if (!response.ok) {
      throw new Error("Misslyckades att hämta pokemon data");
    }
    const details = await response.json();
    SetDetailsdata(details);
  };

  return (
    <div className="pokemonContainer">
      <h2> Select Pokémon to see Details</h2>

      <select
        id=""
        onChange={(e) => setSelectedPokemon(e.target.value)}
        value={selectedPokemon}
      >
        <option>Select Pokemon</option>

        {pokemonLista.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={getPokemonDetails} className="show">
        Show{" "}
      </button>

      {detailsData && <Pokemon Data={detailsData} />}
    </div>
  );
}

export default PokemonApplication;
