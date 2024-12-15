import React, { useState, useEffect } from "react";
import "../../CSS/estilo.css";
import ScrollReveal from "scrollreveal";
import WeatherCard from "../../API/WeatherCard";
import sayulitaG1 from "../../assets/destinos/imagenes/sayulita/1.gif";
import sayulitaG2 from "../../assets/destinos/imagenes/sayulita/2.gif";
import sayulitaG3 from "../../assets/destinos/imagenes/sayulita/3.gif";
import sayulitaG4 from "../../assets/destinos/imagenes/sayulita/4.gif";
import sayulitaG5 from "../../assets/destinos/imagenes/sayulita/5.gif";
import sayulitaG6 from "../../assets/destinos/imagenes/sayulita/6.gif";
import sayulitaG7 from "../../assets/destinos/imagenes/sayulita/7.gif";
import sayulitaPlaya from "../../assets/destinos/imagenes/sayulita/atractivos/playa-sayulita.jpg";
import plazaPrincipal from "../../assets/destinos/imagenes/sayulita/atractivos/plaza-principal.jpg";
import zonaArqueologica from "../../assets/destinos/imagenes/sayulita/atractivos/zona-arqueologica.jpg";
import Yoga from "../../assets/destinos/imagenes/sayulita/actividades/yoga.jpg";
import Arte from "../../assets/destinos/imagenes/sayulita/actividades/arte.jpg";
import Drinks from "../../assets/destinos/imagenes/sayulita/actividades/drinks.jpg";
import Surf from "../../assets/destinos/imagenes/sayulita/actividades/surf.jpg";
import Festival from "../../assets/destinos/imagenes/sayulita/festividades/festival.jpg";
import Footer from "../../components/Footer";

const images = [
  sayulitaG1,
  sayulitaG2,
  sayulitaG3,
  sayulitaG4,
  sayulitaG5,
  sayulitaG6,
  sayulitaG7,
];

const Sayulita = () => {
  useEffect(() => {
    // Configuración de ScrollReveal
    const sr = ScrollReveal();

    sr.reveal(".navbar", { delay: 130 });
    sr.reveal(".seccion1Destinos");
    sr.reveal(".seccion1Sayulita", { delay: 150 });
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
      <section className="seccion1Sayulita">
        <h1>Sayulita</h1>
        <h3>
          Aprecia espectaculares torneos de surf, disfruta de la belleza de las
          playas y explora los rincones coloridos del Pueblo Mágico.
        </h3>
        <div className="WidgetClima">
          <WeatherCard city="Sayulita" />
        </div>
      </section>

      <section className="separadorD" id="sepr"></section>

      <section className="grid_gal">
        <figure>
          <a href="#img1">
            <img src={sayulitaG1} loading="lazy" alt="Sayulita" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={sayulitaG2} loading="lazy" alt="Sayulita2" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={sayulitaG3} loading="lazy" alt="Sayulita3" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={sayulitaG4} loading="lazy" alt="Sayulita4" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={sayulitaG5} loading="lazy" alt="Sayulita5" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={sayulitaG6} loading="lazy" alt="Sayulita6" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={sayulitaG7} loading="lazy" alt="Sayulita7" />
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
              alt={`Sayulita Image ${index + 1}`}
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
              <img src={sayulitaPlaya} loading="lazy" alt="Sayulita Playa" />
            </figure>
            <figcaption>
              <strong>Playa de Sayulita</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="atractivos"> Atractivos </b>{" "}
              <img src={plazaPrincipal} loading="lazy" alt="Plaza Principal" />
            </figure>
            <figcaption>
              <strong>Plaza Principal</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="atractivos"> Atractivos </b>{" "}
              <img
                src={zonaArqueologica}
                loading="lazy"
                alt="Zona Arqueologica"
              />
            </figure>
            <figcaption>
              <strong>Zona arqueológica Los Toriles</strong>
            </figcaption>
          </a>
          <a
            href="https://www.gob.mx/sectur/es/articulos/sayulita-nayarit"
            className="btn_icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              Ver todos <i className="fas fa-arrow-right"></i>
            </span>
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
              <img src={Yoga} loading="lazy" alt="Yoga en Sayulita" />
            </figure>
            <figcaption>
              <strong>Relájate en unas clases de yoga</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={Arte} loading="lazy" alt="Arte en Sayulita" />
            </figure>
            <figcaption>
              <strong>Entra a las galerías y tiendas de arte</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={Drinks} loading="lazy" alt="Bebidas en Sayulita" />
            </figure>
            <figcaption>
              <strong>Disfruta unos drinks en el Club de Playa Camarón</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={Surf} loading="lazy" alt="Surf en Sayulita" />
            </figure>
            <figcaption>
              <strong>Toma clases de surf</strong>
            </figcaption>
          </a>
          <a
            href="https://www.gob.mx/sectur/es/articulos/sayulita-nayarit"
            class="btn_icon"
            target="_blank"
          >
            {" "}
            <span>
              Ver todos <i class="fas fa-arrow-right"></i>
            </span>
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
              <img src={Festival} loading="lazy" alt="Festival Sayulita" />
            </figure>
            <figcaption>
              <strong>Festival Sayulita</strong>
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
            En la comunidad de Sayulita sólo habitaban alrededor de 40 personas
            en pequeñas chozas construidas de palma y alumbradas con lámparas de
            petróleo que se manufacturaban con hoja de lata.
          </p>
          <p>
            Todos los habitantes de la comunidad y de las rancherías vecinas
            (Pátzcuaro, La Higuera, Los Caomiles, Pantoqui, San Francisco, Lo de
            Marcos, entre otras) trabajaban en la hacienda de Jaltemba,
            propiedad de los alumnos de 1 secundaria , donde se extraía el
            aceite del coco de aceite de la especie Attalea Cohune.
          </p>
          <p>
            En esta región del sur de Nayarit proliferaban las palmeras de coco
            de aceite; todos los hombres trabajaban en la recolección de éstos,
            que eran partidos por mitad con una piedra para extraer el aceite de
            la nuez. En la época del auge del aceite de coco muchos de los
            trabajadores murieron a causa de afecciones pulmonares, ocasionadas
            por la inhalación del polvo que despedía el coco al ser partido.
          </p>
          <p>
            Cada semana llegaba al pequeño puerto de Sayulita el navío
            “Salvatierra”, en el que se embarcaba la producción aceitera de la
            hacienda.
          </p>
          <p>
            La hacienda fue creciendo, y además de la producción de aceite
            pronto llegó a ser un importante emporio ganadero que inició el hijo
            de la señora Camarena, don Santiago.
          </p>
          <p>
            En el año de 1936, Santiago, hijo de Camarena dona las tierras a los
            trabajadores del puerto con la intención de que siguieran
            produciendo.
          </p>
          <p>
            La familia Camarena vende todas sus cabezas de ganado y el gobierno
            expropia las tierras de la hacienda,formando así el ejido de
            Sayulita.
          </p>
          <p>
            En la década de los cuarenta la producción cocotera se redujo
            considerablemente y los lugareños recurrieron a la agricultura y a
            la pesca, que hasta nuestros días es variada aunque menos abundante.
            Se pesca, entre otros: huachinango, pargo, jurel, sierra, mero,
            ostión, camarón y langosta.
          </p>
          <p>
            En 1965 se construyó la carretera La Varas-Pto. Vallarta y con ello
            se inauguró otra actividad importante en la región: el turismo.
          </p>
          <p>
            Unos años después se inició un proyecto gubernamental de expansión y
            desarrollo turístico; en Sayulita se empedraron las calles, se
            construyeron kiosco, plaza pública, mercado, banquetas y demás obras
            públicas.
          </p>
          <p>
            Por otro lado de la historia, los lugareños cuentan que Sayulita se
            formó hace más de 5000 años por los dioses de las olas, quienes
            específicamente crearon Sayulita para ser un lugar donde las olas
            fueran perfectas. Uno de los dioses que según la leyenda creó
            Sayulita fue el dios de las olas Oz.
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7456.112401949001!2d-105.44314747125789!3d20.86978486929652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84211662ea3de98d%3A0x1433c0c1e6d1e84c!2s63728%20Sayulita%2C%20Nay.!5e0!3m2!1ses!2smx!4v1654637884702!5m2!1ses!2smx"
          width="900"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mapa"
          title="Google Maps Sayulita"
        />
        <a
          href="http://maps.google.com/?saddr=&daddr=20.8688888,-105.44083330000001"
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

export default Sayulita;
