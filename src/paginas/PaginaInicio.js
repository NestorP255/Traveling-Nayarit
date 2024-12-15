import React from 'react';
import '../CSS/estilo.css';
import puntaMita from '../assets/imagenes/punta-de-mita.jpg';
import tepic from '../assets/imagenes/tepic.jpg';
import sanBlas from '../assets/imagenes/san-blas.jpg';
import recuerdos from '../assets/imagenes/memories.png';
import brujula from '../assets/imagenes/brujula.png';
import diamante from '../assets/imagenes/diamante.png';

function PaginaInicio() {
  return (
    <div style={{ position: 'absolute' }}>

      <section className="seccion1">
        <div className="divFondoBlurSection1"></div>
        <div className="divFondoColorSection1"></div>
        <div className="divTextoSection1">
          <h2>DESCUBRE TUS</h2>
          <h1>PRÓXIMAS MEJORES EXPERIENCIAS EN EL MUNDO</h1>
        </div>
        <div className="ConteligeAventura">
          <a href="destinos" className="eligeAventura">ELIGE TU AVENTURA</a>
        </div>
      </section>

      <section className="seccion2">
        <div className="textLeft">
          <h1>
            Nos apasiona mostrar experiencias de viaje inolvidables que lo lleven a una travesía de relajación, exploración
            y placer en algunos de los destinos más impresionantes alrededor del mundo.
          </h1>
          <br />
          <br />
          <a href="acercaDe">LEER MÁS</a>
        </div>
        <div className="cardsRight">
          <div className="izq">
            <img src={recuerdos} alt="recuerdos" />
            <h3>RECUERDOS QUE DURAN PARA TODA LA VIDA</h3>
            <h4>
              Lo ayudaremos a crear hermosos recuerdos y capturarlos en impresionantes fotos para llevar a casa.
            </h4>
          </div>
          <div className="centro">
            <img src={brujula} alt="orientacion" />
            <h3>ORIENTACION Y APOYO</h3>
            <h4>
              Nuestra experiencia, conocimiento y apoyo estarán a su servicio durante toda su travesía.
            </h4>
          </div>
          <div className="der">
            <img src={diamante} alt="lujoso" />
            <h3>SERVICIOS DE LUJO Y VARIEDAD DE GAMAS</h3>
            <h4>
              Solo puede esperar experiencias de primer nivel y de alta calidad al elegir nuestros servicios.
            </h4>
          </div>
        </div>
      </section>

      <section className="seccion3">
        <div className="container1">
          <h1>DESTINOS</h1>
          <hr />
        </div>
        <div className="container2">
          <div className="izq">
            <img src={puntaMita} alt="punta-de-mita" />
            <h3>
              Es una península de poco más de 6 km² con hoteles y condominios lujosos, caracterizada por un clima estable
              y fresca brisa marina. Allí también encontrarás el Cerro Careyeros con vestigios de vida del siglo IX.
            </h3>
            <a href="destinos/Punta-de-Mita">LEER MÁS</a>
          </div>

          <div className="centro">
            <img src={sanBlas} alt="san-blas" />
            <h3>
              En las palapas a pie de playa preparan exquisiteces marinas y del arenal parten paseos hacia los manglares y
              pequeñas islas cercanas repletas de biodiversidad.
            </h3>
            <a href="destinos/San-Blas">LEER MÁS</a>
          </div>

          <div className="der">
            <img src={tepic} alt="tepic" />
            <h3>
              Tepic es un destino mexicano muy colorido, conocido también como la “Ciudad de las Palmeras”, donde habitan poco
              más de 420 mil personas, entre los que se incluyen casi 5 mil indígenas de distintas etnias entre huicholes,
              coras, purépechas, nahuas, mazahuas, etc.
            </h3>
            <a href="destinos/Tepic">LEER MÁS</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h2>
          Copyright © EQUIPO TRAVELING NAYARIT - All Rights Reserved | 2024 Agencia Viajes 'Traveling Nayarit'.
        </h2>
      </footer>
    </div>
  );
}

export default PaginaInicio;
