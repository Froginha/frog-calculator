//limpa todos os valores
function clearScreen() {
    document.getElementById("result").value = "";
}

//mostra os valores
function display(value) {
    document.getElementById("result").value += value;
}

//essa fuinção mostra a expressão e retorna ao resultado
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}