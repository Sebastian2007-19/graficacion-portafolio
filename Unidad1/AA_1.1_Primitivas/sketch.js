let angulo = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // e.a. Color de fondo
  background(250, 225, 215);

  // Animación de flotación suave
  let offset = sin(angulo) * 6;
  angulo += 0.05;

  // Movimiento de pupilas según la posición del ratón
  let pupilaX = map(mouseX, 0, width, -4, 4, true);
  let pupilaY = map(mouseY, 0, height, -4, 4, true);

  // --- PIES / ZAPATILLAS ---
  stroke(30, 40, 60);
  strokeWeight(2);
  fill(245, 90, 80); // Rojo coral
  // c.b. Elipses adicionales para los pies
  ellipse(155, 335 + offset, 35, 18); // Pie izquierdo
  ellipse(245, 335 + offset, 35, 18); // Pie derecho

  // --- PIERNAS ---
  stroke(40, 50, 70);
  strokeWeight(5);
  // c.c. Líneas para las piernas
  line(160, 290 + offset, 160, 330 + offset); // Pierna izquierda
  line(240, 290 + offset, 240, 330 + offset); // Pierna derecha

  // --- BRAZOS ---
  strokeWeight(6);
  // c.c. Al menos dos líneas (Brazos)
  line(140, 210 + offset, 110, 260 + offset); // Brazo izquierdo
  line(260, 210 + offset, 290, 260 + offset); // Brazo derecho

  // --- CUERPO (TORSO) ---
  stroke(30, 40, 60);
  strokeWeight(2);
  fill(80, 180, 160); // Verde menta
  // c.a. Rectángulo 1 (Torso)
  rect(140, 180 + offset, 120, 110, 15);

  // --- CUELLO ---
  fill(255, 210, 185); // Tono piel
  rect(185, 155 + offset, 30, 30, 4); // Cuello visible

  // --- CABEZA ---
  // c.a. Rectángulo 2 (Cabeza)
  rect(150, 85 + offset, 100, 80, 20);

  // --- BOCA ---
  stroke(200, 50, 50);
  strokeWeight(2);
  fill(255, 120, 120);
  // c.d. Triángulo (Boca abierta o sonrisa estilizada)
  triangle(185, 140 + offset, 215, 140 + offset, 200, 152 + offset);

  // --- OJOS Y PUPILAS ---
  stroke(30);
  strokeWeight(1);
  fill(255);
  // c.b. Círculo/Elipse 1 y 2 (Ojos)
  ellipse(175, 115 + offset, 20, 20);
  ellipse(225, 115 + offset, 20, 20);

  // Pupilas dinámicas
  fill(40, 50, 70);
  ellipse(175 + pupilaX, 115 + offset + pupilaY, 8, 8);
  ellipse(225 + pupilaX, 115 + offset + pupilaY, 8, 8);

  // --- GORRA ---
  stroke(30, 40, 60);
  strokeWeight(2);
  fill(245, 90, 80);
  // Visera de la gorra
  triangle(140, 85 + offset, 260, 85 + offset, 200, 50 + offset);

  // --- ELEMENTO INTERACTIVO BASE ---
  stroke(255);
  strokeWeight(2);
  fill(255, 0, 128);
  circle(mouseX, mouseY, 18);
}
  
 

  
