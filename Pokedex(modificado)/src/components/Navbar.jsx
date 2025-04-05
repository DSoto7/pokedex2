
import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Pokedex</div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/mycollection">Mi colección</a></li>
      </ul>
    </nav>
  );
}
