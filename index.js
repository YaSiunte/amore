    const senhaCorreta = "28/03/2026";
const dicaDaSenha = "Dica: data muito importante, digite com / (exemplo: 00/00/0000)";
const paginaDeDestino = "sucesso.html";
const duracaoDoSustoEmMs = 650;

const form = document.querySelector("#loginForm");
const nameInput = document.querySelector("#nameInput");
const passwordInput = document.querySelector("#passwordInput");
const hintMessage = document.querySelector("#hintMessage");
const jumpScare = document.querySelector("#jumpScare");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const attemptedPassword = passwordInput.value;

    if (attemptedPassword === senhaCorreta) {
    window.location.href = "../aceita/aceita.html";
    return;
    }

    hintMessage.textContent = "";
    passwordInput.value = "";
    passwordInput.focus();

    jumpScare.classList.add("is-visible");

    window.setTimeout(() => {
    jumpScare.classList.remove("is-visible");
    hintMessage.textContent = dicaDaSenha;
    }, duracaoDoSustoEmMs);
});