const menuBtn = document.querySelector('.js-menu-btn')
const menu = document.querySelector('.js-menu')

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('open')
  this.classList.toggle('open')
})