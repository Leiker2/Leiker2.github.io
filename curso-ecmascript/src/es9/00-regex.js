//Estructura para Annio, mes y dia
const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const matchers = regex.exec('1996-01-15');

console.table(matchers);