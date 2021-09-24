var tabela = document.getElementById("tabelaJogadores")

var saopaulo = {
    nome: "São Paulo",
    vitorias: 5,
    empates: 2,
    derrotas: 3,
    pontos: 0
}

var palmeiras = {
    nome: "Palmeiras",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

var times = [saopaulo, palmeiras]
exibeTabela()

function exibeTabela(){
    tabela.innerHTML = ""
    for (var time of times) {
        console.log(time)
        time.pontos = calculaPontos(time)
        adicionaNaTabela(time)
    }
}

function calculaPontos(time){
    var pontos = time.vitorias * 3 + time.empates
    return pontos
}

function adicionaNaTabela(time){
    var linha = document.createElement("tr")

    var nomeTime = document.createElement("td")
    nomeTime.innerHTML = time.nome
    linha.append(nomeTime)

    var vitoriasTime = document.createElement("td")
    vitoriasTime.innerHTML = time.vitorias
    linha.append(vitoriasTime)

    var empatesTime = document.createElement("td")
    empatesTime.innerHTML = time.empates
    linha.append(empatesTime)

    var derrotasTime = document.createElement("td")
    derrotasTime.innerHTML = time.derrotas
    linha.append(derrotasTime)

    var pontosTime = document.createElement("td")
    pontosTime.innerHTML = time.pontos
    linha.append(pontosTime)

    var acao1 = document.createElement("td")
    var botaoAdicionaVitoria = document.createElement("button")
    botaoAdicionaVitoria.innerHTML = "Vitória"
    botaoAdicionaVitoria.addEventListener("click", function(){adicionaVitoria(time)})
    acao1.append(botaoAdicionaVitoria)
    linha.append(acao1)

    var acao2 = document.createElement("td")
    var botaoAdicionaEmpate = document.createElement("button")
    botaoAdicionaEmpate.innerHTML = "Empate"
    botaoAdicionaEmpate.addEventListener("click", function(){adicionaEmpate(time)})
    acao2.append(botaoAdicionaEmpate)
    linha.append(acao2)

    var acao3 = document.createElement("td")
    var botaoAdicionaDerrota = document.createElement("button")
    botaoAdicionaDerrota.innerHTML = "Derrota"
    botaoAdicionaDerrota.addEventListener("click", function(){adicionaDerrota(time)})
    acao3.append(botaoAdicionaDerrota)
    linha.append(acao3)

    tabela.append(linha)
}

function adicionaVitoria(time){
    time.vitorias++
    exibeTabela()
}

function adicionaEmpate(time){
    time.empates++
    exibeTabela()
}

function adicionaDerrota(time){
    time.derrotas++
    exibeTabela()
}