
let img = document.querySelector('.ahorcado');
let rayaContainer = document.querySelector('.rayas');
let pregunta = document.querySelector('b');
let btns = document.querySelectorAll('.btn');

let error = document.querySelector('.error');

const preguntas = [
    { pregunta: "¿Cuál es la capital de Francia?", respuesta: "Paris" },
    { pregunta: "¿Cuál es el río más largo del mundo?", respuesta: "Amazonas" },
    { pregunta: "¿Cuál es el peor champ?", respuesta: "Teemo" },
    { pregunta: "¿Cuál es el champ mas crack?", respuesta: "Bardo" },
];

const imagenes = [
    img.src = 'media/1.svg',
    img.src = 'media/2.svg',
    img.src = 'media/3.svg',
    img.src = 'media/4.svg',
    img.src = 'media/5.svg',
    img.src = 'media/6.svg',
]



let random = Math.floor(Math.random() * preguntas.length);
let pregRandom = preguntas[random];
let rtaRandom = pregRandom.respuesta.toUpperCase();
console.log(rtaRandom);

//Asignar disabled a los boyones
function botones() {
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.disabled = true;
            verificarLetra(btn.textContent.toUpperCase());
        });
    });
}


function generarPreguntas() {
    pregunta.innerHTML = pregRandom.pregunta;

    let letras = obtenerLetras(rtaRandom);

    for (let i = 0; i < rtaRandom.length; i++) {
        let rayaLi = document.createElement('li');
        rayaLi.textContent = "_";
        rayaContainer.append(rayaLi);

        //  rayaLi.textContent = letras[i];

    }


}

function obtenerLetras(rta) {
    var letras = [];
    for (var i = 0; i < rta.length; i++) {
        letras.push(rta[i]);
    }
    return letras;
}


botones();
generarPreguntas();

function verificarLetra(letra) {
    letra.toUpperCase;
    if (rtaRandom.includes(letra)) {
        console.log("Esta la letra!")
    }

    if (!rtaRandom.includes(letra)) {
        error.textContent++;
        console.log(error.textContent);
        console.log("NO Esta la letra!")
        img.src = imagenes[error.textContent];

        //Si perdio..
        if (error.textContent > 6) {
            alert("perdite!");
        }
    }

}

