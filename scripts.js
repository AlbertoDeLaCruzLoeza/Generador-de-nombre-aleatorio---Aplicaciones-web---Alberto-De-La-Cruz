document.addEventListener('DOMContentLoaded', function() {
    const generarBtn = document.getElementById('generar');
    const nombreGeneradoDiv = document.getElementById('nombreGenerado');
    
    generarBtn.addEventListener('click', function() {
        const nombres1 = ['Anacleta', 'Octavio', 'Ortencio', 'Antoñeta', 'Bonifasio', 'Laurencia'];
        const nombres2 = ['De Las Nieves', 'Bolaños', 'López', 'Rodríguez', 'Martínez', 'Hernández'];

        const nombreAleatorio1 = nombres1[Math.floor(Math.random() * nombres1.length)];
        const nombreAleatorio2 = nombres2[Math.floor(Math.random() * nombres2.length)];

        const nombreGenerado = `${nombreAleatorio1} ${nombreAleatorio2}`;
        nombreGeneradoDiv.textContent = nombreGenerado;
    });
});