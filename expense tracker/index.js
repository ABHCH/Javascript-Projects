// selectors

const labeluserName = document.querySelector('.user-name');
const labeluserPassword = document.querySelector('.user-password');
const loginBtn = document.querySelector('.login-btn');
const loginContainer = document.querySelector('.login-container');
const app = document.querySelector('.app');
const logoutBtn = document.querySelector('.logout-btn');

const account = {
    userName:'ABHCH',
    password:1111,
    movements:[100,200,300,400,600],
}

// login implementation

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if(labeluserName.value === account.userName && labeluserPassword.value == account.password){
        alert('you have successfully logged in')
        loginContainer.style.opacity = `-1`;
        app.style.opacity = '1';

    }else if(labeluserName.value != account.userName && labeluserPassword.value != account.password){
        alert('invalid credentials ! please correct it 🙏');

    }
})

logoutBtn.addEventListener("click", () => {
    alert(`You have successfully Logged out`)
    app.style.opacity = '-1'
    loginContainer.style.opacity = `1`
    
})