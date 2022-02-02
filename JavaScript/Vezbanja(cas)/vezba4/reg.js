const username = document.getElementById('username');
const password = document.getElementById('password');
const loginFrm = document.getElementById('Login');
const confPassword = document.getElementById('conf_password');

const regBtn = document.getElementById('Regbtn').addEventListener('click', () => {
    if (password.value != confPassword.value){
        alert('Password is not same!');
    }
    else{
        if (password.value < 5){
            alert('Password too small');
        }
        else{
            alert('Register complete!');
            window.location.href = 'main.html'
        }
    }
})