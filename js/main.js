
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
const API = '../data/products.json';

function fetchData(urlApi){
    return fetch(urlApi)
}
 let projectList = [];
fetchData(`${API}`)
    .then(response => response.json())
    .then(products => {
        projectList = products;
        console.log(projectList);
        for (const project of projectList) {
            projectorOfProductList(project)
        }
        
    })
    .catch(err => console.log(err))
    .finally(() => console.log("finally"));

let i = 0;

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