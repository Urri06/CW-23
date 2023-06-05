class Entrenador{
    constructor(Nombre, regionOrigen, medallas,frase){
        this.Nombre=Nombre;
        this.regionOrigen=regionOrigen;
        this.medallas=medallas;
        this.frase=frase;
    }
    Presentarse(){
        console.log("- Soy " + this.Nombre + " y " + this.frase);
    }
    EligePoke(Poke1,Poke2,Entrenador2){
        window.alert("    *Inicia música de pelea*");
        if(this.medallas>Entrenador2.medallas){
            console.log("- ["+this.Nombre+"] Vamos " + Poke1.nombreP+" yo te elijo");
            console.log("    *Entrada épica *");
            console.log("- ["+Entrenador2.Nombre+"] Vamos " + Poke2.nombreP+" yo te elijo");
            console.log("    *Entrada épica *");
        }else{
            console.log("- ["+Entrenador2.Nombre+"] Vamos " + Poke2.nombreP+" yo te elijo");
            console.log("    *Entrada épica *");
            console.log("- ["+this.Nombre+"] Vamos " + Poke1.nombreP+" yo te elijo");
            console.log("    *Entrada épica *");
        }

    }
}
class Poke{
    constructor(nombreP,nivel, vida, ataque, ataqueEsp, defensa, defensaEsp, velocidad,tiposPrin,tipoSec,mov1,mov2,mov3,mov4){
        this.nombreP=nombreP;
        this.nivel=nivel;
        this.vida=vida;
        this.ataque=ataque;
        this.ataqueEsp=ataqueEsp;
        this.defensa=defensa;
        this.defensaEsp=defensaEsp;
        this.velocidad=velocidad;
        this.tiposPrin=tiposPrin;
        this.tipoSec=tipoSec;
        this.movimiento1=mov1;
        this.movimiento2=mov2;
        this.movimiento3=mov3;
        this.movimiento4=mov4;

    }
    Atacar(Poke2,Poke3,Poke4, Entrenador1, Entrenador2){
        //Pikachu contra Sylveon
            if(this.velocidad>Poke2.velocidad){ 
                //Pikachu gana
                console.log("[El "+this.nombreP+" de "+Entrenador1.Nombre+ " ha acertado el ataque "+this.movimiento2+"]");
                console.log("[Ha sido un dolpe critico que debilitó a su oponente " + Poke2.nombreP+"]");
                console.log("- ["+Entrenador2.Nombre+"] Vamos " + Poke4.nombreP+" yo te elijo"); // Entrenador 2 saca a Gardevoir
                console.log("    *Entrada épica *");
                // Pikachu contra Gardevoir
                if(this.velocidad>Poke4.velocidad){
                     //Pikachu gana
                    console.log("[El "+this.nombreP+" de "+Entrenador1.Nombre+ " ha acertado el ataque "+this.movimiento4+"]");
                    console.log("[Ha sido un dolpe critico que debilitó a su oponente " + Poke4.nombreP+"]");
                    console.log(Entrenador1.Nombre + " de "+ Entrenador1.regionOrigen + " ha ganado el combate");
                }
                else{
                     //Gardevoir gana
                    console.log("[El "+Poke4.nombreP+" de "+Entrenador2.Nombre+ " ha acertado el ataque "+Poke4.movimiento1+"]");
                    console.log("[Ha sido un dolpe critico que debilitó a su oponente " + this.nombreP+"]");
                    console.log("- ["+Entrenador1.Nombre+"] Vamos " + Poke3.nombreP+" yo te elijo"); // Entrenador 1 saca a Vikavolt
                    console.log("    *Entrada épica *");
                    //Gardeoir contra Vikavolt
                    if(Poke4.velocidad>Poke3.velocidad){
                        //Gardevoir gana
                        console.log("[El "+Poke4.nombreP+" de "+Entrenador2.Nombre+ " ha acertado el ataque "+Poke4.movimiento3+"]");
                        console.log("[Ha sido un dolpe critico que debilitó a su oponente " + Poke3.nombreP+"]");
                        console.log(Entrenador2.Nombre + " de "+ Entrenador2.regionOrigen + " ha ganado el combate");
                    }else{
                        //Vikavolt gana
                        console.log("[El "+Poke3.nombreP+" de "+Entrenador1.Nombre+ " ha acertado el ataque "+Poke3.movimiento1+"]");
                        console.log("[Ha sido un dolpe critico que debilitó a su oponente " + Poke4.nombreP+"]");
                        console.log(Entrenador1.Nombre + " de "+ Entrenador1.regionOrigen + " ha ganado el combate");
                    }
                    
                }

            }
            else{
                 //Sylveon gana
                console.log("[El "+Poke2.nombreP+" de "+Entrenador2.Nombre+ " ha acertado el ataque "+Poke2.movimiento2+"]");
                console.log("[Ha sido un dolpe critico que debilitó a su oponente " + this.nombreP+"]");
                console.log("- ["+Entrenador1.Nombre+"] Vamos " + Poke3.nombreP+" yo te elijo"); //Entrenador 1 saca a Vikavolt
                console.log("    *Entrada épica *");
                //Sylveon contra Vikavolt
                if(Poke2.velocidad>Poke3.velocidad){
                    //Sylveon gana
                    console.log("[El "+Poke2.nombreP+" de "+Entrenador2.Nombre+ " ha acertado el ataque "+Poke2.movimiento4+"]");
                    console.log("[Ha sido un dolpe critico que debilitó a su oponente " + Poke3.nombreP+"]");
                    console.log(Entrenador2.Nombre + " de "+ Entrenador2.regionOrigen + " ha ganado el combate");
                }
                else{
                    //Vikavolt gana
                    console.log("[El "+Poke3.nombreP+" de "+Entrenador1.Nombre+ " ha acertado el ataque "+Poke3.movimiento1+"]");
                    console.log("[Ha sido un dolpe critico que debilitó a su oponente " + this.nombreP+"]");
                    console.log("- ["+Entrenador2.Nombre+"] Vamos " + Poke4.nombreP+" yo te elijo"); //Entrenador 2 saca a Gardevoir
                    console.log("    *Entrada épica *");
                    //Gardevoir contra Vikavolt
                    if(Poke4.velocidad>Poke3.velocidad){
                        //Gardevoir gana
                        console.log("[El "+Poke4.nombreP+" de "+Entrenador2.Nombre+ " ha acertado el ataque "+Poke4.movimiento3+"]");
                        console.log("[Ha sido un dolpe critico que debilitó a su oponente " + this.nombreP+"]");
                        console.log(Entrenador2.Nombre + " de "+ Entrenador2.regionOrigen + " ha ganado el combate");
                    }else{
                        //Vikavolt gana
                        console.log("[El "+Poke3.nombreP+" de "+Entrenador1.Nombre+ " ha acertado el ataque "+Poke3.movimiento1+"]");
                        console.log("[Ha sido un dolpe critico que debilitó a su oponente " + this.nombreP+"]");
                        console.log(Entrenador1.Nombre + " de "+ Entrenador1.regionOrigen + " ha ganado el combate");
                    }
                }
                
            }
                // Esta es una pequeña simulación de como sería una batalla, no añadi probabilidades y randoms más q nada porque me sentí bastante algo estresado
                // Ya les comenté a algunos instructores mi situación :], pero hice mi mejor esfuerzo, hasta hice un diagrama en una libreta para entender jajaja
        }
}
class CaractMov extends Poke{
    constructor(nombreP,movimiento1,movimiento2,movimiento3,movimiento4,potencia,probabilidad,tipoE){
        super(nombreP,movimiento1,movimiento2,movimiento3,movimiento4)
       this.nombreP=nombreP;
       this.movimiento1=movimiento1;
       this.movimiento2=movimiento2;
       this.movimiento3=movimiento3;
       this.movimiento4=movimiento4;
       this.potencia=potencia;
       this.probabilidad=probabilidad;
       this.tipoE=tipoE;

    }
    Stats(){
        console.log("Las estadisticas del ataque de "+ this.nombreP + " son: ");
        console.log("La potencia de "+movimiento1 + " es "+this.potencia);
        console.log("La probabilidad de "+movimiento1 + " es "+this.probabilidad);
        console.log("El tipo elemental de "+movimiento1 + " es "+this.tipoSec);
        console.log("Es de tipo especial");

        console.log("Las estadisticas del ataque de "+ this.nombreP + " son: ");
        console.log("La potencia de "+movimiento2 + " es "+this.potencia);
        console.log("La probabilidad de "+movimiento2 + " es "+this.probabilidad);
        console.log("El tipo elemental de "+movimiento2 + " es "+this.tipoSec);
        console.log("Es de tipo fisico");

        console.log("Las estadisticas del ataque de "+ this.nombreP + " son: ");
        console.log("La potencia de "+movimiento3 + " es "+this.potencia);
        console.log("La probabilidad de "+movimiento3 + " es "+this.probabilidad);
        console.log("El tipo elemental de "+movimiento3 + " es "+this.tipoSec);
        console.log("Es de tipo especial");

        console.log("Las estadisticas del ataque de "+ this.nombreP + " son: ");
        console.log("La potencia de "+movimiento4 + " es "+this.potencia);
        console.log("La probabilidad de "+movimiento4 + " es "+this.probabilidad);
        console.log("El tipo elemental de "+movimiento4 + " es "+this.tipoSec);
        console.log("Es de tipo fisico");
    }
}   


let Entrenador1 = new Entrenador("Ash", "Kanto", 2, "nuestra batalla será electrizante");
let Entrenador2 = new Entrenador("Amanda", "Teselia", 5, "no tienes n-hada que hacer contra mi");
let Poke1 = new Poke("Pikachu",57,300,25,35,259,156,400,"Electrico","Normal","Hipertrueno","Placaje","Onda Voltio","Electroweb");
let Poke3 = new Poke("Vikavolt",59,530,30,35,452,371,420,"Bicho","Electrico","Picadura","Spark", "Zumbido","Trueno");
let Poke2 = new Poke("Sylveon",63,200,30,45,269,116,300,"Hada","Normal","Rayo de Luna","Fairy Wind","Campo de niebla","Encanto");
let Poke4 = new Poke("Gardevoir",67,210,30,55,129,149,400,"Psíquico","Hada","Cabezazo zen","confusión","Fuerza lunar","Encanto");
let StatsPoke1 = new CaractMov("Pikachu","Hipertrueno","Placaje","Onda Voltio","Electroweb",19,54,"Electrico");
let StatsPoke2 = new CaractMov("Sylveon","Rayo de Luna","Fairy Wind","Campo de niebla","Encanto",49,35,"Hada");
let StatsPoke3 = new CaractMov("Vikavolt","Picadura","Spark", "Zumbido","Trueno",24,47,"Electrico");
let StatsPoke4 = new CaractMov("Gardevoir","Cabezazo zen","confusión","Fuerza lunar","Encanto",78,35,"Hada");


Entrenador1.Presentarse();
Entrenador2.Presentarse();
Entrenador1.EligePoke(Poke1,Poke2,Entrenador2);
Poke1.Atacar(Poke2,Poke3,Poke4, Entrenador1, Entrenador2);
