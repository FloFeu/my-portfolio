const toTop = document.getElementById('to-top')
toTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}) ;
