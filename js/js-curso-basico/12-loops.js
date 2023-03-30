
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

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}