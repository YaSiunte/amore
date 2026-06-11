
function sim() {
    alert("voce aceitou namorar cmg")
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(15, 80);
    btn.style.left = geraPosicao(15, 80);
    console.log("ops");
}

function geraPosicao(min, max) {
    return Math.random() * (max - min) + "%";
}