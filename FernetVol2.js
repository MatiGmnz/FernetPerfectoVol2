let texto = document.getElementById("vaso");
let marca = document.getElementById("marca");
let element = document.getElementById("boton");
let resultado = document.getElementById("resultado");
let tarjeta = document.getElementById("result");
let borrar = document.getElementById("delete");

element.addEventListener("click", () => { 
   result.showModal(), calcular()});

borrar.addEventListener("click", () => {
  result.close()});

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
