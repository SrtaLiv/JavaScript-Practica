
/**
 * selects[0]: Selecciona el primer elemento del NodeList selects, que contiene todos los elementos <select> del documento.

.firstElementChild: Accede al primer elemento hijo del elemento seleccionado en el paso anterior. En otras palabras, selecciona el primer hijo del primer <select>.

.insertAdjacentHTML("afterend", option): Inserta el código HTML representado por la cadena option después del elemento seleccionado en el paso anterior.
 */

const clock = document.querySelector("h2"); 
let container = document.querySelector(".container");
let selects = document.querySelectorAll("select");
let btnAlarm = document.querySelector("button");

let imgReactions = document.getElementById("angry");
let msg = document.querySelector('text');

let getTime,
ringtone = new Audio('/media/alarm.mp3');

for (let i = 12; i >= 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selects[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 60; i >= 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selects[1].firstElementChild.insertAdjacentHTML("afterend", option);
}


for (let i = 2; i > 0; i--){
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selects[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

//SetInterval comienza despues de cierto tiempo y se va repitiendo, no termina.
//SetTimeOut comienza despues de x tiempo y termina.

setInterval(() =>{
    let datetime = new Date();
    hr = datetime.getHours();
    mn = datetime.getMinutes();
    sg = datetime.getSeconds();
    ampm = "AM";

    if (hr >= 12) {
        hr = hr - 12;
        ampm = "PM";
    }

    //Si la hora vale 0, cambiar su valor a 12
    hr = hr == 0 ? hr = 12 : hr;
    
    //Los convierte en 01.. 02.. 03..
    hr = hr < 10 ? "0" + hr : hr;
    mn = mn < 10 ? "0" + mn : mn;
    sg = sg < 10 ? "0" + sg : sg;

    clock.innerText = (`${hr}:${mn}:${sg} ${ampm}`);
    if(getTime === `${hr}:${mn} ${ampm}`) {
        ringtone.play();
    }
}, 1000);


function setAlarm(){
    let time = `${selects[0].value}:${selects[1].value} ${selects[2].value}`


    if (time.includes("hours") || time.includes("minutes") || time.includes("AM/PM") ){

        imgReactions.classList.add('showGif');
  
        return alert("Por favor, selecciona una hora valida!! -.-");
    }
    getTime = time;
}

btnAlarm.addEventListener("click", setAlarm);

/**
 * includes() El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.
 */