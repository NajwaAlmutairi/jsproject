let userloggedIn = document.getElementById('userloggedIn');
let logoutbut = document.getElementById('logoutbut');
let controlsLink = document.getElementById('controlsLink');
let userLinks = document.getElementById('user-links');

// Check if user is logged in
if (localStorage.getItem('userId') === null) {
    controlsLink.classList.add("show");
    userLinks.classList.add("disabled")


} else {
    let usefullNametext = localStorage.getItem('userName');
    userloggedIn.innerText = usefullNametext;

    controlsLink.classList.add("disabled");
    userLinks.classList.add("show")

}

logoutbut.addEventListener('click', () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    window.location.href = 'index.html';
});
