const canvas = document.querySelector('.canvas');

async function getUserData(user){
    var respone = await fetch(`https://api.github.com/users/${user}`);
    const data = await respone.json();
    return data
}

async function getUserList(link){
    var respone = await fetch(link);
    const data = await respone.json();
    return data
}

function profileCard(data){
    // const profileData = data;
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

    followInfoDiv = document.createElement('div');
    followInfoDiv.classList.add('followDiv');
    followInfoDiv.innerHTML += `<p class="getList"><i class="fa-solid fa-user-group"></i> ${data.followers} followers</p>`;
    followInfoDiv.innerHTML += `<p class="getList"><i class="fa-solid fa-user-group"></i> ${data.following} following</p>`;
    container.appendChild(followInfoDiv);
    
    repos = document.createElement('p');
    repos.innerText = `${data.public_repos} repositories`;
    repos.style.fontSize = '18px';
    repos.style.width = '85%';
    repos.style.height = '25%';
    repos.style.color = 'rgb(37, 37, 37)';
    repos.classList.add('repos');
    container.appendChild(repos);
    
    createDate = document.createElement('p');
    createDate.style.color = 'rgb(37, 37, 37)';
    createDate.style.width = '85%';
    createDate.innerText = `created at ${data.created_at.slice(0, 9)}`;
    
    container.appendChild(createDate);
    
    canvas.appendChild(container);

    const followLists = document.getElementsByClassName('getList');
    for (let list of followLists){
        list.addEventListener('click', (e) => {
            if (e.target.innerText.includes('followers')){
                getUserList(data.followers_url).then((data) => {
                    canvas.innerHTML = '';
                    userList(data);
                })
            }
            else {
                getUserList(`https://api.github.com/users/${data.login}/following`).then((data) => {
                    canvas.innerHTML = '';
                    userList(data);
                })
            }
        });
    }
}

function userList(data){
    var container = document.createElement('div');
    container.classList.add('listContainer');

    for(let user of data){
        let userDiv = document.createElement('div');
        userDiv.classList.add('user_div');

        userAvatar = document.createElement('img');
        userAvatar.src = user.avatar_url;
        userDiv.appendChild(userAvatar);

        username = document.createElement('p');
        username.classList.add('user')
        username.innerText = user.login;
        username.style.color = 'rgb(37, 37, 37)';
        username.style.cursor = 'pointer';
        userDiv.appendChild(username)

        container.appendChild(userDiv);
    }
    
    canvas.appendChild(container);
    const usersList = document.getElementsByClassName('user');
    for (let user of usersList){
        user.addEventListener('click', () => {
            getUserData(user.innerText).then((data) => {
                canvas.innerHTML = '';
                profileCard(data);
            })
        })
    }
}

getUserData('EminHamzagic').then((data) => {
    profileCard(data);
})
