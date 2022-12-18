let button = document.querySelector(".up")

window.onscroll = function () {
    console.log(this.scrollY)
    if (this.scrollY >= 1000) {
        button.classList.add("show");
    } else {
        button.classList.remove("show")
    }
}




button.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
    
}


 

