if (localStorage.getItem('userId') !== null) {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
}

let formFirstName = document.getElementById('formFirstName');
let formLastName = document.getElementById('formLastName');
let formEmail = document.getElementById('formEmail');
let formPassword = document.getElementById('formPassword');

let messageSignup = document.getElementById('messageSignup');
let signupBtn = document.getElementById('signupBtn');


signupBtn.addEventListener('click', () => {
    let firstNameValue = formFirstName.value.trim();
    let lastNameValue = formLastName.value.trim();
    let emailValue = formEmail.value.trim();
    let passwordValue = formPassword.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let upperReg = /[A-Z]/;

    messageSignup.innerText = '';

    if (firstNameValue === '' || lastNameValue === '' || emailValue === '' || passwordValue === '') {
        messageSignup.innerText = "الرجاء ملء جميع الحقول";
        messageSignup.style.color = 'red';
    } else if (firstNameValue.length <= 3) {
        messageSignup.innerText = "الاسم الأول يجب أن يكون أكثر من ثلاثة أحرف";
        messageSignup.style.color = 'red';
    } else if (lastNameValue.length <= 3) {
        messageSignup.innerText = "الاسم الأخير يجب أن يكون أكثر من ثلاثة أحرف";
        messageSignup.style.color = 'red';
    } else if (!emailRegex.test(emailValue)) {
        messageSignup.innerText = 'الرجاء إدخال عنوان بريد إلكتروني صحيح';
        messageSignup.style.color = 'red';
    } else if (passwordValue.length <= 4 || !upperReg.test(passwordValue)) {
        messageSignup.innerText = 'كلمة المرور يجب أن تكون أكثر من أربع خانات و تحتوي على حرف كبير';
        messageSignup.style.color = 'red';
    } else {
        fetch('https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn')
            .then(response => response.json())
            .then(data => {
                const emailExists = data.some(user => user.email === emailValue);
                console.log('Email exists:', emailExists);

                if (!emailExists) {
                    fetch('https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn', {
                        method: 'POST',
                        body: JSON.stringify({
                            firstname: firstNameValue,
                            lastname: lastNameValue,
                            email: emailValue,
                            password: passwordValue,
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            messageSignup.innerText = 'تم تسجيل حساب بنجاح !'
                            messageSignup.style.color = 'green'
                            formFirstName.value = '';
                            formLastName.value = '';
                            formEmail.value = '';
                            formPassword.value = '';
                            window.location.href = 'login.html';
                        });

                } else {
                    messageSignup.innerText = 'البريد الإلكتروني مسجل بالفعل';
                    messageSignup.style.color = 'red';
                }

            })

    }

});

