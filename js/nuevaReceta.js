const btnNuevaReceta = document.querySelector('#btnNuevaReceta')
btnNuevaReceta.addEventListener('click', crearNuevaReceta)

const pasosReceta = document.querySelector('#pasosReceta')
const nombreReceta = document.querySelector('#nombreReceta')
const tiempoReceta = document.querySelector('#tiempoReceta')


function crearNuevaReceta() {
    if (ingredientesQueTiene.length == 0) {
        validarCampo("Debe seleccionar al menos un ingrediente")

    } else if (formaDeCocina.value == "Indistinto") {
        validarCampo("Debe seleccionar donde cocinarlo")

    } else if (nombreReceta.value.length < 5) {
        validarCampo("La receta debe tener un nombre")

    } 
    else if (!tiempoReceta.value.length) {
        validarCampo("La receta debe tener un tiempo de preparacion")

    } else if (pasosReceta.value.length < 30) {
        validarCampo("La receta debe tener al menos 30 caracteres")

    }
    else {
        validarCampo("Creaste una receta")
        // ahora si hago la funcion de guardarlo en el Local Storage

    } guardarReceta
}
//------------ como segundo parametro va a tener la variable donde esta.

function validarCampo(msj){
    const mensajeError = document.createElement("H3")
    mensajeError.textContent = msj
    mensajeError.classList.add("error")
    const modalMensaje = document.querySelector(".contentParaModal")
    modalMensaje.appendChild(mensajeError)
   
// agregar una clase que cambie el fondo o el borde a rojo
    setTimeout(() => {
        mensajeError.remove()
      
//quitarle esa clase
    }, 3000)

}


function guardarReceta(){

let recetaUsuario = new Receta (nombreReceta.value, pasosReceta.value, ingredientesQueTiene, 
    formaDeCocina.value, tiempoReceta.value )
    
    localStorage.setItem("recetasDeUsuario", JSON.stringify(recetaUsuario))
    alert("receta guardada")




}



//--------------------------------------------------------------
//--------------------------------------------------------------
//----------------HACERLO COMO ARRAY------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------

// para recuperar lo hace con un parse. justito a la hora

// se me ocurre que puedo recuperar todo. pushear el objeto y setear.

// recuperar y setear objetos dentro de un array


/*
la idea es que al cargar el Buscador, 
entre en storage, obtenga todas las recetas creadas
y por cada una, si NO existe, la pushee en Recetas.




//----------------------------
//---------DESDE APP.JS-------
//----------------------------

Tambien tener en cuenta,que ahi hay que recorrrer un array que haga individualmente lo q esta haciendo
*/