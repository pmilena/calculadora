function somar() {
    var tn1 = window.document.querySelector('input#txtn1');
    var tn2 = window.document.querySelector('input#txtn2');
    var res = window.document.getElementById('res');

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 + n2;

    res.innerHTML = `O resultado da soma é ${s}`;
}

function subtrair() {
    var tn1 = window.document.querySelector('input#txtn1');
    var tn2 = window.document.querySelector('input#txtn2');
    var res = window.document.getElementById('res');

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 - n2;

    res.innerHTML = `O resultado da subtração é ${s}`;
}

function multiplicar() {
    var tn1 = window.document.querySelector('input#txtn1');
    var tn2 = window.document.querySelector('input#txtn2');
    var res = window.document.getElementById('res');

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 * n2;

    res.innerHTML = `O resultado da multiplicação é ${s}`;
}

function dividir() {
    var tn1 = window.document.querySelector('input#txtn1');
    var tn2 = window.document.querySelector('input#txtn2');
    var res = window.document.getElementById('res');

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 / n2;

    res.innerHTML = `O resultado da divisão é ${s}`;
}

function limpar() {
    var c1 = window.document.getElementById('txtn1');
    var c2 = window.document.getElementById('txtn2');
    var res = window.document.getElementById('res');

    res.innerHTML = "Resultado";
    c1.value = "";
    c2.value = "";
}
