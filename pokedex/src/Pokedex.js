import React from "react";
import PokemonCard from "./PokemonCard";
import data from "./data";
import "./Pokedex.css"

function Pokedex() {
  return (
    <div className="pokedex">
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Pokedex;