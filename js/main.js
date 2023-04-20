// const pElement = document.querySelector('.fade-in');
// window.addEventListener('scroll', () => {
//     console.log('Scroll detectado');
//     const elementOffset = pElement.offsetTop;
//     const scrollPosition = window.scrollY + window.innerHeight;
//     console.log('elementOffset:', elementOffset);
//     console.log('scrollPosition:', scrollPosition);
//     if (scrollPosition > elementOffset) {
//       pElement.classList.add('active');
//     }
//   });

//Here, comming to generate all projects

const projectList = [];

projectList.push({
    name: 'Huddle',
    description: 'Este es un projecto bastante sensillo, disenado especificamente por Platzi, y fue hecho para culminar un desaf&iacute;o',
    img: 'img/huddle.svg',
    link: 'huddleProject/huddle.html'
});

projectList.push({
    name: 'Change Color',
    description: 'Este es un pequeno desaf&iacute;o de unos cursos de JS, es un simple programa que nos da n&uacute;meros aleatoreos y los transforma a colores RGB',
    img: 'img/CCProject.svg',
    link: 'ccProject/index.html'
});
projectList.push({
    name: 'Counter',
    description: 'Este es un simple contador, es una pr&aacute;ctica en cursos de JS, una ayuda de manejo del DOM',
    img: 'img/Counter.svg',
    link: 'counterProject/index.html'
});
projectList.push({
    name: 'Yard Sales',
    description: 'Este es un projecto manejado en con juntos con el curso de HTML,CSS, JS y react de Platzi',
    img: 'img/yardsale.svg',
    link: 'yardProject/index.html'
});
projectList.push({
    name: 'Our Employee',
    description: 'Este es un proyecto tomado para la pr&aacute;ctica del lenguaje JS',
    img: 'img/OurEmployee.svg',
    link: 'OurReviewsProject/index.html'
});

let i = 0;
for (const project of projectList) {
    projectorOfProductList(project)
}

function projectorOfProductList(project){
    const portfolio = document.querySelector('.portfolio');

    const portfolioContainer = document.createElement('div');
    portfolioContainer.classList.add('portfolio-container');

    const portfolioContainerLeft = document.createElement('div');
    portfolioContainerLeft.classList.add('portfolio-container-left');


    const titleProject = document.createElement('h1');
    titleProject.classList.add('title-project');
    titleProject.innerHTML = project.name;

    const descriptionProject = document.createElement('p');
    descriptionProject.classList.add('description-project');
    descriptionProject.innerHTML = project.description;

    const containerLink = document.createElement('div');
    containerLink.classList.add('container-link');

    const linkProject = document.createElement('a');
    linkProject.classList.add('url-project');
    linkProject.innerHTML = 'Conoce el Projecto';
    linkProject.setAttribute('href',project.link);

    const portfolioContainerRigth = document.createElement('div');
    portfolioContainerRigth.classList.add('portfolio-container-rigth');

    const imgProject = document.createElement('img');
    imgProject.setAttribute('src', `${project.img}`);

    // here create html code

    portfolioContainerLeft.appendChild(titleProject);
    portfolioContainerLeft.appendChild(descriptionProject);
    portfolioContainerLeft.appendChild(containerLink);

    containerLink.appendChild(linkProject);


    portfolioContainerRigth.appendChild(imgProject);
    
    const width = innerWidth;


    if (width > 700){
        if(i % 2 == 0){
            portfolioContainer.appendChild(portfolioContainerLeft);
            portfolioContainer.appendChild(portfolioContainerRigth);
        }else
        {
            portfolioContainer.appendChild(portfolioContainerRigth);
            portfolioContainer.appendChild(portfolioContainerLeft);
        }
    }else
    {
        portfolioContainer.appendChild(portfolioContainerLeft);
        portfolioContainer.appendChild(portfolioContainerRigth);
    }

    i++;
    portfolio.appendChild(portfolioContainer);

    // const pElement = document.querySelector('.fade-in');

    
    // window.addEventListener('scroll', scrollOfMyElement);

    // function scrollOfMyElement(){
    //     const elementOffset = pElement.offsetTop;
    //     const scrollPosition = window.scrollY + window.innerHeight;
    //     if (scrollPosition > elementOffset) {
    //         pElement.classList.add('active');
    //     }
    // };
}