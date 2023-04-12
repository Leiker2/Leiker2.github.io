const menuDesplaza = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuImg = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

//Esta fue mi solucion, pero la del profesor es otra, al parecer mas sencilla
// let i = 0;
// menuDesplaza.addEventListener('click',function(){
//     i % 2 == 0 ? inactive.style.display = 'block' : inactive.style.display = 'none';
//     i++;
// });

menuDesplaza.addEventListener('click', toggleDesktopMenu);
mobileMenuImg.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); 
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive'); 
}