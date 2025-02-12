
let fullImage= document.querySelector(".fullImage")
let container= document.querySelector(".container")
console.log(container,"k")
function display(e){
    // console.log(e.target,"kl")
    if(e.target.classList.contains("images")){
        let src=e.target.src
        console.log(src,"src")
        // console.log(fullImage.firstElementChild.src)
        // fullImage.img
        container.style.display="none"
        fullImage.firstElementChild.src=src
         fullImage.style.display="block"
    }
    
}
function home(e){
    console.log("home click")
    fullImage.style.display="none"
    container.style.display="block"
}