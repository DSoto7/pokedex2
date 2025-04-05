import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-around">
          <Link to="/">Inicio</Link>
          <Link to="/my-collection">Mi Colección</Link>
          <Link to="/about">Acerca de</Link>
        </nav>
      </header>

      <main className="p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 - Pokedex PW2</p>
      </footer>
    </>
  );
};
