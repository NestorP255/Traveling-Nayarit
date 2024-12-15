import React from 'react';
import '../CSS/estilo.css'; // Para los estilos CSS
import sayulita from '../assets/imagenes/Calle-sayulita.jpg';

function ContactPage() {
  return (
    <div>
      <section className="main">
        <section id="contacto" className="contact-section">
          <div className="contact-info">
            <img src={sayulita} alt="Imagen de contacto" style={{ width: '500px' }} />
            <h2> TravNayarit@gmail.com</h2>
            <h2>¡Estamos aquí para hacer realidad el viaje de sus sueños!</h2>
          </div>

          <div className="contact-form">
            <p style={{ fontSize: 'large' }}>
              Si tienes alguna duda o consulta, no dudes en enviarnos un mensaje. <br /> Estaremos encantados de ayudarte.
            </p>
            <form action="https://formsubmit.co/jogagarciata@ittepic.edu.mx" method="POST">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="mensaje">Comentarios:</label>
              <textarea id="mensaje" name="mensaje" style={{ width: '471px', height: '78px' }} required></textarea>

              <button className="eligeAventura">Enviar</button>
            </form>
          </div>
        </section>
      </section>

      <footer className="footer">
        <h2>
          Copyright © EQUIPO TRAVELING NAYARIT - All Rights Reserved | 2024 Agencia Viajes 'Traveling Nayarit'.
        </h2>
      </footer>
    </div>
  );
}

export default ContactPage;
