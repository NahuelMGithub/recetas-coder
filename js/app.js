////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////  CON LO QUE TENGO QUE COCINO  /////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

/// Constantes y Variables

const tipoDeComida = ["Desayuno", "almuerzo", "postre"]; 
const tipoDeIngrediente = ["Carne", "Verdura", "Legumbres", "Lacteo", "Cereales-Harinas","Alacena"]; 
const formaDeCocinar = ["Horno", "Sarten", "Parilla", "Disco", "Microondas"]; 


// valores caloricos segun su quimica. Estos son numeros simples a revisar en bibliografia
const valorProteico = 2;
const valorLipidico = 12;
const valorGlusido  = 7;




//-------------------------------------------------------- Clases y objetos

class Receta{
    constructor(nombre, tipo, instrucciones, ingredientes, formaCocina, tiempo){
        this.nombre        = nombre; // String.
        this.tipo          = tipo; // tipoDeComida
        this.instrucciones = instrucciones; // es un string contando los pasos
        this.ingredientes  = ingredientes; // es una lista de ingredientes/ como hago para agregar mas ingredientes?
        this.formaCocina   = formaCocina; // es unlistado delas formas posibles para cocinarlo. 
        this.tiempo        = tiempo; // tiempo que se tarda en cocinar
       // this.imagen        = img;      // Es una url de imagen. Sirve para mas adelante
    }
    calcularPrecio(){
    // Recorre los ingredientes, calculando el precio
       let precioTotal = 0;
       this.ingredientes.forEach(ingrediente => {
        precioTotal += ingrediente.precio;
       });
       return("$ " + precioTotal)
    }

calcularCalorias() {
    // Recorre los ingredientes, calculando el valor energético dependiendo de su química
    let caloriasTotales = 0;
    this.ingredientes.forEach(ingrediente => {
        caloriasTotales += calculadorCalorias(ingrediente);
    });
    return caloriasTotales + " Calorias";
}

esVegetariano(){
   let esVegetariano = true;

   this.ingredientes.forEach(ingrediente =>{
         if(ingrediente.tipo === "Carne"){
             esVegetariano = false
              } } )
    return esVegetariano;
    }
}



// funcion para crear ingrediente

function Ingrediente(nombre, tipo, precio, quimica){
    this.nombre   = nombre;   // Nombre del ingrediente. Tipo String
    this.tipo     = tipo;     // Tipo del ingrediente. Cane, verdura, etc.Ver Tipos de tipoDeIngrediente. 
    this.precio   = precio;   // Precio del ingrediente. Tipo int 
    this.quimica  = quimica;  // Quimica del ingrediente % de proteina, etc. Es un objeto quimica. 
    
}

function Quimica(proteina, lipido, glusidos){
        this.proteina = proteina;
        this.lipido   = lipido;
        this.glusidos = glusidos;
}


// Calculador de Valor energetico

function calculadorCalorias(ingrediete){

    let caloriasProteina = ingrediete.quimica.proteina * valorProteico;
    let caloriasLipido = ingrediete.quimica.lipido * valorLipidico;
    let caloriasGlusido = ingrediete.quimica.glusidos * valorGlusido;

    return (caloriasProteina +  caloriasLipido + caloriasGlusido )

}

//------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------- "Base de Datos" -----------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------

//----------------- Para la preentrega solo voy a hacer 3 de cada tipo y luego algunas recetas

//-------------------------------------------------------- Listado de Ingredientes.  -------------------------------------------------------


//---------- Ingredientes - Carnes tipoDeIngrediente[0]-------
const pechuga = new Ingrediente(
    "Pechuga de Pollo", tipoDeIngrediente[0], 2.000, new Quimica(300, 150, 200) 
)

const vacio = new Ingrediente(
    "Vacio", tipoDeIngrediente[0], 3.000, new Quimica(200, 150, 200) 
)

const asado = new Ingrediente(
    "Asado", tipoDeIngrediente[0], 2.300, new Quimica(400, 150, 200) 
)


// matambre Carne
// Merluza


//---------- Ingredientes - Verdura tipoDeIngrediente[1]-------

const verdeo = new Ingrediente(
    "Cebolla de Verdeo", tipoDeIngrediente[1], 100, new Quimica(50, 150, 100) 
)

const lechuga = new Ingrediente(
    "lechuga", tipoDeIngrediente[1], 100, new Quimica(50, 130, 100) 
)

const tomate = new Ingrediente(
    "tomate", tipoDeIngrediente[1], 100, new Quimica(50, 130, 100) 
)

const papa = new Ingrediente(
    "papa", tipoDeIngrediente[1], 100, new Quimica(50, 130, 100) 
)


//zanahoria
// brocoli
// morron

//---------- Ingredientes - Legumbre tipoDeIngrediente[2]-------

const lenteja = new Ingrediente(
    "Lentejas", tipoDeIngrediente[2], 100, new Quimica(50, 150, 100) 
)

const poroto = new Ingrediente(
    "poroto", tipoDeIngrediente[2], 100, new Quimica(50, 150, 100) 
)

const arbejas = new Ingrediente(
    "arbejas", tipoDeIngrediente[2], 100, new Quimica(50, 150, 100) 
)


//soja

//---------- Ingredientes - Lacteo tipoDeIngrediente[3]-------
const muzzarella = new Ingrediente(
    "Muzzarella", tipoDeIngrediente[3], 100, new Quimica(150, 100, 300) 
)

const crema = new Ingrediente(
    "Crema", tipoDeIngrediente[3], 500, new Quimica(50, 600, 300) 
)

const leche = new Ingrediente(
    "Leche", tipoDeIngrediente[3], 500, new Quimica(50, 600, 300) 
)

const manteca = new Ingrediente(
    "Manteca", tipoDeIngrediente[3], 500, new Quimica(50, 600, 300) 
)


//queso parmezano

//---------- Ingredientes - Cereales-Harinas tipoDeIngrediente[4]-------
const harina = new Ingrediente(
    "Harina", tipoDeIngrediente[4], 100, new Quimica(50, 150, 100) 
)

const fideosLargos = new Ingrediente(
    "Fideos Largos", tipoDeIngrediente[4], 100, new Quimica(50, 150, 100) 
)

const arroz = new Ingrediente(
    "Arroz", tipoDeIngrediente[4], 100, new Quimica(50, 150, 100) 
)





//---------- Ingredientes - Alacena tipoDeIngrediente[5]-------

const pureTomate = new Ingrediente(
    "Pure de Tomate", tipoDeIngrediente[5], 100, new Quimica(50, 150, 100) 
)

const salsaSoja = new Ingrediente(
    "Salsa de Soja", tipoDeIngrediente[5], 100, new Quimica(50, 150, 100) 
)












// ------------------------- Listado de Recetas ---------------------------------------

const polloAlVerdeo = new Receta(
    "Pollo al verdeo", tipoDeComida[1], "Dorar pollo y retirar. Reahogar cebola, incorporar pollo y crema. Sal y pimieenta", 
    [pechuga, verdeo, crema], formaDeCocinar[1], 45
)

 const pizza = new Receta(
    "Pizza", tipoDeComida[4], ".... receta pizza", [harina, muzzarella, salsa], formaDeCocinar[0], 30
)

const tartaVerduas = new Receta(
    "Tarta de verduras", tipoDeComida[4], ".... Hace una tarta loco, no es tan dificil", [harina, muzzarella, salsa], formaDeCocinar[0], 30
)


//-------------------------------------------------------- FUNCIONES


// Aca voy a hacer las funciones que sean para filtrar las recetas.




console.log(polloAlVerdeo.formaCocina)

console.log(polloAlVerdeo.calcularCalorias())
console.log(polloAlVerdeo.calcularPrecio())


//----------------------- Array de recetas. Aca van a estar TODAS LAS RECETAS. Es la BD por el momento.

const todasLasRecetas = [polloAlVerdeo, pizza, tartaVerduas ]



///-------------------------------------------------------------------------------------------------------------------------------------------------------------//
///------------------------------------- preentrega 2. Selectores de botones. SOLO para esta preentrega---------------------------------------------------------//
///-------------------------------------------------------------------------------------------------------------------------------------------------------------//


const btnVegetariano = document.querySelector('.btn-vegetariano');
const btnHorno = document.querySelector('.btn-horno');
const btnParrilla = document.querySelector('.btn-parrilla');
const btnVegano = document.querySelector('.btn-vegano');

btnVegetariano.addEventListener('click', filtrarSoloVegetariano)
btnHorno.addEventListener('click', function () {console.log('hola')})
btnParrilla.addEventListener('click', function () {console.log('hola')})
btnVegano.addEventListener('click', function () {console.log('hola')})


// funciones con filtro. Estas funciones estan armadas solo para la preentrega 02. Eventaulmente van a ser mejores

function filtrarSoloVegetariano(){
    let recetasVegetarianas = []
    todasLasRecetas.forEach(receta =>{
        if(receta.esVegetariano()){
            recetasVegetarianas.push(receta)
             }  }  )
      
       mostrarRecetas(recetasVegetarianas)

}


//  funcion para mostrar los pedidos. 


function mostrarRecetas(recetaAMostrar){
   let totalRecetas = recetaAMostrar.length;

   for(let i = 0; i< totalRecetas; i+=1){
    alert(`Receta Nro ${i+1} 
        Nombre= ${recetaAMostrar[i].nombre}
        Ingredientes= ${recetaAMostrar[i].ingredientes}
        Modo de coccion= ${recetaAMostrar[i].formaCocina}
        Tiempo estimado= ${recetaAMostrar[i].tiempo} minutos
        Receta= ${recetaAMostrar[i].instrucciones}`)
   }
}



//console.log(filtrarSoloVegetariano())
