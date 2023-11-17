const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
})

//Hora

// function update() {
//     // Obtener todos los elementos con la clase 'datetime'
//     let datetimeElements = document.querySelectorAll('.datetime');

// }

// // 15:48:46.086685-
// setInterval(update, 1000);

