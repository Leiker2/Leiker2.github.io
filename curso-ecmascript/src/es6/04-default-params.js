function newUser (name, age, country){
    var name = name || 'Oscar';
    var age = age || 30;
    var country = country || 'Caracas';
    console.log(name, age, country);
}

newUser();
newUser('Leiker', 27, 'madrid');

//Nueva forma de hacerlo

function newAdmin (name = 'Oscar', age = 40, country = 'CL'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 34, 'PE');
