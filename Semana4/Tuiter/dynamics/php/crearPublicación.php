<?php
// para conectar con el otro archivo de configuracion de DB
    $include = include("./config.php");
    $con = connect();

    if($include && $con){

        $ID_usuario = 1;
        $descripcion = "omg -> prueba";
        $fecha = "01-06-2023";
        $hora = "01:18";
        $corazon = 54;
        $n_comentario = 12;
        $n_retuits = 21;

        $peticion = "INSERT INTO publicacion VALUES (0, 1, '$descripcion', '$fecha', '$hora', $corazon, $n_comentario, $n_retuits)";
        $query = mysqli_query($con, $peticion);

// PETICION DEL OTRO TIPO, si ocupamos select, show y esas 
// ocupamos mysqli_fetch_array($query);
//  tmb mysqli_fetch_assoc
        // $sql = "SELECT * FROM usuarios";
        // $query = mysqli_query($con, $sql);

        var_dump($query);


        // $datos = mysqli_fetch_array($query);
// nos la da en un arreglo númerico y asosiativo 

        // $datos = mysqli_fetch_assoc($query);
// solo nos muestra la asociación de la tabla, no las localidades numéricas
        // var_dump($datos);
// si seguimos poniendo la variable datos y var dump nos sladrán las siguientes columnas
    
        // while($row = mysqli_fetch_assoc($query)){
            // echo "<br>";
            // var_dump($row);
            
            // echo $row["n_comentarios"];
        // }
// para recorrer todos los registros 
    }
?>
