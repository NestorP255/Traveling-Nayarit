import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherCard = ({ city }) => {
  const [clima, setClima] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '8135e48f5aea5e07d356c90c773bfef1';  // Clave de API de OpenWeatherMap

  useEffect(() => {
    // Solicitar datos del clima usando la ciudad pasada como prop
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`)
      .then((response) => {
        setClima(response.data);
      })
      .catch((err) => {
        setError('Error al obtener los datos del clima');
      });
  }, [API_KEY, city]); // Dependencia: city

  if (error) {
    return <div>{error}</div>;
  }

  if (!clima) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ display: 'flex', position: 'relative', justifyContent: 'center' }}>
      <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', padding: '20px', borderRadius: '10px' }}>
        <div style={{ backgroundColor: '#2e2e2e', color: 'white', padding: '10px', borderRadius: '8px', width: '32%' }}>
          <h2>{clima.main.temp} °C</h2>
          <p>{clima.weather[0].description.toUpperCase()}</p>
        </div>
        <div style={{ backgroundColor: '#6c57c9', color: 'white', padding: '10px', borderRadius: '8px', width: '32%' }}>
          <h2>Clima actual</h2>
          <img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} alt={clima.weather[0].description} />
        </div>
        <div style={{ backgroundColor: '#00b5e2', color: 'white', padding: '10px', borderRadius: '8px', width: '32%' }}>
          <h2>Velocidad del viento</h2>
          <p>{clima.wind.speed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
