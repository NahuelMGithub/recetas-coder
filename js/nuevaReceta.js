const btnNuevaReceta = document.querySelector('#btnNuevaReceta')
btnNuevaReceta.addEventListener('click', crearNuevaReceta)

const pasosReceta = document.querySelector('#pasosReceta')


function crearNuevaReceta(){
    if(ingredientesQueTiene.length ==0 ){
        alertaValidacion("Debe seleccionar al menos un ingrediente")

    } else if( formaDeCocina.value == "Indistinto")
    {
        alertaValidacion("Debe seleccionar donde cocinarlo")

    }
 else if( pasosReceta.value.length < 30)
{
    alertaValidacion("La receta debe tener al menos 30 caracteres")

}
else{
    alertaValidacion("Creaste una receta")
    // ahora si hago la funcion de guardarlo en el Local Storage
    
}
}

function alertaValidacion(problema){
    alert(problema)

    // va a imprimir un mensaje tipo Alert indicando el problema, y inhabilitando todo por 3 segundos, luego se borra
}