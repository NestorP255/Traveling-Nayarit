<?php
if (isset($_POST['COMENTARIOINSERTAROLA'])) {
    // Obtener el comentario enviado desde el formulario
    $comentario = $_POST['COMENTARIOINSERTAROLA'];

    // Realizar la conexión a la base de datos
    require_once '../../conexion/conexion_postgres.php';

    // Consulta para insertar el comentario en la tabla experiencia
    $queryInsertarComentario = 'INSERT INTO Experiencia (Comentario, Calificacion, ID_Usuario, ID_Destino) VALUES ($1, $2, $3, $4)';

    // Preparar la consulta
    $stmt = pg_prepare($conexion, "insertar_comentario", $queryInsertarComentario);

    // Verificar si la preparación de la consulta fue exitosa
    if ($stmt) {
        // Valores a insertar en la consulta
        // En este caso, la calificación y los IDs de usuario y destino podrían ser NULL o 0, dependiendo de tus requisitos
        $calificacion = 5; // Puedes obtener la calificación del formulario si lo deseas
        $id_usuario = 6; // Reemplaza 0 por el ID del usuario que realiza el comentario
        $id_destino = 1; // Reemplaza 6 por el ID del destino (Punta de Mita)

        // Ejecutar la consulta con los valores proporcionados
        $result = pg_execute($conexion, "insertar_comentario", array($comentario, $calificacion, $id_usuario, $id_destino));

        // Verificar si la inserción fue exitosa
        if ($result) {
            // Redirigir al usuario nuevamente a la misma página después de procesar el comentario
            header("Location: mexcaltitan.php");
            exit; // Importante: Salir del script para que no se procese más código
        }
    }
    // Cerrar la conexión a la base de datos
    pg_close($conexion);
}
?>
