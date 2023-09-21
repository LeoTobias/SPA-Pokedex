import React from "react";

function DetalhesDoPokemon({ pokemon }) {
  return (
    <div className="pokemon-details">
      <img src={pokemon.imagem} alt={pokemon.nome} />
      <h2>{pokemon.nome}</h2>
      <p>Type: {pokemon.tipo}</p>
      <p>{pokemon.detalhes}</p>
    </div>
  );
}

export default DetalhesDoPokemon;
