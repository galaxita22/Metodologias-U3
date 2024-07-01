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

}

function create(){
    var screenAncho = window.innerWidth;
    var screenAlto = window.innerHeight;


    this.graphics = this.add.graphics();    
    const canvas = this.game.canvas;
    this.add.text(screenAncho/3, 100, "Seleccione una dificultad", {
        font: "bold 30px Arial",
        fill: "#000000"
    });

    //Dificultad
    //Facil
    this.add.text(screenAncho/3 +28, screenAlto/2.1+15, "Facil", {
        font: "bold 20px Arial",
        fill: "#ffffff"
    });

    this.graphics.fillStyle(0x000000);
    this.graphics.fillRoundedRect(screenAncho/3, screenAlto/2.1, 115, 50, 10);


    let facil = this.add.zone(screenAncho/3, screenAlto/2.1, 115, 50, 10).setOrigin(0,0).setInteractive();

    
    facil.on('pointerover', ()=> {
        this.graphics.fillStyle(0x049c8d, 1); 
        this.graphics.fillRoundedRect(screenAncho/3, screenAlto/2.1, 115, 50, 10);
        canvas.style.cursor = 'pointer';
    });

    facil.on('pointerout', ()=> {
        this.graphics.fillStyle(0x000000, 1); 
        this.graphics.fillRoundedRect(screenAncho/3, screenAlto/2.1, 115, 50, 10);
        canvas.style.cursor = 'default';
    });

    facil.on('pointerdown', ()=> {
        console.log('cambio de pagina');
        window.location.href = "/Principiante.html";
    });

    //Media
    this.add.text(screenAncho/2.3 +30, screenAlto/2.1+15, "Media", {
        font: "bold 20px Arial",
        fill: "#ffffff"
    });

    this.graphics.fillStyle(0x000000);
    this.graphics.fillRoundedRect(screenAncho/2.3, screenAlto/2.1, 115, 50, 10);


    let media = this.add.zone(screenAncho/2.3, screenAlto/2.1, 115, 50, 10).setOrigin(0,0).setInteractive();

    
    media.on('pointerover', ()=> {
        this.graphics.fillStyle(0x049c8d, 1); 
        this.graphics.fillRoundedRect(screenAncho/2.3, screenAlto/2.1, 115, 50, 10);
        canvas.style.cursor = 'pointer';
    });

    media.on('pointerout', ()=> {
        this.graphics.fillStyle(0x000000, 1); 
        this.graphics.fillRoundedRect(screenAncho/2.3, screenAlto/2.1, 115, 50, 10);
        canvas.style.cursor = 'default';
    });

    media.on('pointerdown', ()=> {
        console.log('cambio de pagina');
        window.location.href = "/intermedio.html";
    });

    //dificil
    this.add.text(screenAncho/1.88 +20, screenAlto/2.1+15, "avanzado", {
        font: "bold 20px Arial",
        fill: "#ffffff"
    });

    this.graphics.fillStyle(0x000000);
    this.graphics.fillRoundedRect(screenAncho/1.88, screenAlto/2.1, 115, 50, 10);


    let dificil = this.add.zone(screenAncho/1.88, screenAlto/2.1, 115, 50, 10).setOrigin(0,0).setInteractive();

    
    dificil.on('pointerover', ()=> {
        this.graphics.fillStyle(0x049c8d, 1); 
        this.graphics.fillRoundedRect(screenAncho/1.88, screenAlto/2.1, 115, 50, 10);
        canvas.style.cursor = 'pointer';
    });

    dificil.on('pointerout', ()=> {
        this.graphics.fillStyle(0x000000, 1); 
        this.graphics.fillRoundedRect(screenAncho/1.88, screenAlto/2.1, 115, 50, 10);
        canvas.style.cursor = 'default';
    });

    dificil.on('pointerdown', ()=> {
        console.log('cambio de pagina');
        window.location.href = "/avanzado.html";
    });

    

     
}

function update(){

}