const colorHEX = document.querySelector('.colorHEX');
const container = document.querySelector('.container');
const button = document.querySelector('.button');

let i = 0;
button.addEventListener('click', function(){
    console.log('Le estas dando click en este momento al button y se va a cambiar el color');
    i == 7 ? i = 0 : '';
    switch (true){
        case i == 0 :
            colorHEX.textContent= '#231E39';
            container.setAttribute ('class', 'container');  
            i++;      
        case i == 1:
            colorHEX.textContent= '#ef5777';
            container.setAttribute ('class', 'pink');
            i++;
            break;
        case i == 2:
            colorHEX.textContent = '#575fcf';
            container.setAttribute ('class', 'periwinkle');
            i++;
            break;
        case i == 3:
            colorHEX.textContent= '#4bcffa';
            container.setAttribute('class', 'megaman');
            i++;
            break;
        case i == 4:
            colorHEX.textContent = '#0be881';
            container.setAttribute('class', 'minty');
            i++;
            break;
        case i == 5:
            colorHEX.textContent = '#ffd32a';
            container.setAttribute('class','vibrant');
            i++;
            break;
        case i == 6 :
            colorHEX.textContent= '#231E39';
            container.setAttribute ('class', 'blue');  
            i++;     
    }
})