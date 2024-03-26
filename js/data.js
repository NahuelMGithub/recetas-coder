
///---------------------------- Constantes y Variables


const tipoDeIngrediente = ["Carne", "Verdura", "Legumbres", "Lacteo", "Cereales-Harinas", "Alacena"];
const formaDeCocinar = ["Horno", "Sarten", "Parilla", "Disco", "Olla"];



//-------------------------------------------------------- Clases y objetos

function Ingrediente(nombre, tipo) {
    this.nombre = nombre;   // Nombre del ingrediente. Tipo String
    this.tipo = tipo;     // Tipo del ingrediente. Cane, verdura, etc.Ver Tipos de tipoDeIngrediente. 
}

class Receta {
    constructor(nombre, instrucciones, ingredientes, formaCocina, tiempo) {
        this.nombre = nombre; // String, indica el nombre de la comida
        this.instrucciones = instrucciones; // es un string contando los pasos
        this.ingredientes = ingredientes; // es una lista de ingredientes
        this.formaCocina = formaCocina; // es unlistado delas formas posibles para cocinarlo. 
        this.tiempo = tiempo; // tiempo que se tarda en cocinar
    }


    esVegetariano() {
        let esVegetariano = true;

        this.ingredientes.forEach(ingrediente => {
            if (ingrediente.tipo === "Carne") {
                esVegetariano = false
            }
        })
        return esVegetariano;
    }
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

const choriso = new Ingrediente(
    "Choris", tipoDeIngrediente[0], 2.300, new Quimica(400, 150, 200)
)


// matambre Carne
// Merluza


//---------- Ingredientes - Verdura tipoDeIngrediente[1]-------

const verdeo = new Ingrediente(
    "Cebolla de Verdeo", tipoDeIngrediente[1], 100, new Quimica(50, 150, 100)
)

const morron = new Ingrediente(
    "Morron", tipoDeIngrediente[1], 100, new Quimica(50, 150, 100)
)


const cebolla = new Ingrediente(
    "Cebolla", tipoDeIngrediente[1], 100, new Quimica(50, 150, 100)
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

const pan = new Ingrediente(
    "Pan", tipoDeIngrediente[4], 100, new Quimica(150, 150, 100)
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




//-------------------------------------------------------------------------------------
// ------------------------- Listado de Recetas ---------------------------------------
//-------------------------------------------------------------------------------------

//------ Recetas al Horno


const polloAlVerdeo = new Receta(
    "Pollo al verdeo", tipoDeComida[1], "Dorar pollo y retirar. Reahogar cebola, incorporar pollo y crema. Sal y pimieenta",
    [pechuga, verdeo, crema], formaDeCocinar[1], 45
)

const pizza = new Receta(
    "Pizza", tipoDeComida[1], ".... receta pizza", [harina, muzzarella, pureTomate], formaDeCocinar[0], 30
)

const tartaVerduas = new Receta(
    "Tarta de verduras", tipoDeComida[1], ".... Hace una tarta loco, no es tan dificil", [harina, muzzarella, pureTomate], formaDeCocinar[0], 30
)

const vacioAlHorno = new Receta(
    "Vacio al horno", tipoDeComida[1], ".... Vacio al horno, con papas, cebolla y morron", [vacio, papa, morron, cebolla], formaDeCocinar[0], 1.30
)



//------ Recetas en Sarten


const wokVegetales = new Receta(
    "Wok de Vegetales", tipoDeComida[1], "Saltear cebolla y verter arroz con agua. ", [arroz, salsaSoja, cebolla, morron], formaDeCocinar[1], 30
)

//------ Recetas a la Parilla

const parrillada = new Receta(
    "Parrillada Completa", tipoDeComida[1], ".... Un aplauso par ael asador", [asado, vacio, choriso], formaDeCocinar[2], 30
)

const choripan = new Receta(
    "Choris", tipoDeComida[1], ".... Entero o mariposa?", [choriso, pan], formaDeCocinar[2], 30
)

//------ Recetas al Disco

// Pollo al disco
// 


//------ Recetas em Olla



//-------------------------------------------------------- FUNCIONES


// Aca voy a hacer las funciones que sean para filtrar las recetas.

//----------------------- Array de recetas. Aca van a estar TODAS LAS RECETAS. Es la BD por el momento.

const todasLasRecetas = [polloAlVerdeo, pizza, tartaVerduas, parrillada, choripan, wokVegetales, vacioAlHorno]

