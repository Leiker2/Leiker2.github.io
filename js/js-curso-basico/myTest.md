# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
  Una variable es un valor que asignamos en memoria que puede ser modificado y nos sirve para asignar valores
  matematicos, hacer operaciones matematicos y guardarlos en dichas variables, hacer funciones y concatenar
  y guardarlos en dichas variables

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
  Al declarar, estamos asignandole en memoria un espacio, al mismo tiempo asignamos un nombre
  Al inicializar, le damos un valor a dicha variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
  La diferencia es que los numeros son un tipo de variable 'number', y string 'string'
  los numeros se pueden sumar facilmente, si sumamos 4 + 4 nos dara el resultado de 8
  Pero al concatenar unimos dos string, y de palabras podemos formar oraciones.

- ¿Cuál operador me permite sumar o concatenar?
  Operador : +;

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: 'string'
- Apellido: 'string'
- Nombre de usuario en Platzi: 'string'
- Edad: 'number'
- Correo electrónico: 'string'
- Mayor de edad: 'boolean'
- Dinero ahorrado: 'number'
- Deudas: 'number's

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let name = 'Leiker',
    lastName = 'Gomez',
    namePlatzi = 'Leiker2',
    age = 27,
    email = 'leiker.dgs@gmail.com',
    adult = true,
    savedMoney = 10000,
    debtMoney = 0;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
console.log(name + ' ' + lastName);
console.log(savedMoney - debtMoney);

```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
  Una funcion es una seccion de codigo que nos permite reutilizarlo con tan solo llamarlo, nos ahorra mucho codigo

- ¿Cuándo me sirve usar una función en mi código?
  Nos sirve cuando podriamos decir que se va a utilizar el codigo muchas veces, o cada cierto tiempo se va a cumplir una tarea

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
  Los parametros son valores o variables que se deben de tener antes de entrar a la funcion, los parametros se utilizan en el codigo
  y el argumento es el codigo, necesitanos de los parametros para iniciar el argumento

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```

let name1 = "Juan David";
let lastname1 = "Castro Gallego";

    function user (name1, lastname1){
        let completeName = name1 + ' ' + lastname1;
        let nickname = name1 + lastname1.charAt(0);

        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
    }
    user(name1,lastname1)

```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
  Un condicional es una toma de decision que se hace en codigo

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
  Existe el if-else, y el switch

- ¿Puedo combinar funciones y condicionales?
  Claro que yes

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```
if (tipoDeSuscripcion == 'Free')
        console.log("Solo puedes tomar los cursos gratis");
    else if (tipoDeSuscripcion == 'Basic')
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    else if (tipoDeSuscripcion == 'Expert')
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    else if (tipoDeSuscripcion == 'ExpertPlus')
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```
if (tipoDeSuscripcion == 'Free')
    console.log("Solo puedes tomar los cursos gratis");
    if (tipoDeSuscripcion == 'Basic')
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    if (tipoDeSuscripcion == 'Expert')
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    if (tipoDeSuscripcion == 'ExpertPlus')
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

    let tipoDeSuscripcion = prompt('Escribe el tipo de plan que tienes en platzi')
    let suscription = [
        {type: 'free', text: 'Solo puedes tomar los cursos gratis'},
        {type: 'Basic', text: 'Puedes tomar casi todos los cursos de Platzi durante un mes'},
        {type: 'Expert', text: 'Puedes tomar casi todos los cursos de Platzi durante un año'},
        {type: 'ExpertPlus', text: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'},
    ]

    let encuentraSuscription = suscription.find(function (suscription){
        return suscription.type == tipoDeSuscripcion;
    })

    console.log(encuentraSuscription.type + ' : ' + encuentraSuscription.text)
```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
  Es un codigo que se repite mientras se cumpla una condicion, cuando no se cumpla, el codigo dejara de repetirse.

- ¿Qué tipos de ciclos existen en JavaScript?
  For, for..of, while

- ¿Qué es un ciclo infinito y por qué es un problema?
  Un ciclo infinito es un ciclo que no tiene fin, y es un problema porque puede buggear nuestro programa

- ¿Puedo mezclar ciclos y condicionales?
  Claro que yes

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

```
let i = 0;
    while (i < 5){
        console.log("El valor de i es: " + i);
        i++;
}

let z = 10;
    while (z >= 2){
        console.log("El valor de i es: " + z);
        z--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```
let int = undefined;
    do {
        int = prompt('Por favor ingrese la suma de 4 + 4');
        int == 4 ? console.log(`Usted ingreso ${int} Felicitaciones, esto es correcto`) : console.log(`Usted ingreso ${int} intente de nuevo`);
    } while (int != 4);

```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
  Un array es una variable que puede almacenar distinto tipos de elementos

- ¿Qué es un objeto?
  Es una estructura de datos que logra almacenar datos mediante propiedades

- ¿Cuándo es mejor usar objetos o arrays?
  Las dos, segun sea el caso

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
  Claro que yes

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```
    let students = ['Leiker', 'Ale', 'Maikel'],
    cars = ['Toyota', 'Kia', 'Tesla'];

    function impt (valor){
        return valor[0];
    }

    impt (students); //Sale Leiker

```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```
let students1 = ['Leiker', 'Ale', 'Maikel'],
    cars1 = ['Toyota', 'Kia', 'Tesla'];

    function impt (valor){
        for (m = 0; valor.length > 0 ; m++){
            console.log(`Este es el valor ${m} de mi array ${valor[0]}`);
            valor.shift();
        }
    }
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
let students2 = [
        {class: 'A', name: 'Pablo', height: 1.70},
        {class: 'B', name: 'Juan', height: 1.50},
        {class: 'C', name: 'Leiker', height: 1.80},
        {class: 'A', name: 'Ale', height: 1.60},
        {class: 'C', name: 'Lili', height: 1.90}
    ]

    function impt (valor){
        for (m = 0; valor.length > 0 ; m++){
            console.log(`Seccion: ${valor[0].class} , Nombre ${valor[0].name} , Altura ${valor[0].height}`);
            valor.shift();
        }
    }

```

## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!
