import React, { useEffect } from 'react';
import '../CSS/estilo.css'; // Asegúrate de que el CSS sea importado
import Footer from '../components/Footer';
import ScrollReveal from 'scrollreveal';

const Destinos = () => {
  useEffect(() => {
    // ScrollReveal configuration
    ScrollReveal().reveal('.elemento-a-revelar', {
      duration: 1000,  // Duración del efecto de revelado
      delay: 500,      // Retraso en milisegundos
      reset: true,     // Reiniciar el efecto al volver a scroll
    });

    ScrollReveal().reveal('.navbar', { delay: 130 });
    ScrollReveal().reveal('.topSeccion');
    ScrollReveal().reveal('.destinosSeccion1', { delay: 170 });
    ScrollReveal().reveal('.separador', { delay: 170 });
    ScrollReveal().reveal('.destinosSeccionLugares', { delay: 250 });
  }, []);

  return (
    <div style={{ position: 'absolute' }}>
      <section className="topSeccion">
        <div className="topImage"></div>
        <div className="logoTop"></div>
      </section>

      <section className="destinosSeccion1">
        <div className="container1">
          <div></div>
          <div>
            <h1>DESTINOS</h1>
            <hr />
          </div>
        </div>
        <div>
          <h2 className="parrafoDestinos">
            Permítanos presentarle las impresionantes costas de esta parte del mundo. Desde las soleadas playas y los encantadores pueblos mágicos, hasta las experiencias únicas de aventura, diversión y relajación, cada región ofrece su propia cultura, cocina, y encanto.
          </h2>
        </div>
      </section>

      <h2 className="separador">
        Deléitese con la belleza y la cultura de nuestros destinos y descubra las joyas ocultas que le esperan.
      </h2>

      <section className="destinosSeccionLugares">
        <div className="right">
          <h1>Sayulita</h1>
          <p>Pueblo mágico con hermosas playas y excelente surf.</p>
          <p>...</p> {/* Continúa con el contenido del destino */}
          <div className="btn">
            <a href="destinos/Sayulita">LEER MÁS</a>
          </div>
        </div>
        <div className="left">
          <div className="imageDestinos1"></div>
        </div>
      </section>

      {/* Repetición de secciones para los destinos restantes */}
      <section className="destinosSeccionLugares">
        <div className="right">
          <div className="imageDestinos2"></div>
        </div>
        <div className="left">
          <h1>San Blas</h1>
          <p>Destino histórico con rica fauna y flora.</p>
          <p>...</p> {/* Continúa con el contenido del destino */}
          <div className="btn">
            <a href="destinos/San-Blas">LEER MÁS</a>
          </div>
        </div>
      </section>

      <section className="destinosSeccionLugares">
        <div className="right">
          <h1>Tepic</h1>
          <p>En el bello centro histórico de Tepic sobresalen construcciones como la Plaza de Armas, el Palacio de Gobierno y la Catedral de la Purísima Concepción.</p>
          <p>...</p> {/* Continúa con el contenido del destino */}
          <div className="btn">
            <a href="destinos/Tepic">LEER MÁS</a>
          </div>
        </div>
        <div className="left">
          <div className="imageDestinos3"></div>
        </div>
      </section>

      <section className="destinosSeccionLugares">
        <div className="right">
          <div className="imageDestinos4"></div>
        </div>
        <div className="left">
          <h1>Rincón de Guayabitos</h1>
          <p>Con su playa de suave oleaje y arena blanca, Rincón de Guayabitos es uno de los mejores lugares para visitar en Nayarit.</p>
          <p>...</p> {/* Continúa con el contenido del destino */}
          <div className="btn">
            <a href="destinos/rincon-de-guayabitos">LEER MÁS</a>
          </div>
        </div>
      </section>

      <section className="destinosSeccionLugares">
        <div className="right">
          <h1>Isla de Mexcaltitán</h1>
          <p>Isla con calles de agua y tradiciones ancestrales.</p>
          <p>...</p> {/* Continúa con el contenido del destino */}
          <div className="btn">
            <a href="destinos/Isla-de-Mexcaltitan">LEER MÁS</a>
          </div>
        </div>
        <div className="left">
          <div className="imageDestinos5"></div>
        </div>
      </section>

      <section className="destinosSeccionLugares">
        <div className="right">
          <div className="imageDestinos6"></div>
        </div>
        <div className="left">
          <h1>Punta Mita</h1>
          <p>Punta de Mita es el punto costero continental más cercano a las espectaculares Islas Marietas, uno de los destinos turísticos más demandados en el Pacífico mexicano.</p>
          <p>...</p> {/* Continúa con el contenido del destino */}
          <div className="btn">
            <a href="destinos/Punta-de-Mita">LEER MÁS</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinos;
