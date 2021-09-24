var numeroTentativas = 3
var numeroSorteado = parseInt(Math.random() * 11)
var btnReiniciar = document.getElementById("btn-reiniciar")
var btnChutar = document.getElementById("btn-chutar")

function Chutar(){
    var resultado = document.getElementById("resultado")
    var valorDigitado = parseInt(document.getElementById("valor").value)
    console.log(valorDigitado)

    if(valorDigitado <= 10 && valorDigitado >= 0){
        resultado.classList.remove("erro")
        if(numeroTentativas > 0){
            numeroTentativas--
            if(numeroSorteado == valorDigitado){
                resultado.innerHTML = "Parabéns você acertou!"
                numeroTentativas = -1
                finalizaJogo()
            }else if(numeroSorteado > valorDigitado){
                resultado.innerHTML = "Errou! O numero sorteado é maior! Você ainda tem " + numeroTentativas + " tentativas"
            }else{
                resultado.innerHTML = "Errou! O numero sorteado é menor! Você ainda tem " + numeroTentativas + " tentativas"
            }
        }
    }
    else{
        resultado.innerHTML = "Erro!!! Digite um valor entre 0 e 10"
        resultado.classList.add("erro")
    }
    
    
    if(numeroTentativas == 0){
        finalizaJogo()
        resultado.innerHTML = "Errou! Suas tentativas acabaram! O número sorteado era " + numeroSorteado  
    }
    
    document.getElementById("valor").value = ""
    
}

function  finalizaJogo(){
    btnChutar.disabled = true
    btnChutar.classList.add("disabled")
    btnReiniciar.disabled = false
    btnReiniciar.classList.remove("disabled")
}

function Reiniciar(){
    numeroTentativas = 3
    resultado.innerHTML = ""
    btnChutar.classList.remove("disabled")
    btnChutar.disabled = false
    btnReiniciar.classList.add("disabled")
    btnReiniciar.disabled = true
    numeroSorteado = parseInt(Math.random() * 11)
}
