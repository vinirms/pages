const btn = document.getElementById('toggler')


function btn_toggle(e){
    let menu = document.getElementById('menu_toggle')
    menu.classList.toggle("menu_open")
}
btn.addEventListener('click', btn_toggle)
