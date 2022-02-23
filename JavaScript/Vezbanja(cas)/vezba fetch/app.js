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
    var image = document.createElement('img');
    image.classList.add('img')
    image.src = data.avatar_url;
    container.appendChild(image);
    username_div = document.createElement('div');
    username_div.classList.add('username_div');
    username = document.createElement('h1');
    username.innerText = data.name;
    loginname = document.createElement('p');
    loginname.innerText = data.login;

    username_div.appendChild(username);
    username_div.appendChild(loginname);
    container.appendChild(username_div);

    

    document.body.appendChild(container);
})
