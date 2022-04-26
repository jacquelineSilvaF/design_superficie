function setup(){
    createCanvas(600, 600);
    background (186,85,211);
}

let x = 0;
let y = 0;
let sp = 20;
let r = 0

function draw(){
    stroke(r,21,133);
    fill (r,21,133);
    strokeWeight(5);

    //escolher de forma aleatória o lado que a linha estará virada
    if(random(1) < 0.5) {
        line (x, y, x + sp, y + sp);
        
    } else {
        line(x, y + sp, x + sp, y);
    }
    
    x = x + sp;

    //código para voltar ao ponto 0 do eixo x e mudar a cor
    if(x > width) {
        
        x = 0;
        y = y + sp;

        r = r + 8; //a cada linha o r vai aumentar em 8
    }

}