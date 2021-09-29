var goku = {
    nome: "Goku",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/dragon-ball-super-1200x900-1.jpg",
    atributos: {
        ataque: 700,
        defesa: 400,
        poder: 900
    }
}

var vegeta = {
    nome: "Vegeta",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_784398-MLB32341815479_092019-O.jpg",
    atributos: {
        ataque: 800,
        defesa: 450,
        poder: 700
    }
}

var majinboo = {
    nome: "Majin Boo",
    imagem: "https://i.pinimg.com/736x/35/42/46/354246fc2a4f76bf424bce0c33540c90--majin-boo-dragon-ball-z.jpg",
    atributos: {
        ataque: 600,
        defesa: 650,
        poder: 600
    }
}

var cartas = [goku, vegeta, majinboo]
var btnSorteia = document.getElementById("btnSortear")
var btnJogar = document.getElementById("btnJogar")

var cartaSorteadaJogador
var cartaSorteadaMaquina
var divResultado = document.getElementById("resultado")
var divRadios = document.createElement("div")
var pNome = document.createElement("p")
var divCartaMaquina = document.getElementById("carta-maquina")
var divP = document.createElement("p")
var pNomeCartaMaquina = document.createElement("p")

btnSorteia.addEventListener("click", sorteiaCartas)
btnJogar.addEventListener("click", jogar)

function sorteiaCartas(){
    divResultado.innerHTML = ""
    divRadios.innerHTML = ""
    pNome.innerHTML = ""
    divCartaMaquina.style.backgroundImage = ""
    divP .innerHTML = ""
    pNomeCartaMaquina.innerHTML = ""

    console.log("a")
    var numSorteadoJogador = parseInt(Math.random() * 3)
    cartaSorteadaJogador = cartas[numSorteadoJogador]
    console.log(cartaSorteadaJogador)

    var numSorteadoMaquina = parseInt(Math.random() * 3)
    while(numSorteadoJogador == numSorteadoMaquina){
        numSorteadoMaquina = parseInt(Math.random() * 3)
    }

    cartaSorteadaMaquina = cartas[numSorteadoMaquina]
    console.log(cartaSorteadaMaquina)
    btnSorteia.disabled = true
    btnSorteia.classList.add("disabled")
    btnJogar.disabled = false
    btnJogar.classList.remove("disabled")

    exibeCartaJogador()
}

function exibeCartaJogador(){
    var moldura = document.querySelector(".moldura")
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = "url(" + cartaSorteadaJogador.imagem + ")"

    divRadios.setAttribute("id", "opcoes")
    divRadios.setAttribute("class", "carta-status")

    pNome.setAttribute("class", "carta-subtitle")
    pNome.innerHTML = cartaSorteadaJogador.nome

    for (atributo in cartaSorteadaJogador.atributos){
        var rdb = document.createElement("input")
        rdb.setAttribute("type", "radio")
        rdb.setAttribute("name", "atributo")
        rdb.setAttribute("value", atributo)
        rdb.classList.add("espacordb")
        
        var containerRadio = document.createElement("div")
        containerRadio.appendChild(rdb)
        containerRadio.append(atributo + ": " + cartaSorteadaJogador.atributos[atributo])
        containerRadio.classList.add("alinha")

        divRadios.appendChild(containerRadio)
    }
    console.log(divRadios)

    divCartaJogador.appendChild(moldura)
    divCartaJogador.appendChild(pNome)
    divCartaJogador.appendChild(divRadios)
}

function jogar(){
    var atributos = document.getElementsByName("atributo")
    for(atributo of atributos){
        console.log(atributo.value)
        if(atributo.checked == true){
            var atributoJogador = cartaSorteadaJogador.atributos[atributo.value]
            var atributoMaquina = cartaSorteadaMaquina.atributos[atributo.value]
            console.log(atributoJogador)
            console.log(atributoMaquina)

            var resultado = document.createElement("p")
            resultado.classList.add("resultado-final")

            if(atributoJogador > atributoMaquina){
                resultado.innerHTML = "Venceu!"
            }else if(atributoJogador == atributoMaquina){
                resultado.innerHTML = "Empatou!"
            }else{
                resultado.innerHTML = "Perdeu!"
            }
        }
    }
    divResultado.appendChild(resultado)
    btnSorteia.disabled = false
    btnSorteia.classList.remove("disabled")
    btnJogar.disabled = true
    btnJogar.classList.add("disabled")

    exibirCartaMaquina()
}

function exibirCartaMaquina(){
    var moldura = document.querySelector(".moldura2")
    divCartaMaquina.style.backgroundImage = "url(" + cartaSorteadaMaquina.imagem + ")"

    divP.setAttribute("id", "opcoes")
    divP.setAttribute("class", "carta-status")

    pNomeCartaMaquina.setAttribute("class", "carta-subtitle")
    pNomeCartaMaquina.innerHTML = cartaSorteadaMaquina.nome

    for (atributo in cartaSorteadaJogador.atributos){
        var p = document.createElement("p")
        p.setAttribute("name", "atributo")
        p.setAttribute("value", atributo)
        p.innerHTML = atributo + ": " + cartaSorteadaMaquina.atributos[atributo]
        p.classList.add("atributosMaquina")
        divP.appendChild(p)
    }
    console.log(divP)

    divCartaMaquina.appendChild(moldura)
    divCartaMaquina.appendChild(pNomeCartaMaquina)
    divCartaMaquina.appendChild(divP)
}