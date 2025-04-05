import { usePokemonList, getPokemonImg } from '../services/pockemonapi';
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  const { results: pokemones } = usePokemonList();

  return (
    <section>
      <h1>Pokedex</h1>

      <div className="grid grid-cols-3 gap-4">
        {pokemones.map((pokemon) => {
          const { code, imgSprite } = getPokemonImg(pokemon.url);
          return (
            <article key={pokemon.name} className="border p-4 rounded">
              <img src={imgSprite} alt={pokemon.name} />
              <h2>{pokemon.name}</h2>
              <Link to={`/details/${code}`}>Ver detalles</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};
