const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
   // console.log({event});
   event.preventDefault();
   pResult.textContent = Number(input1.value) + Number(input2.value);
   console.log(pResult);
});



