window.addEventListener("load", ()=>{

    const nota = document.getElementById("textaDescripcion");
    const enviar = document.getElementById("btnEnviar");


    var guardado = document.cookie.split("=");
    if(guardado!=""){
        nota.value = guardado[1];
    }
    
    document.cookie = "comeGalleta = galletita; max-age=" + 60*5;

    nota.addEventListener("keyup", ()=>{
        document.cookie = "comeGalleta =" + nota.value + "; max-age = 3600";
    });
    
    enviar.addEventListener("click", ()=>{
        document.cookie = "comeGalleta; max-age=-1";
    });

});