let responsiveBtn = document.querySelector('.responsive-btn')
let ul = document.querySelector('ul')
responsiveBtn.addEventListener('mouseover', function(){
    ul.style.display = 'block'
})
responsiveBtn.addEventListener('mouseout', function(){
    ul.style.display = 'none'
})