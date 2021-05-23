burger = document.querySelector('.burger')
navcontainer = document.querySelector('.navcontainer')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')


burger.addEventListener('click', () => {
    navbar.classList.toggle('v-class-resp');
    logo.classList.toggle('v-class-resp');
    navcontainer.classList.toggle('h-nav-resp');

})