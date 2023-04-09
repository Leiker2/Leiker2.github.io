const number = document.querySelector('#number');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
number.textContent = 0;

decrease.addEventListener('click', function(){
    number.textContent --;
    colorOfp();
});

reset.addEventListener('click', function(){
    number.textContent = 0;
    colorOfp();

});

increase.addEventListener('click', function(){
    number.textContent ++;
    colorOfp();
});

function colorOfp (){
    if (Number(number.textContent) === 0) {
        number.style.color = 'rgb(34, 34, 34)';
      } else if (Number(number.textContent) > 0) {
        number.style.color = 'rgb(11,133,11)';
      } else if (Number(number.textContent) < 0) {
        number.style.color = 'rgb(255, 0, 0)';
      }
}