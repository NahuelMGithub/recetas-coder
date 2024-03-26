
//----------------- COSAS DEL ANTERIOR Q PUEDEN SERVIR COMO REFERENCIA
//const btnVegetariano = document.querySelector('.btn-vegetariano');
//btnVegetariano.addEventListener('click', filtrarSoloVegetariano)

//----------------- funcion para abrir el MODAL y seleccionar los ingredientes


// Función para abrir el modal
function desplegarMenu() {
    var modal = document.querySelector("#menuIngredientes");
    modal.style.display = "block";
    console.log(modal)
  }
  
  // Función para cerrar el modal
   function cerarMenu() {
    var modal = document.querySelector("#menuIngredientes");
    modal.style.display = "none";

    actualizarCarta()
  }
 
  //--------------------------------------- botones
  
  const btnModalIngredientes = document.querySelector('#btnModalIngredientes');
  btnModalIngredientes.addEventListener('click', desplegarMenu)

  const btnCerrarMenu = document.querySelector('#cerraModal');
  btnCerrarMenu.addEventListener('click', cerarMenu) 




// -------------------------------------------funciones de FILTRADO de pedido. 


//Estas funciones estan armadas solo para la preentrega 02. Eventaulmente van a ser mejores

function filtrarSoloVegetariano() {
    let recetasVegetarianas = []
    todasLasRecetas.forEach(receta => {
        if (receta.esVegetariano()) {
            recetasVegetarianas.push(receta)
        }
    })

    mostrarRecetas(recetasVegetarianas)

}


//-- solo a la parrilla


function filtrarALaParrilla() {
    let recetasALaParrilla = []
    todasLasRecetas.forEach(receta => {
        if (receta.formaCocina == "Parilla") {
            recetasALaParrilla.push(receta)
        }
    })

    mostrarRecetas(recetasALaParrilla)
}

// solo al horno

function filtrarAlHorno() {
    let recetasAlHorno = []
    todasLasRecetas.forEach(receta => {
        if (receta.formaCocina == "Horno") {
            recetasAlHorno.push(receta)
        }
    })

    mostrarRecetas(recetasAlHorno)
}

//-----------------------------------------------  funcion para MOSTRAR los pedidos. 

// funcion que se ejecuta para hacer una demo detallada de la receta. Por el momento en un alert. 
function mostrarRecetas(recetaAMostrar) {
    let totalRecetas = recetaAMostrar.length;

    for (let i = 0; i < totalRecetas; i += 1) {
        alert(`Receta Nro ${i + 1} 
        Nombre= ${recetaAMostrar[i].nombre}
        Ingredientes= ${mostrarIngredientes(recetaAMostrar[i].ingredientes)}
        Modo de coccion= ${recetaAMostrar[i].formaCocina}
        Tiempo estimado= ${recetaAMostrar[i].tiempo} minutos
        Receta= ${recetaAMostrar[i].instrucciones}`)
    }
}

// Esta funcion muestra los nombres de los ingredientes de una lista de ingredientes. Esto se usa porque en la funcion Motras receta, ingredientes lo retorna como objetos
function mostrarIngredientes(ingredientes) {
    return ingredientes.map(ingrediente => ingrediente.nombre)

}

//--------------------------------------------------------------------------------------------

const menuRecetas = document.querySelector('#menuRecetas')

//------------- SELECTORES DE INGREDIENTES

const ingrediente1 = document.querySelector('#opcion1')
const ingrediente2 = document.querySelector('#opcion2')
const ingrediente3 = document.querySelector('#opcion3')


/// como tomo los valores?

function actualizarCarta(){


    
}