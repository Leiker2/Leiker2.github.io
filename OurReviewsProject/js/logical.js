const btnArrowLeft = document.querySelector('.btn-arrow-left');
const btnArrowRigth = document.querySelector('.btn-arrow-rigth');

const btnSurprise = document.querySelector('.surprise-me-button');

const imgProfile = document.querySelector('.img-profile');
const infoEmployee = document.querySelector('.info-employee')


const listOfEmployees = [];

listOfEmployees.push({
    img: 'img/photo-profile.svg',
    name: 'Leiker G&oacute;mez',
    charge: 'WEB DEVELOPER',
    description: 'Leiker es un desarrollador de videojuegos con experiencia en la programación de juegos para PC, consolas y móviles. Utiliza lenguajes como C++ o C# y herramientas como Unity o Unreal Engine para crear los juegos. También trabaja en el diseño y programación de las mecánicas de juego, la inteligencia artificial y los efectos visuales.'
});
listOfEmployees.push({
    img: 'img/ana.svg',
    name: 'Ana García',
    charge: 'Desarrolladora web front-end',
    description: 'Ana es una programadora con experiencia en el desarrollo de aplicaciones web front-end. Su trabajo consiste en crear y mantener las interfaces de usuario de los sitios web, utilizando HTML, CSS y JavaScript. También trabaja en colaboración con los diseñadores gráficos para asegurarse de que el diseño de la interfaz sea atractivo y funcional.'
});
listOfEmployees.push({
    img: 'img/juan.svg',
    name: 'Juan Marcano',
    charge: 'Desarrollador web full-stack',
    description: 'Juan es un desarrollador web full-stack con experiencia en la creación de aplicaciones web completas, desde la programación del backend hasta la creación de la interfaz de usuario. Trabaja con lenguajes como PHP, Python, JavaScript y bases de datos como MySQL o MongoDB. También es experto en el uso de frameworks como React, Angular o Vue para crear interfaces de usuario interactivas y dinámicas.'
});
listOfEmployees.push({
    img: 'img/Laura.svg',
    name: 'Laura Gómez',
    charge: 'Ingeniera de software',
    description: 'Laura es una ingeniera de software que trabaja en el desarrollo de software empresarial. Su trabajo consiste en analizar los requisitos de los clientes, diseñar la arquitectura del software, programar las funcionalidades y realizar pruebas de calidad. Utiliza lenguajes como Java, Python o C# y frameworks como Spring o .NET para crear software escalable y de alta calidad.'
});


    let i = 0;
    const imgEmployee = document.createElement('img');
    imgEmployee.setAttribute('src', `${listOfEmployees[i].img}`);

    const nameEmployee = document.createElement('h1');
    nameEmployee.innerHTML = listOfEmployees[i].name;

    const chargeEmployee = document.createElement('span');
    chargeEmployee.innerHTML = listOfEmployees[i].charge.toLocaleUpperCase();

    const descriptionEmployee = document.createElement('p');
    descriptionEmployee.innerHTML = listOfEmployees[i].description;

    // here create html code

    imgProfile.appendChild(imgEmployee);

    infoEmployee.appendChild(nameEmployee);
    infoEmployee.appendChild(chargeEmployee);
    infoEmployee.appendChild(descriptionEmployee);


    btnArrowRigth.addEventListener('click', function (){
        i < listOfEmployees.length - 1 ? i ++ : i = 0;

        console.log(i)
        imgEmployee.setAttribute('src', `${listOfEmployees[i].img}`);
        nameEmployee.innerHTML = listOfEmployees[i].name;
        chargeEmployee.innerHTML = listOfEmployees[i].charge.toLocaleUpperCase();
        descriptionEmployee.innerHTML = listOfEmployees[i].description;
    });

    btnArrowLeft.addEventListener('click', function (){
        i > 0 ? i -- : i = listOfEmployees.length - 1;

        console.log(i)
        imgEmployee.setAttribute('src', `${listOfEmployees[i].img}`);
        nameEmployee.innerHTML = listOfEmployees[i].name;
        chargeEmployee.innerHTML = listOfEmployees[i].charge.toLocaleUpperCase();
        descriptionEmployee.innerHTML = listOfEmployees[i].description;
    });

    btnSurprise.addEventListener('click', function (){
        let j = i;
        do {
            i = Math.floor(Math.random() * 4);
        } while (i == j);

        console.log(i)
        imgEmployee.setAttribute('src', `${listOfEmployees[i].img}`);
        nameEmployee.innerHTML = listOfEmployees[i].name;
        chargeEmployee.innerHTML = listOfEmployees[i].charge.toLocaleUpperCase();
        descriptionEmployee.innerHTML = listOfEmployees[i].description;
    });
