/*## Iteraciones :crossed_swords: Pair Programming :crossed_swords: ##

### Objetos ###*/

/*#### Declaración ####*/
//1
let Coche = {
    marca:"Peugeot",
    modelo:"308 GTline",
    matricula:"5778GHJ",
};
console.log(Coche)

//2
let Casa = {
    codPostal:"",
    calle:"",
    portal:"",
    piso:""

};

//3
let FullStackDeveloper = {
    lenguajes:[],
    proyectos:[],
};

//4
let Perro = {
    nombre:"",
    raza:"",
    color:"",
    edad:"",
    ladrar: function() {
    console.log("Guau!!, Guau!!")
    },
    popo: function() {
        return Math.random() *3
    },
};

//5
let Portatil = {
  marca: "Asus",
  modelo: "A33"};
 let marcaPortatil = Portatil.marca

//6
let Portatil2 = {
  marca: "Asus",
  modelo: "A33"
}
let marcaPortatil2 = Portatil["marca"];

//7
let concierto = {
  grupos: ["Twenty One Pilots", "AC/DC", "Queen"], 
  cartelera: ["Queen"], 
  fecha: null
}
let grupos = concierto.grupos

//8
let Led = {
  rojo: "FF",
  verde: "00", 
  azul: "00",
  encendido: powered
};
let RGB = [Rojo, Verde, Azul];


//#### Modificación de propiedades ####
//9
let Portatil = {
  marca: "Asus", 
  modelo: "A33"
};
Portatil.modelo = "P345";

//10
concierto.cartelera.push("Guns N' Roses");

//11
  Concierto.fecha = new Date();

//12
Impresora.imprimiendo = {
  nombreArchivo:"", 
  copias:"", 
  numPaginas:""
};

/*## Iteraciones :crossed_swords: Pair Programming :crossed_swords: ##

### Objetos ###

#### Declaración ####*/
//13
let Noticia = {
    titular:"",
    cuerpo:""
};

//14
let Persona = {
    nombre:"",
    apellidos:"",
    edad:""
};

//15
let Avion = {
  numPasajeros:"",
  despegar: function() {
    console.log("despegando");
  },
  volar:function() {
    console.log("llegando al destino");
  },
  aterrizar: function() {
    console.log("aterrizando");
}
};

//16
let Paquete = {
    contenido: [
      let dimensiones = {}, 
      let peso = {},
      let direccion = {""}]
};

//17
let Pais = {
    numHabitantes:"664777",
    continente:"Europa",
    gentilicio:"español"
};

//18
let O_Error = {
  codigo: 404,
};
let codError = O_Error.codigo;

//19
let integrantes = Grupo.integrantes;

//20
let nivelesTinta = Impresora.tinta;

//21
let pixeles = Pantalla.pixeles;

//22
let especificaciones = Movil.especificaciones;

//23
Grupo.numIntegrantes = 5;

//24
Pantalla.dimensiones = "1920x1080";

//25
Led.encendido = !Led.encendido;

//26
Movil.temperatura = "20º";














