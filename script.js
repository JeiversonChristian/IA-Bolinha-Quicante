let canvas = document.getElementById("canvasPrincipal");
let ctx = canvas.getContext("2d");

class Bolinha {
  constructor({
    c_cb, c_ob, c_pb, // cores
    r_cb, r_ob, r_pb, // raios
    d_x_o, d_y_o, d_x_p, // diferenças para deslocar olho e pupila
    // posições
    x_cb, y_cb, 
    x_ob = x_cb + d_x_o, y_ob = y_cb - d_y_o, // olho depende da posição da bolinha
    x_pb = x_ob + d_x_p, y_pb = y_ob, // pupila depende do olho
    v // velocidade
  }) {
    this.c_cb = c_cb; // cor do corpo
    this.c_ob = c_ob; // cor do olho
    this.c_pb = c_pb; // cor da pupila
    
    this.r_cb = r_cb; // raio do corpo
    this.r_ob = r_ob; // raio do olho
    this.r_pb = r_pb; // raio da pupila

    this.d_x_o = d_x_o; // o tanto que o olho é descolado em relação ao corpo - eixo x
    this.d_y_o = d_y_o; // item no eixo y
    this.d_x_p = d_x_p; // idem em relação à pupila - mas ela fica na mesma altura que o olho
    
    this.x_cb = x_cb; // posição x do corpo
    this.y_cb = y_cb; // posição y do corpo
    this.x_ob = x_ob; // posição x do olho
    this.y_ob = y_ob; // posição y do olho
    this.x_pb = x_pb; // posição x da pupila
    this.y_pb = y_pb; // posição y da pupila

    this.v = v; // velocidade da celula
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
  d_x_o: 10,
  d_y_o: 20,
  d_x_p: 5,
  v: 5,
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
  bolinha.x_cb += bolinha.v;
  bolinha.x_ob = bolinha.x_cb + bolinha.d_x_o;
  bolinha.x_pb = bolinha.x_ob + bolinha.d_x_p;
}

function rodar_jogo() {
  limpar_canvas();
  desenhar_bolinha();
  mexer_bolinha();
  requestAnimationFrame(rodar_jogo);
}

rodar_jogo();