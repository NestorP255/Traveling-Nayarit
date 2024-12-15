<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>San Blas</title>
  <!--Icono de la ventana-->
  <link rel="shortcut icon" href="../../imagenes/favicon2.png">
  <!--Enlace a la hoja de estilo CSS-->
  <link rel="stylesheet" href="../../css/estilo.css">
  <!--Scroll reveal animacion-->
  <script src="https://unpkg.com/scrollreveal@4"></script>
  <!--Esta hoja es para los iconos de la calificacion-->

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
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

  <section class="seccion1SanBlas">
    <h1>San Blas</h1>
    <h3>Sus atractivos te esperan para ofrecerte maravillosas aventuras en sus esteros, manglares y parques nacionales. Sus playas, gastronomía típica, diversidad ecológica y su legado colonial hacen de San Blas un puerto único en el Pacífico Mexicano.
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
        <img src="../imagenes/sanblas/1.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img2">
        <img src="../imagenes/sanblas/2.webp" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img3">
        <img src="../imagenes/sanblas/3.webp" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img4">
        <img src="../imagenes/sanblas/4.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img5">
        <img src="../imagenes/sanblas/5.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img6">
        <img src="../imagenes/sanblas/6.webp" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img7">
        <img src="../imagenes/sanblas/7.webp" loading="lazy">
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
            <a href="#img2"><img src="../../destinos/imagenes/sanblas/1.webp"></a>
            <a href="#img2">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img2">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img1">
          <</a>
            <a href="#img3"><img src="../../destinos/imagenes/sayulita/2.gif"></a>
            <a href="#img3">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img3">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img2">
          <</a>
            <a href="#img4"><img src="../../destinos/imagenes/sayulita/3.gif"></a>
            <a href="#img4">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img4">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img3">
          <</a>
            <a href="#img5"><img src="../../destinos/imagenes/sayulita/4.gif"></a>
            <a href="#img5">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img5">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img4">
          <</a>
            <a href="#img6"><img src="../../destinos/imagenes/sayulita/5.gif"></a>
            <a href="#img6">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img6">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img5">
          <</a>
            <a href="#img7"><img src="../../destinos/imagenes/sayulita/6.gif"></a>
            <a href="#img7">></a>
      </div>
      <a href="#sepr" class="cerrar">X</a>
    </div>
    <div class="modal" id="img7">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img6">
          <</a>
            <a href="#img1"><img src="../../destinos/imagenes/sayulita/7.gif"></a>
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
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/sanblas/atractivos/playa-las-islitas.jpg" loading="lazy"></figure>
        <figcaption><strong>Playa Las Islitas</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/sanblas/atractivos/centro.jpg" loading="lazy"></figure>
        <figcaption><strong>Centro histórico</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/sanblas/atractivos/templo.jpg" loading="lazy"></figure>
        <figcaption><strong>Templo Parroquial</strong></figcaption>
      </a>
      <a href="https://www.lugaresturisticosenmexico.com/san-blas-riviera-nayarit/" class="btn_icon" target="_blank">
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
          <img src="../imagenes/sanblas/actividades/ecoturismo.jpg" loading="lazy">
        </figure>
        <figcaption><strong>Ecoturismo</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/sanblas/actividades/parques.jpg" Drinks-Sayulita-OK-700x468.jpg" loading="lazy"></figure>
        <figcaption><strong>Conoce el zoológico</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/sanblas/actividades/sufr.jpg" loading="lazy"></figure>
        <figcaption><strong>Practica surf</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/sanblas/actividades/cerro-de-la-contaduria.jpg" loading="lazy"></figure>
        <figcaption><strong>Visita el Fuerte de la contaduría</strong></figcaption>
      </a>
      <a href="https://sanblasrivieranayarit.com/que-hacer/" class="btn_icon" target="_blank"> <span>Ver todos <i class="fas fa-arrow-right"></i></span>
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
          <img src="../imagenes/sanblas/festividades/patronales.jpg" loading="lazy">
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

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14844.849900148973!2d-105.29072393482501!3d21.538545693261895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8420b8374a1b4aa3%3A0x7d2174d42ab8cdf5!2sSan%20Blas%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1690129103120!5m2!1ses-419!2smx" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mapa"></iframe>

    <a href="http://maps.google.com/?saddr=&amp;daddr=21.540761,-105.283943" target="=_blank" class="rutaBtn">Trazar ruta</a>
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

                $queryComentarios = 'SELECT comentario FROM public."experiencia" WHERE id_destino=2';
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