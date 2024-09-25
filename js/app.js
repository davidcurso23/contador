const contador = document.getElementById("contador");

const btnContar = document.getElementById("btnContar");

const btnBorrar = document.getElementById("btnBorrar");

let numero = 0;

btnContar.addEventListener("click", () => {
  numero++;
  contador.innerText = numero;
});

btnBorrar.addEventListener("click", () => {
  numero = 0;
  contador.innerText = numero;
});
