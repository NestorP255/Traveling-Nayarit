import React, { useState, useEffect } from "react";
import "../../CSS/estilo.css"; // Archivo CSS para estilos
import ScrollReveal from "scrollreveal";
import WeatherCard from "../../API/WeatherCard";
import mexcaltitan1 from "../../assets/destinos/imagenes/mexcaltitan/1.jpg";
import mexcaltitan2 from "../../assets/destinos/imagenes/mexcaltitan/2.jpg";
import mexcaltitan3 from "../../assets/destinos/imagenes/mexcaltitan/3.jpg";
import mexcaltitan4 from "../../assets/destinos/imagenes/mexcaltitan/4.jpg";
import mexcaltitan5 from "../../assets/destinos/imagenes/mexcaltitan/5.jpg";
import mexcaltitan6 from "../../assets/destinos/imagenes/mexcaltitan/6.jpg";
import mexcaltitan7 from "../../assets/destinos/imagenes/mexcaltitan/7.jpg";
import artesania from "../../assets/destinos/imagenes/mexcaltitan/atractivos/artesania.jpg";
import centro from "../../assets/destinos/imagenes/mexcaltitan/atractivos/centro.jpg";
import pesca from "../../assets/destinos/imagenes/mexcaltitan/atractivos/pesca.jpg";
import venecia from "../../assets/destinos/imagenes/mexcaltitan/actividades/circ-venecia.jpeg";
import museo from "../../assets/destinos/imagenes/mexcaltitan/actividades/museo.jpg";
import paseo from "../../assets/destinos/imagenes/mexcaltitan/actividades/paseo.png";
import templo from "../../assets/destinos/imagenes/mexcaltitan/actividades/templo.jpg";
import patronales from "../../assets/destinos/imagenes/mexcaltitan/festividades/patronales.webp";
import Footer from "../../components/Footer";

const images = [
  mexcaltitan1,
  mexcaltitan2,
  mexcaltitan3,
  mexcaltitan4,
  mexcaltitan5,
  mexcaltitan6,
  mexcaltitan7,
];

const IslaMexcaltitan = () => {
  useEffect(() => {
    // Configuración de ScrollReveal
    const sr = ScrollReveal();

    sr.reveal(".navbar", { delay: 130 });
    sr.reveal(".seccion1Destinos");
    sr.reveal(".seccion1Mexcal", { delay: 150 });
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
      <section className="seccion1Mexcal">
        <h1>Isla de Mexcaltitán</h1>
        <h3>
        Navega entre manglares, observa aves y únete a pescar.
        </h3>
        <div className="WidgetClima">
          <WeatherCard city="Mexcaltitán de Uribe" />
        </div>
      </section>

      <section className="separadorD" id="sepr"></section>

      <section className="grid_gal">
        <figure>
          <a href="#img1">
            <img src={mexcaltitan1} loading="lazy" alt="guayabitos" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={mexcaltitan2} loading="lazy" alt="guayabitos2" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={mexcaltitan3} loading="lazy" alt="guayabitos3" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={mexcaltitan4} loading="lazy" alt="guayabitos4" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={mexcaltitan5} loading="lazy" alt="guayabitos5" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={mexcaltitan6} loading="lazy" alt="guayabitos6" />
          </a>
        </figure>
        <figure>
          <a href="#img1">
            <img src={mexcaltitan7} loading="lazy" alt="guayabitos7" />
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
              <img src={artesania} loading="lazy" alt="Artesanías" />
            </figure>
            <figcaption>
              <strong>Artesanías</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="atractivos"> Atractivos </b>{" "}
              <img src={centro} loading="lazy" alt="centro" />
            </figure>
            <figcaption>
              <strong>Centro de Mexcaltitán</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="atractivos"> Atractivos </b>{" "}
              <img src={pesca} loading="lazy" alt="pesca" />
            </figure>
            <figcaption>
              <strong>Pesca</strong>
            </figcaption>
          </a>
          <a href="https://tusdestinos.net/mexcaltitan-el-mexico-mas-autentico-esta-en-riviera-nayarit/" class="btn_icon" target="_blank">
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
              <img src={venecia} loading="lazy" alt="venecia" />
            </figure>
            <figcaption>
              <strong>Navega por el circuito Venecia</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={museo} loading="lazy" alt="museo" />
            </figure>
            <figcaption>
              <strong>
               Visita el museo Origen
              </strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={paseo} loading="lazy" alt="Paseo" />
            </figure>
            <figcaption>
              <strong>Pasea en lancha</strong>
            </figcaption>
          </a>
          <a href="" className="item">
            <figure>
              <b className="actividades">Actividades</b>
              <img src={templo} loading="lazy" alt="templo" />
            </figure>
            <figcaption>
              <strong>Pasa por el templo de San Pablo y San Pedro</strong>
            </figcaption>
          </a>
          <a href="https://www.lugaresturisticosenmexico.com/mexcaltitan-nayarit-pueblo-magico/" class="btn_icon" target="_blank"> <span>Ver todos <i class="fas fa-arrow-right"></i></span>
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
                alt="patronales"
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
        <p>La historia de la Isla de Mexcaltitán, ubicada en el estado de Nayarit, México, es fascinante y está envuelta en mitos y leyendas que se remontan a épocas prehispánicas.</p>
      <p>Mexcaltitán, cuyo nombre significa "En el lugar donde abunda el mesquite", fue fundada alrededor del siglo XIII por el grupo étnico de los caxcanes. Se cree que esta isla fue uno de los lugares de origen de los aztecas o mexicas, quienes, según la leyenda, partieron desde allí para fundar Tenochtitlán, la capital del imperio azteca.</p>
      <p>Según la leyenda, los aztecas emigraron desde una tierra mítica llamada Aztlán en busca de una señal divina que les indicaría dónde establecer su hogar permanente. Después de vagar durante muchos años, finalmente encontraron el símbolo prometido: un águila devorando una serpiente mientras posaba sobre un nopal en una pequeña isla en medio de un lago. Este lugar se identificó como el sitio donde construirían la gran ciudad de Tenochtitlán.</p>
      <p>Con la llegada de los españoles a América en el siglo XVI, la isla de Mexcaltitán quedó bajo el dominio de la Corona española. Durante la época colonial, la isla sufrió varias inundaciones que dificultaron su desarrollo, pero la población persistió y mantuvo su identidad cultural y tradiciones.</p>
      <p>Después de la independencia de México en el siglo XIX, Mexcaltitán experimentó un declive económico y su población disminuyó considerablemente debido a las dificultades para acceder a recursos básicos en la isla. A lo largo del tiempo, la isla quedó un poco olvidada.</p>
      <p>No fue hasta el siglo XX que la isla de Mexcaltitán atrajo nuevamente la atención, especialmente como destino turístico, debido a su historia y conexiones con la civilización azteca. Los visitantes comenzaron a llegar para conocer el sitio y disfrutar de su rica cultura y cocina tradicional.</p>
      <p>Hoy en día, la isla de Mexcaltitán es un destino turístico popular, especialmente para aquellos interesados en la historia prehispánica y el folclore mexicano. La isla tiene un ambiente pintoresco con calles estrechas y casas coloridas, y es conocida por su deliciosa gastronomía, como los famosos "pescados sarandeados" (pescado marinado y asado).</p>
      <p>Es importante mencionar que, aunque la leyenda de Mexcaltitán como lugar de origen de los aztecas ha sido objeto de controversia y debate histórico, la isla sigue siendo un lugar significativo para la identidad y la cultura mexicana.</p>
  
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1798.1811907934098!2d-105.47551092727112!3d21.90593868568285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869e20ea46447e01%3A0xef795da8ba7ff25b!2s63563%20Mexcaltit%C3%A1n%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1690161702412!5m2!1ses-419!2smx"
          width="900"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mapa"
          title="Google Maps guayabitos"
        />
        <a
          href="http://maps.google.com/?saddr=&amp;daddr=21.905792, -105.475178"
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

export default IslaMexcaltitan;
