document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("btnCambiarFondo");

    let colores = ["aqua", "lightcoral", "lightgreen", "lightyellow", "lightgray", "lavender", "salmon"];

    boton.addEventListener("click", function () {
    
        let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        
        document.body.style.backgroundColor = colorAleatorio;
    });
});
