var texto = document.getElementById("vaso");
var marca = document.getElementById("marca");
var element = document.getElementById("boton");
let resultado = document.getElementById("result");

element.addEventListener("click", calcular)

function calcular() {

var fernet = parseInt(marca.value);
var recipiente = parseInt(texto.value);
var fernet_branca = 35;
var fernet_vittone = 40;
var fernet_1882 = 32;
var fernet_buhero_negro = 37;
var fernet_artesanal = 39;
var Coca = 100;
var porcentaje_fernet;
if(fernet == 1)
{
  porcentaje_fernet = fernet_branca * recipiente / Coca
};
if(fernet == 2)
{
  porcentaje_fernet = fernet_vittone * recipiente / Coca
};
if(fernet == 3)
{
  porcentaje_fernet = fernet_1882 * recipiente / Coca
};
if(fernet == 4)
{
  porcentaje_fernet = fernet_buhero_negro * recipiente / Coca
};
if (fernet == 5) {
  porcentaje_fernet = fernet_artesanal * recipiente / Coca
};
  resultado.innerText = "Tu medida perfecta de fernet es: " + porcentaje_fernet + "ml."
};