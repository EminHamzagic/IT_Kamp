const username = document.getElementById('username');
const password = document.getElementById('password');
const loginFrm = document.getElementById('Login');
// const confPassword = document.getElementById('conf_password');

const loginBtn = document.getElementById('btn').addEventListener('click', () => {
    console.log('object');
    if (password.value.length < 5){
        alert('Password too small!');
        password.value = '';
        username.value = '';
    }
    else{
        alert('Uspesno ste se loginali!');
        loginFrm.style.display = 'none';
    }
})
// const regBtn = document.getElementById('Regbtn')
// console.log(regBtn)