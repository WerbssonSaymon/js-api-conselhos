// Função para acessar a API e apresentar os dados no index.html

const sms = document.getElementById("sms");
const enumeration = document.getElementById("enumeration");

function gerarConcelho() {
    let beforeSms = `Conselho: `
    const endpoint = `https://api.adviceslip.com/advice`;
    fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
        sms.innerHTML = dados.slip.advice;
        enumeration.innerHTML = beforeSms + dados.slip.id;
    }).catch(error => alert("Erro ao consultar:", error));
}