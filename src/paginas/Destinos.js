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
          <img className="imageDestinos1" src="https://magazine.velasresorts.com/wp-content/uploads/2020/07/Sayulita-1.jpg" alt="Sayulita" />
        </div>
      </section>

      <section className="destinosSeccionLugares">
        <div className="right">
          <img className="imageDestinos2" src="https://arquitecturaviva.com/assets/uploads/obras/56840/av_medium__av_273685.webp?h=8f54636a" alt="San Blas" />
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
          <img className="imageDestinos3" src="https://www.lugaresturisticosenmexico.com/wp-content/uploads/2022/05/Tepic-Nayarit.jpg" alt="Tepic" />
        </div>
      </section>

      <section className="destinosSeccionLugares">
        <div className="right">
          <img className="imageDestinos4" src="https://www.corazondenayarit.com/wp-content/uploads/2019/05/isla-del-coral-guayabitos-nayarit.jpg" alt="Rincón de Guayabitos" />
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
          <img className="imageDestinos5" src="https://cdn.forbes.com.mx/2022/02/Isla-de-mexicatitlan-640x360.jpg" alt="Isla de Mexcaltitán" />
        </div>
      </section>

      <section className="destinosSeccionLugares">
        <div className="right">
          <img className="imageDestinos6" src="https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/07/punta-mita-nayarit-mexico-flickr-drosan-rem.jpg" alt="Punta Mita" />
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
