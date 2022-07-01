const btn=document.querySelector("#hamburger");
const navbar=document.querySelector(".navbarMenu")
btn.addEventListener("click",()=>{
    navbar.classList.toggle("hide");
});