

const menuDesplaza = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuImg = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');
const titleBack = document.querySelector('.title-container');
const asideInfoProduct = document.querySelector('#productDetail');
const asideInfoProductClose = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');


//Esta fue mi solucion, pero la del profesor es otra, al parecer mas sencilla
// let i = 0;
// menuDesplaza.addEventListener('click',function(){
//     i % 2 == 0 ? inactive.style.display = 'block' : inactive.style.display = 'none';
//     i++;
// });

menuDesplaza.addEventListener('click', toggleDesktopMenu);
mobileMenuImg.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
titleBack.addEventListener('click',toggleCarritoAside);


function toggleDesktopMenu(){
    if(!aside.classList.contains('inactive'))
        aside.classList.toggle('inactive');

    if(!asideInfoProduct.classList.contains('inactive'))
        asideInfoProduct.classList.toggle('inactive');

    desktopMenu.classList.toggle('inactive'); 
}
function toggleMobileMenu(){
    if(!aside.classList.contains('inactive'))
        aside.classList.toggle('inactive');

    if(!asideInfoProduct.classList.contains('inactive'))
        asideInfoProduct.classList.toggle('inactive');

    mobileMenu.classList.toggle('inactive'); 
}
function openProductDetail(){
    if(!aside.classList.contains('inactive'))
        aside.classList.toggle('inactive');

    if(!desktopMenu.classList.contains('inactive'))
        desktopMenu.classList.toggle('inactive');

    if(!mobileMenu.classList.contains('inactive'))
        mobileMenu.classList.toggle('inactive');

    asideInfoProduct.classList.remove('inactive');
}
function closeProductDetail(){
    asideInfoProduct.classList.add('inactive');
}


//Esta es la solucion del teacher para cerrar una ventana para que no se solapen
// function toggleCarritoAside(){
//     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
//     console.log(mobileMenu.classList.contains('inactive'));
//     if(!isMobileMenuClosed){
//         mobileMenu.classList.add('inactive');
//     }
//     aside.classList.toggle('inactive');
// }

// Esta es mi solucion para que no se solapen, muy parecida, me enrolle un poco
function toggleCarritoAside(){
    if(mobileMenu.classList.contains('inactive') == false)
        mobileMenu.classList.toggle('inactive');

    if(!desktopMenu.classList.contains('inactive'))
        desktopMenu.classList.toggle('inactive');

    if(!asideInfoProduct.classList.contains('inactive'))
        asideInfoProduct.classList.toggle('inactive');


    aside.classList.toggle('inactive');
}

//here, add all of products for HTML

const productlist = [];

productlist.push({
    name: 'bike',
    price: `$${120}`,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productlist.push({
    name: 'Smart TV',
    price: `$${1800}`,
    image: 'https://d500.epimg.net/cincodias/imagenes/2022/08/05/smarttv/1659691994_769834_1659692037_noticia_normal.jpg'
});

productlist.push({
    name: 'PS5',
    price: `$${850}`,
    image: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg'
});

productlist.push({
    name: 'Laptop Samsung',
    price: `$${2500}`,
    image: 'https://www.zdnet.com/a/img/resize/68d48862001abcdf981d170850ffb5e8230491d4/2022/01/12/360f58ef-eacd-4fea-a6f9-29280a6b636f/galaxy-book-odyssey-2.jpg?auto=webp&fit=crop&height=1200&width=1200'
});

productlist.push({
    name: 'iphone 14 PRO MAX',
    price: `$${1450}`,
    image: 'https://i.blogs.es/b8a473/1366_2000/500_500.jpeg'
});

productlist.push({
    name: 'Bycicle Merida',
    price: `$${1500}`,
    image: 'https://ciclosfera.com/img/0be473b8ea4003195469a68e74ca55f4.872.0.0.0.7dba1934.webp'
});


function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener('click',openProductDetail)
        asideInfoProductClose.addEventListener('click',closeProductDetail )
    
        const productImg = document.createElement('img');
        productImg.classList.add('product-img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;
    
        const productName = document.createElement('p');
        productName.textContent = product.name;
    
        const productInfoFigure = document.createElement('figure');
    
        const icon = document.createElement('img');
        icon.setAttribute('src', './img/general-icons/yard-icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(icon);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productlist);