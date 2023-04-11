// Crear elementos HTML
const navBar = document.createElement("nav");
const navList = document.createElement("ul");
const navItems = ["Inicio", "Acerca de", "Productos", "Contacto"];

// Agregar clases CSS a los elementos
navBar.classList.add("navbar");
navList.classList.add("nav-items");

// Crear elementos de la lista de navegación
navItems.forEach((item) => {
  const navListItem = document.createElement("li");
  navListItem.innerHTML = `<a href='#'>${item}</a>`;
  navList.appendChild(navListItem);
});

// Agregar la lista de navegación a la barra de navegación
navBar.appendChild(navList);

// Añadir la barra de navegación al documento
document.body.appendChild(navBar);

// Estilo CSS para la barra de navegación y los elementos de la lista
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    z-index: 1000;
    transition: all 0.3s ease-in-out;
  }

  .navbar.sticky {
    background-color: #fff;
    color: #333;
    box-shadow: 0 3px 3px rgba(0,0,0,0.1);
  }

  .nav-items {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-items li {
    margin: 0 10px;
  }

  .nav-items li a {
    color: inherit;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
  }

  .nav-items li a:hover {
    background-color: #fff;
    color: #333;
  }
`;

// Agregar el estilo CSS al head del documento
document.head.appendChild(styleSheet);

// Agregar la clase "sticky" a la barra de navegación al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});
