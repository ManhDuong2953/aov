const listMobiles = document.querySelectorAll(".list-mobile")
listMobiles.forEach((listMobile, index)=>{
    listMobile.addEventListener("click", e=>{
        document.querySelector(".list-mobile.active").classList.remove("active")
        listMobiles[index].classList.add("active");
    })
})