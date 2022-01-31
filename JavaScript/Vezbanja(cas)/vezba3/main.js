for (let i = 0; i < 20; i++){
    let div = document.createElement('div');
    div.classList.add('box');
    document.body.appendChild(div);
    div.addEventListener('click', () => {
        div.classList.toggle('color');
    })
}
