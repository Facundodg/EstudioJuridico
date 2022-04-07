const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app,{

loop: true,
delay:75

});

typewriter
.typeString('La Provincia del Limon')
.pauseFor(400)
.start();
