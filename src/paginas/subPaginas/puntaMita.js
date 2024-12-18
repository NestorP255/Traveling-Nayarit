import React, { useState, useEffect } from "react";
import '../../CSS/estilo.css'; // Archivo CSS para estilos
import ScrollReveal from 'scrollreveal';
import WeatherCard from "../../API/WeatherCard";
import PuntaMitaG1 from "../../assets/destinos/imagenes/PuntaMita/1.jpg";
import PuntaMitaG2 from "../../assets/destinos/imagenes/PuntaMita/2.jpg";
import PuntaMitaG3 from "../../assets/destinos/imagenes/PuntaMita/3.jpg";
import PuntaMitaG4 from "../../assets/destinos/imagenes/PuntaMita/4.jpg";
import PuntaMitaG5 from "../../assets/destinos/imagenes/PuntaMita/5.jpg";
import PuntaMitaG6 from "../../assets/destinos/imagenes/PuntaMita/6.webp";
import PuntaMitaG7 from "../../assets/destinos/imagenes/PuntaMita/7.webp";
import PuntaMitaPlaya from "../../assets/destinos/imagenes/PuntaMita/atractivos/playa-anclote.jpg";
import restaurante from "../../assets/destinos/imagenes/PuntaMita/atractivos/rosa-restaurante.jpg";
import surfeo from "../../assets/destinos/imagenes/PuntaMita/atractivos/surf.jpg";
import paseo from "../../assets/destinos/imagenes/PuntaMita/actividades/paseo-bote.jpg";
import tour from "../../assets/destinos/imagenes/PuntaMita/actividades/punta-mita-utv-tour.jpg";
import buceo from "../../assets/destinos/imagenes/PuntaMita/actividades/buceo.jpg";
import Surf from "../../assets/destinos/imagenes/PuntaMita/actividades/clases-surf.jpg";
import gourmet from "../../assets/destinos/imagenes/PuntaMita/festividades/gourmetygolf.jpg";
import Footer from '../../components/Footer';

const images = [
  PuntaMitaG1,
  PuntaMitaG2,
  PuntaMitaG3,
  PuntaMitaG4,
  PuntaMitaG5,
  PuntaMitaG6,
  PuntaMitaG7,
];

const PuntaMita = () => {
    useEffect(() => {
      // Configuración de ScrollReveal
      const sr = ScrollReveal();
  
      sr.reveal(".navbar", { delay: 130 });
      sr.reveal(".seccion1Destinos");
      sr.reveal(".seccion1PuntaMita", { delay: 150 });
      sr.reveal(".WidgetClima", { delay: 350 });
      sr.reveal(".grid_gal", { delay: 170 });
      sr.reveal(".historia", { delay: 170 });
      sr.reveal(".separadorD", { delay: 170 });
      sr.reveal(".seccion2Destinos", { delay: 170 });
      sr.reveal(".maps", { delay: 170 });
      sr.reveal(".scroller", { delay: 250 });
    }, []);
  
    return (
      <div>
        <section className="seccion1PuntaMita">
          <h1>Punta de Mita </h1>
          <h3>
          Practica deportes acuáticos y descubre las playas desiertas, los hoteles exclusivos y las hermosas islas en el resort frente al mar de Punta de Mita.
          </h3>
          <div className="WidgetClima">
            <WeatherCard city="Punta Mita" />
          </div>
        </section>
  
        <section className="separadorD" id="sepr"></section>
  
        <section className="grid_gal">
          <figure>
            <a href="#img1">
              <img src={PuntaMitaG1} loading="lazy" alt="PuntaMita" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={PuntaMitaG2} loading="lazy" alt="PuntaMita2" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={PuntaMitaG3} loading="lazy" alt="PuntaMita3" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={PuntaMitaG4} loading="lazy" alt="PuntaMita4" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={PuntaMitaG5} loading="lazy" alt="PuntaMita5" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={PuntaMitaG6} loading="lazy" alt="PuntaMita6" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={PuntaMitaG7} loading="lazy" alt="PuntaMita7" />
            </a>
          </figure>
        </section>
  
        {/* Modal for image viewing */}
        {images.map((image, index) => (
          <div key={`img${index + 1}`} className="modal" id={`img${index + 1}`}>
            <div
              className="imagen"
              style={{
                textAlign: "center",
                marginTop: "250px", // Separar el modal 100px del borde superior
              }}
            >
              {/* Link to the previous image */}
              <a
                href={`#img${index === 0 ? images.length : index}`}
                style={{
                  fontSize: "24px",
                  marginRight: "20px",
                }}
              >
                &lt;
              </a>
  
              {/* Display the current image */}
              <img
                src={image}
                alt={`PuntaMita Image ${index + 1}`}
                style={{
                  width: "70%", // Ancho del 70% de la pantalla
                  height: "auto", // Mantener proporciones
                  borderRadius: "10px", // (Opcional) Esquinas redondeadas
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // (Opcional) Sombra para mejor visual
                }}
              />
  
              {/* Link to the next image */}
              <a
                href={`#img${index + 2 > images.length ? 1 : index + 2}`}
                style={{
                  fontSize: "24px",
                  marginLeft: "20px",
                }}
              >
                &gt;
              </a>
            </div>
  
            {/* Close button */}
            <a
              href="#sepr"
              className="cerrar"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "24px",
                textDecoration: "none",
                color: "#333",
              }}
            >
              x
            </a>
          </div>
        ))}
  
        <section className="seccion2Destinos">
          <div className="container1">
            <div></div>
            <div>
              <h1>ATRACTIVOS</h1>
              <hr />
            </div>
          </div>
        </section>
  
        <section className="scroller">
          <section className="grid_items">
            <a href="" className="item">
              <figure>
                <b className="atractivos"> Atractivos </b>{" "}
                <img src={PuntaMitaPlaya} loading="lazy" alt="PuntaMita Playa" />
              </figure>
              <figcaption>
                <strong>Playa El Anclote</strong>
              </figcaption>
            </a>
            <a href="" className="item">
              <figure>
                <b className="atractivos"> Atractivos </b>{" "}
                <img src={restaurante} loading="lazy" alt="Gastronomía" />
              </figure>
              <figcaption>
                <strong>Gastronomía</strong>
              </figcaption>
            </a>
            <a href="" className="item">
              <figure>
                <b className="atractivos"> Atractivos </b>{" "}
                <img
                  src={surfeo}
                  loading="lazy"
                  alt="Surf"
                />
              </figure>
              <figcaption>
                <strong>Surf</strong>
              </figcaption>
            </a>
            <a href="https://www.tripadvisor.com.mx/Attractions-g499443-Activities-zft11306-Punta_de_Mita_Pacific_Coast.html" class="btn_icon" target="_blank">
        <span>Ver todos <i class="fas fa-arrow-right"></i></span>
      </a>
          </section>
        </section>
  
        <section className="seccion2Destinos">
          <div className="container1">
            <div></div>
            <div>
              <h1>ACTIVIDADES</h1>
              <hr />
            </div>
          </div>
        </section>
  
        <section className="scroller">
          <section className="grid_items">
            <a href="" className="item">
              <figure>
                <b className="actividades">Actividades</b>
                <img src={paseo} loading="lazy" alt="paseo" />
              </figure>
              <figcaption>
                <strong>Pasea en un elegante bote</strong>
              </figcaption>
            </a>
            <a href="" className="item">
              <figure>
                <b className="actividades">Actividades</b>
                <img src={tour} loading="lazy" alt="tour en PuntaMita" />
              </figure>
              <figcaption>
                <strong>Aventúrate en los 4x4</strong>
              </figcaption>
            </a>
            <a href="" className="item">
              <figure>
                <b className="actividades">Actividades</b>
                <img src={buceo} loading="lazy" alt="buceo" />
              </figure>
              <figcaption>
                <strong>Admira el fondo marino</strong>
              </figcaption>
            </a>
            <a href="" className="item">
              <figure>
                <b className="actividades">Actividades</b>
                <img src={Surf} loading="lazy" alt="Surf en PuntaMita" />
              </figure>
              <figcaption>
                <strong>Aprende a surfear</strong>
              </figcaption>
            </a>
            <a href="https://www.tripadvisor.com.mx/Attraction_Review-g499443-d3518930-Reviews-Punta_Mita_Adventures-Punta_de_Mita_Pacific_Coast.html" class="btn_icon" target="_blank"> <span>Ver todos <i class="fas fa-arrow-right"></i></span>
      </a>
          </section>
        </section>
  
        <section className="seccion2Destinos">
          <div className="container1">
            <div></div>
            <div>
              <h1>FESTIVIDADES</h1>
              <hr />
            </div>
          </div>
        </section>
  
        <section className="scroller">
          <section className="grid_items">
            <a href="" className="item">
              <figure>
                <b className="festividades">Festividades</b>
                <img src={gourmet} loading="lazy" alt="gourmet PuntaMita" />
              </figure>
              <figcaption>
                <strong>Gourmet y Golf</strong>
              </figcaption>
            </a>
          </section>
        </section>
  
        <section className="seccion2Destinos">
          <div className="container1">
            <div></div>
            <div>
              <h1>HISTORIA</h1>
              <hr />
            </div>
          </div>
        </section>
  
        <div className="historia">
          <div id="texto">
          <p>Punta de Mita es un hermoso destino turístico situado en el estado de Nayarit, México. Su historia se remonta a tiempos prehispánicos, cuando la zona estaba habitada por las culturas indígenas coras y huicholes.</p>
      <p>Antes de la llegada de los españoles, la región de Punta de Mita era conocida como "Mictlán," que significa "lugar de los muertos" en la lengua náhuatl, debido a que los indígenas huicholes utilizaban el lugar para enterrar a sus muertos. Aunque esta área no fue el epicentro de alguna gran civilización mesoamericana, sus antiguos habitantes dejaron rastros de su cultura en forma de petroglifos y otros vestigios arqueológicos que aún se pueden encontrar en la zona.</p>
      <p>Después de la llegada de los españoles a la región en el siglo XVI, Nayarit se convirtió en parte del Virreinato de Nueva España. Durante la época colonial, la zona de Punta de Mita fue principalmente un lugar de paso para los barcos que transportaban mercancías y exploradores que navegaban a lo largo de la costa del Pacífico.</p>
      <p>En el siglo XIX, con la independencia de México, Nayarit se convirtió en un estado libre y se comenzaron a establecer pequeñas comunidades a lo largo de su litoral. Punta de Mita era entonces una pequeña aldea de pescadores, cuyos habitantes vivían principalmente de la pesca y la agricultura.</p>
      <p>A lo largo del siglo XX, la región comenzó a desarrollarse lentamente como destino turístico, aunque de manera modesta. En la década de 1970, se construyeron los primeros hoteles y resorts, atrayendo a un número creciente de visitantes. Con el tiempo, Punta de Mita se convirtió en un destino popular para los turistas que buscaban playas hermosas, aguas cristalinas y una experiencia relajada y exclusiva.</p>
      <p>En los últimos años, Punta de Mita ha experimentado un auge en la industria turística, con la construcción de lujosos complejos turísticos, campos de golf de clase mundial y residencias de lujo. La región ha atraído a celebridades y viajeros de todo el mundo que buscan un lugar paradisíaco para relajarse y disfrutar de la belleza natural de la costa del Pacífico mexicano.</p>

          </div>
        </div>
  
        <section className="seccion2Destinos">
          <div className="container1">
            <div></div>
            <div>
              <h1>¿CÓMO LLEGAR?</h1>
              <hr />
            </div>
          </div>
        </section>
  
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.407057525079!2d-105.51836017382361!3d20.77481369645048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421146802f4b825%3A0xca05d98993de7ec5!2s63727%20Punta%20de%20Mita%2C%20Nay.!5e0!3m2!1ses!2smx!4v1690161856176!5m2!1ses!2smx"
            width="900"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mapa"
            title="Google Maps PuntaMita"
          />
          <a
            href="http://maps.google.com/?saddr=&amp;daddr=20.772400,-105.515553"
            target="_blank"
            rel="noopener noreferrer"
            className="rutaBtn"
          >
            Trazar ruta
          </a>
        </div>
  
        <Footer />
      </div>
    );
  };

export default PuntaMita;