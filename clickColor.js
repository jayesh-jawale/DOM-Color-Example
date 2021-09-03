var colors = [
    'violet',
    'indigo',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
]

var container = document.querySelector('#container');
var h1 = document.querySelector('h1');
var clickedColor = document.querySelector('#clickedColor');

for(const color of colors) {
    var box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.style.backgroundColor = color;

    box.addEventListener('click', function(){
        h1.innerHTML = 'Clicked color is: ';
        clickedColor.innerHTML = color;
        clickedColor.style.backgroundColor = color;

    })


}
