import React from 'react';
import '../CSS/estilo.css'; 
import Footer from '../components/Footer';

function AcercaDe() {
  return (
    <div>

      <div className="background"></div>
      <section>
        <div className="container2">
          <div className="content2" style={{ width: '100%', height: '100%', fontSize: 'large' }}>
            <h1 style={{ textAlign: 'center', fontSize: 'xxx-large', color: 'black' }}>Acerca de nosotros...</h1>
            <br />
            <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
              Bienvenidos a nuestra agencia turística, dedicada a brindar experiencias de viaje inolvidables en Nayarit, ubicado en la costa del Pacífico Mexicano.
            </p>
            <h2 style={{ color: 'black' }}>Misión</h2>
            <p style={{ color: 'black' }}>
              Nuestra misión es mostrar la riqueza natural y cultural de la región a través de nuestras recomendaciones turísticas, actividades emocionantes y experiencias inolvidables.
            </p>
            <br />
            <h2 style={{ color: 'black' }}>Visión</h2>
            <p style={{ color: 'black' }}>
              Buscamos convertirnos en líderes en la promoción y exploración de destinos turísticos, brindando a nuestros usuarios la oportunidad de descubrir la belleza y diversidad de Nayarit.
            </p>
            <br />
            <h2 style={{ color: 'black' }}>Equipo</h2>
            <p style={{ color: 'black' }}>
              Nuestro equipo está conformado por conocedores de esta región. Nos apasiona compartir nuestro conocimiento y ayudar a los visitantes a descubrir los tesoros ocultos de Nayarit.
            </p>
            <br />
            <h2 style={{ color: 'black' }}>Contacto</h2>
            <p style={{ color: 'black' }}>
              Si deseas obtener más información sobre nuestros servicios o tienes alguna pregunta, no dudes en ponerte en contacto con nosotros. Estamos aquí para brindarte asistencia y recomendaciones personalizadas para que disfrutes al máximo de tu visita.
            </p>
            <br />
            <p style={{ color: 'black' }}>📧: TravNayarit@gmail.com</p>
            <p style={{ color: 'black' }}>📱: +52 311 190 23 55</p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>

      <section>
        <h1 style={{ color: '#036684', textAlign: 'center' }}>Desarrolladores 💻</h1>
        <div className="outfit-container">
          <div className="outfit">
            <h2>Aaron Camacho</h2>
            <p>.</p>
          </div>

          <div className="outfit">
            <h2>Juan González</h2>
            <p>.</p>
          </div>

          <div className="outfit">
            <h2>Marco Burgara</h2>
            <p>.</p>
          </div>

          <div className="outfit">
            <h2>Nestor Ceja</h2>
            <p>.</p>
          </div>

          
        </div>
      </section>

    <Footer/>
    </div>
  );
}
 
export default AcercaDe;