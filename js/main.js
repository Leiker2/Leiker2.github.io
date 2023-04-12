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

const pElement = document.querySelector('.fade-in');

window.addEventListener('scroll', scrollOfMyElement);

function scrollOfMyElement(){
    const elementOffset = pElement.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > elementOffset) {
        pElement.classList.add('active');
    }
};