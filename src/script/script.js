const button = document.querySelector('.dropbtn');
const menu = document.querySelector('.nav-titles');

button.addEventListener('click', () => {
    menu.classList.toggle('activated');
});