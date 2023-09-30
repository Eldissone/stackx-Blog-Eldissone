// ==========Menu=========
const menuBtn = document.querySelector(".menu");
let menuOpen = false
menuBtn.addEventListener('click', ()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true

    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;

    }
})
//Menu mobile
function mouseShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open');
    }
}

/*menu ativado  */
let caixas = document.querySelectorAll(".caixa");

caixas.forEach(caixa=>{
    caixa.addEventListener("click",function(e){
        caixas.forEach(ele=>{
            ele.childNodes[1].classList.remove("All")
            ele.childNodes[1].childNodes[0].classList.remove("ativado");
        })
        this.childNodes[1].classList.add("All");
        this.childNodes[1].childNodes[0].classList.add("ativado");
    })
})
// ========tema Dark=========
const body = document.querySelector('body');
const h = document.querySelector('header');
const h1 = document.querySelector('.h1');
const tog = document.getElementById('tog');
const nav = document.querySelector('.nav a ');
const panel1= document.querySelector('.panel1');
const panel2= document.querySelector('.panel2');
const panel3= document.querySelector('.panel3');
const footer= document.querySelector('.dir');
const footer1= document.querySelector('.esq');
const card0 = document.querySelectorAll(".card")[0]
const card1 = document.querySelectorAll(".card")[1]
const card2 = document.querySelectorAll(".card")[2]
const card3 = document.querySelectorAll(".card")[3]
const card4 = document.querySelectorAll(".card")[4]
const card5 = document.querySelectorAll(".card")[5]

tog.onclick = function(){
    tog.classList.toggle('active');
    body.classList.toggle('active');
    h.classList.toggle('active');
    h1.classList.toggle('active');
    nav.classList.toggle('active');
    panel1.classList.toggle('active');
    panel2.classList.toggle('active');
    panel3.classList.toggle('active');
    footer.classList.toggle('active');
    footer1.classList.toggle('active');
    card0.classList.toggle('active');
    card1.classList.toggle('active');
    card2.classList.toggle('active');
    card3.classList.toggle('active');
    card4.classList.toggle('active');
    card5.classList.toggle('active');
}
// ========inicio==========
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
    
} else{
    ready();
}

//funcao ready ao carregar
function ready () {
   //Adicionar para a Caixa de visualizaçao
   let viewCard = document.getElementsByClassName('card')

   for(var i = 0; i < viewCard.length; i++){
       let btn = viewCard[i]
       btn.addEventListener('click', addCardClick)
    }
   viwesC ();
}
function viwesC() {
    const viewC1 = document.querySelector(".v1");
    const viewC2 = document.querySelector(".v2");
    const viewC3 = document.querySelector(".v3");
    const viewC4 = document.querySelector(".v4");
    const viewC5 = document.querySelector(".v5");
    const viewC6 = document.querySelector(".v6");

    let v1 = JSON.parse(localStorage.getItem('a'))
    viewC1.textContent = v1

    let v2 = JSON.parse(localStorage.getItem('b'))
    viewC2.textContent = v2
    
    let v3 = JSON.parse(localStorage.getItem('c'))
    viewC3.textContent = v3

    let v4 = JSON.parse(localStorage.getItem('d'))
    viewC4.textContent = v4

    let v5 = JSON.parse(localStorage.getItem('e'))
    viewC5.textContent = v5

    let v6 = JSON.parse(localStorage.getItem('f'))
    viewC6.textContent = v6

}

//Adicionar para a caixa
function addCardClick (event) {
    let button = event.target;
    let CardViews = button.parentElement;
    let titcardClick = CardViews.getElementsByClassName('tit-card')[0].innerText
    let textoClick  = CardViews.getElementsByClassName('texto')[0].innerText
    let dataTimeClick = CardViews.getElementsByClassName('dataTime')[0].innerText
    let viewsN = CardViews.getElementsByClassName('view-card')[0].innerText
    let categoryClick = CardViews.getElementsByClassName('category')[0].innerText
    let img = CardViews.getElementsByClassName('img-card')[0].src

    addCardViews (titcardClick, textoClick, dataTimeClick, viewsN, categoryClick, img)

 
}

// localStorage.clear()
function addCardViews ( titcardClick, textoClick, dataTimeClick, viewsN, categoryClick, img) {
    const Card = {
        titulo:  titcardClick,
        views: viewsN, 
        texto:  textoClick, 
        data:  dataTimeClick, 
        img:  img, 
        category:  categoryClick
    };
    localStorage.setItem("Card", JSON.stringify(Card)) //transformar o objecto em string
    
    location.href = "visualizar.html";
    
}

// **********filter*********//

let data_allCategory = document.querySelector("[data_allCategory]");
let data_envCategory = document.querySelector("[data_envCategory]");
let data_tecCategory = document.querySelector("[data_tecCategory]");
let data_WorldCategory = document.querySelector("[data_WorldCategory]");

let data_cards= document.querySelectorAll("[data_cards]");
let data_category = document.querySelectorAll("[data_category]")
let container = document.querySelector(".cards")
let data_dataTime = document.querySelectorAll("[data_dataTime]")

let data_Icon = document.querySelectorAll("[data_Icon]")
let data_IconInsta = document.querySelector("[data_IconInsta]")
let data_IconLinkedin = document.querySelector("[data_IconLinkedin]")
let data_IconFacebook = document.querySelector("[data_IconFacebook]")
let data_IconGithub = document.querySelector("[data_IconGithub]")

data_allCategory.addEventListener("click", function () {
    data_cards.forEach( function (card) {
        card.style.display = "block";
        container.classList.remove('active');
    })
})
data_envCategory.addEventListener("click", function () {
    data_cards.forEach( function (card) {
        if (card.getAttribute("data_category") === "env") {
            card.style.display = "block";
            card.style.width = "40%";
            container.classList.add('active');
        }
        else {
            card.style.display = "none";
        }
    })
})
data_tecCategory.addEventListener("click", function () {
    data_cards.forEach( function (card) {
        if (card.getAttribute("data_category") === "tec") {
            card.style.display = "block";
            card.style.width = "40%";
            container.classList.add('active');
        }
        else {
            card.style.display = "none";
        }
    })
})
data_WorldCategory.addEventListener("click", function () {
    data_cards.forEach( function (card) {
        if (card.getAttribute("data_category") === "world") {
            card.style.display = "block";
            card.style.width = "40%";
            container.classList.add('active');
        }
        else {
            card.style.display = "none";
        }
    })
})

let data = new Date().toLocaleDateString ();
data_dataTime.forEach( function (date) {
    date.innerText = data;
})

// ======redes sociais======
data_IconInsta.addEventListener("click", function () {
    location.href = "https://instagram.com/eldissone?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D";
})

data_IconLinkedin.addEventListener("click", function () {
    location.href = "https://www.linkedin.com/in/eldissone-vilonga-210207239";
  
})
data_IconFacebook.addEventListener("click", function () {
    location.href = "https://www.facebook.com/heicy.mallike";

})
data_IconGithub.addEventListener("click", function () {
    location.href = "https://github.com/Eldissone";
})


