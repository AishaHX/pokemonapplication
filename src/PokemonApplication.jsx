/**
 *
 * När <PokemonApplication/> renderas, ska det göras ett anrop mot API:et för att hämta data för samtliga 151 Pokemon, och spara datat i state.
 *  <PokemonApplication> ska ni sedan skapa dropdown-lista med samtliga namn på alla Pokemon som hämtats.
 *  Användaren ska kunna välja en Pokemon i dropdown-listan, och sedan klicka på knappen för att hämta data för sin valda Pokemon.
 */

import { useEffect, useState } from "react";
import "./App.css";
import "./Pokemon";
import Pokemon from "./Pokemon";

const pokemonApi = "https://pokeapi.co/api/v2/pokemon?limit=151";

function PokemonApplication() {
  //state för spara listan
  const [pokemonLista, setPokemonLista] = useState([]);
  //state för dropdown listan
  const [selectedPokemon, setSelectedPokemon] = useState("");
  // state för hämta en specifik pokemons data
  const [detailsData, SetDetailsdata] = useState();

  useEffect(() => {
    const getPokemonLista = async () => {
      const response = await fetch(pokemonApi);
      const pokemonData = await response.json();
      setPokemonLista(pokemonData.results);
      //fixa error handling här oxå

      //console.log(pokemonData.results[0].name);
      /*pokemonData.results.forEach((pokemon) => {
        console.log(pokemon);
        console.log(pokemon.name);
      });*/
    };
    getPokemonLista();
  }, []);

  // funktion för att hämta den valda pokemons information

  const detailsApi = "https://pokeapi.co/api/v2/pokemon/${selectedPokemon}";

  const getPokemonDetails = async () => {
    const response = await fetch(detailsApi);
    const details = await response.json();
    //fixa error handling här

    SetDetailsdata(details.results);
  };

  return (
    <div className="listaRendering">
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
      <button onClick={getPokemonDetails}>Show pokemon Details </button>
      // funkar inte riktigt här
      {detailsData && <Pokemon Data={detailsData} />}
    </div>
  );
}

export default PokemonApplication;
