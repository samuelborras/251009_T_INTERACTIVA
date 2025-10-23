let diametro = 40
let borrarEnCadaFrame = true
let paletasColores = [
 ["#111827","#2563EB","#10B981","#F59E0B","#EF4444"],
 ["#0F172A","#22D3EE","#A78BFA","#34D399","#F472B6"],
 ["#1F2937","#60A5FA","#FBBF24","#F87171","#34D399"]
];
let indicePaleta = 0
let modoMultiplicar = false;

function setup() {
  createCanvas(windowWidth, 400);
  noStroke();
  background(250);
 document.getElementById("botonCambiarPaleta").addEventListener("click", cambiarPaleta);
 document.getElementById("botonLimpiar").addEventListener("click", limpiarLienzo);
 document.getElementById("botonGuardar").addEventListener("click", guardarPNG);
}

function windowResized(){
  resizeCanvas(windowWidth, 400);
  background(250);
}

function draw() {
 if (borrarEnCadaFrame) background(245, 245, 245, 25);
 fill(paletasColores[indicePaleta][1] + "CC");
 circle(mouseX, mouseY, diametro);
 for (let i = 0; i < 8; i++) {
 let angulo = frameCount * 0.02 + i * TAU/8;
 let radio = 60 + 20 * sin(frameCount * 0.03 + i);
 let x = mouseX + cos(angulo) * radio;
 let y = mouseY + sin(angulo) * radio;
 fill(paletasColores[indicePaleta][(i % (paletasColores[indicePaleta].length-1))+1] + "CC");
 circle(x, y, 18);
 }
}


function keyPressed() {
 if (key === 'B' || key === 'b') borrarEnCadaFrame = !borrarEnCadaFrame;
 if (key === 'M' || key === 'm') {
 modoMultiplicar = !modoMultiplicar;
 blendMode(modoMultiplicar ? MULTIPLY : BLEND);
 }
 if (key === 'S' || key === 's') guardarPNG(); // foto con tecla
}

function mouseWheel(e) {
 diametro = constrain(diametro + (e.deltaY > 0 ? -4 : 4), 10, 140);
}

function guardarPNG() {
 let f = new Date();
 let nombre =
`poster-${f.getHours()}${f.getMinutes()}${f.getSeconds()}`;
 saveCanvas(nombre, 'png');
}

function cambiarPaleta() {
 indicePaleta = (indicePaleta + 1) % paletasColores.length;
}
function limpiarLienzo() { background(245); }