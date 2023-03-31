
var estudiantes = ['Leiker', 'Maria', 'Sergio', 'Rosa', 'Daniel'];

//Hacemos una tarea para saludar 
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//Este es un loops para poder recorrer el array, y saludar a todos los estudiantes
for (var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//for... of
// Funciona obligatoriamente con arrays
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//while

var estudiantes = ['Leiker', 'Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while (estudiante.length > 0 ){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}