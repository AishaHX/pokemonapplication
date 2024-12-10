import { useState } from "react";
import "./App.css";
import PokemonApplication from "./PokemonApplication";

/**
 *  Vid start av applikationen, ska användaren se en knapp med texten “Start Pokemon App”.
 *  Vid klick på knappen, ska <PokemonApplication> renderas i DOM:en.
 */
function App() {
  const [showPokemon, setShowPokemon] = useState(false);
  if (!showPokemon) {
    return (
      <div className="App">
        <button className="button" onClick={() => setShowPokemon(true)}>
          Start Pokemon App
        </button>
      </div>
    );
  }
  return <PokemonApplication />;
}

export default App;
