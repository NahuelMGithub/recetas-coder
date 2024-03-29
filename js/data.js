
///---------------------------- Constantes y Variables


const tipoDeIngrediente = ["Carne", "Verdura", "Legumbres", "Lacteo", "Cereales-Harinas", "Alacena"];
const formaDeCocinar = ["Horno", "Sarten", "Parrilla", "Disco", "Olla", "Bol"];



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


    listaIngredientes() {
    
        let ingredientesTotales = this.ingredientes.map(ingrediente => ingrediente.nombre); 
        return ingredientesTotales;
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

    esVegano() {
        let esVegano = true;
        
        this.ingredientes.forEach(ingrediente => {
            if (ingrediente.tipo === "Carne" || ingrediente.nombre == 'Huevos' || ingrediente.tipo === "Lacteo") {
                esVegano = false
            }
        })
        return esVegano;
    }

    esAptoCeliaco() {
        let esAptoCeliaco = true;

        this.ingredientes.forEach(ingrediente => {
            if (ingrediente.tipo === "Cereales-Harinas") {
                esAptoCeliaco = false
            }
        })
        return esAptoCeliaco;
    }
}


///----------------------------------  lista de ingredientes

let ing = ["Huevos",  "Salsa de Soja", "Pure de Tomate",   "Arroz", "Fideos Largos",  "Pan",  "Harina",
"Manteca", "Leche",  "Muzzarella", "Crema", "Lentejas",  "Poroto","Arbejas",  "Lechuga", "Tomate", "Papa",  "Cebolla",
"Morron",  "Cebolla de Verdeo",  "Carne picada",  "Choriso", "Asado","Vacio", "Merluza","Pechuga de Pollo"]





//------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------- "Base de Datos" -----------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------- Listado de Ingredientes.  -------------------------------------------------------


//---------- Ingredientes - Carnes tipoDeIngrediente[0]------- 
const pechuga = new Ingrediente(
    "Pollo", tipoDeIngrediente[0] )

    const merluza = new Ingrediente(
        "Merluza", tipoDeIngrediente[0] )

const vacio = new Ingrediente(
    "Vacio", tipoDeIngrediente[0])

const asado = new Ingrediente(
    "Asado", tipoDeIngrediente[0], )


const choriso = new Ingrediente(
    "Choriso", tipoDeIngrediente[0] )

 const carnePicada = new Ingrediente(
       "Carne picada", tipoDeIngrediente[0] )






//---------- Ingredientes - Verdura tipoDeIngrediente[1]-------

const verdeo = new Ingrediente(
    "Cebolla de Verdeo", tipoDeIngrediente[1])

const morron = new Ingrediente(
    "Morron", tipoDeIngrediente[1]) 


const cebolla = new Ingrediente(
    "Cebolla", tipoDeIngrediente[1])

const lechuga = new Ingrediente(
    "Lechuga", tipoDeIngrediente[1])

const tomate = new Ingrediente(
    "Tomate", tipoDeIngrediente[1]) 

const papa = new Ingrediente(
    "Papa", tipoDeIngrediente[1]
)

//zanahoria
// brocoli
// morron

//---------- Ingredientes - Legumbre tipoDeIngrediente[2]-------

const lenteja = new Ingrediente(
    "Lentejas", tipoDeIngrediente[2],)

const poroto = new Ingrediente(
    "Poroto", tipoDeIngrediente[2]) 

const arbejas = new Ingrediente(
    "Arbejas", tipoDeIngrediente[2]
)


//soja

//---------- Ingredientes - Lacteo tipoDeIngrediente[3]-------
const muzzarella = new Ingrediente(
    "Muzzarella", tipoDeIngrediente[3])


const crema = new Ingrediente(
    "Crema de leche", tipoDeIngrediente[3]
)

const leche = new Ingrediente(
    "Leche", tipoDeIngrediente[3]
)

const manteca = new Ingrediente(
    "Manteca", tipoDeIngrediente[3]
)

const queso = new Ingrediente(
    "Queso parmezano", tipoDeIngrediente[3]
)



//---------- Ingredientes - Cereales-Harinas tipoDeIngrediente[4]-------
const harina = new Ingrediente(
    "Harina", tipoDeIngrediente[4]
)

const pan = new Ingrediente(
    "Pan", tipoDeIngrediente[4])


const fideosLargos = new Ingrediente(
    "Fideos Largos", tipoDeIngrediente[4]
)

const fideoSopa = new Ingrediente(
    "Fideos de Sopa", tipoDeIngrediente[4]
)

const arroz = new Ingrediente(
    "Arroz", tipoDeIngrediente[4]
)





//---------- Ingredientes - Alacena tipoDeIngrediente[5]-------

const pureTomate = new Ingrediente(
    "Pure de Tomate", tipoDeIngrediente[5]
)

const salsaSoja = new Ingrediente(
    "Salsa de Soja", tipoDeIngrediente[5]
)

const huevos = new Ingrediente(
    "Huevos", tipoDeIngrediente[5]
)

const calditos = new Ingrediente(
    "Calditos", tipoDeIngrediente[5]
)



//-------------------------------------------------------------------------------------
// ------------------------- Listado de Recetas ---------------------------------------
//-------------------------------------------------------------------------------------

//------ Recetas al Horno


const polloAlVerdeo = new Receta(
    "Pollo al verdeo",  "Dorar pollo y retirar. Reahogar cebola, incorporar pollo y crema. Sal y pimieenta",
    [pechuga, verdeo, crema], formaDeCocinar[1], 45
)

const pizza = new Receta(
    "Pizza",  ".... receta pizza", [harina, muzzarella, pureTomate], formaDeCocinar[0], 30
)

const tartaVerduas = new Receta(
    "Tarta de verduras",  ".... Hace una tarta loco, no es tan dificil", [harina, muzzarella, pureTomate], formaDeCocinar[0], 30
)

const vacioAlHorno = new Receta(
    "Vacio al horno", ".... Vacio al horno, con papas, cebolla y morron", [vacio, papa, morron, cebolla], formaDeCocinar[0], 1.30
)



//------ Recetas en Sarten


const wokVegetales = new Receta(
    "Wok de Vegetales",  "Saltea tiras de pimientos, zanahorias y brotes de soja en aceite de sésamo caliente. Agrega salsa de soja y jengibre rallado. Cocina hasta que estén tiernos pero crujientes. Sirve caliente.", [arroz, salsaSoja, cebolla, morron], formaDeCocinar[1], 30 
)

//------ Recetas a la Parilla

const parrillada = new Receta(
    "Parrillada Completa",  ".... Un aplauso par ael asador", [asado, vacio, choriso], formaDeCocinar[2], 30
)

const polloALaParrilla = new Receta(
    "Pollo a la Parrilla",  ".... Un aplauso par ael asador", [pechuga, vacio, morron], formaDeCocinar[2], 30
)


const asadidto = new Receta(
    "Asado rapio",  ".... Un aplauso par ael asador", [asado, tomate, lechuga], formaDeCocinar[2], 30
)


const choripan = new Receta(
    "Choris",  ".... Entero o mariposa?", [choriso, pan], formaDeCocinar[2], 30)

//------ Recetas al Disco

// Pollo al disco
// 


//------ Recetas em Olla

//------




//-------------------------------------------------------- FUNCIONES


// Aca voy a hacer las funciones que sean para filtrar las recetas.

//----------------------- Array de recetas. Aca van a estar TODAS LAS RECETAS. Es la BD por el momento.

const todasLasRecetas = [polloAlVerdeo, pizza, tartaVerduas, parrillada, choripan, wokVegetales, vacioAlHorno, asadidto, polloALaParrilla ]



