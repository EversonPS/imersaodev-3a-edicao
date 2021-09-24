var urlAnimesPreferidos = ["https://upload.wikimedia.org/wikipedia/pt/c/c0/Death_Note_vol._01.jpg", "https://upload.wikimedia.org/wikipedia/pt/5/51/Shingeki_no_Kyojin_1%C2%AA_temporada.jpg", "https://br.web.img3.acsta.net/c_310_420/pictures/17/02/01/13/28/337995.jpg", "https://upload.wikimedia.org/wikipedia/pt/7/74/Dragon_Ball_Super_Key_visual.jpg", "https://sm.ign.com/ign_br/tv/f/fullmetal-/fullmetal-alchemist-brotherhood-1_qzyx.jpg"]
var listaAnimes = document.querySelector(".lista-animes")
var form = document.querySelector(".mini-form")

form.addEventListener("submit", adicionaAnime)
listaAnimes.addEventListener("dblclick", removeAnime)

for (url of urlAnimesPreferidos) {
    adicionaAnimeNaLista(url)
}

function adicionaAnimeNaLista(url){
    var imagemAnime = document.createElement("img")
    var linha = document.createElement("li")
    imagemAnime.setAttribute("src", url)
    linha.append(imagemAnime)
    listaAnimes.append(linha)
}

function adicionaAnime(event){
    event.preventDefault()
    var urlAnime = document.querySelector(".url-digitado").value

    if(urlAnime.endsWith(".jpg") || urlAnime.endsWith(".png"))
    {
        if(!urlAnimesPreferidos.includes(urlAnime)){
            urlAnimesPreferidos.push(urlAnime)
            adicionaAnimeNaLista(urlAnime)
        }
        else{
            alert("Esse anime já está na lista!")
        }
    }
    else{
        alert("A imagem precisa estar em .png ou .jpg")
    }

    document.querySelector(".url-digitado").value = ""
}

function removeAnime(event){
    event.target.parentNode.classList.add("efeito-sumir");
    setTimeout(function(){
        var liClicada = event.target.parentNode
        var listaAnimes = liClicada.parentNode
        
        var listaAnimesArray = Array.from(listaAnimes.children)
        var indexAnime = listaAnimesArray.indexOf(liClicada)

        if (indexAnime > -1) {
            urlAnimesPreferidos.splice(indexAnime, 1);
        }
        event.target.parentNode.remove();
    }, 500)
}
