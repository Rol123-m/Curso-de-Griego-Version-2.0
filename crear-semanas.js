// crear-semanas.js - Ejecutar con Node.js
const fs = require('fs');
const path = require('path');

// Datos de las semanas (los mismos que en data.js)
const semanas = [
    { title: "Alfabeto Griego", topic: "Introducción al alfabeto" },
    { title: "Sustantivos y Casos", topic: "Primera y segunda declinación" },
    // ... sigue con las 30 semanas
];

// Crear carpeta principal
if (!fs.existsSync('semanas')) {
    fs.mkdirSync('semanas');
}

// Crear cada semana
semanas.forEach((semana, index) => {
    const semanaNum = index + 1;
    const semanaPath = path.join('semanas', `semana${semanaNum}`);
    
    // Crear carpeta de la semana
    if (!fs.existsSync(semanaPath)) {
        fs.mkdirSync(semanaPath, { recursive: true });
        
        // Crear subcarpeta de recursos
        const recursosPath = path.join(semanaPath, 'recursos');
        fs.mkdirSync(recursosPath, { recursive: true });
        
        // Crear archivo JSON de contenido
        const contenido = {
            title: semana.title,
            description: `Contenido de la semana ${semanaNum}: ${semana.topic}`,
            topic: semana.topic,
            sections: [
                {
                    id: `leccion${semanaNum}_1`,
                    title: `Lección: ${semana.title}`,
                    icon: "fas fa-chalkboard-teacher",
                    type: "lesson",
                    content: `<h4>${semana.title}</h4><p>Esta es la lección principal de la semana ${semanaNum}.</p><p><strong>Tema:</strong> ${semana.topic}</p>`,
                    resources: []
                },
                {
                    id: `juego${semanaNum}`,
                    title: "Juego Interactivo",
                    icon: "fas fa-gamepad",
                    type: "game",
                    gameUrl: "juego.html",
                    description: "Juego educativo relacionado con el tema"
                },
                {
                    id: `examen${semanaNum}`,
                    title: `Examen Semanal ${semanaNum}`,
                    icon: "fas fa-clipboard-check",
                    type: "exam",
                    examUrl: "https://docs.google.com/forms",
                    description: "Evaluación de los conocimientos adquiridos"
                }
            ]
        };
        
        fs.writeFileSync(
            path.join(semanaPath, 'contenido.json'),
            JSON.stringify(contenido, null, 2)
        );
        
        // Crear juego básico HTML
        const juegoHTML = `<!DOCTYPE html>
<html>
<head><title>Juego Semana ${semanaNum}</title></head>
<body>
    <h1>Juego Educativo - ${semana.title}</h1>
    <p>Este es un juego interactivo para la semana ${semanaNum}.</p>
    <button onclick="completarJuego()">Completar Juego</button>
    <script>
        function completarJuego() {
            if (window.parent) {
                window.parent.postMessage('gameCompleted', '*');
                alert('¡Juego completado!');
            }
        }
    </script>
</body>
</html>`;
        
        fs.writeFileSync(
            path.join(semanaPath, 'juego.html'),
            juegoHTML
        );
        
        console.log(`✅ Semana ${semanaNum} creada: ${semana.title}`);
    }
});

console.log('🎉 Estructura de semanas creada exitosamente!');