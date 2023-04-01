//Métodos de recorridos de Arrays

//Metodo Filter------------------------
var article = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320},
    { nombre: 'Celular', costo: 10000},
    { nombre: 'Laptop', costo: 20000},
    { nombre: 'teclaro', costo: 500},
    { nombre : 'Audifonos', costo: 1700 }
];

// A articleFilters le asignamos el filter de costo <= 500
var articleFilters = article.filter(function(article){
    return article.costo <= 500
});

//Lo imprimimos
articleFilters

//Metodo MAP------------------------------

var articles = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320},
    { nombre: 'Celular', costo: 10000},
    { nombre: 'Laptop', costo: 20000},
    { nombre: 'teclaro', costo: 500},
    { nombre : 'Audifonos', costo: 1700 },
];

// A nombreArticles le asignamos el map para que filtre todos los nombres
var nombreArticles = articles.map(function(article){
    return article.nombre
})

//Practicamos--------------------------------

var products = [
    { nombre: 'Cars', cost: 25000  },
    { nombre: 'truck', cost: 85000  },
    { nombre: 'house', cost: 150000  },
    { nombre: 'chromebook', cost: 150  },
    { nombre: 'desktop', cost: 350  },
    { nombre: 'TV', cost: 800  },
    { nombre: 'motorcycle', cost: 5000  }
];

var productsFilter = products.filter(function(products){
    return products.cost < 30000;
});

//Practicamos MAP

var students = [
    { name: 'Maria', profession: 'IT', year: 26 },
    { name: 'Leiker', profession: 'Programming', year: 27 },
    { name: 'Lilibeth', profession: 'Administrator', year: 52 },
    { name: 'Yaneth', profession: 'Administrator', year: 50 },
    { name: 'Maikel', profession: 'TSU', year: 31 },
    { name: 'Daniela', profession: 'IT', year: 36 },
    { name: 'Douglas', profession: 'Enginner', year: 52 },
    { name: 'Jose', profession: 'Selling', year: 60 },
];

var studentsFilter = students.filter(function(students){
    return students.year < 30;
});

var studentsNombre = students.map(function(students){
    return students.name;
});

//Recorriendo Arrays con .find(), .forEach() y .some()

// .find
var products = [
    { nombre: 'Cars', cost: 25000  },
    { nombre: 'truck', cost: 85000  },
    { nombre: 'house', cost: 150000  },
    { nombre: 'chromebook', cost: 150  },
    { nombre: 'desktop', cost: 350  },
    { nombre: 'TV', cost: 800  },
    { nombre: 'motorcycle', cost: 5000  }
];

undefined
var encuentraProducts = products.find(function(product){
    return product.nombre === 'chromebook';
})

//.forEach

var products = [
    { nombre: 'Cars', cost: 25000  },
    { nombre: 'truck', cost: 85000  },
    { nombre: 'house', cost: 150000  },
    { nombre: 'chromebook', cost: 150  },
    { nombre: 'desktop', cost: 350  },
    { nombre: 'TV', cost: 800  },
    { nombre: 'motorcycle', cost: 5000  }
];
//Aca no le asignamos a ninguna variable, solo imprimimos
products.forEach(function(product){
    console.log(product.nombre);
})

//some()
var products = [
    { nombre: 'Cars', cost: 25000  },
    { nombre: 'truck', cost: 85000  },
    { nombre: 'house', cost: 150000  },
    { nombre: 'chromebook', cost: 150  },
    { nombre: 'desktop', cost: 350  },
    { nombre: 'TV', cost: 800  },
    { nombre: 'motorcycle', cost: 5000  }
]
var productsBaratos = products.some(function(product){
    return product.cost <= 10000;
})

//Solo nos devuelve un true o un false si en alguno de los productos se cumple la condicion
