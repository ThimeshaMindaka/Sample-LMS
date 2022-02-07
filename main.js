//change nav bar Styels on scroll
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY> 50)
})