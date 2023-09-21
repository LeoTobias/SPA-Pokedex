import React, { useState } from "react";
import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`pokemon-card ${expanded ? "expanded" : ""}`}
      onClick={toggleExpansion}
    >
      <img src={pokemon.imagem} alt={pokemon.nome} />
      <h2>{pokemon.nome}</h2>
      {expanded && (
        <div className="pokemon-details">
          <p>Tipo: {pokemon.tipo}</p>
          <p>{pokemon.detalhes}</p>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
