let canvas = document.getElementById("canvasPrincipal");
let ctx = canvas.getContext("2d");

class Bolinha {
  constructor({
    c_cb, c_ob, c_pb, // cores
    r_cb, r_ob, r_pb, // raios
    // posições
    x_cb, y_cb, 
    x_ob = x_cb + 25, y_ob = y_cb - 20, // olho depende da posição da bolinha
    x_pb = x_ob + 5, y_pb = y_ob // pupila depende do olho
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

function mexer_bolinha() {
  bolinha.x_cb += 5;
  bolinha.x_ob = bolinha.x_cb + 25;
  bolinha.x_pb = bolinha.x_ob + 5;
}

function rodar_jogo() {
  limpar_canvas();
  desenhar_bolinha();
  mexer_bolinha();
  requestAnimationFrame(rodar_jogo);
}

rodar_jogo();