// for (let i = 0; i < 20; i++){
//     let div = document.createElement('div');
//     div.classList.add('box');
//     document.body.appendChild(div);
//     div.addEventListener('click', () => {
//         div.classList.toggle('color');
//     })
// }


var word = document.getElementById('lorem');
var word_list = word.innerText.split(' ');
var new_s = '';

for (let el of word_list){
    if (el.length > 10){
        new_s += el.toUpperCase() + ' ';
    }
    else{
        new_s += el + ' ';
    }
}

word.innerText = new_s;