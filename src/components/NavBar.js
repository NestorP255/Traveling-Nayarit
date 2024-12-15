import React from 'react';
//import logo from './assets/images/logo1.png';
import logo from '../assets/imagenes/logo.png'

const Navbar = () => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#036684',
      color: '#fff',
    },
    logo: {
      width: '200px',
      height: 'auto',
    },
    navbar: {
      listStyle: 'none',
      display: 'flex',
      gap: '1rem',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
    },
  };

  return (
    <header style={styles.header}>
      <div>
        <a href='/' style={styles.logo}>
        <img href='/' src={logo} alt="Equipo TRAVELING NAYARIT" style={styles.logo} />
        </a>
      </div>
      <nav>
        <ul style={styles.navbar}>
          <li><a href="/destinos" style={styles.navLink}>DESTINOS</a></li>
          <li><a href="/reservaciones" style={styles.navLink}>RESERVACIONES</a></li>
          <li><a href="/contacto" style={styles.navLink}>CONTACTO</a></li>
          <li><a href="/acercaDe" style={styles.navLink}>SOBRE NOSOTROS</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
