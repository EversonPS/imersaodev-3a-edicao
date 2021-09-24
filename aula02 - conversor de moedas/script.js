var form = document.getElementById("frm-conversor")
form.addEventListener("submit", converter)

function converter(event){
    event.preventDefault()
    var valorDigitado = parseFloat(document.getElementById("valor").value)
    console.log(valorDigitado)

    var select1 = document.getElementById("moeda1")
    var moeda1 = select1.options[select1.selectedIndex].text
    var simboloMoeda1 = select1.options[select1.selectedIndex].value

    var select2 = document.getElementById("moeda2")
    var moeda2 = select2.options[select2.selectedIndex].text
    var simboloMoeda2 = select2.options[select2.selectedIndex].value
    var valorConvertido = document.getElementById("valorConvertido")

    var resultado = 0

    if(moeda1 == "Real" && moeda2 =="Euro" || moeda1 == "Euro" && moeda2 == "Real"){
        resultado = converteRealEuro(valorDigitado, moeda1).toFixed(2)
    }
    else if(moeda1 == "Real" && moeda2 =="Bitcoin" || moeda1 == "Bitcoin" && moeda2 == "Real"){
        resultado = converteRealBitcoin(valorDigitado, moeda1).toFixed(2)
    }
    else if(moeda1 == "Real" && moeda2 =="Dólar" || moeda1 == "Dólar" && moeda2 == "Real"){
        resultado = converteRealDolar(valorDigitado, moeda1).toFixed(2)
    }
    else if(moeda1 == "Dólar" && moeda2 =="Bitcoin" || moeda1 == "Bitcoin" && moeda2 == "Dólar"){
        resultado = converteDolarBitcoin(valorDigitado, moeda1).toFixed(2)
    }
    else if(moeda1 == "Dólar" && moeda2 =="Euro" || moeda1 == "Euro" && moeda2 == "Dólar"){
        resultado = converteDolarEuro(valorDigitado, moeda1).toFixed(2)
    }
    else if(moeda1 == "Euro" && moeda2 =="Bitcoin" || moeda1 == "Bitcoin" && moeda2 == "Euro"){
        resultado = converteEuroBitcoin(valorDigitado, moeda1).toFixed(2)
    }

    if(moeda1 != moeda2){
        valorConvertido.classList.remove("erro")
        valorConvertido.innerHTML = valorDigitado + simboloMoeda1 + " equivale à " + resultado + simboloMoeda2
    }
    else{
        valorConvertido.classList.add("erro")
        valorConvertido.innerHTML = "Erro! As moedas inseridas são iguais"
    }
}


function converteRealEuro(valorDigitado, moeda1){
    if(moeda1 == "Real"){
        return valorDigitado / 6.19
    }
    else{
        return valorDigitado * 6.19
    }
}

function converteRealBitcoin(valorDigitado, moeda1){
    if(moeda1 == "Real"){
        return valorDigitado / 246905.65
    }
    else{
        return valorDigitado * 246905.65
    }
}

function converteRealDolar(valorDigitado, moeda1){
    if(moeda1 == "Real"){
        return valorDigitado / 5.24
    }
    else{
        return valorDigitado * 5.24
    }
}

function converteDolarBitcoin(valorDigitado, moeda1){
    if(moeda1 == "Dólar"){
        return valorDigitado / 47053.26
    }
    else{
        return valorDigitado * 47053.26
    }
}
function converteDolarEuro(valorDigitado, moeda1){
    if(moeda1 == "Dólar"){
        return valorDigitado / 1.18
    }
    else{
        return valorDigitado * 1.18
    }
}
function converteEuroBitcoin(valorDigitado, moeda1){
    if(moeda1 == "Euro"){
        return valorDigitado / 39801.33
    }
    else{
        return valorDigitado * 39801.33
    } 
}


