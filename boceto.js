let borrarfondo = true;
let usarColorA = true;

function setup() {
  const cont = document.getElementById("contenedor-p5");
  // Crear un lienzo más pequeño, adaptado al tamaño visual
  const ancho = 300;
  const alto = 300;
  const lienzo = createCanvas(ancho, alto);
  lienzo.parent(cont); // insertamos el canvas dentro del contenedor
  background(50);
  noStroke();
}

function draw() {
  if (borrarfondo) background(255);
  fill(usarColorA ? 0 : 150);
  ellipse(mouseX, mouseY, 20, 20);
}

function mousePressed() {
  usarColorA = !usarColorA;
}

function keyPressed() {
  if (key == "b" || key == "B") {
    borrarfondo = !borrarfondo;
  }
}
