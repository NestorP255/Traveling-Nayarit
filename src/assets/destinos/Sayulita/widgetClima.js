window.addEventListener('load', () => {
  let lon
  let lat

  let temperaturaValor = document.getElementById('temperatura-valor')
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

  
  let iconoAnimado = document.getElementById('icono-animado')

  let vientoVelocidad = document.getElementById('viento-velocidad')




  //console.log(posicion.coords.latitude)
  //coordenadas
  lat = 20.869013
  lon = -105.440744
  //ubicación actual    
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=4090239d69cdb3874de692fd18539299`

  //ubicación por ciudad
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=tepic&lang=es&units=metric&appid=4090239d69cdb3874de692fd18539299`

  //console.log(url)

  fetch(url)
    .then(response => { return response.json() })
    .then(data => {
      //console.log(data)

      let temp = Math.round(data.main.temp)
      //console.log(temp)
      temperaturaValor.textContent = `${temp} ° C`

      //console.log(data.weather[0].description)
      let desc = data.weather[0].description
      temperaturaDescripcion.textContent = desc.toUpperCase()
      
      let veloc = (data.wind.speed * 3.6).toFixed(3);
      vientoVelocidad.textContent = `${veloc} km/h`

      //para iconos estáticos
      //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
      //icono.src = urlIcon
      //console.log(data.weather[0].icon)

      //para iconos dinámicos
      console.log(data.weather[0].main)
      switch (data.weather[0].main) {
        case 'Thunderstorm':
          iconoAnimado.src = '../imagenes/weatherIcons/thunder.svg'
          console.log('TORMENTA');
          break;
        case 'Drizzle':
          iconoAnimado.src = '../imagenes/weatherIcons/rainy-2.svg'
          console.log('LLOVIZNA');
          break;
        case 'Rain':
          iconoAnimado.src = '../imagenes/weatherIcons/rainy-7.svg'
          console.log('LLUVIA');
          break;
        case 'Snow':
          iconoAnimado.src = '../imagenes/weatherIcons/snowy-6.svg'
          console.log('NIEVE');
          break;
        case 'Clear':
          iconoAnimado.src = '../imagenes/weatherIcons/day.svg'
          console.log('LIMPIO');
          break;
        case 'Atmosphere':
          iconoAnimado.src = '../imagenes/weatherIcons/weather.svg'
          console.log('ATMOSFERA');
          break;
        case 'Clouds':
          iconoAnimado.src = '../imagenes/weatherIcons/cloudy-day-1.svg'
          console.log('NUBES');
          break;
        default:
          iconoAnimado.src = '../imagenes/weatherIcons/cloudy-day-1.svg'
          console.log('por defecto');
      }

    })
    .catch(error => {
      console.log(error)
    })
})
