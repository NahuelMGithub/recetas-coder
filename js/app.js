
///---------------------------------------------------------------------------------
///-------------------VARIABLES Y CONSTANTES-----------------------------------------
///---------------------------------------------------------------------------------

//------- sirve para los filtros por ingrediente
let ingredientesQueTiene = []


//---------------------------------DOM
//----- sirve para dejar las recetas que busco
const cartaMenu = document.querySelector('#menuRecetas')

///---------------------------------------------------------------------------------
///-------------------BOTONES-----------------------------------------------------
///---------------------------------------------------------------------------------


let banderaBtn = true // me sirve para dejar o no usar botones

//----------------------------------- boton modal

//---- modal para ver los ingredietnes

const btnModalIngredientes = document.querySelector('#btnModalIngredientes');
btnModalIngredientes.addEventListener('click', desplegarMenu)



const btnGuardarMenu = document.querySelector('#guardarModal');
btnGuardarMenu.addEventListener('click', guardarModal)


const btnSeleccionTodos = document.querySelector('#selecAll');
btnSeleccionTodos.addEventListener('click', seleccionAll)

const menuModal = document.querySelector('#menuIngredientes')

//------------------- boton filtros

let formaDeCocina = document.querySelector('#seleccion-formaCocina')
let dieta = document.querySelector('#seleccion-dieta');

//----------------- boton buscador de Recetas

const btnBuscadorDeRecetas = document.querySelector('#btnBuscadorDeRecetas');
btnBuscadorDeRecetas.addEventListener('click', buscarRecetas);


///---------------------------------------------------------------------------------
///---------------------------------------------------------------------------------
///-------------------FUNCIONES-----------------------------------------------------
///---------------------------------------------------------------------------------
///---------------------------------------------------------------------------------


//----------------- funcion para abrir el MODAL y seleccionar los ingredientes
// Función para abrir el modal
function desplegarMenu() {
    menuModal.style.display = "block";
}


// Esta parte la tuve que googlear, sabia lo q queria, pero no me daba cuenta del input[type="checkbox"]:checked

function guardarModal() {

    checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function (checkbox) {
        ingredientesQueTiene.push(checkbox.value)
    });

    menuModal.style.display = "none";
}

//---- esta funcion la hice para ahorrar tiempo. Selecciona todos, o le quita la seleccion a todos
function seleccionAll() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')
    if (btnSeleccionTodos.textContent == "Seleccionar todos") {
        btnSeleccionTodos.textContent = "Deseleccionar todos";
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        })
    } else {
        btnSeleccionTodos.textContent = "Seleccionar todos";
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        })
    }
}

// -------------------------------------------funciones de FILTRADO de pedido. 

function buscarRecetas() {

    // primero, limpiar la panalla, por si vuelvo a pedir
    limpiarCarta()
    obtenerRectasCreadas()

    //------------------- menu de carga. Eventualmente va a ser una de esas animaciones que indica que esta buscando

    //  buscando()

    let recetasFltradas = todasLasRecetas


    if (formaDeCocina.value != "Indistinto") {
        recetasFltradas = recetasFltradas.filter(receta => receta.formaCocina == formaDeCocina.value)

    }

    //--- NO es muy linda esta anidacion, pero por ahora funciona

    if (dieta.value != "Indistinto") {

        dieta.value == 'Vegetariano'  && ( recetasFltradas = recetasFltradas.filter(receta => receta.esVegetariano()))
        
        dieta.value == 'Vegano'&& ( recetasFltradas = recetasFltradas.filter(receta => receta.esVegano()))
          
        dieta.value == 'Celiaco' &&  (recetasFltradas = recetasFltradas.filter(receta => receta.esAptoCeliaco()))
        
    }

    //---------------------- filtrar por ingredientes
    // Me costo una banda. Esto hace lo siguiente:
    /*
    Solo si selecciono buscar por criterio de ingredientes:
    de las recetas que ya tengo, hace un nuevo filtro, y se fija que los ingredientes de cada receta que tengo solo use los ingredientes que seleccione
    */
    if (ingredientesQueTiene.length) {
        recetasFltradas = recetasFltradas.filter(receta => receta.listaIngredientes().every(ingrediente => ingredientesQueTiene.includes(ingrediente)))
   }

    //--------- muestra los ingredientes
    mostrarRecetas(recetasFltradas)
}


// hay un BUG pero no puedo encontrar el por que.
/*
por algun motivo cuando hago un filtro por ingredientes me retoma auque tenga solo el primer elemento


*/



//--------------------- FUNCIONES AUXILIARES

//--------- Animacion de busqueda
function buscando() { // agregar un spinner
    alert("Eventualmente va a ser una de esas animaciones que indica que esta buscando")
}

//------------- limpia la carta para una nueva busqueda 
function limpiarCarta() {
    while (cartaMenu.firstChild) {
        cartaMenu.removeChild(cartaMenu.firstChild);
    }

}

//-------------------------------------------------------------------------------------------
//-----------------------------------------------  funcion para MOSTRAR los pedidos. ------
//-------------------------------------------------------------------------------------------


//-------------- coloca todas las tarjetas en el html (carta)

function mostrarRecetas(recetasAMostrar) {
    if (!banderaBtn) { // sirve para validar que no apretes muchas veces el boton si te dio error
        return
    }
    if (recetasAMostrar.length == 0) {
        mostrarError("NO hay recetas con esos criterios. Por favor modifiquelos y vuelva a intentar")
        return
    }

    recetasAMostrar.forEach(
        receta => {
            cartaMenu.innerHTML += `
            <div class="card" style="width: 18rem;">
             
              <div class="card-body">
                <h5 class="card-title">${receta.nombre}</h5>
                <p class="card-text">Ingredientes: ${mostrarIngredientes(receta.ingredientes)}</p>
                <p class="card-text">Modo de cocinar: ${receta.formaCocina}</p>
                <p class="card-text">Pasos: ${receta.instrucciones}</p>
                <a href="#" class="btn btn-primary agregarAFavoritos" >Agregar a Favoitos</a>
              </div>
            </div>
            `

        }

    )

}

// Esta funcion muestra los nombres de los ingredientes de una lista de ingredientes. Esto se usa porque en la funcion Motras receta, ingredientes lo retorna como objetos
function mostrarIngredientes(ingredientes) {
    return ingredientes.map(ingrediente => ingrediente.nombre)

}


//--------------------------------------------------------------------------------
//-----------------------    STORAGE     -----------------------------------------
//--------------------------------------------------------------------------------



// obtiene la receta creada en el local storage, y la agrega en la lista de recetas, solo si no existe ya 

function obtenerRectasCreadas() {

    // obtengo el objeto de receta creada SI ya creamos una receta, sino no pasa nada
    if (localStorage.getItem("recetasDeUsuario") !== null) {
        let objetoImportado = JSON.parse(localStorage.getItem("recetasDeUsuario"))

        //buscarIngredientesImportados(objetoImportado.ingredientes)

        let ingImp = buscarIngredientesImportados(objetoImportado.ingredientes)
        //console.log("ingImp es: " + ingImp)

        //-------------- hago el objeto Receta (para usar metodos)


        // esto lo puedo mejorar achicando el objetoImportado {}
        let recetaImportada = new Receta(objetoImportado.nombre, objetoImportado.instrucciones,
            ingImp, objetoImportado.formaCocina, objetoImportado.tiempo)


        // SI no se encuentra en la lista de recetas, lo incorpora

        if (!todasLasRecetas.some(receta => receta.nombre === recetaImportada.nombre)) {
            todasLasRecetas.push(recetaImportada);
        }
    }

}

/*     EXPLICACION DE LA NECESIDAD DE LA FUNCION buscarIngredientesImportados
El problema es que la recetas es una array de objetos, que a su vez tiene un array de objetos.
cuando obtengo los ingredientes (en la funcion para seleccionar ingredientes) solo obtengo
sus nombres. eso lo llevo al storage, al estar ahí, cuando los traigo, obtengo un array de nombres 
pero no poseen tipo de ingrediente. 
en la siguiente funcion comparo los nombres de ingredientes que tengo, respecto al array de todos los
objetos ingredientes. los que coinciden en nombre,me traigo ese objeto y lo uso para hacer un array de
objetos ingredientes. con dicho array hago la Receta importada.
 */
function buscarIngredientesImportados(nombreIngredientesImportados) {
    // almacenar los ingredientes importados
    let ingredientesImportados = [];


    // Recorrer cada nombre en nombreIngredientesImportados
    for (let nombreIngrediente of nombreIngredientesImportados) {

        for (let ingrediente of todosLosIngredientes) {
            if (nombreIngrediente === ingrediente.nombre) {
                // Si se encuentra, agregarlo a ingredientesImportados
                ingredientesImportados.push(ingrediente);
                // Romper el bucle una vez que se encuentra el ingrediente
                break;
            }
        }
    }
    console.log(ingredientesImportados)
    // Devolver el array de ingredientes importados
    return ingredientesImportados;
}

/*
lo ideal es que cree un modal
tome un segundo parametro y colorre el lugar 
se borre todo a los 3 segundos
*/
function mostrarError(msj) {
    const mensajeError = document.createElement("p")
    mensajeError.textContent = msj
    mensajeError.classList.add("error")
    const modalMensaje = document.querySelector(".contentParaModal")
    modalMensaje.appendChild(mensajeError)
    banderaBtn = false

    setTimeout(() => {
        mensajeError.remove()
        banderaBtn = true

    }, 3000)
}