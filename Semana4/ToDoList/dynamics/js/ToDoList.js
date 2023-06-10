const agregar= document.getElementById("Agregar");
const lista= document.getElementsByClassName("Lista");
const entradaMat = document.getElementById("entradaMat");
const ingresar = document.getElementById("ingresar");
const materia = document.getElementById("materia");

const newTarea = document.createElement("article");
const opcion = document.createElement("input");
const boton1 = document.createElement("div");
const boton2 = document.createElement("div");
const title = document.createElement("div");


window.addEventListener("load", ()=>{
        agregar.addEventListener("click",()=>{
            window.alert("creaste elemento");
            nuevatarea(ingresar);
        });
    });
    function nuevatarea(ingresar){
        newTarea.classList.add("agrupa");
        ingresar.appendChild(newTarea);
        
        title.textContent = entradaMat.value+":"+materia.value;
        title.classList.add("Titulo");
        newTarea.appendChild(title);

        boton1.textContent = "Eliminar";
        boton1.classList.add("Eliminar");
        newTarea.appendChild(boton1);
        
        boton2.textContent = "Completada";
        boton2.classList.add("Completada");
        newTarea.appendChild(boton2);

    }

window.addEventListener("load", ()=>{
        boton1.addEventListener("click",()=>{
            console.log("Eliminaste tarea");
            eliminado(ingresar);
        });
    });
    function eliminado(ingresar){
        ingresar.removeChild(newTarea);

    }


window.addEventListener("load", ()=>{
        boton2.addEventListener("click",()=>{
            console.log("Completaste tarea");
            completado(newTarea);
        });
    });
    function completado(newTarea){
        newTarea.style.background = "rgb(174, 240, 158)";
        boton2.style.background = "rgb(144, 218, 125)";

    }
