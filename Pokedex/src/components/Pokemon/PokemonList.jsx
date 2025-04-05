// PokemonList.jsx
import React from 'react';
import PokemonListItem from './PokemonListItem';
import '../../styles/pokemon.css';

export default function PokemonList({ pokemons, onAdd }) {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} onAdd={onAdd} />
      ))}
    </div>
  );
}
