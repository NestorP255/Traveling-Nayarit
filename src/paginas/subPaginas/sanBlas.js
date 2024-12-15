import React, { useState, useEffect } from "react";
import '../../CSS/estilo.css'; // Archivo CSS para estilos
import ScrollReveal from 'scrollreveal';
import WeatherCard from "../../API/WeatherCard";
import sanBlasG1 from "../../assets/destinos/imagenes/sanblas/1.jpg";
import sanBlasG2 from "../../assets/destinos/imagenes/sanblas/2.webp";
import sanBlasG3 from "../../assets/destinos/imagenes/sanblas/3.webp";
import sanBlasG4 from "../../assets/destinos/imagenes/sanblas/4.jpg";
import sanBlasG5 from "../../assets/destinos/imagenes/sanblas/5.jpg";
import sanBlasG6 from "../../assets/destinos/imagenes/sanblas/6.webp";
import sanBlasG7 from "../../assets/destinos/imagenes/sanblas/7.webp";
import sanblasPlaya from "../../assets/destinos/imagenes/sanblas/atractivos/playa-las-islitas.jpg";
import centro from "../../assets/destinos/imagenes/sanblas/atractivos/centro.jpg";
import templo from "../../assets/destinos/imagenes/sanblas/atractivos/templo.jpg";
import cerro from "../../assets/destinos/imagenes/sanblas/actividades/cerro-de-la-contaduria.jpg";
import ecoturismo from "../../assets/destinos/imagenes/sanblas/actividades/ecoturismo.jpg";
import parques from "../../assets/destinos/imagenes/sanblas/actividades/parques.jpg";
import Surf from "../../assets/destinos/imagenes/sanblas/actividades/sufr.jpg";
import patronales from "../../assets/destinos/imagenes/sanblas/festividades/patronales.jpg";
import Footer from '../../components/Footer';

const images = [
  sanBlasG1,
  sanBlasG2,
  sanBlasG3,
  sanBlasG4,
  sanBlasG5,
  sanBlasG6,
  sanBlasG7,
];

const SanBlas = () => {
    useEffect(() => {
      // Configuración de ScrollReveal
      const sr = ScrollReveal();
  
      sr.reveal(".navbar", { delay: 130 });
      sr.reveal(".seccion1Destinos");
      sr.reveal(".seccion1SanBlas", { delay: 150 });
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
        <section className="seccion1SanBlas">
          <h1>San Blas</h1>
          <h3>
          Sus atractivos te esperan para ofrecerte maravillosas aventuras en sus esteros, manglares y parques nacionales. Sus playas, gastronomía típica, diversidad ecológica y su legado colonial hacen de San Blas un puerto único en el Pacífico Mexicano.
          </h3>
          <div className="WidgetClima">
            <WeatherCard city="San Blas" />
          </div>
        </section>
  
        <section className="separadorD" id="sepr"></section>
  
        <section className="grid_gal">
          <figure>
            <a href="#img1">
              <img src={sanBlasG1} loading="lazy" alt="sanblas" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={sanBlasG2} loading="lazy" alt="sanblas2" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={sanBlasG3} loading="lazy" alt="sanblas3" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={sanBlasG4} loading="lazy" alt="sanblas4" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={sanBlasG5} loading="lazy" alt="sanblas5" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={sanBlasG6} loading="lazy" alt="sanblas6" />
            </a>
          </figure>
          <figure>
            <a href="#img1">
              <img src={sanBlasG7} loading="lazy" alt="sanblas7" />
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
                alt={`sanblas Image ${index + 1}`}
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
                <img src={sanblasPlaya} loading="lazy" alt="sanblas Playa" />
              </figure>
              <figcaption>
                <strong>Playa de San Blas</strong>
              </figcaption>
            </a>
            <a href="" className="item">
              <figure>
                <b className="atractivos"> Atractivos </b>{" "}
                <img src={centro} loading="lazy" alt="Centro histórico" />
              </figure>
              <figcaption>
                <strong>Centro Histórico</strong>
              </figcaption>
            </a>
            <a href="" className="item">
              <figure>
                <b className="atractivos"> Atractivos </b>{" "}
                <img
                  src={templo}
                  loading="lazy"
                  alt="Templo Parroquial"
                />
              </figure>
              <figcaption>
                <strong>Templo Parroquial</strong>
              </figcaption>
            </a>
            <a href="https://www.lugaresturisticosenmexico.com/san-blas-riviera-nayarit/" class="btn_icon" target="_blank">
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
                <img src={cerro} loading="lazy" alt="cerro en sanblas" />
              </figure>
              <figcaption>
                <strong>Visita el Fuerte de la contaduría</strong>
              </figcaption>
            </a>
            <a href="" className="item">
              <figure>
                <b className="actividades">Actividades</b>
                <img src={ecoturismo} loading="lazy" alt="ecoturismo en sanblas" />
              </figure>
              <figcaption>
                <strong>Ecoturismo</strong>
              </figcaption>
            </a>
            <a href="" className="item">
              <figure>
                <b className="actividades">Actividades</b>
                <img src={parques} loading="lazy" alt="parque en sanblas" />
              </figure>
              <figcaption>
                <strong>Conoce el zoológico</strong>
              </figcaption>
            </a>
            <a href="" className="item">
              <figure>
                <b className="actividades">Actividades</b>
                <img src={Surf} loading="lazy" alt="Surf en sanblas" />
              </figure>
              <figcaption>
                <strong>Practica surf</strong>
              </figcaption>
            </a>
            <a href="https://sanblasrivieranayarit.com/que-hacer/" class="btn_icon" target="_blank"> <span>Ver todos <i class="fas fa-arrow-right"></i></span>
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
                <img src={patronales} loading="lazy" alt="patronales sanblas" />
              </figure>
              <figcaption>
                <strong>Fiestas patronales en San Blas</strong>
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
          <p>
      Entre los años 1529 y 1531, esta región nayarita fue colonizada por Don Nuño Beltrán de Guzmán más conocido por su nombre abreviado, Nuño de Guzmán. Al mismo personaje se le atribuye la fundación del puerto de San Blas; se dice que fue llamado así en honor del Santo patrono del monje Blas de Mendoza.
      </p>
      <p>
      San Blas en la época virreinal fue el más importante puerto novohispano ubicado al norte del Océano Pacífico. De él partía y a él llegaba el galeón de Manila, único contacto con el Lejano Oriente, antes de que su principal puerto fuera Acapulco.
      </p>
      <p>
      Fue puerto de altura desde 1768 por orden de Don Manuel Rivero y Cordero obedeciendo la decisión de Su Majestad Carlos III de España de que "San Blas sirviera de mansión de los buques destinados a California y Sonora". El visitador Don José Gálvez estableció según mandato real, el departamento naval de San Blas, y de ese entonces proceden los mapas y el conocimiento naval de las islas y litorales del Mar de Cortés. De esa época datan los restos de algunas construcciones ubicadas en el cerro El Basilio, como el edificio de "La Contaduría" y la iglesia de Nuestra Señora del Rosario, llamada "La Marinera"
      </p>
      <p>
      Puerto histórico que vio partir a soldados y marinos hacia el Oriente y el lejano norte para defender las posesiones españolas ubicadas más allá de la Alta California de los navegantes y exploradores rusos que deseaban establecer una colonia en América.
      </p>
      <p>
      El estrecho de Nutca ubicado en Columbia Británica, Canadá, fue avistado por primera vez en 1774 por el explorador español Juan José Pérez Hernández que partió del puerto de San Blas, su misión era llegar hasta los 65º, pero regresó a San Blas por falta de víveres. Al año siguiente se volvió a organizar una expedición en la que también participó Pérez Hernández al lado de Bruno de Heceta y Juan Francisco de la Bodega y Quadra, a bordo de las embarcaciones San Carlos, Santiago y Sonora, la intención era descubrir los asentamientos que los rusos habían erigido más allá de la Alta California y tomar posesión de ellos en nombre de la corona española.
      </p>
      <p>
      Bruno de Heceta y Juan Francisco de la Bodega y Quadra exploraron las costas de los actuales estados de Oregón y Washington, tomaron posesión de las tierras e informaron que sí existían asentamientos rusos en estos territorios pero eran esporádicos porque no encontraron presencia humana de origen ruso en toda la expedición.
      </p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14844.849900148973!2d-105.29072393482501!3d21.538545693261895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8420b8374a1b4aa3%3A0x7d2174d42ab8cdf5!2sSan%20Blas%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1690129103120!5m2!1ses-419!2smx"
            width="900"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mapa"
            title="Google Maps sanblas"
          />
          <a
            href="http://maps.google.com/?saddr=&amp;daddr=21.540761,-105.283943"
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

export default SanBlas;