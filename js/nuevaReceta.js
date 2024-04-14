

const pasosReceta = document.querySelector('#pasosReceta')
const nombreReceta = document.querySelector('#nombreReceta')
const tiempoReceta = document.querySelector('#tiempoReceta')

const btnNuevaReceta = document.querySelector('#btnNuevaReceta')
btnNuevaReceta.addEventListener('click', crearNuevaReceta)





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

        guardarReceta()
    } 

  
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





//-------- aca reemplaza por una. yo quiero traer el array, pushear y meter 





let recetasDelUsuario = []



document.addEventListener("DOMContentLoaded", ()=>{
    if( JSON.parse(localStorage.getItem('recetasDeUsuario'))) {
        recetasDelUsuario = JSON.parse(localStorage.getItem('recetasDeUsuario'))
    } else{
        recetasDelUsuario = []
    }

   
})

function guardarReceta(){
    let recetaUsuario = new Receta (nombreReceta.value, pasosReceta.value, ingredientesQueTiene, 
        formaDeCocina.value, tiempoReceta.value )
         recetasDelUsuario.push(recetaUsuario)
         localStorage.setItem("recetasDeUsuario", JSON.stringify(recetasDelUsuario))
         /* console.log(recetaUsuario)
         console.log(recetasDelUsuario) */
    
   
}

