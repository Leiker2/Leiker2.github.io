//Hablamos de booleanos

//Ejemplos de valores falsos
Boolean(); //Si no tiene valor, por defecto sera falso
Boolean(0); // Es falso 
Boolean(null); //Es falso
Boolean(NaN); //Es falso
Boolean(undefined); //Es falso
Boolean(false); //Es falso
Boolean(""); //Es falso, incluyendo con solo espacio

//Ejemplos de valores verdaderos
Boolean('a'); //Es true
Boolean(1); //si tenemos de 1 un adelante tambien es true
Boolean([]); //Array o objetos vacios ya son true
Boolean(function(){}); //Cualquier funcion es true
Boolean(true); //Es verdadero