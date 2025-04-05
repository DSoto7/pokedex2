import React from 'react';

export default function PokemonListItem({ pokemon, onAdd }) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Tipo: {pokemon.type}</p>
      <button onClick={() => onAdd(pokemon)}>Agregar</button>
    </div>
  );
}
