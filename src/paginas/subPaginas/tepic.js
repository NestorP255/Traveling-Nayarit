import React, { useState, useEffect } from "react";
import "../../CSS/estilo.css";
import ScrollReveal from "scrollreveal";
import WeatherCard from "../../API/WeatherCard";
import tepicG1 from "../../assets/destinos/imagenes/Tepic/1.jpg";
import tepicG2 from "../../assets/destinos/imagenes/Tepic/2.jpg";
import tepicG3 from "../../assets/destinos/imagenes/Tepic/3.jpg";
import tepicG4 from "../../assets/destinos/imagenes/Tepic/4.jpg";
import tepicG5 from "../../assets/destinos/imagenes/Tepic/5.jpg";
import tepicG6 from "../../assets/destinos/imagenes/Tepic/6.jpg";
import tepicG7 from "../../assets/destinos/imagenes/Tepic/7.webp";
import centro from "../../assets/destinos/imagenes/Tepic/atractivos/centro.jpg";
import cruz from "../../assets/destinos/imagenes/Tepic/atractivos/cruz.jpg";
import loma from "../../assets/destinos/imagenes/Tepic/atractivos/loma42.jpeg";
import cerro from "../../assets/destinos/imagenes/Tepic/actividades/cerro-sanjuan.jpg";
import mirador from "../../assets/destinos/imagenes/Tepic/actividades/mirador.jpg";
import arte from "../../assets/destinos/imagenes/Tepic/actividades/arte.jpg";
import museo from "../../assets/destinos/imagenes/Tepic/actividades/museo-regional.jpg";
import feria from "../../assets/destinos/imagenes/Tepic/festividades/feria.jpg";
import Footer from "../../components/Footer";

const images = [tepicG1, tepicG2, tepicG3, tepicG4, tepicG5, tepicG6, tepicG7];

const Tepic = () => {
  useEffect(() => {
    // Configuración de ScrollReveal
    const sr = ScrollReveal();

    sr.reveal(".navbar", { delay: 130 });
    sr.reveal(".seccion1Destinos");
    sr.reveal(".seccion1Tepic", { delay: 150 });
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
      <section className="seccion1Tepic">
        <h1>Tepic</h1>
        <h3>
          Llena de historia, cultura y misticismo que se observa plasmada en sus
          edificios arquitectónicos, museos y ex haciendas.
        </h3>
        <div className="WidgetClima">
          <WeatherCard city="Tepic, Nayarit, Mexico" />
        </div>
      </section>

      <section className="grid_gal">
        <figure>
          <a href="#img1">
            <img src={tepicG1} loading="lazy" alt="Tepic" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={tepicG2} loading="lazy" alt="Tepic2" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={tepicG3} loading="lazy" alt="Tepic3" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={tepicG4} loading="lazy" alt="Tepic4" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={tepicG5} loading="lazy" alt="Tepic5" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={tepicG6} loading="lazy" alt="Tepic6" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={tepicG7} loading="lazy" alt="Tepic7" />
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
              alt={`Tepic Image ${index + 1}`}
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
          <a href="#" className="item">
            <figure>
              <b className="atractivos">Atractivos</b>
              <img src={centro} loading="lazy" />
            </figure>
            <figcaption>
              <strong>Centro histórico</strong>
            </figcaption>
          </a>
          <a href="#" className="item">
            <figure>
              <b className="atractivos">Atractivos</b>
              <img src={cruz} loading="lazy" />
            </figure>
            <figcaption>
              <strong>Cerro de La Cruz</strong>
            </figcaption>
          </a>
          <a href="#" className="item">
            <figure>
              <b className="atractivos">Atractivos</b>
              <img src={loma} loading="lazy" />
            </figure>
            <figcaption>
              <strong>Gastronomía</strong>
            </figcaption>
          </a>
          <a
            href="https://www.tripadvisor.com.mx/Attractions-g499444-Activities-Tepic_Pacific_Coast.html"
            class="btn_icon"
            target="_blank"
          >
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
            <h1>ACTIVIDADES</h1>
            <hr />
          </div>
        </div>
      </section>

      <section className="scroller">
        <section className="grid_items">
          <a href="#" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={cerro} loading="lazy" />
            </figure>
            <figcaption>
              <strong>Practica senderismo en el cerro San Juan</strong>
            </figcaption>
          </a>
          <a href="#" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={arte} loading="lazy" />
            </figure>
            <figcaption>
              <strong>Conoce el museo Emilia Ortiz</strong>
            </figcaption>
          </a>
          <a href="#" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={mirador} loading="lazy" />
            </figure>
            <figcaption>
              <strong>Admira el paisaje desde el mirador Zitakua</strong>
            </figcaption>
          </a>
          <a href="#" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={museo} loading="lazy" />
            </figure>
            <figcaption>
              <strong>Visita el museo regional</strong>
            </figcaption>
          </a>
          <a
            href="https://www.tripadvisor.com.mx/Attractions-g499444-Activities-Tepic_Pacific_Coast.html"
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
          <a href="#" className="item">
            <figure>
              <b className="festividades">Festividades</b>
              <img src={feria} loading="lazy" />
            </figure>
            <figcaption>
              <strong>Feria Nayarit</strong>
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
            La demarcación geográfica de Tepic se fue formando durante el siglo
            XIX, desde 1824 hasta 1867, considerado el 7o. cantón del estado de
            Jalisco, posteriormente fue un Distrito Militar de 1867 a 1884 y,
            finalmente tuvo el carácter de territorio federal desde el 12 de
            diciembre de 1884 hasta 1917.
          </p>
          <p>
            Tepic fue creado como territorio federal el 12 de diciembre de 1884,
            mediante una reforma al artículo 43 de la Constitución, adoptando el
            nombre de “territorio de Tepic”, categoría que le fue reconocida con
            la demarcación geográfica formada desde el 7o. cantón del estado de
            Jalisco. Sin embargo, carecía de autonomía; su gobernador era
            designado por el presidente de la República, y no tenía Legislatura
            ni Poder Judicial.
          </p>

          <p>
            La propuesta para transformar al territorio de Tepic en un estado de
            la federación fue presentada por el Primer Jefe, Venustiano
            Carranza, en los artículos 43 y 47 de su Proyecto de Reformas a la
            Constitución.
          </p>

          <p>
            El 27 de diciembre de 1916 se dio lectura al dictamen que modificaba
            el artículo 43, que decía: “No habiendo inconveniente, a juicio de
            la Comisión, en que se considere como estado al Territorio de Tepic,
            se permite proponer a esta Honorable Asamblea, la aprobación del
            artículo 43”.
          </p>

          <p>
            La primera medida que se tomó para dar cumplimiento a lo ordenado,
            fue designar al General Jesús M. Ferreira como Gobernador
            provisional, quien se encargaría de todo lo necesario para preparar
            el cambio de Territorio de Tepic a Estado de Nayarit.
          </p>

          <p>
            El 5 de febrero de 1917, se creó el Estado de Nayarit con el
            Constituyente de Querétaro. Sin embargo, fue hasta el 1 de mayo de
            1917 que se firmó el acta constitutiva donde fueron entregados los
            asuntos del gobierno del extinto territorio federal, quedando
            expedida formalmente el acta de nacimiento del Estado Libre y
            Soberano de Nayarit.
          </p>

          <p>
            Actualmente esta entidad cuenta con 20 municipios, teniendo como
            capital a la ciudad de Tepic. De acuerdo con la Encuesta Intercensal
            del INEGI de 2015 cuenta con 1 millón 181 mil 050 habitantes, de los
            cuales el 35% vive en el municipio de Tepic.
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
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12486.446775007475!2d-104.88905423652109!3d21.498206217113253!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1690156616076!5m2!1ses!2smx"
          width="900"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mapa"
        ></iframe>
        <a
          href="http://maps.google.com/?saddr=&amp;daddr=21.502655, -104.890714"
          target="_blank"
          className="rutaBtn"
        >
          Trazar ruta
        </a>
      </div>
      <Footer/>
    </div>
  );
};

export default Tepic;
