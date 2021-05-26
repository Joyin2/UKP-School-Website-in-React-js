burger = document.querySelector('.burger')
navcontainer = document.querySelector('.navcontainer')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')


burger.addEventListener('click', () => {
    navbar.classList.toggle('v-class-resp');
    logo.classList.toggle('v-class-resp');
    navcontainer.classList.toggle('h-nav-resp');

})




function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
