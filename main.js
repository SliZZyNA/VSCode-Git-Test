var HamburgerButton = document.querySelector('.hamburger_button')
var mobileNav = document.querySelector(',mobile')

function openMobile() { 
    mobileNav.classList.add('open')
}
function closeMobile() {
    mobileNav.classList.remove('open');
}



humburgerButton.addEventlistener('click', openMobile);
mobileNav.addEventListener('click', openMobile)