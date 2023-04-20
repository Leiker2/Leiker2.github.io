const user = { username: 'Leikerdgs', age: 27, country: 'VE' }

const { username, ...values } = user

console.log(username);
console.log(values);