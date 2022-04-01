const btn =document.getElementById("menu-btn")
const nav = document.getElementById("menu")
const dropDown = document.getElementsByClassName("dropdown");
const hide = document.getElementsByClassName("hide");

function navToggle(){
    btn.classList.toggle("open")
    nav.classList.toggle("hidden")
    document.body.classList.toggle('no-scroll')
}
btn.addEventListener('click',navToggle)

Array.from(dropDown).forEach((d,i) => {
    d.addEventListener("click", ()=> {
        d.classList.toggle("active");
        hide[i].classList.toggle("active");
    })
})