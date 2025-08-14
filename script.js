let saldo = 0;
const saldoEl = document.getElementById("saldo");
const listaEl = document.getElementById("movimentacoes");
const descricaoEl = document.getElementById("descricao");
const valorEl = document.getElementById("valor");
const tipoEl = document.getElementById("tipo");
const btnAdicionar = document.getElementById("adicionar");

btnAdicionar.addEventListener("click", () => {
  const descricao = descricaoEl.value.trim();
  const valor = parseFloat(valorEl.value);
  const tipo = tipoEl.value;

  if (!descricao || isNaN(valor) || valor <= 0) {
    alert("Preencha todos os campos com valores válidos.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${descricao} - R$ ${valor.toFixed(2)}`;
  
  if (tipo === "receita") {
    saldo += valor;
    li.style.color = "green";
  } else {
    saldo -= valor;
    li.style.color = "red";
  }

  saldoEl.textContent = saldo.toFixed(2);
  listaEl.appendChild(li);

  descricaoEl.value = "";
  valorEl.value = "";
});