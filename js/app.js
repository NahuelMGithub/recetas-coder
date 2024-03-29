
//----------------- COSAS DEL ANTERIOR Q PUEDEN SERVIR COMO REFERENCIA
//const btnVegetariano = document.querySelector('.btn-vegetariano');
//btnVegetariano.addEventListener('click', filtrarSoloVegetariano)


///---------------------------------------------------------------------------------
///-------------------VARIABLES Y CONSTANTES-----------------------------------------
///---------------------------------------------------------------------------------

//------- sirve para los filtros por ingrediente
let ingredientesQueTiene = []


//---------------------------------DOM

//---- 

const cartaMenu = document.querySelector('#menuRecetas')

///---------------------------------------------------------------------------------
///-------------------BOTONES-----------------------------------------------------
///---------------------------------------------------------------------------------

//------------------- boton modal

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


//-------------- bton para el creador de recetas





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


function seleccionAll() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')
    if (btnSeleccionTodos.textContent == "Seleccionar todos") {
        btnSeleccionTodos.textContent = "Deseleccionar todos";

        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        })
    }



    else {
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

    //------------------- menu de carga. Eventualmente va a ser una de esas animaciones que indica que esta buscando

    //  buscando()

    let recetasFltradas = todasLasRecetas


    if (formaDeCocina.value != "Indistinto") {
        recetasFltradas = recetasFltradas.filter(receta => receta.formaCocina == formaDeCocina.value)

    }

    //--- NO es muy linda esta anidacion, pero por ahora funciona

    if (dieta.value != "Indistinto") {
        if (dieta.value == 'Vegetariano') {
            recetasFltradas = recetasFltradas.filter(receta => receta.esVegetariano())
        }

        if (dieta.value == 'Vegano') {
            recetasFltradas = recetasFltradas.filter(receta => receta.esVegano())
        }

        if (dieta.value == 'Celiaco') {
            recetasFltradas = recetasFltradas.filter(receta => receta.esAptoCeliaco())
        }
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






//--------------------- FUNCIONES AUXILIARES

//--------- Animacion de busqueda
function buscando() {
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
    agregarBotonesDeFavoritos()
}

function agregarBotonesDeFavoritos() {
    // Agregar controlador de eventos para los botones "Agregar a Favoritos"
    let addToFavoritesButtons = document.querySelectorAll('.agregarAFavoritos');
    addToFavoritesButtons.forEach(button => {
        button.addEventListener('click', agregarAFavoritos

        );
    });


    function agregarAFavoritos() {
        alert('Su receta fue guardad en favoritos')
    }
}


// Esta funcion muestra los nombres de los ingredientes de una lista de ingredientes. Esto se usa porque en la funcion Motras receta, ingredientes lo retorna como objetos
function mostrarIngredientes(ingredientes) {
    return ingredientes.map(ingrediente => ingrediente.nombre)

}






//--------------------------------------------------------------------------------
//-----------------------STORAGE        -----------------------------------------
//--------------------------------------------------------------------------------

//------------------- creacion
