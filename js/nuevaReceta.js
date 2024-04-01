const btnNuevaReceta = document.querySelector('#btnNuevaReceta')
btnNuevaReceta.addEventListener('click', guardarReceta)

const pasosReceta = document.querySelector('#pasosReceta')
const nombreReceta = document.querySelector('#nombreReceta')
const tiempoReceta = document.querySelector('#tiempoReceta')


function crearNuevaReceta() {
    if (ingredientesQueTiene.length == 0) {
        alertaValidacion("Debe seleccionar al menos un ingrediente")

    } else if (formaDeCocina.value == "Indistinto") {
        alertaValidacion("Debe seleccionar donde cocinarlo")

    } else if (nombreReceta.value.length < 5) {
        alertaValidacion("La receta debe tener un nombre")

    } 
    else if (!tiempoReceta.value.length) {
        alertaValidacion("La receta debe tener un tiempo de preparacion")

    } else if (pasosReceta.value.length < 30) {
        alertaValidacion("La receta debe tener al menos 30 caracteres")

    }
    else {
        alertaValidacion("Creaste una receta")
        // ahora si hago la funcion de guardarlo en el Local Storage

    } guardarReceta
}

function alertaValidacion(problema) {
    alert(problema)

    // va a imprimir un mensaje tipo Alert indicando el problema, y inhabilitando todo por 3 segundos, luego se borra
}

// creacion en storage

// boton para recuperar esa info... favoritos y mis recetas? o incorporo a los filtros? q hago?


function guardarReceta(){

let recetaUsuario = new Receta (nombreReceta.value, pasosReceta.value, ingredientesQueTiene, 
    formaDeCocina.value, tiempoReceta.value )
    
    localStorage.setItem("recetasDeUsuario", JSON.stringify(recetaUsuario))


}


// para recuperar lo hace con un parse. justito a la hora

// se me ocurre que puedo recuperar todo. pushear el objeto y setear.

// recuperar y setear objetos dentro de un array


/*
la idea es que al cargar el Buscador, 
entre en storage, obtenga todas las recetas creadas
y por cada una, si NO existe, la pushee en Recetas.

*/