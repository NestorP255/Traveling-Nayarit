import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#036684', /* Color de fondo azul oscuro */
      color: '#fff', /* Texto blanco */
      textAlign: 'center', /* Centrar el texto */
      padding: '2rem', /* Espaciado general */
    }}>
      <p style={{
        margin: 0, /* Eliminar margen por defecto */
        fontSize: '1.2rem', /* Tamaño de fuente general */
      }}>
        Copyright © EQUIPO TRAVELING NAYARIT - All Rights Reserved | 2024 Agencia Viajes 'Traveling Nayarit'.
      </p>
      <style>
        {`
          /* Media query para pantallas pequeñas (max-width: 900px) */
          @media screen and (max-width: 900px) {
            footer {
              padding: 1rem; /* Reducción del espaciado en pantallas más pequeñas */
            }
            p {
              font-size: 1rem; /* Tamaño de fuente para pantallas más pequeñas */
            }
          }

          /* Media query para dispositivos de resolución baja (max-width: 600px) */
          @media screen and (max-width: 600px) {
            footer {
              padding: 0.5rem; /* Espaciado aún más reducido para dispositivos de baja resolución */
            }
            p {
              font-size: 0.9rem; /* Tamaño de fuente más pequeño en baja resolución */
            }
          }

          /* Media query para dispositivos muy pequeños (max-width: 480px) */
          @media screen and (max-width: 480px) {
            p {
              font-size: 0.8rem; /* Tamaño de fuente aún más reducido para dispositivos muy pequeños */
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
