const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const mobileView = document.querySelector('.mobileView')
const navListMv = document.querySelector('.navListMv')
const header = document.querySelector('.header')
const headerContent = document.querySelector('.headerContent')


hamburger.addEventListener('click',display)
close.addEventListener('click',remove)

function display(){
  hamburger.style.display = 'none'
  close.style.display = 'block'
  mobileView.style.display = 'flex'
  navListMv.style.display = 'block'
  header.style.backgroundImage = 'none'
  header.style.backgroundColor = 'black'
  headerContent.style.display = 'none'
}

function remove(){
  hamburger.style.display = 'block'
  close.style.display = 'none'
  mobileView.style.display = 'none'
  navListMv.style.display = 'none'
  header.style.backgroundImage = 'url("images/mobile/image-hero.jpg")'
  header.style.backgroundColor = 'none'
  headerContent.style.display = 'flex'
}