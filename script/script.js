const Btn = document.querySelector('.nav-icon');
const NavMob = document.querySelector('.nav-bar-mob');
const Header = document.querySelector('header');


//function that adds the nav bar mobile version and changes the icon color with simple condition
function NavShown() {
    if (Btn.getAttribute("src") == 'images/navigation_close.png') {
        Btn.setAttribute('src', 'images/navigation_open.png');
    } else {
        Btn.setAttribute('src', 'images/navigation_close.png');
    }
    NavMob.classList.toggle('nav-bar-mob-add');
}

Btn.addEventListener('click', NavShown)

//adding shadown when scroll is passing a certain value, for the header and the nav mob in case it's opened
function ShadowAdd() {
    if (this.scrollY >= 110) {
        Header.classList.add('header-shadow');
        NavMob.classList.add('header-shadow');
    } else {
        Header.classList.remove('header-shadow');
        NavMob.classList.remove('header-shadow');
    }
}

window.addEventListener('scroll',ShadowAdd);