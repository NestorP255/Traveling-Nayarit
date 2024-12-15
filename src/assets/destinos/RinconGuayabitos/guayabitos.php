<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rincón de Guayabitos</title>
  <!--Icono de la ventana-->
  <link rel="shortcut icon" href="../../imagenes/favicon2.png">
  <!--Enlace a la hoja de estilo CSS-->
  <link rel="stylesheet" href="../../css/estilo.css">
  <!--Scroll reveal animacion-->
  <script src="https://unpkg.com/scrollreveal@4"></script>
  <!--Esta hoja es para los iconos de la calificacion-->

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</head>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del formulario y al botón
    var formulario = document.getElementById("agregarDestinoForm");
    var botonAgregar = document.getElementById("agregarDestinoBtn");

    // Agregar un evento de clic al botón
    botonAgregar.addEventListener("click", function() {
      // Mostrar u ocultar el formulario al hacer clic en el botón
      formulario.style.display = formulario.style.display === "none" ? "block" : "none";
    });
  });
</script>

<body>
  <header>
    <div>
      <img src="../../imagenes/logo.png" alt="Equipo H">
    </div>

    <nav class="navbar">
      <ul>
        <li><a href="../../PaginaPrincipal.php">PAGINA PRINCIPAL</a></li>
        <li><a href="../../destinos.php">DESTINOS</a></li>
        <li><a href="../../contacto.php">CONTACTO</a></li>
        <li><a href="../../acercaDe.php">SOBRE NOSOTROS</a></li>

      </ul>
    </nav>


    <nav class="navLogin">
      <ul>
        <li><a href="../../login/login.php" class="login">CERRAR SESIÓN</a></li>

      </ul>
    </nav>
  </header>

  <section class="seccion1Guayabitos">
    <h1>Rincón de Guayabitos</h1>
    <h3>Una bahía apreciada por la semejanza a una gran alberca natural, la arena es fina, color perla; la tonalidad del agua es azul verde, de temperatura templada.
    </h3>

    <div id="widgetClima">
      <div id="caja1">
        <h5 id="temperatura-valor"></h5>
        <h5 id="temperatura-descripcion"></h5>
      </div>
      <div id="caja2">
        <h5> Clima actual</h5>
        <img id="icono-animado" src="" alt="" height="128" width="128">
      </div>
      <div id="caja3">
        <h5>Veloc. del Viento</h5>
        <h5 id="viento-velocidad"></h5>
      </div>
    </div>
    <script src="widgetClima.js"></script>



  </section>

  <section class="separadorD" id="sepr">
  </section>

  <section class="grid_gal">
    <figure>
      <a href="#img1">
        <img src="../imagenes/RinconGuayabitos/1.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img2">
        <img src="../imagenes/RinconGuayabitos/2.jpeg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img3">
        <img src="../imagenes/RinconGuayabitos/3.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img4">
        <img src="../imagenes/RinconGuayabitos/4.webp" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img5">
        <img src="../imagenes/RinconGuayabitos/5.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img6">
        <img src="../imagenes/RinconGuayabitos/6.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img7">
        <img src="../imagenes/RinconGuayabitos/7.jpg" loading="lazy">
      </a>
    </figure>


  </section>

  <!--Para maximizar las imagenes-->
  <div>
    <div class="modal" id="img1">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img7">
          <</a>
            <a href="#img2"><img src="../../destinos/imagenes/RinconGuayabitos/1.jpg"></a>
            <a href="#img2">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img2">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img1">
          <</a>
            <a href="#img3"><img src="../../destinos/imagenes/RinconGuayabitos/2.jpeg"></a>
            <a href="#img3">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img3">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img2">
          <</a>
            <a href="#img4"><img src="../../destinos/imagenes/RinconGuayabitos/3.jpg"></a>
            <a href="#img4">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img4">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img3">
          <</a>
            <a href="#img5"><img src="../../destinos/imagenes/RinconGuayabitos/4.webp"></a>
            <a href="#img5">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img5">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img4">
          <</a>
            <a href="#img6"><img src="../../destinos/imagenes/RinconGuayabitos/5.jpg"></a>
            <a href="#img6">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img6">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img5">
          <</a>
            <a href="#img7"><img src="../../destinos/imagenes/RinconGuayabitos/6.jpg"></a>
            <a href="#img7">></a>
      </div>
      <a href="#sepr" class="cerrar">X</a>
    </div>
    <div class="modal" id="img7">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img6">
          <</a>
            <a href="#img1"><img src="../../destinos/imagenes/RinconGuayabitos/7.jpg"></a>
            <a href="#img1">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
  </div>

  <section class="seccion2Destinos">
    <div class="container1">
      <div></div>
      <div>
        <h1>ATRACTIVOS</h1>
        <hr>
      </div>
    </div>

  </section>

  <section class="scroller">
    <section class="grid_items">
      <a href="" class="item">
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/RinconGuayabitos/atractivos/los-ayala.jpg" loading="lazy"></figure>
        <figcaption><strong>Playa Los Ayala</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/RinconGuayabitos/atractivos/isla-coral.jpg" loading="lazy"></figure>
        <figcaption><strong>Isla del coral</strong></figcaption>
      </a>
      
      <a href="" class="item">
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/RinconGuayabitos/atractivos/hotel.jpg" loading="lazy"></figure>
        <figcaption><strong>Grandes Hoteles</strong></figcaption>
      </a>
      <a href="https://tipsparatuviaje.com/que-hacer-en-guayabitos/" class="btn_icon" target="_blank">
        <img src="https://guiapueblosmagicos.mx/static/img/atractivos.svg" loading="lazy">
        <span>Ver todos <i class="fas fa-arrow-right"></i></span>
      </a>
    </section>
  </section>

  <section class="seccion2Destinos">
    <div class="container1">
      <div></div>
      <div>
        <h1>ACTIVIDADES</h1>
        <hr>
      </div>
    </div>

  </section>
  <section class="scroller">
    <section class="grid_items">
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b>
          <img src="../imagenes/RinconGuayabitos/actividades/buhardilla2.jpg" loading="lazy">
        </figure>
        <figcaption><strong>Disfruta de la gastronomía en restaurante Buhardilla</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/RinconGuayabitos/actividades/respira-rema.jpg" Drinks-Sayulita-OK-700x468.jpg" loading="lazy"></figure>
        <figcaption><strong>Respira y rema</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/RinconGuayabitos/actividades/pesca.jpg" loading="lazy"></figure>
        <figcaption><strong>Pesca Deportiva</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/RinconGuayabitos/actividades/buceo.jpg" loading="lazy"></figure>
        <figcaption><strong>Buceo y Snorkel</strong></figcaption>
      </a>
      <a href="https://guayabitos.com/que-hacer-en-guayabitos/" class="btn_icon" target="_blank"> <span>Ver todos <i class="fas fa-arrow-right"></i></span>
      </a>
    </section>
  </section>


  <section class="seccion2Destinos">
    <div class="container1">
      <div></div>
      <div>
        <h1>FESTIVIDADES</h1>
        <hr>
      </div>
    </div>

  </section>
  <section class="scroller">
    <section class="grid_items">
      <a href="" class="item">
        <figure><b class="festividades">Festividades</b>
          <img src="../imagenes/RinconGuayabitos/festividades/patronales.jpg" loading="lazy">
        </figure>
        <figcaption><strong>Fiestas patronales</strong></figcaption>
      </a>
    </section>
  </section>

  <section class="seccion2Destinos">
    <div class="container1">
      <div></div>
      <div>
        <h1>HISTORIA</h1>
        <hr>
      </div>
    </div>

  </section>
  <div class="historia">
    <div id="texto">
      <p>El Rincón de Guayabitos, también conocido simplemente como Guayabitos, es una localidad turística ubicada en el estado de Nayarit, México. La denominación "Guayabitos" proviene de la abundancia de árboles de guayaba que solían crecer en la zona antes de su desarrollo turístico. El término "Rincón" hace referencia a su ubicación en una pequeña bahía o rincón a lo largo de la costa del Pacífico mexicano.</p>
      <p>Antes de la llegada de los colonizadores españoles, la región de Nayarit estaba habitada por diversas culturas indígenas. Aunque no existen registros específicos sobre la presencia de asentamientos prehispánicos en el área exacta de Guayabitos, es probable que las tribus nahuas y coras hayan tenido presencia en la región.</p>
      <p>Con la llegada de los españoles en el siglo XVI, la zona fue conquistada y colonizada. Durante el período colonial, la región de Nayarit estuvo bajo la jurisdicción de la Nueva Galicia, que era una de las provincias más grandes del Virreinato de Nueva España.</p>
      <p>A partir de la segunda mitad del siglo XX, Guayabitos comenzó a experimentar un crecimiento significativo en el turismo. La belleza de sus playas y la tranquilidad de sus aguas atrajeron a visitantes locales y extranjeros, convirtiéndolo en un popular destino vacacional.</p>
      <p>Con el tiempo, la localidad se ha desarrollado para satisfacer la demanda turística, y ahora cuenta con una amplia variedad de hoteles, restaurantes, tiendas y actividades recreativas. La mayoría de los visitantes vienen en busca de un ambiente relajado, ideal para familias, parejas y aquellos que buscan disfrutar de las playas y el clima cálido.</p>
      <p>Guayabitos también se encuentra cerca de otras atracciones turísticas populares en Nayarit, como Sayulita, San Pancho (San Francisco), Las Islas Marietas, y las ciudades históricas de Tepic y Compostela.</p>

    </div>
  </div>

  <section class="seccion2Destinos">
    <div class="container1">
      <div></div>
      <div>
        <h1>¿CÓMO LLEGAR?</h1>
        <hr>
      </div>
    </div>
  </section>
  <div class="maps">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.749182051388!2d-105.27511588328565!3d21.02519056914842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842125ad195d91f5%3A0x51a6c1bed56a9ae5!2s63724%20Rinc%C3%B3n%20de%20Guayabitos%2C%20Nay.!5e0!3m2!1ses!2smx!4v1690157300087!5m2!1ses!2smx" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mapa"></iframe>

    <a href="http://maps.google.com/?saddr=&amp;daddr=21.027614, -105.266275" target="=_blank" class="rutaBtn">Trazar ruta</a>
  </div>

  <section class="seccion2Destinos">
    <div class="container1">
      <div></div>
      <div>
        <h1>EXPERIENCIAS</h1>
        <hr>
      </div>
    </div>
  </section>

  <div class="container">
    <div class="post">
      <div class="text">¡Gracias por compartir esto con nosotros!</div>
      <div class="edit">EDITAR</div>
    </div>
    <div class="star-widget">
      <input type="radio" name="rate" id="rate-5">
      <label for="rate-5" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-4">
      <label for="rate-4" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-3">
      <label for="rate-3" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-2">
      <label for="rate-2" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-1">
      <label for="rate-1" class="fas fa-star"></label>
        <form id="comentarioForm">
        <header></header>
        <div class="textarea">
          <textarea cols="30" name="COMENTARIOINSERTAROLA" placeholder="Describe tu experiencia.." required></textarea>
        </div>
        <div class="btn">
          <button type="button" id="submitComentario">PUBLICAR</button>
        </div>
      </form>

      </div>
      <div class="comentarios">
                <h3>Comentarios</h3>
                <?php
                require_once '../../conexion/conexion_postgres.php';

                $queryComentarios = 'SELECT comentario FROM public."experiencia" WHERE id_destino=4';
                $consultaComentarios = pg_query($conexion, $queryComentarios);

                if (!$consultaComentarios) {
                  echo "Error en la consulta de comentarios.";
                } else {
                  while ($filaComentario = pg_fetch_assoc($consultaComentarios)) {
                    echo '<p>' . $filaComentario['comentario'] . '</p>';
                  }
                }

                ?>
        </div>

    </div>
    <script>
      const btn = document.querySelector("button");
      const post = document.querySelector(".post");
      const widget = document.querySelector(".star-widget");
      const editBtn = document.querySelector(".edit");
      btn.onclick = ()=>{
        widget.style.display = "none";
        post.style.display = "block";
        editBtn.onclick = ()=>{
          widget.style.display = "block";
          post.style.display = "none";
        }
        return true;
      }
    </script>
    <script>
  document.addEventListener("DOMContentLoaded", function() {
    var submitBtn = document.getElementById("submitComentario");
    var comentarioForm = document.getElementById("comentarioForm");

    submitBtn.addEventListener("click", function() {
      var comentario = comentarioForm.elements["COMENTARIOINSERTAROLA"].value;

      // Crear objeto XMLHttpRequest
      var xhr = new XMLHttpRequest();

      // Configurar el objeto XMLHttpRequest para enviar el formulario a procesar_comentario.php
      xhr.open("POST", "procesar_comentario.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      // Manejar la respuesta recibida del servidor
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // Comentario guardado exitosamente, actualiza la página para ver el nuevo comentario
            location.reload();
          } else {
            location.reload();
          }
        }
      };

      // Enviar el formulario a través de AJAX
      xhr.send("COMENTARIOINSERTAROLA=" + encodeURIComponent(comentario));
    });
  });
</script>

  <footer class="footer">
    <h2>
      Copyright © EQUIPO H - All Rights Reserved | 2023 Agencia Turística 'Traveling Nayarit'.
    </h2>
  </footer>

</body>
<script>
  ScrollReveal().reveal('.navbar', {
    delay: 130
  });
  ScrollReveal().reveal('.navLogin', {
    delay: 100
  });
  ScrollReveal().reveal('.seccion1Destinos');
  ScrollReveal().reveal('.grid_gal', {
    delay: 170
  });
  ScrollReveal().reveal('.separadorD', {
    delay: 170
  });
  ScrollReveal().reveal('.container1', {
    delay: 170
  });
  ScrollReveal().reveal('.scroller', {
    delay: 250
  });
</script>

</html>