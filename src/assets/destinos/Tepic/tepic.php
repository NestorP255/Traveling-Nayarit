<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tepic</title>
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

  <section class="seccion1Tepic">
    <h1>Tepic</h1>
    <h3>Llena de historia, cultura y misticismo que se observa plasmada en sus edificios arquitectónicos, museos y ex haciendas.
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
        <img src="../imagenes/Tepic/1.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img2">
        <img src="../imagenes/Tepic/2.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img3">
        <img src="../imagenes/Tepic/3.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img4">
        <img src="../imagenes/Tepic/4.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img5">
        <img src="../imagenes/Tepic/5.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img6">
        <img src="../imagenes/Tepic/6.jpg" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img7">
        <img src="../imagenes/Tepic/7.webp" loading="lazy">
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
            <a href="#img2"><img src="../../destinos/imagenes/Tepic/1.jpg"></a>
            <a href="#img2">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img2">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img1">
          <</a>
            <a href="#img3"><img src="../../destinos/imagenes/Tepic/2.jpg"></a>
            <a href="#img3">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img3">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img2">
          <</a>
            <a href="#img4"><img src="../../destinos/imagenes/Tepic/3.jpg"></a>
            <a href="#img4">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img4">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img3">
          <</a>
            <a href="#img5"><img src="../../destinos/imagenes/Tepic/4.jpg"></a>
            <a href="#img5">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img5">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img4">
          <</a>
            <a href="#img6"><img src="../../destinos/imagenes/Tepic/5.jpg"></a>
            <a href="#img6">></a>
      </div>
      <a href="#sepr" class="cerrar">x</a>
    </div>
    <div class="modal" id="img6">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img5">
          <</a>
            <a href="#img7"><img src="../../destinos/imagenes/Tepic/6.jpg"></a>
            <a href="#img7">></a>
      </div>
      <a href="#sepr" class="cerrar">X</a>
    </div>
    <div class="modal" id="img7">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img6">
          <</a>
            <a href="#img1"><img src="../../destinos/imagenes/Tepic/7.webp"></a>
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
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/Tepic/atractivos/centro.jpg" loading="lazy"></figure>
        <figcaption><strong>Centro histórico</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/Tepic/atractivos/loma42.jpeg" loading="lazy"></figure>
        <figcaption><strong>Gastronomía</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/Tepic/atractivos/cruz.jpg" loading="lazy"></figure>
        <figcaption><strong>Cerro de La Cruz</strong></figcaption>
      </a>
      <a href="https://www.tripadvisor.com.mx/Attractions-g499444-Activities-Tepic_Pacific_Coast.html" class="btn_icon" target="_blank">
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
          <img src="../imagenes/Tepic/actividades/cerro-sanjuan.jpg" loading="lazy">
        </figure>
        <figcaption><strong>Practica senderismo en el cerro San Juan</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/Tepic/actividades/arte.jpg" Drinks-Sayulita-OK-700x468.jpg" loading="lazy"></figure>
        <figcaption><strong>Conoce el museo Emilia Ortiz</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/Tepic/actividades/museo-regional.jpg" loading="lazy"></figure>
        <figcaption><strong>Visita el museo regional</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/Tepic/actividades/mirador.jpg" loading="lazy"></figure>
        <figcaption><strong>Admira el paisaje desde el mirador Zitakua</strong></figcaption>
      </a>
      <a href="https://www.tripadvisor.com.mx/Attractions-g499444-Activities-Tepic_Pacific_Coast.html" class="btn_icon" target="_blank"> <span>Ver todos <i class="fas fa-arrow-right"></i></span>
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
          <img src="../imagenes/Tepic/festividades/feria.jpg" loading="lazy">
        </figure>
        <figcaption><strong>Feria Nayarit</strong></figcaption>
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
      <p>La demarcación geográfica de Tepic se fue formando durante el siglo XIX, desde 1824 hasta 1867, considerado el 7o. cantón del estado de Jalisco, posteriormente fue un Distrito Militar de 1867 a 1884 y, finalmente tuvo el carácter de territorio federal desde el 12 de diciembre de 1884 hasta 1917.</p>

      <p>Tepic fue creado como territorio federal el 12 de diciembre de 1884, mediante una reforma al artículo 43 de la Constitución, adoptando el nombre de “territorio de Tepic”, categoría que le fue reconocida con la demarcación geográfica formada desde el 7o. cantón del estado de Jalisco. Sin embargo, carecía de autonomía; su gobernador era designado por el presidente de la República, y no tenía Legislatura ni Poder Judicial.</p>

      <p>La propuesta para transformar al territorio de Tepic en un estado de la federación fue presentada por el Primer Jefe, Venustiano Carranza, en los artículos 43 y 47 de su Proyecto de Reformas a la Constitución.</p>

      <p>El 27 de diciembre de 1916 se dio lectura al dictamen que modificaba el artículo 43, que decía: “No habiendo inconveniente, a juicio de la Comisión, en que se considere como estado al Territorio de Tepic, se permite proponer a esta Honorable Asamblea, la aprobación del artículo 43”.</p>

      <p>La primera medida que se tomó para dar cumplimiento a lo ordenado, fue designar al General Jesús M. Ferreira como Gobernador provisional, quien se encargaría de todo lo necesario para preparar el cambio de Territorio de Tepic a Estado de Nayarit.</p>

      <p>El 5 de febrero de 1917, se creó el Estado de Nayarit con el Constituyente de Querétaro. Sin embargo, fue hasta el 1 de mayo de 1917 que se firmó el acta constitutiva donde fueron entregados los asuntos del gobierno del extinto territorio federal, quedando expedida formalmente el acta de nacimiento del Estado Libre y Soberano de Nayarit.</p>

      <p>Actualmente esta entidad cuenta con 20 municipios, teniendo como capital a la ciudad de Tepic. De acuerdo con la Encuesta Intercensal del INEGI de 2015 cuenta con 1 millón 181 mil 050 habitantes, de los cuales el 35% vive en el municipio de Tepic.</p>
        
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12486.446775007475!2d-104.88905423652109!3d21.498206217113253!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1690156616076!5m2!1ses!2smx" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mapa"></iframe>    

    <a href="http://maps.google.com/?saddr=&amp;daddr=21.502655, -104.890714" target="=_blank" class="rutaBtn">Trazar ruta</a>
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

                $queryComentarios = 'SELECT comentario FROM public."experiencia" WHERE id_destino=3';
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