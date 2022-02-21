async function getData(){
    var respone = await fetch('https://api.github.com/users/EminHamzagic');
    const data = await respone.json();
    return data
}

getData().then((data) => {
    const profileData = data;
    console.log(data);
    var container = document.createElement('div');
    container.classList.add('container');
    var image = document.createElement('img').classList.add('img');
    image.src = data.avatar_url;
    container.appendChild(image)

    document.body.appendChild(container);
})
