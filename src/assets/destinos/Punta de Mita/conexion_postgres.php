<?php
$conexion=pg_connect(
   "host=localhost dbname=Proyecto-GuiaTuristica user=postgres password=password port=5432" 
);
if(!$conexion){
    echo "Error: Al intetar conectarse a la BD.";
    exit;
}

    
?>