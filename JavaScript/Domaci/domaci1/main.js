const txt = document.getElementById('txt');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    txt.classList.toggle('invis');
    if (btn.innerText === 'Here'){
        btn.innerText = 'Gone';
    }
    else{
        btn.innerText = 'Here';
    }
})