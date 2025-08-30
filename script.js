let canvas = document.getElementById("canvasPrincipal");
let ctx = canvas.getContext("2d");

let c_b = "blue"; // cor da bolinha
let r_b = 30; // raio da bolinha

function limpar_canvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhar_bolinha() {
  ctx.fillStyle = c_b;                  // cor de preenchimento
  ctx.beginPath();                      // começa o caminho
  ctx.arc(250, 200, r_b, 0, Math.PI*2); // (x, y, raio, ânguloInicial, ânguloFinal)
  ctx.fill();                           // preenche a bolinha
}

function gameLoop() {
  desenhar_bolinha();
  requestAnimationFrame(gameLoop);
}

gameLoop();