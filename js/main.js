const menu = document.querySelector('.mobile-menu')
const menuLinks = document.querySelector('.nav_list')
const sign = document.querySelector('.sign')
const logo = document.querySelector('#logo')
const navitems = document.querySelector('.navitems')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    sign.classList.toggle('active')
    navitems.classList.toggle('nav_height')
}

menu.addEventListener('click', mobileMenu)