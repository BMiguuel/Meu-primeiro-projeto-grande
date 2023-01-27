const bntleft = document.querySelector('.button-arrow.-left');

const bntRight = document.querySelector('.button-arrow.-right');
const elements = document.querySelector('.elements');
let pixels = 100;

bntRight.addEventListener('click', function(){
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`
});

bntleft.addEventListener('click', function(){
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`
});
