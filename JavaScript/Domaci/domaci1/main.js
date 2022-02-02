const div = document.getElementById('div1');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    div.classList.toggle('invis');
    if (btn.innerText === 'Here'){
        btn.innerText = 'Gone';
    }
    else{
        btn.innerText = 'Here';
    }
})