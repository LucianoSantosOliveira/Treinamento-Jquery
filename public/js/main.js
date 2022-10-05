// var frase = $(".frase").text();
// var numPalavras = frase.split(" ").length;
// $("#tamanho-frase").text(numPalavras);
// console.log(frase);


var texto = $("#textoDigitado");
debugger
texto.on("input", function(){
    var frase = texto.val();
    var contagemDePalavras = frase.split(/\S+/).length - 1;
    var contagemLetras = frase.length;
    $("#contagemPalavras").text(contagemDePalavras);
    $("#contagemCaracteres").text(contagemLetras);
});
debugger
var tempo = $("#tempo-Restante").text();
texto.one("focus",function(){
    var cronometro = setInterval(function(){
        tempo--;
        console.log(tempo)
        $("#tempo-Restante").text(tempo);
        if(tempo < 1){           
            texto.attr("disabled", true);
            clearInterval(cronometro);
        }
    },1000);

});