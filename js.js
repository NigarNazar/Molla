
let contentBar = document.querySelector(".content")
contentBar.addEventListener("click" , ()=>{
    if(contentBar.classList.contains("fa-bars")){
        contentBar.classList.toggle("fa-xmark")
    }else{
        contentBar.classList.remove("fa-xmark")
        contentBar.classList.add("fa-bars")
    }
})
AOS.init();


