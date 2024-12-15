import React, { useState, useEffect } from "react";
import "../../CSS/estilo.css"; // Archivo CSS para estilos
import ScrollReveal from "scrollreveal";
import WeatherCard from "../../API/WeatherCard";
import rinconGuayabitos1 from "../../assets/destinos/imagenes/RinconGuayabitos/1.jpg";
import rinconGuayabitos2 from "../../assets/destinos/imagenes/RinconGuayabitos/2.jpeg";
import rinconGuayabitos3 from "../../assets/destinos/imagenes/RinconGuayabitos/3.jpg";
import rinconGuayabitos4 from "../../assets/destinos/imagenes/RinconGuayabitos/4.webp";
import rinconGuayabitos5 from "../../assets/destinos/imagenes/RinconGuayabitos/5.jpg";
import rinconGuayabitos6 from "../../assets/destinos/imagenes/RinconGuayabitos/6.jpg";
import rinconGuayabitos7 from "../../assets/destinos/imagenes/RinconGuayabitos/7.jpg";
import isla from "../../assets/destinos/imagenes/RinconGuayabitos/atractivos/isla-coral.jpg";
import hotel from "../../assets/destinos/imagenes/RinconGuayabitos/atractivos/hotel.jpg";
import ayala from "../../assets/destinos/imagenes/RinconGuayabitos/atractivos/los-ayala.jpg";
import buceo from "../../assets/destinos/imagenes/RinconGuayabitos/actividades/buceo.jpg";
import buhardilla from "../../assets/destinos/imagenes/RinconGuayabitos/actividades/buhardilla2.jpg";
import pesca from "../../assets/destinos/imagenes/RinconGuayabitos/actividades/pesca.jpg";
import rema from "../../assets/destinos/imagenes/RinconGuayabitos/actividades/respira-rema.jpg";
import patronales from "../../assets/destinos/imagenes/RinconGuayabitos/festividades/patronales.jpg";
import Footer from "../../components/Footer";

const images = [
  rinconGuayabitos1,
  rinconGuayabitos2,
  rinconGuayabitos3,
  rinconGuayabitos4,
  rinconGuayabitos5,
  rinconGuayabitos6,
  rinconGuayabitos7,
];

const RinconGuayabitos = () => {
  useEffect(() => {
    // Configuración de ScrollReveal
    const sr = ScrollReveal();

    sr.reveal(".navbar", { delay: 130 });
    sr.reveal(".seccion1Destinos");
    sr.reveal(".seccion1Guayabitos", { delay: 150 });
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
      <section className="seccion1Guayabitos">
        <h1>Rincon de Guayabitos</h1>
        <h3>
          Una bahía apreciada por la semejanza a una gran alberca natural, la
          arena es fina, color perla; la tonalidad del agua es azul verde, de
          temperatura templada.
        </h3>
        <div className="WidgetClima">
          <WeatherCard city="Guayabitos" />
        </div>
      </section>

      <section className="separadorD" id="sepr"></section>

      <section className="grid_gal">
        <figure>
          <a href="#img1">
            <img src={rinconGuayabitos1} loading="lazy" alt="guayabitos" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={rinconGuayabitos2} loading="lazy" alt="guayabitos2" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={rinconGuayabitos3} loading="lazy" alt="guayabitos3" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={rinconGuayabitos4} loading="lazy" alt="guayabitos4" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={rinconGuayabitos5} loading="lazy" alt="guayabitos5" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={rinconGuayabitos6} loading="lazy" alt="guayabitos6" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={rinconGuayabitos7} loading="lazy" alt="guayabitos7" />
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
              alt={`guayabitos Image ${index + 1}`}
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
              <img src={isla} loading="lazy" alt="Isla del coral" />
            </figure>
            <figcaption>
              <strong>Isla del coral</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="atractivos"> Atractivos </b>{" "}
              <img src={hotel} loading="lazy" alt="hotel" />
            </figure>
            <figcaption>
              <strong>Grandes Hoteles</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="atractivos"> Atractivos </b>{" "}
              <img src={ayala} loading="lazy" alt="Playa Los Ayala" />
            </figure>
            <figcaption>
              <strong>Playa Los Ayala</strong>
            </figcaption>
          </a>
          <a
            href="https://tipsparatuviaje.com/que-hacer-en-guayabitos/"
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
          <a href="" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={buceo} loading="lazy" alt="buceo en guayabitos" />
            </figure>
            <figcaption>
              <strong>Buceo y Snorkel</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={buhardilla} loading="lazy" alt="Buhardilla" />
            </figure>
            <figcaption>
              <strong>
                Disfruta de la gastronomía en restaurante Buhardilla
              </strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={pesca} loading="lazy" alt="Pesca Deportiva" />
            </figure>
            <figcaption>
              <strong>Pesca Deportiva</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={rema} loading="lazy" alt="rema" />
            </figure>
            <figcaption>
              <strong>Respira y rema</strong>
            </figcaption>
          </a>
          <a
            href="https://guayabitos.com/que-hacer-en-guayabitos/"
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
              <img
                src={patronales}
                loading="lazy"
                alt="patronales guayabitos"
              />
            </figure>
            <figcaption>
              <strong>Fiestas patronales</strong>
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
            El Rincón de Guayabitos, también conocido simplemente como
            Guayabitos, es una localidad turística ubicada en el estado de
            Nayarit, México. La denominación "Guayabitos" proviene de la
            abundancia de árboles de guayaba que solían crecer en la zona antes
            de su desarrollo turístico. El término "Rincón" hace referencia a su
            ubicación en una pequeña bahía o rincón a lo largo de la costa del
            Pacífico mexicano.
          </p>
          <p>
            Antes de la llegada de los colonizadores españoles, la región de
            Nayarit estaba habitada por diversas culturas indígenas. Aunque no
            existen registros específicos sobre la presencia de asentamientos
            prehispánicos en el área exacta de Guayabitos, es probable que las
            tribus nahuas y coras hayan tenido presencia en la región.
          </p>
          <p>
            Con la llegada de los españoles en el siglo XVI, la zona fue
            conquistada y colonizada. Durante el período colonial, la región de
            Nayarit estuvo bajo la jurisdicción de la Nueva Galicia, que era una
            de las provincias más grandes del Virreinato de Nueva España.
          </p>
          <p>
            A partir de la segunda mitad del siglo XX, Guayabitos comenzó a
            experimentar un crecimiento significativo en el turismo. La belleza
            de sus playas y la tranquilidad de sus aguas atrajeron a visitantes
            locales y extranjeros, convirtiéndolo en un popular destino
            vacacional.
          </p>
          <p>
            Con el tiempo, la localidad se ha desarrollado para satisfacer la
            demanda turística, y ahora cuenta con una amplia variedad de
            hoteles, restaurantes, tiendas y actividades recreativas. La mayoría
            de los visitantes vienen en busca de un ambiente relajado, ideal
            para familias, parejas y aquellos que buscan disfrutar de las playas
            y el clima cálido.
          </p>
          <p>
            Guayabitos también se encuentra cerca de otras atracciones
            turísticas populares en Nayarit, como Sayulita, San Pancho (San
            Francisco), Las Islas Marietas, y las ciudades históricas de Tepic y
            Compostela.
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.749182051388!2d-105.27511588328565!3d21.02519056914842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842125ad195d91f5%3A0x51a6c1bed56a9ae5!2s63724%20Rinc%C3%B3n%20de%20Guayabitos%2C%20Nay.!5e0!3m2!1ses!2smx!4v1690157300087!5m2!1ses!2smx"
          width="900"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mapa"
          title="Google Maps guayabitos"
        />
        <a
          href="http://maps.google.com/?saddr=&amp;daddr=21.027614, -105.266275"
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

export default RinconGuayabitos;
