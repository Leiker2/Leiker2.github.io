const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalculo');
const pResult = document.querySelector('#result');

 function btnOnClick(){
    const sumainput = Number(input1.value) + Number(input2.value);
    pResult.textContent = `Resultado : ${sumainput}`;
 }



