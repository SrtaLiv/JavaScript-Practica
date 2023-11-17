let img = document.querySelector('.ahorcado');
let rayaContainer = document.querySelector('.rayas');
let pregunta = document.querySelector('b');
let btns = document.querySelectorAll('.btn');

function botones(){
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.disabled = true;
        });
    });
}


const preguntas = [
    { pregunta: "¿Cuál es la capital de Francia?", respuesta: "París" },
    { pregunta: "¿Cuál es el río más largo del mundo?", respuesta: "Amazonas" },
    { pregunta: "¿Cuál es el peor champ?", respuesta: "Teemo" },
    { pregunta: "¿Cuál es el champ mas crack?", respuesta: "Bardo" },
];

function generarPreguntas(){
    let random = Math.floor(Math.random() * preguntas.length);

    let pregRandom = preguntas[random];
    let rtaRandom = pregRandom.respuesta;

    pregunta.innerHTML = pregRandom.pregunta;
    
    let letras = obtenerLetras(rtaRandom);
    for (let i = 0; i < rtaRandom.length ; i++) {
        let rayaLi = document.createElement('li');
        
        rayaLi.textContent = letras[i];
        rayaContainer.append(rayaLi);
    }
}

function obtenerLetras(rta){
    var letras = [];
    for (var i = 0; i < rta.length; i++){
        letras.push(rta[i]);
    }
    return letras;
}


img.src = 'media/1.svg';
img.src = 'media/2.svg';
img.src = 'media/3.svg';
img.src = 'media/4.svg';
img.src = 'media/5.svg';
img.src = 'media/6.svg';

botones();
generarPreguntas();