// let frutas= ["manzana", "banana", "naranjas"]

// console.log(frutas);

// console.log(frutas[0]);

// //Añadir fruta
// frutas.push("kiwi");

// console.log(frutas);

// //Añade fruta al principio
// frutas.unshift("fresa");

// console.log(frutas);

// //Borra el ultimo elemento
// frutas.pop();

// console.log(frutas);

// //Borra el primer elemento
// frutas.shift("fresa");


// // numbre, string, boolean, null, undefined, Symbol

// //Objetos

// let persona={
//   nombre: "Juan",
//   edad: 30
// }


// console.log(persona["nombre"])

// persona.nombre= "Luis"

// console.log(persona["nombre"])



// let persona1={
// nombre: "Juan",
// edad: 30,
// direccion: {
//     ciudad: "Madrid",
//     codigopostal: 28001
// }
// };

// console.log(persona1)


// //funciones
// function saludar2 (nombre){
// console.log(`Hola ${nombre}`);
// };
// saludar2("Aaron");


// let resultado;
// function sumar(a,b){
// resultado= a+b;
// return resultado;
// };

// console.log(sumar(2,2));

// console.log(resultado);

// const saludar3= function(){
// console.log("hola");
// };
// console.log(saludar3);
// saludar3();


// const saludar4= () => {
// console.log("hola gilipollas");
// };
// console.log(saludar4);
// saludar4();

// const saludar5= (nombre,apellido) => {
// console.log(`hola gilipollas ${nombre} ${apellido}`);
// };
// saludar5("Jose", "Lopez");


// const sumer6= (a,b) => {
// let resultado6 = a+b;
// return resultado6;
// };
// console.log(sumer6(5,3))








// let barco1= [1,2]
// let barco2= [6,9]

// let tablero = [[1,2,3],
//                 [4,5,6],
//                 [7,8,9]];
                
                
// //Hacer disparo
// let disparo= tablero [0][0]

// console.log("Disparo en posicion: ", disparo)


//console.log(matriz[0])
//console.log(matriz[1][2])



// let dia = "Lunes"
// switch (dia) {
//   case "Lunes":
//   console.log("Hoy es Lunes");
//     break;
//     case "Martes":
//     console.log("Hoy es Martes");
//     break;
//     default:
//     console.log("No es Lunes ni Martes");
// }



//Ciclo for 

// for (inicialización; condicion; actualizacion){
// Codigo en cada iteracion
//}

// console.log("Tabla de Multiplicar del 1")
// let numero =1;
// for (let i=1; i<=10; i++){
//   console.log(`${numero} x ${i} = ${numero * i}`);
// }


// console.log("Tabla de Multiplicar del 5")
// let numero5 =5;
// for (let i=5; i<=50; i+=5){
//   console.log(`${numero} x ${i} = ${numero * i}`);
// }

// //while

// let i = 0;
// while (i < 5) {
//   console.log(`Iteracion ${i}`)
//   i++
// } 

// //do

// let i = 0;
// do{
//   console.log(`Iteracion ${i}`)
//   i++
// } while (i < 5)

//for .. of

// let frutas = ["manzanas", "bananas", "naranjas"]

// for (let item of frutas){
//   console.log(item)
// }

// let persona  = {
//   nombre: "Pepe",
//   edad: 30
// }

// //for .. in
// for (let clave in persona){
//   console.log(`La clave es ${clave} y tiene valor ${persona[clave]} `)
//   console.log(`La clave es ${clave.toUpperCase()} y tiene valor ${persona[clave]} `)
// }




//MANIPULACION DE OBJETOS

//valor vs Referencia
//Tipos primitivos (number, string, boolean, null, undefined, symbol)

// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// // POR REFERENCIA

// let persona1 = {nombre: "Ana"};
// let persona2 = persona1;

// persona2.nombre = "Juan";

// console.log(persona1.nombre) 
// console.log(persona2.nombre)

// //SPREAD (...)

// let numeros = [1,2,3];

// let nuevosNumeros = [...numeros,4,5];

// let persona={nombre: "Ana", edad: 30};
// let nuevaPersona = {...persona, ciudad: "Madrid"};

// console.log(persona);
// console.log(nuevaPersona);

// // StructuredClone

// let persona3 ={nombre: "Ana", edad: 30};
// let nuevaPersona2 = structuredClone(persona3);

// persona3= {... persona3, ciudad:"Madrid"};

// console.log(persona3);
// console.log(nuevaPersona2);

// Desestructuracion

// function obtenercoordenadas(){
//   return {x: 10, y: 20};
// };

// let coordenadas = {x: 10, y: 20};
// let {x,y} = coordenadas;
// console.log(x,y);

// Desestructuracion funcion
