const ListHeros = document.querySelectorAll(".list-hero");
const ListLightImg = document.querySelectorAll(".img-light");
var ListLightImgActive = document.querySelector(".img-light.active"),
    listImgHeroMain = document.querySelector(".hero-main"),
    listmain = [
        'img/hero/bg-azenkka.png',
        'img/hero/bg-xeniel.png',
        'img/hero/bg-thane.png',
        'img/hero/bg-slim.png',
        'img/hero/bg-murad.png',
        'img/hero/bg-atrit.png',
    ]

ListHeros.forEach((ListHero, index) => {
    ListHero.addEventListener('click', e => {
        document.querySelector(".img-light.active").classList.remove('active')
        ListLightImg[index].classList.add("active");
        listImgHeroMain.src = listmain[index];
        console.log(listImgHeroMain)
    })


})

