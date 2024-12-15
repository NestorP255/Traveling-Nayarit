<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sayulita</title>
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

  <section class="seccion1Sayulita">
    <h1>Sayulita</h1>
    <h3>Aprecia espectaculares torneos de surf, disfruta de la belleza de las playas y explora los rincones coloridos del Pueblo Mágico.
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
        <img src="../imagenes/sayulita/1.gif" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img2">
        <img src="../imagenes/sayulita/2.gif" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img3">
        <img src="../imagenes/sayulita/3.gif" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img4">
        <img src="../imagenes/sayulita/4.gif" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img5">
        <img src="../imagenes/sayulita/5.gif" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img6">
        <img src="../imagenes/sayulita/6.gif" loading="lazy">
      </a>
    </figure>

    <figure>
      <a href="#img7">
        <img src="../imagenes/sayulita/7.gif" loading="lazy">
      </a>
    </figure>


  </section>

  <!--Para maximizar las imagenes-->
  <div>
    <div class="modal" id="img1">
      <br><br><br><br><br><br><br><br><br>
      <div class="imagen">
        <a href="#img7"><</a>
            <a href="#img2"><img src="../../destinos/imagenes/sayulita/1.gif"></a>
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
      <a href="#sepr" class="cerrar">x</a>
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
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/sayulita/atractivos/playa-sayulita.jpg" loading="lazy"></figure>
        <figcaption><strong>Playa de Sayulita</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/sayulita/atractivos/plaza-principal.jpg" loading="lazy"></figure>
        <figcaption><strong>Plaza principal</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="atractivos">Atractivos</b> <img src="../imagenes/sayulita/atractivos/zona-arqueologica.jpg" loading="lazy"></figure>
        <figcaption><strong>Zona arqueológica Los Toriles</strong></figcaption>
      </a>
      <a href="https://www.gob.mx/sectur/es/articulos/sayulita-nayarit" class="btn_icon" target="_blank">
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
          <img src="../imagenes/sayulita/actividades/yoga.jpg" loading="lazy">
        </figure>
        <figcaption><strong>Relájate en unas clases de yoga</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/sayulita/actividades/drinks.jpg" Drinks-Sayulita-OK-700x468.jpg" loading="lazy"></figure>
        <figcaption><strong>Disfruta unos drinks en el Club de Playa Camarón</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/sayulita/actividades/surf.jpg" loading="lazy"></figure>
        <figcaption><strong>Toma clases de surf</strong></figcaption>
      </a>
      <a href="" class="item">
        <figure><b class="actividades">Actividades</b> <img src="../imagenes/sayulita/actividades/arte.jpg" loading="lazy"></figure>
        <figcaption><strong>Entra a las galerías y tiendas de arte</strong></figcaption>
      </a>
      <a href="https://www.gob.mx/sectur/es/articulos/sayulita-nayarit" class="btn_icon" target="_blank"> <span>Ver todos <i class="fas fa-arrow-right"></i></span>
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
          <img src="../imagenes/sayulita/festividades/festival.jpg" loading="lazy">
        </figure>
        <figcaption><strong>Festival Sayulita</strong></figcaption>
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
        En la comunidad de Sayulita sólo habitaban alrededor de 40 personas en pequeñas chozas construidas de palma y alumbradas con lámparas de petróleo que se manufacturaban con hoja de lata.
      </p>
      <p>
        Todos los habitantes de la comunidad y de las rancherías vecinas (Pátzcuaro, La Higuera, Los Caomiles, Pantoqui, San Francisco, Lo de Marcos, entre otras) trabajaban en la hacienda de Jaltemba, propiedad de los alumnos de 1 secundaria , donde se extraía el aceite del coco de aceite de la especie Attalea Cohune.
      </p>
      <p>
        En esta región del sur de Nayarit proliferaban las palmeras de coco de aceite; todos los hombres trabajaban en la recolección de éstos, que eran partidos por mitad con una piedra para extraer el aceite de la nuez. En la época del auge del aceite de coco muchos de los trabajadores murieron a causa de afecciones pulmonares, ocasionadas por la inhalación del polvo que despedía el coco al ser partido.
      </p>
      <p>
        Cada semana llegaba al pequeño puerto de Sayulita el navío “Salvatierra”, en el que se embarcaba la producción aceitera de la hacienda.
      </p>
      <p>
        La hacienda fue creciendo, y además de la producción de aceite pronto llegó a ser un importante emporio ganadero que inició el hijo de la señora Camarena, don Santiago.
      </p>
      <p>
        En el año de 1936, Santiago, hijo de Camarena dona las tierras a los trabajadores del puerto con la intención de que siguieran produciendo.
      </p>
      <p>
        La familia Camarena vende todas sus cabezas de ganado y el gobierno expropia las tierras de la hacienda,formando así el ejido de Sayulita.
      </p>
      <p>
        En la década de los cuarenta la producción cocotera se redujo considerablemente y los lugareños recurrieron a la agricultura y a la pesca, que hasta nuestros días es variada aunque menos abundante. Se pesca, entre otros: huachinango, pargo, jurel, sierra, mero, ostión, camarón y langosta.
      </p>
      <p>
        En 1965 se construyó la carretera La Varas-Pto. Vallarta y con ello se inauguró otra actividad importante en la región: el turismo.
      </p>
      <p>
        Unos años después se inició un proyecto gubernamental de expansión y desarrollo turístico; en Sayulita se empedraron las calles, se construyeron kiosco, plaza pública, mercado, banquetas y demás obras públicas.
      </p>
      <p>
        Por otro lado de la historia, los lugareños cuentan que Sayulita se formó hace más de 5000 años por los dioses de las olas, quienes específicamente crearon Sayulita para ser un lugar donde las olas fueran perfectas. Uno de los dioses que según la leyenda creó Sayulita fue el dios de las olas Oz.
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7456.112401949001!2d-105.44314747125789!3d20.86978486929652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84211662ea3de98d%3A0x1433c0c1e6d1e84c!2s63728%20Sayulita%2C%20Nay.!5e0!3m2!1ses!2smx!4v1654637884702!5m2!1ses!2smx" width="900" height="450" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mapa"></iframe>

    <a href="http://maps.google.com/?saddr=&amp;daddr=20.8688888,-105.44083330000001" target="=_blank" class="rutaBtn">Trazar ruta</a>
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

                $queryComentarios = 'SELECT comentario FROM public."experiencia" WHERE id_destino=1';
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