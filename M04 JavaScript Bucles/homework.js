/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
// Comparar x e y con una sentencia if-else
if (x > y) {
   // Si x es mayor que y, retornar x
   return x;
 } else {
   // Si x es menor o igual que y, retornar y
   return y;
 }
}

 // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:


   function mayoriaDeEdad(edad) {
   if (edad >=18) {
    return 'allowed';

   }else {  
       return 'Not allowed';
    }
      // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
};




function conection(status) {
  if (status == 1) {
   return "Online";

  }else if (status == 2) {
   return "Away";

  } else {
   console.log ("Offline");
   return "Offline";
  }
  }

  
// El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   //TENER MUY EN CUENTA LA GRAMATICA DE LOS EJEMPLOS Y LA SINTAXIS DE LAS FUNCIONES.
  // Trabaja con los argumentos dentro de la funcion y con el nombre de la funcion fuera.

function saludo(idioma) {
   if  (idioma == "aleman"){
      console.log ("Guten Tag");
      return "Guten Tag";

   } else if(idioma == "mandarin"){
      console.log ("Ni Hao");
    return "Ni Hao";
   
      } else if (idioma == "ingles"){
         console.log ("Hello");
         return "Hello";

  } else if (idioma == undefined) {
      console.log ("Hola!");
      return "Hola!";
   }
}
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   //Recuerda poner entre comillas los argumentos.

function colors(color) {
   if (color == "blue"){
      console.log ("This is blue");
      return "This is blue";

   }else if (color == "red") {
      console.log ("This is red");
      return "This is red";

   }else if (color == "green") {
      console.log ("This is green");
      return "This is green";

   } else if (color == "orange") {
      console.log ("This is orange");
      return "This is orange";

   }else if (color) {
      console.log ('Color not found');
      return 'Color not found';
   }




   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
}



function esDiezOCinco(num) {
 
   if (num === 5 || num === 10) {
      console.log (true);
   return true;  
   }else { 
      console.log (false);
       return false;
} 
     // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código: 
}
esDiezOCinco (10);

function estaEnRango(num) {
   if (num < 50 && num > 20){
      return true; 

      }else{
         return false;
      }

} 
  estaEnRango (16);    
      // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
 




function esEntero(num) {
   if (num === 1,2,3,4,5,6,7,8,9 && num ==0 && num >= 0) {
      return true;

   }else {
      return false;
   } 
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
}
esEntero (0);

function fizzBuzz(num) {
   if (num % 3 == 0) {
      return 'fizz';
   } else if (num % 5 == 0) {
      return 'buzz';
   }else if (num % 3 == 0 && num % 5 == 0) {
      return 'fizzbuzz';
   }else {
      return false; 
   }
   
   
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
}

function operadoresLogicos(num1, num2, num3) {
   if(num1 > num2 && num1 > num3 && num > 0) {
      return 'Numero 1 es mayor y positivo';
       // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".

   } else if (num1 < 0 || num2 < 0 || num3 < 0) {
      return 'Hay negativos'
       // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".

   } else if (num3 > num1 && num3 > num2 ) {
      return  num3 +1;
       // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.

   } else if(num1 === 0 && num2 === 0 && num3 ===0) {
      return 'Error';
       // Si todos los argumentos son cero, retornar ---> "Error".

   } else {
      return false;
   }
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
}

function esPrimo(num) {
   if (num <= 1) {
      return false;
   }
for (let i = 2; i <= Math.sqrt (num); i ++){
   if (num % i === 0) {
   return false;
   }
} return true;
   
   
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
}

function esVerdadero(valor) {
if (valor = "Soy verdadero") {
   return "Soy verdadero"
} else{
   return "Soy falso";
}
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
}

function tieneTresDigitos(num) {  // Convertir el número a una cadena
   let cadena = num.toString();
 
   // Obtener la cantidad de caracteres
   let cantidad = cadena.length;
 
   // Comparar la cantidad con 3 y retornar el resultado
   return cantidad == 3;
 }
  
   
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:

function doWhile(num) {
   var contador = 0;
    // Esta variable lleva la cuenta de las veces que se ejecuta el bucle

   var resultado = num;
    // Esta variable almacena el valor final

   do {
     contador = contador + 5;
      // Aumentamos el contador en 5

     resultado = resultado + 5;
      // Aumentamos el resultado en 5

   } while (contador < 40); 
   // Repetimos el bucle mientras el contador sea menor que 40 (8 veces 5)

   return resultado; // Retornamos el valor final


   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
