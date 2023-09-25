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
//filter cards
let cards = document.querySelector(".cards")
let card0 = document.querySelectorAll(".card")[0]
let card1 = document.querySelectorAll(".card")[1]
let card2 = document.querySelectorAll(".card")[2]
let card3 = document.querySelectorAll(".card")[3]
let card4 = document.querySelectorAll(".card")[4]
let card5 = document.querySelectorAll(".card")[5]
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

        if (this.childNodes[1].textContent == "Technology") {
                        
            cards.classList.toggle('active');
            card0.style.width = "40%"; 
            card1.style.display = "none"; 
            card2.style.width = "40%"; 
            card3.style.display = "none"; 
            card4.style.display = "none"; 
            card5.style.display = "none"; 
      

        }
        else if (this.childNodes[1].textContent == "environment") {
                    
            cards.classList.toggle('active');
            card4.style.width = "40%"; 
            card0.style.display = "none"; 
            card1.style.width = "40%"; 
            card3.style.display = "none"; 
            card2.style.display = "none"; 
            card5.style.display = "none"; 
          

        }
        else if (this.childNodes[1].textContent == "World news") {
                    
            cards.classList.toggle('active');
            card5.style.width = "40%"; 
            card0.style.display = "none"; 
            card3.style.width = "40%"; 
            card4.style.display = "none"; 
            card2.style.display = "none"; 
            card1.style.display = "none"; 

        }
        else{
            card1.style.width = "flex"; 
            card0.style.display = "flex"; 
            card4.style.width = "flex"; 
            card3.style.display = "flex"; 
            card5.style.display = "flex"; 
            card2.style.display = "flex"; 
        }
    })
})
// ========tema Dark=========
const body = document.querySelector('body');
const h = document.querySelector('header');
const h1 = document.querySelector('.h1');
const nav = document.querySelector('.nav a ');
const tog = document.getElementById('tog');
const panel1= document.querySelector('.panel1');
const panel2= document.querySelector('.panel2');
const panel3= document.querySelector('.panel3');
const footer= document.querySelector('.dir');
const footer1= document.querySelector('.esq');

tog.onclick = function(){
    tog.classList.toggle('active');
    body.classList.toggle('active');
    h.classList.toggle('active');
    h1.classList.toggle('active');
    nav.classList.toggle('active');
    panel1.classList.toggle('active');
    panel2.classList.toggle('active');
    panel3.classList.toggle('active');
    card0.classList.toggle('active');
    card1.classList.toggle('active');
    card2.classList.toggle('active');
    card3.classList.toggle('active');
    card4.classList.toggle('active');
    card5.classList.toggle('active');
    footer.classList.toggle('active');
    footer1.classList.toggle('active');
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
function viwesC () {
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

   


