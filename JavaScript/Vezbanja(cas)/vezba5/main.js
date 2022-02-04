// document.body.style.backgroundColor = 'grey';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';

const card = document.getElementById('container');

card.style.backgroundColor = 'white';
card.style.display = 'flex';
card.style.flexDirection = 'column';
card.style.justifyContent = 'space-evenly';
card.style.alignItems = 'center';
card.style.padding = '20px'
card.style.borderRadius = '10px'
card.style.boxShadow = '0px 4px 9px 1px black'

var img = document.createElement('img');
img.src = 'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
img.style.width = '120px';
img.style.height = '120px';
img.style.borderRadius = '50%';
card.appendChild(img);

var card_txt = document.createElement('h1');
card_txt.style.color = 'orange';
card_txt.style.fontSize = '22px';
card_txt.innerText = 'Rain Drop';
card_txt.style.fontFamily = 'sans-serif'
// card.appendChild(card_txt);

var card_txt1 = document.createElement('h1');
card_txt1.style.color = 'black';
card_txt1.style.fontSize = '22px';
card_txt1.innerText = 'About Drop';
card_txt1.style.fontFamily = 'sans-serif'
// card.appendChild(card_txt1);
var text_div = document.createElement('div');
text_div.appendChild(card_txt);
text_div.appendChild(card_txt1);
text_div.style.display = 'flex';
text_div.style.justifyContent = 'center';
text_div.style.alignItems = 'center';
text_div.style.flexDirection = 'column';
card.appendChild(text_div);

var card_desc = document.createElement('p');
card_desc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nihil explicabo nemo, voluptatem dolorem ullam. Optio nihil explicabo nemo, voluptatem dolorem ullam.';
card_desc.style.textAlign = 'center';
card_desc.style.fontWeight = '500';
card.appendChild(card_desc);

var icons_div = document.createElement('div');
// var icon = document.createElement('i');
// icondiv.innerHTML = '<i class="fas fa-bookmark"></i>';
// icon.classList.add("fas fa-bookmark");
for (let i = 0; i < 4; i++){
    icons_div.innerHTML+= '<i class="icon fab fa-twitter"></i>';   
}
icons_div.style.width = '90%';
icons_div.style.height = '10%';
icons_div.style.display = 'flex';
icons_div.style.justifyContent = 'space-around';
icons_div.style.alignItems = 'center';
card.appendChild(icons_div);