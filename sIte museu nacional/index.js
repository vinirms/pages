const btn = document.getElementById('btn')

function btnToggle (e){
    let menuToggle = document.getElementById('toggler')
    
    menuToggle.classList.toggle("navMenuOpen")
}

btn.addEventListener('click', btnToggle)