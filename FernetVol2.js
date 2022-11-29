let texto = document.getElementById("vaso");
let marca = document.getElementById("marca");
let element = document.getElementById("boton");
let resultado = document.getElementById("resultado");
let tarjeta = document.getElementById("result");
let borrar = document.getElementById("delete");
let cat = document.getElementById("kiti");
let gato = document.getElementById("kat");
let cierre = document.getElementById("cierro");
let counterTranca = document.getElementById("counter-tranca");
let counterPropio = document.getElementById("counter-propio");
let selectSuave = document.getElementById("selectSuave");
let selectTranca = document.getElementById("selectTranca");
let selectFuerte = document.getElementById("selectFuerte");
let inicio2 = document.getElementById("tranca");
let inicio4 = document.getElementById("propio");
let pausa2 = document.getElementById("pausa2");
let pausa4 = document.getElementById("pausa4");
let listado = document.getElementById("lista-tiempos");


element.addEventListener("click", () => { 
  result.showModal(), calcular()});

borrar.addEventListener("click", () => {
  result.close()});

function calcular() {

let fernet = parseInt(marca.value);
let recipiente = parseInt(texto.value);
let fernet_branca = 35;
let fernet_vittone = 40;
let fernet_1882 = 32;
let fernet_buhero_negro = 37;
let fernet_artesanal = 39;
let Coca = 100;
let porcentaje_fernet;
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

cat.addEventListener("click", () => {
  kat.showModal()
});

cierre.addEventListener("click", () => {
  kat.close()
});



let cuentaRegresiva = document.createElement("h1");


let timer = 0;


let a;
let a4;


let t = false;


selectSuave.addEventListener("click", () => {
  timer = 9;
});

selectTranca.addEventListener("click", () => {
  timer = 13;
});

selectFuerte.addEventListener("click", () => {
  timer = 17
})


inicio2.addEventListener("click", () => {
  let t = true;

  if(t === true){
    a = setInterval(() => {
      timer--;
      cuentaRegresiva.innerHTML = timer;
      counterTranca.appendChild(cuentaRegresiva);
      if(timer === 0){
        clearInterval(a);
        cuentaRegresiva.innerHTML = "¡Tiempo!";
        counterTranca.appendChild(cuentaRegresiva);
      }
    }, 1000);
  }
});


pausa2.addEventListener("click", ()=>{
  clearInterval(a);
});


let tiemposTomados = [];
let timerPropio = 0;
let tiempofrenado = false

inicio4.addEventListener("click", () => {
  a4 = setInterval(() =>{
    timerPropio++;
    cuentaRegresiva.innerHTML = timerPropio;
    counterPropio.appendChild(cuentaRegresiva);
  },1000);
});

pausa4.addEventListener("click", ()=>{
  let list = document.createElement("ul");
  list.innerHTML = `<li>Ultima medida: ${timerPropio}</li>`;
  listado.appendChild(list);
  tiemposTomados.push(timerPropio);
  console.log(tiemposTomados)
  tiempofrenado = true;
  if(tiempofrenado === true){
    clearInterval(a4);
    timerPropio = 0;
  }
});

localStorage.setItem("Medidas", JSON.stringify(tiemposTomados))
