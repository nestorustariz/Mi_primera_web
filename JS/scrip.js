//alert("Hola este es mi Javascript");

//let nombre = "Kike";
//console.log(nombre);

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".logo");
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre"){

    titulo.innerHTML = "Mi WEB";
}else{
    console.log("no se cumple");
}

// FUNCIONES

let semestre = "10";

let parrafos = document.querySelector(".parrafo");

function cambiarTexto(semestre){

    let contenido = `Estudiante de ${semestre} semestre de ingeniería en sistemas.
    Capacidad para trabajar en equipo y buen manejo de relaciones interpersonales, alto liderazgo, sentido de pertenencia y compromiso por los resultados,adaptabilidad al cambio y tolerancia a la frustración.`;

    return contenido;

}

parrafos.innerText = cambiarTexto(semestre);


/*-------FORMULARIOS---------------------------------*/
