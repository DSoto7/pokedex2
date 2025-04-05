import { getPokemonImg } from '../services/pockemonapi';
import { Link } from 'react-router-dom';

export const MyCollection = () => {
  const collection = JSON.parse(localStorage.getItem('myCollection')) || [];

  return (
    <section>
      <h1>Mi Colección</h1>

      {collection.length === 0 ? (
        <p>No tienes pokemones en tu colección.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {collection.map((pokemon) => {
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
      )}
    </section>
  );
};
