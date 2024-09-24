if (localStorage.getItem('userId') !== null) {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
}

let formloginEmail = document.getElementById('formloginEmail');
let formloginPassword = document.getElementById('formloginPassword');
let logintext = document.getElementById('logintext');
let loginbtn = document.getElementById('loginbtn');


const url = 'https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn';

let mydata = [];

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        mydata = data;

    })


loginbtn.addEventListener('click', () => {
    let logindata = mydata.filter(element => {
        return element.email === formloginEmail.value.trim() && element.password === formloginPassword.value.trim();
    });

    if (formloginEmail.value.trim() === '' || formloginPassword.value.trim() === '') {
        logintext.innerText = "الرجاء ملء جميع الحقول"
        logintext.style.color = 'red'
        return false;
    }


    if (logindata.length === 1) {
        login(logindata[0].id)
    } else {
        logintext.innerText = "يوجد خطأ في عنوان البريد الإلكتروني أو في كلمة المرور التي أدخلتها"
        logintext.style.color = 'red'
    }
})


function login(id) {
    fetch(url + '/' + id)
        .then((response) => response.json())
        .then((data) => {

            localStorage.setItem('userId', data.id);
            localStorage.setItem('userName', data.firstname);
            window.location.href = 'index.html';
        })
}




