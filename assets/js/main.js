const navMenu = document.getElementById('nav-menu')
const openMenuBtn = document.getElementById('open-menu')
const closeMenuBtn = document.getElementById('close-menu')
const overlay = document.getElementById('overlay')
const navLinks = Array.from(document.querySelectorAll('.nav-link'))

openMenuBtn.addEventListener('click', () => {
     navMenu.classList.remove('translate-x-full')
     overlay.classList.remove('hidden')
})

closeMenuBtn.addEventListener('click', closeMenu)

navLinks.forEach((navLink) => {
     navLink.addEventListener('click', closeMenu)
})

function closeMenu() {
     navMenu.classList.add('translate-x-full')
     overlay.classList.add('hidden')
}

