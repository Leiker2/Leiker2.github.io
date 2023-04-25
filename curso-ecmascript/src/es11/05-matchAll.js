const regex = /\b(Apple)+\b/g;

const fruits = 'Apple, Banana, Leiker, Apple, Mamon, Orange, etc, etc, etc';

for(const match of fruits.matchAll(regex)){
    console.log(match);
}

// Busqueda de palabra con matchAll en un texto



//Buscar coincidencias en un texto, a partir de una parabra dada

//solucion #1, con matchAlll
function checkInString(text, term) {
    const regex = new RegExp(term, "gi"); //se crea un regex para hacer un filtro con la palabra que se desea usar, 'gi' es para que sea sensible con mayusculas y minusculas
    for (const matches of text.matchAll(regex)) //va a recorrer el array en busqueda con el emtodo matchAll, y comparara con regex
      return true// true si hay coincidencia
    return false//false si no hay coincidencias
  }

  console.log( checkInString('Leiker es el mejor programador', 'manolo'));

  function checkInString2(text,term){
    const regex = new RegExp(term, 'gi');
    const match = text.matchAll(regex);

    return !match.next().done;
  }

  /*La solución primero crea una expresión regular que busca el término de búsqueda insensible a mayúsculas 
  y minúsculas. Luego, usa el método matchAll para buscar todas las coincidencias de la expresión regular 
  en el texto. Si se encontró al menos una coincidencia, el método next() de la iteración devolverá un objeto 
  que no sea done, y por lo tanto el resultado de la función será true. De lo contrario, si no se encontró 
  ninguna coincidencia, el método next() devolverá un objeto done, y el resultado de la función será false.
  */


  console.log(checkInString2('Ale y leiker se aman', 'ama'));


  