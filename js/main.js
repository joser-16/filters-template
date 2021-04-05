const menuBtn = document.querySelector('.js-menu-btn')
const menu = document.querySelector('.js-menu')
const formPrice = document.querySelector('.js-form-price')

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('open')
  this.classList.toggle('open')
})

formPrice.addEventListener('submit', e => {
  e.preventDefault()  
})

