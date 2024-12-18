import React, { useState, useEffect } from 'react';
import logo from '../assets/imagenes/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 900); 
  };

  // Detectar cambio de tamaño de ventana
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#036684',
        color: '#fff',
        position: 'relative',
      }}
    >
      {/* Logo */}
      <a href="/" style={{ textDecoration: 'none' }}>
        <img
          src={logo}
          alt="Logo Equipo Traveling Nayarit"
          style={{ width: '150px', height: 'auto' }}
        />
      </a>

      {/* Botón hamburguesa */}
      {isMobile && (
        <button
          onClick={toggleMenu}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '2rem',
            cursor: 'pointer',
          }}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      )}

      {/* Menú */}
      <nav
        style={{
          position: isMobile ? 'absolute' : 'static',
          top: isMobile ? '100%' : 'auto',
          left: isMobile ? '0' : 'auto',
          right: isMobile ? '0' : 'auto',
          backgroundColor: isMobile ? '#036684' : 'transparent',
          display: isMobile && !isMenuOpen ? 'none' : 'flex',
          flexDirection: isMobile ? 'column' : 'row', 
          alignItems: isMobile ? 'center' : 'flex-end',
          padding: isMobile ? '1rem 0' : '0',
          zIndex: 10,
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row', 
            gap: isMobile ? '1rem' : '2rem',
          }}
        >
          <li>
            <a
              href="/destinos"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.2rem',
                display: 'block',
              }}
            >
              DESTINOS
            </a>
          </li>
          <li>
            <a
              href="/reservaciones"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.2rem',
                display: 'block',
              }}
            >
              RESERVACIONES
            </a>
          </li>
          <li>
            <a
              href="/contacto"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.2rem',
                display: 'block',
              }}
            >
              CONTACTO
            </a>
          </li>
          <li>
            <a
              href="/acercaDe"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.2rem',
                display: 'block',
              }}
            >
              SOBRE NOSOTROS
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
