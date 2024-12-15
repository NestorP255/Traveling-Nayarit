<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Punta de Mita</title>
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

  <section class="seccion1PuntaMita">
    <h1>Punta de Mita</h1>
    <h3>Practica deportes acuáticos y descubre las playas desiertas, los hoteles exclusivos y las hermosas islas en el resort frente al mar de Punta de Mita.
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
        <img src="../imagenes/PuntaMita/1.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img2">
        <img src="../imagenes/PuntaMita/2.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img3">
        <img src="../imagenes/PuntaMita/3.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img4">
        <img src="../imagenes/PuntaMita/4.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img5">
        <img src="../imagenes/PuntaMita/5.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img6">
        <img src="../imagenes/PuntaMita/6.webp" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img7">
        <img src="../imagenes/PuntaMita/7.webp" loading="lazy">
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
            <a href="#img2"><img src="../../destinos/imagenes/PuntaMita/1.jpg"></a>
            <a href="#img2">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img2">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img1">
          <</a>
            <a href="#img3"><img src="../../destinos/imagenes/PuntaMita/2.jpg"></a>
            <a href="#img3">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img3">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img2">
          <</a>
            <a href="#img4"><img src="../../destinos/imagenes/PuntaMita/3.jpg"></a>
            <a href="#img4">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img4">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img3">
          <</a>
            <a href="#img5"><img src="../../destinos/imagenes/PuntaMita/4.jpg"></a>
            <a href="#img5">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img5">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img4">
          <</a>
            <a href="#img6"><img src="../../destinos/imagenes/PuntaMita/5.jpg"></a>
            <a href="#img6">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img6">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img5">
          <</a>
            <a href="#img7"><img src="../../destinos/imagenes/PuntaMita/6.webp"></a>
            <a href="#img7">></a>
      </div>
      <a href="#sepr" class="cerrar">X</a>
    </div>
    <div class="modal" id="img7">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img6">
          <</a>
            <a href="#img1"><img src="../../destinos/imagenes/PuntaMita/7.webp"></a>
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
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/PuntaMita/atractivos/playa-anclote.jpg" loading="lazy"></figure>
        <figcaption><strong>Playa El Anclote</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/PuntaMita/atractivos/rosa-restaurante.jpg" loading="lazy"></figure>
        <figcaption><strong>Gastronomía</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/PuntaMita/atractivos/surf.jpg" loading="lazy"></figure>
        <figcaption><strong>Surf</strong></figcaption>
      </a>
      <a href="https://www.tripadvisor.com.mx/Attractions-g499443-Activities-zft11306-Punta_de_Mita_Pacific_Coast.html" class="btn_icon" target="_blank">
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
          <img src="../imagenes/PuntaMita/actividades/paseo-bote.jpg" loading="lazy">
        </figure>
        <figcaption><strong>Pasea en un elegante bote</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/PuntaMita/actividades/clases-surf.jpg" Drinks-Sayulita-OK-700x468.jpg" loading="lazy"></figure>
        <figcaption><strong>Aprende a surfear</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/PuntaMita/actividades/punta-mita-utv-tour.jpg" loading="lazy"></figure>
        <figcaption><strong>Aventúrate en los 4x4</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/PuntaMita/actividades/buceo.jpg" loading="lazy"></figure>
        <figcaption><strong>Admira el fondo marino</strong></figcaption>
      </a>
      <a href="https://www.tripadvisor.com.mx/Attraction_Review-g499443-d3518930-Reviews-Punta_Mita_Adventures-Punta_de_Mita_Pacific_Coast.html" class="btn_icon" target="_blank"> <span>Ver todos <i class="fas fa-arrow-right"></i></span>
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
          <img src="../imagenes/PuntaMita/festividades/gourmetygolf.jpg" loading="lazy">
        </figure>
        <figcaption><strong>PUNTA MITA GOURMET AND GOLF</strong></figcaption>
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
      <p>Punta de Mita es un hermoso destino turístico situado en el estado de Nayarit, México. Su historia se remonta a tiempos prehispánicos, cuando la zona estaba habitada por las culturas indígenas coras y huicholes.</p>
      <p>Antes de la llegada de los españoles, la región de Punta de Mita era conocida como "Mictlán," que significa "lugar de los muertos" en la lengua náhuatl, debido a que los indígenas huicholes utilizaban el lugar para enterrar a sus muertos. Aunque esta área no fue el epicentro de alguna gran civilización mesoamericana, sus antiguos habitantes dejaron rastros de su cultura en forma de petroglifos y otros vestigios arqueológicos que aún se pueden encontrar en la zona.</p>
      <p>Después de la llegada de los españoles a la región en el siglo XVI, Nayarit se convirtió en parte del Virreinato de Nueva España. Durante la época colonial, la zona de Punta de Mita fue principalmente un lugar de paso para los barcos que transportaban mercancías y exploradores que navegaban a lo largo de la costa del Pacífico.</p>
      <p>En el siglo XIX, con la independencia de México, Nayarit se convirtió en un estado libre y se comenzaron a establecer pequeñas comunidades a lo largo de su litoral. Punta de Mita era entonces una pequeña aldea de pescadores, cuyos habitantes vivían principalmente de la pesca y la agricultura.</p>
      <p>A lo largo del siglo XX, la región comenzó a desarrollarse lentamente como destino turístico, aunque de manera modesta. En la década de 1970, se construyeron los primeros hoteles y resorts, atrayendo a un número creciente de visitantes. Con el tiempo, Punta de Mita se convirtió en un destino popular para los turistas que buscaban playas hermosas, aguas cristalinas y una experiencia relajada y exclusiva.</p>
      <p>En los últimos años, Punta de Mita ha experimentado un auge en la industria turística, con la construcción de lujosos complejos turísticos, campos de golf de clase mundial y residencias de lujo. La región ha atraído a celebridades y viajeros de todo el mundo que buscan un lugar paradisíaco para relajarse y disfrutar de la belleza natural de la costa del Pacífico mexicano.</p>

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

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.407057525079!2d-105.51836017382361!3d20.77481369645048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421146802f4b825%3A0xca05d98993de7ec5!2s63727%20Punta%20de%20Mita%2C%20Nay.!5e0!3m2!1ses!2smx!4v1690161856176!5m2!1ses!2smx" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mapa"></iframe>

    <a href="http://maps.google.com/?saddr=&amp;daddr=20.772400,-105.515553" target="=_blank" class="rutaBtn">Trazar ruta</a>
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
      
      <!-- Mostrar comentarios existentes -->
      <div class="comentarios">
                <h3>Comentarios</h3>
                <?php
                require_once 'conexion_postgres.php';

                $queryComentarios = 'SELECT comentario FROM public."experiencia" WHERE id_destino=6';
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
  
  btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = () => {
      widget.style.display = "block";
      post.style.display = "none";
    };
    return true; // Permitir el envío del formulario
  };
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
            alert("Error al guardar el comentario en la base de datos.");
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