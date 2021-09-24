function calculaMedia(event){
    event.preventDefault();
    var resultado = document.querySelector("#resultado");

    var primeiraNota = parseFloat(form.primeirovalor.value);
    var segundaNota = parseFloat(form.segundovalor.value);
    var terceiraNota = parseFloat(form.terceirovalor.value);
    var quartaNota = parseFloat(form.quartovalor.value);

    var media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;
    
    if(media >= 6){
        resultado.innerHTML = "Parabéns você foi aprovado. Média: " + media.toFixed(2);
        resultado.classList.add("aprovado");
        resultado.classList.remove("reprovado");
    }
    else{
        resultado.innerHTML = "Você foi reprovado. Média: " + media.toFixed(2);
        resultado.classList.add("reprovado");
        resultado.classList.remove("aprovado");
    }
    
    form.primeirovalor.value = "";
    form.segundovalor.value = "";
    form.terceirovalor.value = "";
    form.quartovalor.value = "";
}

var form = document.querySelector(".frm-calcula-media");
form.addEventListener("submit", calculaMedia);