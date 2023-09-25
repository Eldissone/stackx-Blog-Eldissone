if (document.readyState == "loading"){

    const titcard = document.querySelector(".tit-card");
    const viewClick = document.querySelector(".views-n");
    const dataTimeClick = document.querySelector(".dataTime");
    const textoClick = document.querySelector(".texto-p");
    const imgC = document.querySelector(".img-card");
    const categoryClick = document.querySelector(".category");
    
    function checar () {
        const Card = localStorage.getItem("Card")
        const CardObjeto = JSON.parse(Card)

        if (CardObjeto) {
            localStorage.views = JSON.stringify(CardObjeto.views++)
            titcard.innerText = CardObjeto.titulo
            textoClick.innerText = CardObjeto.texto
            imgC.src = CardObjeto.img
            viewClick.innerText = CardObjeto.views
            categoryClick.innerText = CardObjeto.category
            dataTimeClick.innerText = CardObjeto.data
            
        } else {
            location.href = "index.html";
        }

        }
        checar();
        function views () {
        if (titcard.textContent == "IA") {
            a =viewClick.textContent
            localStorage.setItem("a", a)
        }
        else if (titcard.textContent == "UN ABOUT ENVIRONMENT") {
            b =viewClick.textContent
            localStorage.setItem("b", b)
        }
        else if (titcard.textContent == "STACKX LEARNING") {
            c =viewClick.textContent
            localStorage.setItem("c", c)
        }
        else if (titcard.textContent == "WAR IN UCRANIA") {
            d =viewClick.textContent
            localStorage.setItem("d", d)
        }
        else if (titcard.textContent == "PLANT") {
            e =viewClick.textContent
            localStorage.setItem("e", e)
        }
        else if (titcard.textContent == "RIO IN SUMMIT") {
            f =viewClick.textContent
            localStorage.setItem("f", f)
        }
        else {
            console.log("ERRO")
        }
    }

    views()
        
    let modalColor = document.querySelector(".tit-modal")

    switch ( categoryClick.textContent) {
        case "Technology":
            modalColor.classList.remove("world")
            modalColor.classList.remove("env")
            modalColor.classList.add("tec")
            break;
        case "World News":
            modalColor.classList.remove("tec")
            modalColor.classList.remove("env")
            modalColor.classList.add("world")
            break;
        case "Environment":
            modalColor.classList.remove("world")
            modalColor.classList.remove("tec")
            modalColor.classList.add("env")
            break;

        default:
            console.log("categoria inexistente"+categoryClick)
            break;
    }
    const voltar = document.querySelector("#voltar");  

    voltar.addEventListener("click", () =>{
        localStorage.removeItem("Card");
        checar();
    });
    checar ();
} 
else{
    alert("nao carregou")
}