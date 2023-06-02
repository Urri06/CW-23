<?php
// constantes para las rutas 
    const DBHOST = "localhost";
    const DBUSER = "root";
    const PASSWORD = "";
    const DB = "tuiter";

// es para ver si tenemos coneccion, nos regresa un objeto  
    // $conexion = mysqli_connect(DBHOST, DBUSER, PASSWORD, DB); 
    // var_dump($conexion);

// otra forma de hacerlo con función
    function connect(){
        $conexion = mysqli_connect(DBHOST, DBUSER, PASSWORD, DB); 
        return $conexion;
    }
    // var_dump(connect());

?>