const regex = /\b(Apple)+\b/g;

const fruits = 'Apple, Banana, Leiker, Apple, Mamon, Orange, etc, etc, etc';

for(const match of fruits.matchAll(regex)){
    console.log(match);
}

// Busqueda de palabra con matchAll en un texto