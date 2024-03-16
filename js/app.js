

///-------------------------------------------------------------------------------------------------------------------------------------------------------------//
///------------------------------------- preentrega 2. Selectores de botones. SOLO para esta preentrega---------------------------------------------------------//
///-------------------------------------------------------------------------------------------------------------------------------------------------------------//


const btnVegetariano = document.querySelector('.btn-vegetariano');
const btnHorno = document.querySelector('.btn-horno');
const btnParrilla = document.querySelector('.btn-parrilla');
const btnVegano = document.querySelector('.btn-vegano');

btnVegetariano.addEventListener('click', filtrarSoloVegetariano)
btnHorno.addEventListener('click', filtrarAlHorno)
btnParrilla.addEventListener('click', filtrarALaParrilla)
btnVegano.addEventListener('click', function () {console.log('hola')})


// -------------------------------------------funciones de FILTRADO de pedido. 



//Estas funciones estan armadas solo para la preentrega 02. Eventaulmente van a ser mejores

function filtrarSoloVegetariano(){
    let recetasVegetarianas = []
    todasLasRecetas.forEach(receta =>{
        if(receta.esVegetariano()){
            recetasVegetarianas.push(receta)
             }  }  )
      
       mostrarRecetas(recetasVegetarianas)

}


//-- solo a la parrilla


function filtrarALaParrilla(){
    let recetasALaParrilla = []
    todasLasRecetas.forEach(receta =>{
        if(receta.formaCocina == "Parilla"){
            recetasALaParrilla.push(receta)
             }  }  )
      
       mostrarRecetas(recetasALaParrilla)
    }

// solo al horno

function filtrarAlHorno(){
    let recetasAlHorno = []
    todasLasRecetas.forEach(receta =>{
        if(receta.formaCocina == "Horno"){
            recetasAlHorno.push(receta)
             }  }  )
      
       mostrarRecetas(recetasAlHorno)
    }

//-----------------------------------------------  funcion para MOSTRAR los pedidos. 

// funcion que se ejecuta para hacer una demo detallada de la receta. Por el momento en un alert. 
function mostrarRecetas(recetaAMostrar){
   let totalRecetas = recetaAMostrar.length;

   for(let i = 0; i< totalRecetas; i+=1){
    alert(`Receta Nro ${i+1} 
        Nombre= ${recetaAMostrar[i].nombre}
        Ingredientes= ${ mostrarIngredientes(recetaAMostrar[i].ingredientes)}
        Modo de coccion= ${recetaAMostrar[i].formaCocina}
        Tiempo estimado= ${recetaAMostrar[i].tiempo} minutos
        Receta= ${recetaAMostrar[i].instrucciones}`)
   }
}

// Esta funcion muestra los nombres de los ingredientes de una lista de ingredientes. Esto se usa porque en la funcion Motras receta, ingredientes lo retorna como objetos
function mostrarIngredientes(ingredientes){
     return ingredientes.map(ingrediente => ingrediente.nombre)
    
}

//---------------------------------------------------------------------------------------------


/*

hacer 5 recetas mas

linkear con boostrap

crear card



concatenar filters para mas adelante. (cuando quiera vegetariano con tomate, etc)


*/