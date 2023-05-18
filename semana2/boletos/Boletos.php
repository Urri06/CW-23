<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>info</title>
</head>
<body>
    <h1 align="center">＊*•̩̩͙✩•̩̩͙*˚ Tus boletos :3 ˚*•̩̩͙✩•̩̩͙*˚＊</h1>
    <?php
        $nombre=(isset($_POST['Nombre']) && $_POST["Nombre"] != "")? $_POST['Nombre'] : "Falta Valor";
        $artista=(isset($_POST['Artista']) && $_POST["Artista"] != "")? $_POST['Artista'] : "Falta Valor";
        $date=(isset($_POST['Fecha']) && $_POST["Fecha"] != "")? $_POST['Fecha'] : "Falta Valor";
        $zone=(isset($_POST['Zona']) && $_POST["Zona"] != "")? $_POST['Zona'] : "Falta Valor";
        $boletos=(isset($_POST['Boletos']) && $_POST["Boletos"] != "")? $_POST['Boletos'] : "Falta Valor";
        $place=(isset($_POST['Lugar']) && $_POST["Lugar"] != "")? $_POST['Lugar'] : "Falta Valor";
        $extras1=(isset($_POST['Extras1']) && $_POST["Extras1"] != "")? $_POST['Extras1'] : "Falta Valor";
        $extras2=(isset($_POST['Extras2']) && $_POST["Extras2"] != "")? $_POST['Extras2'] : "Falta Valor";
        $extras3=(isset($_POST['Extras3']) && $_POST["Extras3"] != "")? $_POST['Extras3'] : "Falta Valor";

        for($i=0; $i< $boletos; $i++){
            if($artista == "Rosalía"){
                echo "<body bgcolor='F38989'>";
                        };
            if($artista == "Billie Eilish"){
                echo "<body bgcolor='F3E189'>";
                        };
            if($artista == "Maneskin"){
                echo "<body bgcolor='C0F389'>";
                        };
            if($artista == "Kali Uchis"){
                echo "<body bgcolor='F389E3'>";
                        };
            if($artista == "Bruses"){
                echo "<body bgcolor='F36276'>"; 
                       };
            if($artista == "The Marías"){
                echo "<body bgcolor='D689F3'>";
                        };
            echo "<table border='1' width='80%' align='center' cellpadding='30'>";
            echo "    <tr align='center'>";
      	    echo "			<th colspan='4'> Boletos para $artista</th>";
    	    echo "	  </tr>";
            echo "<tr>";
            echo "<td colspan='2'> $nombre </td>";
            echo "<td> Fecha: $date</td>";
            if($artista == "Rosalía"){
                echo " <td rowspan='3'>  <img src='https://i.pinimg.com/originals/2d/95/d7/2d95d73be8d50c53059703313b15c2a7.gif' align='center' alt='Debería haber una imagen del artista' heigth=150 width=200> </td>";
            };
            if($artista == "Billie Eilish"){
                echo " <td rowspan='3'>  <img src='https://i.pinimg.com/564x/79/4f/b9/794fb9ff8fb9747d1c6d6cdc9d59f73d.jpg' align='center' alt='Debería haber una imagen del artista' heigth=150 width=200> </td>";
            };
            if($artista == "Maneskin"){
                echo " <td rowspan='3'>  <img src='https://i.pinimg.com/564x/a5/23/ba/a523ba03eb6c999e619ab2269e223a9f.jpg' align='center' alt='Debería haber una imagen del artista' heigth=150 width=200> </td>";
            };
            if($artista == "Kali Uchis"){
                echo " <td rowspan='3'>  <img src='https://i.pinimg.com/564x/65/a2/ae/65a2aec4a93e8782ad421c4a7596d9c0.jpg' align='center' alt='Debería haber una imagen del artista' heigth=150 width=200> </td>";
            };
            if($artista == "Bruses"){
                echo " <td rowspan='3'>  <img src='https://i.pinimg.com/564x/7d/04/73/7d0473ec9141727d56dd0b551db3aea7.jpg' align='center' alt='Debería haber una imagen del artista' heigth=150 width=200> </td>";
            };
            if($artista == "The Marías"){
                echo " <td rowspan='3'>  <img src='https://www.billboard.com/wp-content/uploads/2021/12/the-Marias-press-2021-cr-Ashley_Seryn-billboard-1548.jpg' align='center' alt='Debería haber una imagen del artista' heigth=150 width=200> </td>";
            };
            

            echo "</tr>";
            echo "<tr>";
            echo "<td> $place </td>";
            echo "<td> $zone </td>";
            echo "<td rowspan='2'>";
            echo "Extras <ul type='circle'>";
            if($extras1 == "Pase VIP"){
                echo "<li> $extras1 </li>"; 
            };
            if($extras2 == "Combo comida"){
                echo "<li> $extras2 </li>";
            };
            if($extras3 == "Estacionamiento"){
                echo "<li> $extras3</li>";
            };
            echo "</ul></td>";
            echo "</tr>";
            echo "<tr>";
            echo "<td>";
            if($place == "Foro Sol"){
                echo "<img src='https://www.rockenmexico.com/wp-content/uploads/2020/02/foro-sol-conciertos-festivales-boletos-capacidad.jpg' align='center' alt='Debería haber una imagen del lugar' heigth=200 width=250>";
            };
            if($place == "Palacio de los Deportes"){
                echo "<img src='https://www.sdpnoticias.com/resizer/SEGE8XTwgblpEMqcCqutEYCj0ck=/1200x675/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/C5QODYPPMFIOPKA62YQTYOIJ4A.jpg' align='center' alt='Debería haber una imagen del lugar' heigth=200 width=250>";
            };
            if($place == "Auditorio Nacional"){
                echo "<img src='https://blog.ticketmaster.com.mx/wp-content/uploads/2022/06/Auditorio-Nacional-2.jpg' align='center' alt='Debería haber una imagen del lugar' heigth=200 width=250>";
            };
            if($place == "Teatro Metropolitan"){
                echo "<img src='https://sic.cultura.gob.mx/images/24734' align='center' alt='Debería haber una imagen del lugar' heigth=200 width=250>";
            };
            echo "</td>";
            echo " <td>  <img src='Zona.png' align='center' alt='Debería haber una imagen de la zona' heigth=200 width=250> </td>";
            echo "</tr>";
            echo "<tr>";

            if($artista == "Rosalía"){
                echo " <td colspan='4' align='center'> A cada copia que ves, tú dale tu bendición, y yo no quiero competir, si no hay comparación</td>";
                        };
            if($artista == "Billie Eilish"){
                echo " <td colspan='4' align='center'> DUHHHH </td>";
                        };
            if($artista == "Maneskin"){
                echo " <td colspan='4' align='center'> Vaffanculo </td>";
                        };
            if($artista == "Kali Uchis"){
                echo " <td colspan='4' align='center'> Veo una muñeca cuando miro en el espejo </td>";
                        };
            if($artista == "Bruses"){
                echo " <td colspan='4' align='center'> 🔪 </td>";
                        };
            if($artista == "The Marías"){
                echo " <td colspan='4' align='center'> '(Every night) Got you runnin in circles, I know'</td>";
                        };

            echo "</tr>";
            echo "</table>";
            echo "";
        };
        echo "</body>";

    ?>
        </table>";

</body>
</html>