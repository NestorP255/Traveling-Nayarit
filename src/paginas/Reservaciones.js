import React, { useState } from 'react';
import '../CSS/estiloReservacion.css';
import Footer from '../components/Footer';

function Reservaciones() {
  const [formVisible, setFormVisible] = useState(false);
  const [hoteleraSeleccionada, setHoteleraSeleccionada] = useState('');
  const [aerolineaSeleccionada, setAerolineaSeleccionada] = useState('');
  const [paquetesAgregados, setPaquetesAgregados] = useState([]);
  const [dialogoReservacion, setDialogoReservacion] = useState(false);
  const [lugar, setLugar] = useState('');
  const [fechaViaje, setFechaViaje] = useState('');
  const [carritoExpandido, setCarritoExpandido] = useState(false);
  
  const [showDialogoHotelera, setShowDialogoHotelera] = useState(false);
  const [showDialogoAerolinea, setShowDialogoAerolinea] = useState(false);

  const toggleForm = () => setFormVisible(!formVisible);

  const handleHoteleraSelect = (e) => {
    setHoteleraSeleccionada(e.target.value);
    setShowDialogoHotelera(false);  // Cerrar el diálogo de hotelera
    setCarritoExpandido(true);  // Expandir el carrito al seleccionar una hotelera
  };

  const handleAerolineaSelect = (e) => { 
    setAerolineaSeleccionada(e.target.value);
    setShowDialogoAerolinea(false);  // Cerrar el diálogo de aerolínea
    setCarritoExpandido(true);  // Expandir el carrito al seleccionar una aerolínea
  };

  const handleAceptarHotelera = () => {
    setShowDialogoHotelera(false);  // Cerrar el diálogo de hotelera
  };

  const handleAceptarAerolinea = () => {
    setShowDialogoAerolinea(false);  // Cerrar el diálogo de aerolínea
  };

  const agregarPaquete = (paquete) => {
    setPaquetesAgregados([...paquetesAgregados, paquete]);
    setCarritoExpandido(true);  // Expandir el carrito al agregar un paquete
  };

  const handleReservar = () => {
    if (!lugar || !fechaViaje) {
      alert('Debe completar todos los campos.');
    } else {
      alert('Reservación realizada con éxito');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <section className="topSeccion">
        <div className="topImage"></div>
        <div className="logoTop"></div>
      </section>

      <section className="destinosSeccion1">
        <div className="container1">
          <div></div>
          <div>
            <h1>RESERVACIONES</h1>
            <hr />
          </div>
        </div>
        <div>
          <h2 className="parrafoDestinos">
            ¡Planifica tu próxima aventura ahora! Reserva tus vuelos, hoteles y actividades con nosotros para asegurarte las mejores experiencias en tu viaje. ¡Explora nuestro amplio catálogo y reserva con confianza!
          </h2>
        </div>
      </section>

      <h2 className="separador">
        Embárcate en un viaje para descubrir las maravillas y la riqueza cultural que el mundo tiene para ofrecer, explorando sus tesoros ocultos y deleitándote con su esplendor.
      </h2>

      <section className="destinosSeccionLugares">
        <div className="right">
          <h1>Hoteles de Lujo</h1>
          <p>¡Estamos asociados con diversas empresas que te ayudarán a encontrar tu hotel ideal!</p>
          <p>Disfruta de un descuento de hasta 3% usando el código NAYARIT en el checkout del sitio que escojas.</p>
          <p>(Aplican TyC)</p>
          <div className="btn">
            <button onClick={() => setShowDialogoHotelera(true)}>ESCOGER HOTELERA</button>
          </div>
        </div>
        <div className="left">
          <div className="imageReserva1"></div>
        </div>
      </section>

      <section className="destinosSeccionLugares">
        <div className="right">
          <div className="imageReserva2"></div>
        </div>
        <div className="left">
          <h1>Vuelos de Lujo</h1>
          <p>Escoge entre comodidad y precio con las diversas opciones de nuestros socios.</p>
          <p>Revisa la disponibilidad de vuelos por medio de nuestro catálogo. ¡Puedes comparar los detalles desde un solo lugar!</p>
          <p>Cuando hayas escogido tu aerolínea deseada, escoge la opción en el menú.​</p>
          <div className="btn">
            <button onClick={() => setShowDialogoAerolinea(true)}>ESCOGER AEROLINEA</button>
          </div>
        </div>
      </section>

      <section className="destinosSeccionLugares">
        <div className="right">
          <h1>Transporte TRAVELING PLUS</h1>
          <p>¿Has tenido malas experiencias con el transporte público al viajar?</p>
          <p>Traveling Nayarit ofrece un paquete de transporte que ofrece viajes a una tasa fija y disponible a las 24 horas.</p>
          <div className="btn">
            <button onClick={() => agregarPaquete('Transporte TRAVELING+')}>AGREGAR</button>
          </div>
        </div>
        <div className="left">
          <div className="imageReserva3"></div>
        </div>
      </section>

      <section className="destinosSeccionLugares">
        <div className="right">
          <div className="imageReserva4"></div>
        </div>
        <div className="left">
          <h1>Experiencia Cultural EXTRA</h1>
          <p>¡Mira aquí las fechas de los festivales, ceremonias y costumbres propios de tu destino elegido!</p>
          <p>Obtén acceso VIP exclusivo a eventos, monumentos y atracciones turísticas.</p>
          <p>Nuestro paquete VIP incluye actividades personalizadas como clases de cocina con chefs locales, tours privados, y encuentros culturales únicos.</p>
          <div className="btn">
            <button onClick={() => agregarPaquete('Paq. Experiencia cultural')}>AGREGAR</button>
          </div>
        </div>
      </section>

      <section className="destinosSeccionLugares">
        <div className="right">
          <div className="imageReserva5"></div>
        </div>
        <div className="left">
          <h1>Paquete AVENTURAS</h1>
          <p>Rutas personalizadas: Itinerario único que incluye senderos no convencionales, rutas de trekking remotas y caminos fuera de las rutas turísticas habituales.</p>
          <p>Expediciones guiadas: Excursiones guiadas por expertos locales que conozcan bien la zona y puedan ofrecer información valiosa sobre el terreno y la cultura.</p>
          <p>Exploración nocturna: Incluye actividades nocturnas como caminatas bajo las estrellas, tours de observación de fauna nocturna o acampadas en lugares únicos.</p>
          <div className="btn">
            <button onClick={() => agregarPaquete('Paquete AVENTURAS')}>AGREGAR</button>
          </div>
        </div>
      </section>

      <div id="carrito" className={carritoExpandido ? 'expandido' : 'minimizado'}>
        <br />
        <button
          id="minimizarCarritoBtn"
          style={{ display: carritoExpandido ? 'inline-block' : 'none' }}
          onClick={() => setCarritoExpandido(false)}
        >
          Minimizar
        </button>
        <button
          id="expandirCarritoBtn"
          style={{ display: carritoExpandido ? 'none' : 'inline-block' }}
          onClick={() => setCarritoExpandido(true)}
        >
          Expandir
        </button>

        {carritoExpandido && (
          <>
            <h3>Plan de Viajes</h3>
            <label htmlFor="lugarSelect">Lugar:</label>
            <select id="lugarSelect" value={lugar} onChange={(e) => setLugar(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="Sayulita">Sayulita</option>
              <option value="San Blas">San Blas</option>
              <option value="Tepic">Tepic</option>
              <option value="Guayabitos">Guayabitos</option>
              <option value="Mexcaltitán">Mexcaltitán</option>
              <option value="Punta Mita">Punta Mita</option>
            </select>

            <label htmlFor="fechaViaje">Fecha de Viaje:</label>
            <input type="date" id="fechaViaje" value={fechaViaje} onChange={(e) => setFechaViaje(e.target.value)} />

            <p id="hoteleraSeleccionada">
              {hoteleraSeleccionada || 'Ninguna hotelera seleccionada'}
            </p>

            <p id="aerolineaSeleccionada">
              {aerolineaSeleccionada || 'Ninguna aerolínea seleccionada'}
            </p>

            <h4>Paquetes Agregados:</h4>
            <ul id="paquetesAgregados">
              {paquetesAgregados.map((paquete, index) => (
                <li key={index}>
                  {paquete} 
                  <button
                    onClick={() => setPaquetesAgregados(paquetesAgregados.filter((_, i) => i !== index))}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <button id="reservarBtn" onClick={handleReservar}>REALIZAR RESERVACIÓN</button>
          </>
        )}
      </div>

      {/* Cuadro de diálogo de Hotelera */}
      {showDialogoHotelera && (
        <div id="dialogoHotelera" className="dialogo-hotelera">
          <h3>Escoge una Hotelera</h3>
          <select id="hoteleraSelect" value={hoteleraSeleccionada} onChange={handleHoteleraSelect}>
            <option value="TRIVAGO">TRIVAGO</option>
            <option value="EXPEDIA">EXPEDIA</option>
            <option value="BOOKING">BOOKING</option>
          </select>
          <button onClick={handleAceptarHotelera}>Aceptar</button>
        </div>
      )}

      {/* Cuadro de diálogo de Aerolínea */}
      {showDialogoAerolinea && (
        <div id="dialogoAerolinea" className="dialogo-aerolinea">
          <h3>Escoge una Aerolínea</h3>
          <select id="aerolineaSelect" value={aerolineaSeleccionada} onChange={handleAerolineaSelect}>
            <option value="AEROMAR">AEROMAR</option>
            <option value="AEROMEXICO">AEROMEXICO</option>
            <option value="VIVA AEROBUS">VIVA AEROBUS</option>
            <option value="VOLARIS">VOLARIS</option>
          </select>
          <button onClick={handleAceptarAerolinea}>Aceptar</button>
        </div>
      )}

      {dialogoReservacion && (
        <div id="dialogoReservacion" className="dialogo-reservacion">
          <button id="minimizarDialogoReservacionBtn" className="minimizar-reservacion">-</button>
          <h3>¡Reservación en proceso!</h3>
          <p dangerouslySetInnerHTML={{ __html: dialogoReservacion }} />
          <button id="confirmarReservacionBtn" className="button-reservacion" onClick={() => window.location.href = 'PaginaPrincipal.php'}>Aceptar</button>
        </div>
      )}

      <Footer/>
    </div>
  );
}

export default Reservaciones;
