const form = document.querySelector('#calc');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function (event) {
event.preventDefault();
resultado.textContent = n1.value + n2.value;
});