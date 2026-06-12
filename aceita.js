function sim() {
  document.body.classList.add("carregando");

  document.getElementById("pergunta").innerText = "iupiiiiiiiiiiiiiiii";
  document.getElementById("botoes").style.display = "none";

  setTimeout(function() {
    window.location.href = "principal.html";
  }, 4000);
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