var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'phaser-example',
    backgroundColor: '#f0f0f0',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);
var graphics;

function preload(){
    this.load.image('Mesa2', 'imagenes/Mesa2.jpg');

}

function create(){
    var screenAncho = window.innerWidth;
    var screenAlto = window.innerHeight;

    Fondo = this.add.image(screenAncho/2, screenAlto/2, 'Mesa2');
    Fondo.setScale(0.5);

    this.graphics = this.add.graphics();    
    const canvas = this.game.canvas;
    this.add.text(screenAncho/3, 100, "Bienvenido a BuscaInfluenza", {
        font: "bold 30px Arial",
        fill: "#000000"
    });
    // Texto Jugar Tortuga
    this.add.text(screenAncho/2.3 +25, screenAlto/2.1+1, "Jugar", {
        font: "bold 20px Arial",
        fill: "#ffffff"
    });

    this.graphics.fillStyle(0x000000);
    this.graphics.fillRoundedRect(screenAncho/2.3, screenAlto/2.1, 115, 50, 10);


    let botonTortuga = this.add.zone(screenAncho/2.3, screenAlto/2.1, 115, 50, 10).setOrigin(0,0).setInteractive();

    
    botonTortuga.on('pointerover', ()=> {
        this.graphics.fillStyle(0x049c8d, 1); 
        this.graphics.fillRoundedRect(screenAncho/2.3, screenAlto/2.1, 115, 50, 10);
        canvas.style.cursor = 'pointer';
    });

    botonTortuga.on('pointerout', ()=> {
        this.graphics.fillStyle(0x000000, 1); 
        this.graphics.fillRoundedRect(screenAncho/2.3, screenAlto/2.1, 115, 50, 10);
        canvas.style.cursor = 'default';
    });

    botonTortuga.on('pointerdown', ()=> {
        console.log('cambio de pagina');
        window.location.href = "/Dificultad/dificultad.html";
    });

    

     
}

function update(){

}