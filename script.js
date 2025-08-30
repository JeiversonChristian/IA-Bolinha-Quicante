let canvas = document.getElementById("canvasPrincipal");
let ctx = canvas.getContext("2d");

class Bolinha {
  constructor({
    c_cb, c_ob, c_pb, // cores
    r_cb, r_ob, r_pb, // raios
    x_cb, y_cb, x_ob, y_ob, x_pb, y_pb // posições
  }) {
    this.c_cb = c_cb; // cor do corpo
    this.c_ob = c_ob; // cor do olho
    this.c_pb = c_pb; // cor da pupila
    
    this.r_cb = r_cb; // raio do corpo
    this.r_ob = r_ob; // raio do olho
    this.r_pb = r_pb; // raio da pupila
    
    this.x_cb = x_cb; // posição x do corpo
    this.y_cb = y_cb; // posição y do corpo
    this.x_ob = x_ob; // posição x do olho
    this.y_ob = y_ob; // posição y do olho
    this.x_pb = x_pb; // posição x da pupila
    this.y_pb = y_pb; // posição y da pupila
  }
}

const bolinha = new Bolinha({
  c_cb: "blue",
  c_ob: "white",
  c_pb: "black",
  r_cb: 30,
  r_ob: 12,
  r_pb: 5,
  x_cb: 250,
  y_cb: 200,
  x_ob: 275,
  y_ob: 180,
  x_pb: 280,
  y_pb: 180
});

function limpar_canvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhar_bolinha() {
  
  // corpo
  // cor de preenchimento
  ctx.fillStyle = bolinha.c_cb;                  
  // começa o caminho
  ctx.beginPath();                        
  // (x, y, raio, ânguloInicial, ânguloFinal)
  ctx.arc(bolinha.x_cb, bolinha.y_cb, bolinha.r_cb, 0, Math.PI*2); 
  // preenche a bolinha
  ctx.fill();                              
  
  // olhos
  ctx.fillStyle = bolinha.c_ob;
  ctx.beginPath();
  ctx.arc(bolinha.x_ob, bolinha.y_ob, bolinha.r_ob, 0, Math.PI * 2);
  ctx.fill();

  // pupilas
  ctx.fillStyle = bolinha.c_pb;
  ctx.beginPath();
  ctx.arc(bolinha.x_pb, bolinha.y_pb, bolinha.r_pb, 0, Math.PI * 2);
  ctx.fill();
}

function gameLoop() {
  desenhar_bolinha();
  requestAnimationFrame(gameLoop);
}

gameLoop();