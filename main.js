//Built-in Objects exercises.

/*---------- String ----------*/
/*
Crear una función que reciba un string como parametro y que al ser llamada haga
un console.log mostrando el length del string recibido.

Ex:
myFunc('myString');
*/ 

/*------------------------------ Solución ------------------------------------------- */
function myString(strg){
    console.log(strg.length);
  }
  myString("we are the best");

/*----------------------------------------------------------------------------------- */



/*---------- Number ----------*/
/*
crear una función que reciba un number, que haga lo siguiente:
* Determinar si el numero recibido es un número entero.
* En caso de ser entero, hacer un console.log avisando que es un entero. 
* En caso de no ser entero, convertirlo a entero y mostar el nuevo valor usando console.log.

Ex:
myFunc(number);
posibles casos:
a) el número es un entero :3
b) el número ahora es un entero con valor de (valor) ;)
*/ 

/*------------------------------ Solución ------------------------------------------- */

function entero(numero){
    if(Number.isInteger(numero)){
        console.log(numero," Es un numero");
    }else{
        console.log("El numero ahora es entero con valor de ",parseInt(numero));
    }
}

entero(9);
entero("9");

/*----------------------------------------------------------------------------------- */

/*---------- Boolean ----------*/
/*
Crear una función que reciba un boolean, que al ser llamada haga un console.log mostrando:
* El numero de caracteres que representan el valor del boolean recibido.

Ex:
var flag = true;
myFunc(flag);
expected result:  4 caracteres.
*/

/*------------------------------ Solución ------------------------------------------- */
function booleanEx(value){
    console.log(value.toString().length)
}

booleanEx("true");


/*----------------------------------------------------------------------------------- */



/*---------- Object ----------*/
/*
crear una función que reciba un object, que al ser llamada haga un console.log mostrando:
* El numero de propiedades que contiene el objeto.
* El nombre de cada una de las propiedades del objeto.
* El valor de cada una las propiedades del objeto.

Ex:
myFunc(obj);
*/ 

/*------------------------------ Solución ------------------------------------------- */
let usuario = {
    name: "Andrea",
    email: "andrea@email.com",
    password: "123"
}

function ObjectFun(object){
console.log(Object.keys(usuario).length,Object.keys(usuario),
Object.keys(usuario),Object.values(usuario));
}

ObjectFun(usuario)

/*----------------------------------------------------------------------------------- */



/*---------- Function ----------*/
/*
Crear una función que reciba una function, que al ser llamada haga un console log mostrando:
* El número de argumentos que espera la funcion.

Ex:
var sum = new Function('a','b','c', 'return a + b + c');

myFunc(sum);
result: 3.
*/ 

/*------------------------------ Solución ------------------------------------------- */

var sum = new Function('a','b','c','return a + b + c');

function FunctionLength(sum){
    console.log(sum.length);
}

FunctionLength(sum);

/*----------------------------------------------------------------------------------- */



/*---------- Array ----------*/
/*
Crear una función que reciba un array de strings, un número (desiredLength) y un string (template), 
que al ser llamda haga lo siguiente:
*Checar el numero de propiedades que tiene el array.
*Si el numero de propiedades es menor a desiredLength por 1: 
    *Rellenar el espacio faltante dentro del array usando template.  
    *Hacer un console.log del arreglo con los cambios.
*En caso de que no se cumpla la condición, mencionar si el array es menor o mayor que desiredLength y por cuanto.
Ex:

var arr = ['Apple', 'Banana'];
myFunc(arr, 3, 'apple');
*/ 

/*------------------------------ Solución ------------------------------------------- */
var ArrayStrings = ["Hola","Mundo","!"];

function ArrayDesire(array,desireL,template){
    var dif = array.length - desireL;
    if(dif === 1){
        array.push(template);
        return array
    }else if(dif > 1){
        return "El array es mayor por "+dif;
    }else{
        return "El array es menor por "+Math.abs(dif);
    }

}

console.log(ArrayDesire(ArrayStrings,4,"juan"));
/*----------------------------------------------------------------------------------- */



/*---------- Date ----------*/
/*
Crear una función que al ser llamada haga dos console.log, uno mostrando la fecha actual 
y otro que muestre cuantos milisegundos han pasado desde el 1/enero/1970 hasta ahora.

myFunc();
*/

/*------------------------------ Solución ------------------------------------------- */
function myFunc(){
    console.log(new Date()," ",Date.now());
}

myFunc();
/*----------------------------------------------------------------------------------- */



/*---------- Math ----------*/
/*
Crear una función que reciba dos numeros (base y exponente). 
la función al ser llamada usará el valor absoluto de base y lo elevara a la potencia 
determinada por exponente, al final mostrar este resultado usando console.log.

Ex:

myFunc(-3, 2) 
result = 9;
*/

/*------------------------------ Solución ------------------------------------------- */
function MathFunc(b,e){
    console.log(Math.pow(Math.abs(b),e));
}

MathFunc(-3,2);

/*----------------------------------------------------------------------------------- */



/*---------- RegExp ----------*/
/*
Dada el siguiente patrón (/([A-Z])/), crear una funcion que reciba dos strings (str, template).
* Determine si str cumple con el patrón.
* Si cumple, remplazar el las incidencias del patron con el valor de template.
* Mostar el resultado usando console.log.
* Si no, mostrar un mensaje de no coincidencia usando console.log

Ex:
myFunc(str, template)
*/

/*------------------------------ Solución ------------------------------------------- */
function RegExpFun(str,template){
    var r = new RegExp(/([A-Z])/);
    if(r.test(str)){
        var m = str.replace(r,template);
        console.log(m);
        return;
    }else{
        console.log("No encuentro coincidencias")
    }
}

RegExpFun("Mola","N")

/*----------------------------------------------------------------------------------- */



/*---------- Error ----------*/
/*
Crear una funcion que reciba un numero.
*Si el número es menor o igual a 10, usar console.log para mostrar un mensaje de valor dentro de los paramatros.
*Si el número es mayor a 10 arrojar un error con el mensaje, el valor esta fuera de los parametros.

Ex: myFunc(number)
*/

/*------------------------------ Solución ------------------------------------------- */
function MyError(n){
if(n<=10){
    console.log("Valor dentro de los parametros")
    return;
}
    throw new Error("El valor esta fuera de los parametros")

}

MyError(11);

/*----------------------------------------------------------------------------------- */


/*---------- Extra (más no opcional) ----------*/
/*
Usar los objetos vistos en clase y aplicarlos para solucionar un escenario que pueda ocurrir 
entre los proyectos finales que tienen asignados.

Describir el caso:

Quiero guardar las preferencias de viajes del usuario en una propiedad
suya que se llame Favoritos. Asi que pensaba en realizar mi
objeto Usuario, con las propiedades con las que iniciaria sesion
y su lista de objetos de tipo Hotel.

Y despues quiero imprimir sus favoritos en su lista de favoritos

Mostrar la solucíon en código:

let Usuario = {
  id: "1",
  nombre: "Andrea",
  correo: "andrea@hotmail.com",
  favoritos: [
    {
      id: 1,
      name: "Hotel Casa Blanca",
      city: "Guadalajara",
      state: "Jalisco",
      puntuacion: "5"
    },
    {
      id: 5,
      name: "Hotel Bugambilias",
      city: "Guadalajara",
      state: "Jalisco",
      puntuacion: "5"
    }
  ]
};

function desplegar(array) {
  var lista = document.getElementById("app");
  var h1 = document.createElement("h1");
  h1.innerHTML = "Tus favoritos: "+array.favoritos.length; 
  lista.appendChild(h1)
  array.favoritos.forEach(function (data,i){
    var linenew = document.createElement("li");
    var contenido = document.createTextNode(data.name + "  " +data.puntuacion + " estrellas");
    lista.appendChild(linenew);
    linenew.appendChild(contenido);
  })
}

desplegar(Usuario);

*/
