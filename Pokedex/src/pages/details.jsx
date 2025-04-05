import { useParams, Link } from 'react-router-dom';
import { usePokemonDetail } from '../services/pockemonapi';

export const Details = () => {
  const { code } = useParams();
  const pokemon = usePokemonDetail(code);

  if (!pokemon) {
    return <p>Cargando datos del Pokémon...</p>;
  }

  return (
    <section className="p-4">
      <Link to="/" className="text-blue-500 underline">← Volver al Inicio</Link>

      <h1 className="text-3xl font-bold mt-4">{pokemon.name.toUpperCase()}</h1>

      <img
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        className="my-4 mx-auto"
      />

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Datos principales:</h2>
        <ul className="list-disc pl-5">
          <li>Altura: {pokemon.height}</li>
          <li>Peso: {pokemon.weight}</li>
          <li>Experiencia Base: {pokemon.base_experience}</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Tipos:</h2>
        <ul className="flex gap-2">
          {pokemon.types.map((typeInfo) => (
            <li key={typeInfo.slot} className="bg-gray-200 px-2 py-1 rounded">
              {typeInfo.type.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Habilidades:</h2>
        <ul className="list-disc pl-5">
          {pokemon.abilities.map((abilityInfo) => (
            <li key={abilityInfo.ability.name}>{abilityInfo.ability.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
