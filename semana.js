// semana.js - Actualizado con exámenes por grupo (VERSIÓN COMPLETA Y MEJORADA)

class SemanaManager {
    constructor() {
        this.semanaActual = this.obtenerNumeroSemana();
        this.usuario = JSON.parse(localStorage.getItem('usuarioActual') || '{}');
        this.contenidoSemanas = this.obtenerContenidoSemanas();
        this.config = window.CONFIG || null; // Obtener CONFIG del objeto global
        this.inicializar();
    }

    obtenerNumeroSemana() {
        const params = new URLSearchParams(window.location.search);
        return parseInt(params.get('semana')) || 1;
    }

    // MÉTODO MEJORADO: Obtener el enlace del examen según el grupo del estudiante
    obtenerEnlaceExamenPorGrupo() {
        // 1. Si es profesor, no mostrar examen
        if (this.usuario.esProfesor) {
            return {
                url: '#',
                texto: 'Vista de profesor (sin examen)',
                tipo: 'profesor',
                existe: false
            };
        }

        // 2. Obtener datos del estudiante y la semana
        const grupo = this.usuario.grupo; // Ej: "ALFA", "BETA", "GAMMA"
        const semana = this.semanaActual;

        console.log('🔍 Buscando examen para:', { grupo, semana, usuario: this.usuario.id });
        
        // 3. Verificar si la configuración global y el grupo existen
        if (this.config && 
            this.config.EXAMENES_POR_GRUPO && 
            this.config.EXAMENES_POR_GRUPO[grupo]) {

            const urlExamen = this.config.EXAMENES_POR_GRUPO[grupo][semana];
            const nombreGrupo = this.config.GRUPOS[grupo]?.nombre || grupo;

            // 4. Si existe un enlace para esta semana específica
            if (urlExamen) {
                console.log(`✅ Examen específico encontrado para ${grupo} semana ${semana}:`, urlExamen);
                return {
                    url: urlExamen,
                    texto: `Examen Semana ${semana} - ${nombreGrupo}`,
                    tipo: 'especifico',
                    existe: true
                };
            } else {
                console.log(`⚠️ No hay examen definido para ${grupo} semana ${semana}`);
                return {
                    url: '#',
                    texto: `Examen no disponible para ${nombreGrupo}`,
                    tipo: 'no-disponible',
                    existe: false
                };
            }
        }

        // 5. Fallback: Si no hay configuración o grupo, mostrar mensaje genérico
        console.log('⚠️ Configuración de exámenes por grupo no encontrada. Usando fallback.');
        return {
            url: '#',
            texto: 'Examen no configurado',
            tipo: 'error',
            existe: false
        };
    }

    obtenerContenidoSemanas() {
        return {
            // SEMANA 1 - Alfabeto Griego
            1: {
                titulo: "Alfabeto Griego",
                tema: "Introducción al alfabeto, pronunciación y escritura",
                recursos: [
                    { tipo: 'video', titulo: 'Canción del alfabeto (Video)', url: 'https://drive.google.com/file/d/1lR8TBKFytimWZ4bl5PdICqnfIHYGX6qt/view?usp=sharing', icono: '▶️' },
                    { tipo: 'pdf', titulo: 'PDF Contenido de la semana 1', url: 'https://drive.google.com/file/d/1Ty84WkqECgJ8emq8LVGZE5y2pXCL5E6-/preview', icono: '📄' },
                    { tipo: 'html', titulo: 'Alfabeto griego completo', url: 'semanas/semana1/alfabeto.html', icono: '🔤' },
                    { tipo: 'html', titulo: 'Otras reglas de pronunciación', url: 'semanas/semana1/diptongos.html', icono: '🔤' },
                    { tipo: 'html', titulo: 'Guía de acentos griegos', url: 'semanas/semana1/acentos.html', icono: '´' },
                    { tipo: 'html', titulo: 'División de sílabas', url: 'semanas/semana1/silabas.html', icono: '✂️' },
                    { tipo: 'html', titulo: 'Vocabulario básico', url: 'semanas/semana1/vocabulario1.html', icono: '📖' }
                ],
                juegos: [
                    { titulo: 'Juego de cartas del vocabulario1', url: 'semanas/semana1/Juegos/cartas solo en la computadora.html', icono: '🃏', nota: 'Disponible solo en computadora' },
                    { titulo: 'Juego de palabras griegas', url: 'semanas/semana1/Juegos/juego de palabras, solo en la computadora.html', icono: '🔠', nota: 'Disponible solo en computadora' },
                    { titulo: 'Simulador de escritura 2.0', url: 'semanas/semana1/Juegos/simulador.html', icono: '🎲', nota: 'Disponible solo en computadora' }
                ]
            },
            
            // SEMANA 2 - Sustantivos y Casos Gramaticales
            2: {
                titulo: "Sustantivos y Casos Gramaticales",
                tema: "Primera y segunda declinación",
                recursos: [
                    { tipo: 'pdf', titulo: 'PDF Contenido de la semana 2', url: 'https://drive.google.com/file/d/1G7s2yZnMTxURIBQxhRD-bvdHxDdSUz_H/view?usp=sharing', icono: '📄' },
                    { tipo: 'html', titulo: 'Introducción a los sustantivos', url: 'semanas/semana2/HTML/1. Introducción a  sustantivos.html', icono: '📖' },
                    { tipo: 'html', titulo: 'Casos gramaticales', url: 'semanas/semana2/HTML/3. casos gramaticales.html', icono: '🔠' },
                    { tipo: 'html', titulo: 'Introducción a las declinaciones', url: 'semanas/semana2/HTML/4. Introducción a las declinaciones.html', icono: '🔄' },
                    { tipo: 'html', titulo: 'Curiosidad Exegética', url: 'semanas/semana2/HTML/2. curiosidad exegética.html', icono: '🔄' },
                    { tipo: 'html', titulo: 'Repaso de Nominativo y Acusativo', url: 'semanas/semana2/HTML/5. Repaso de Nominativo y acusativo.html', icono: '📝' },
                    { tipo: 'html', titulo: 'Resumen de la semana 2', url: 'semanas/semana2/HTML/6. Resumen de la semana 2.html', icono: '📑' },
                    { tipo: 'html', titulo: 'Vocabulario semana 2', url: 'semanas/semana2/HTML/7. Vocabulario semana 2.html', icono: '📖' }
                ],
                juegos: [
                    { titulo: 'Empareja las palabras', url: 'semanas/semana2/Juegos/Empareja las palabras.html', icono: '🔄', nota: 'Arrastra la palabra griega hasta su traducción' },
                    { titulo: 'Juego de palabras', url: 'semanas/semana2/Juegos/Juego de palabras.html', icono: '❓', nota: 'Selecciona la respuesta correcta' },
                    { titulo: 'Contra reloj (recomendado)', url: 'semanas/semana2/Juegos/contrareloj.html', icono: '⏱️', nota: 'Responde correctamente antes de que se acabe el tiempo' },
                    { titulo: 'Rompecabezas de terminaciones', url: 'semanas/semana2/Juegos/rompecabezas 2.0.html', icono: '🧩', nota: 'Combina las terminaciones con los casos correctos' }
                ]
            },
            
            // SEMANA 3 - Artículo Definido y Traducción
            3: {
                titulo: "Artículo Definido y Traducción",
                tema: "Uso del artículo y primeras traducciones",
                recursos: [
                    { tipo: 'pdf', titulo: 'PDF Contenido de la semana 3', url: 'https://drive.google.com/file/d/1ITz2D3-wgePstGiEiDz12ZF_adq_vZOl/view?usp=sharing', icono: '📄' },
                    { tipo: 'html', titulo: 'Artículo Definido', url: 'semanas/semana3/HTML/1. Artículo Definido.html', icono: '🔤' },
                    { tipo: 'html', titulo: 'Artículo Definido, continuación', url: 'semanas/semana3/HTML/2. Aticulo Definido, continuación.html', icono: '📖' },
                    { tipo: 'html', titulo: 'Más sobre sustantivos', url: 'semanas/semana3/HTML/3. Mas sobre sustantivos.html', icono: '✏️' },
                    { tipo: 'html', titulo: 'Práctica de Traducción', url: 'semanas/semana3/HTML/4. Traducción.html', icono: '🌍' },
                    { tipo: 'html', titulo: 'Información Avanzada (Opcional)', url: 'semanas/semana3/HTML/5. Información avanzada.html', icono: '🌍' },
                    { tipo: 'html', titulo: 'Vocabulario semana 3', url: 'semanas/semana3/HTML/6. vocabulario3.html', icono: '📖' }
                ],
                juegos: [
                    { titulo: 'Empareja las palabras', url: 'semanas/semana3/Juegos/3. Empareja las palabras.html', icono: '🔄', nota: 'Arrastra la palabra griega hasta su traducción' },
                    { titulo: 'Juego de palabras', url: 'semanas/semana3/Juegos/4.juego de palabras, solo en la computadora.html', icono: '❓', nota: 'Selecciona la respuesta correcta' },
                    { titulo: 'Completa el artículo (recomendado)', url: 'semanas/semana3/Juegos/1. Completa el articulo.html', icono: '🖊️', nota: 'Selecciona entre las opciones para llenar los espacios' },
                    { titulo: 'Lectura de Juan 1', url: 'semanas/semana3/juan 1/JN1.html', icono: '🌍', nota: 'Practica traduciendo frases simples' },
                    { titulo: 'Contrarreloj', url: 'semanas/semana3/Juegos/contrareloj.html', icono: '⏱️', nota: 'Responde antes de que se acabe el tiempo' }
                ]
            },
            
            // SEMANA 4 - Preposiciones y Verbo Eimi
            4: {
                titulo: "Preposiciones y Eimi",
                tema: "Preposiciones básicas y el verbo 'ser'",
                recursos: [
                    { tipo: 'pdf', titulo: 'PDF Contenido de la semana 4', url: 'https://drive.google.com/file/d/1EKnBMo4vbzAcsUWUXeUotp6ca7hcz0sP/view?usp=sharing', icono: '📄' },
                    { tipo: 'html', titulo: 'Introducción a preposiciones', url: 'semanas/semana4/HTML/1. Introducción a Preposiciones .html', icono: '1️⃣' },
                    { tipo: 'html', titulo: 'Más sobre preposiciones', url: 'semanas/semana4/HTML/2. Más sobre preposiciones .html', icono: '2️⃣' },
                    { tipo: 'html', titulo: 'Frase preposicional', url: 'semanas/semana4/HTML/3. Frase preposicional.html', icono: '3️⃣' },
                    { tipo: 'html', titulo: 'Ejemplos y cláusulas', url: 'semanas/semana4/HTML/4. Ejemplos y cláusulas .html', icono: '4️⃣' },
                    { tipo: 'html', titulo: 'Verbo εἶμι', url: 'semanas/semana4/HTML/5. verbo eimi.html', icono: '5️⃣' },
                    { tipo: 'html', titulo: 'Nominativo Predicativo', url: 'semanas/semana4/HTML/6. Nominativo Predicativo .html', icono: '6️⃣' },
                    { tipo: 'html', titulo: 'Resumen final', url: 'semanas/semana4/HTML/7. resumen final.html', icono: '7️⃣' },
                    { tipo: 'html', titulo: 'Tabla de preposiciones completas', url: 'semanas/semana4/HTML/tabla de preposiciones.html', icono: '8️⃣' },
                    { tipo: 'html', titulo: 'Vocabulario solo de preposiciones', url: 'semanas/semana4/HTML/preposiciones completas.html', icono: '9️⃣' },
                    { tipo: 'html', titulo: 'Vocabulario semana 4', url: 'semanas/semana4/HTML/9. Vocabulario semana 4.html', icono: '📖' },
                    { tipo: 'html', titulo: 'Información Avanzada. Usos sintácticos.', url: 'https://drive.google.com/file/d/1gmOBvQEmOqJETLT7TDB6OMM-oxoQP5nR/view?usp=sharing', icono: '📖' }
                ],
                juegos: [
                    { titulo: 'Empareja las palabras', url: 'semanas/semana4/Juegos/3. Empareja las palabras.html', icono: '🔄', nota: 'Disponible solo en computadora - Arrastra la palabra griega a su traducción' },
                    { titulo: 'Juego de palabras', url: 'semanas/semana4/Juegos/4.juego de palabras, solo en la computadora.html', icono: '🔠', nota: 'Disponible solo en computadora - Selecciona la respuesta correcta' },
                    { titulo: 'Practica las preposiciones', url: 'semanas/semana4/Juegos/juego.html', icono: '⭐', nota: 'Recomendado - Llena los espacios en blanco' },
                    { titulo: 'Verbo εἶμι', url: 'semanas/semana4/Juegos/eimi.html', icono: '5️⃣', nota: 'Disponible solo en computadora' },
                    { titulo: 'Ejercicio de traducción', url: 'semanas/semana4/Juegos/traducción .html', icono: '✍️', nota: 'Traduce el prólogo de Juan' },
                    { titulo: 'Lectura de Juan 2', url: 'semanas/semana4/juan 2/JN2.html', icono: '🌍', nota: 'Practica traduciendo frases simples' }
                ]
            },
            
            // SEMANA 5 - Adjetivos
            5: {
                titulo: "Adjetivos",
                tema: "Concordancia y grados del adjetivo",
                recursos: [
                    { tipo: 'pdf', titulo: 'PDF Contenido de la semana 5', url: 'https://drive.google.com/file/d/1YwZ6aYQwslg4QAsrwXj70g4xbKIKPoxf/view?usp=sharing', icono: '📄' },
                    { tipo: 'html', titulo: 'Introducción a Adjetivos', url: 'semanas/semana 5/HTML/1. Introducción a adjetivos.html', icono: '1️⃣' },
                    { tipo: 'html', titulo: 'Forma de los adjetivos', url: 'semanas/semana 5/HTML/2. Ajetivos 2.html', icono: '2️⃣' },
                    { tipo: 'html', titulo: 'Funciones de los adjetivos', url: 'semanas/semana 5/HTML/3. Funciones de los adjetivos .html', icono: '3️⃣' },
                    { tipo: 'html', titulo: 'Frases preposicionales', url: 'semanas/semana 5/HTML/4. otros detalles adj.html', icono: '4️⃣' },
                    { tipo: 'html', titulo: 'Otros asuntos', url: 'semanas/semana 5/HTML/5. Otras ideas.html', icono: '5️⃣' },
                    { tipo: 'html', titulo: 'Vocabulario semana 5', url: 'semanas/semana 5/HTML/6. vocabulario5.html', icono: '📖' }
                ],
                juegos: [
                    { titulo: 'Empareja las palabras', url: 'semanas/semana 5/Juegos/3. Empareja las palabras.html', icono: '🔄', nota: 'Disponible solo en computadora - Arrastra la palabra griega a su traducción' },
                    { titulo: 'Juego de palabras', url: 'semanas/semana 5/Juegos/4.juego de palabras, solo en la computadora.html', icono: '🔠', nota: 'Disponible solo en computadora - Selecciona la respuesta correcta' },
                    { titulo: 'Tablero', url: 'semanas/semana 5/Juegos/tablero.html', icono: '⭐', nota: 'Disponible solo en computadora - Practica el conocimiento' },
                    { titulo: 'Ejercicio de traducción', url: 'semanas/semana 5/Juegos/traducción .html', icono: '✍️', nota: 'Traduce el prólogo de Juan' },
                    { titulo: 'Lectura de Juan 3', url: 'semanas/semana 5/juan 3/JN3.html', icono: '🌍', nota: 'Practica traduciendo frases simples' }
                ]
            },
            
            // SEMANA 6 - Tercera Declinación
            6: {
                titulo: "Tercera Declinación",
                tema: "Sustantivos de la tercera declinación",
                recursos: [
                    { tipo: 'pdf', titulo: 'PDF Contenido de la semana 6', url: 'https://drive.google.com/file/d/1o_adyh9XWYhzSgGN1NaRMx5hQtvi9vZy/view?usp=sharing', icono: '📄' },
                    { tipo: 'html', titulo: 'Introducción a la tercera declinación', url: 'semanas/semana 6/HTML/1. Introducción a la tercera declinación.html', icono: '1️⃣' },
                    { tipo: 'html', titulo: 'Paradigma de la tercera declinación', url: 'semanas/semana 6/HTML/2. paradigma de la tercera declinación.html', icono: '2️⃣' },
                    { tipo: 'html', titulo: 'Clasificaciones de los sustantivos de tercera declinación', url: 'semanas/semana 6/HTML/3. Clasificaciones en la tercera declinación.html', icono: '3️⃣' },
                    { tipo: 'html', titulo: 'Paradigma, Muy importante', url: 'semanas/semana 6/HTML/4. tabla maestra de la tercera declinación.html', icono: '4️⃣' },
                    { tipo: 'html', titulo: 'Otros asuntos', url: 'semanas/semana 6/HTML/5. otos temas.html', icono: '5️⃣' },
                    { tipo: 'html', titulo: 'Resumen de la semana 6', url: 'semanas/semana 6/HTML/6.resumen.html', icono: '📖' },
                    { tipo: 'html', titulo: 'Vocabulario semana 6', url: 'semanas/semana 6/HTML/7. vocabulario6.html', icono: '📖' }
                ],
                juegos: [
                    { titulo: 'Empareja las palabras', url: 'semanas/semana 6/Juegos/3. Empareja las palabras.html', icono: '🔄', nota: 'Disponible solo en computadora - Arrastra la palabra griega a su traducción' },
                    { titulo: 'Juego de palabras', url: 'semanas/semana 6/Juegos/4.juego de palabras, solo en la computadora.html', icono: '🔠', nota: 'Disponible solo en computadora - Selecciona la respuesta correcta' },
                    { titulo: 'LLuvia de terminaciones', url: 'semanas/semana 6/Juegos/lluvia de terminaciones.html', icono: '⭐', nota: 'Disponible solo en computadora - Practica el conocimiento' },
                    { titulo: 'Ejercicio de traducción', url: 'semanas/semana 6/Juegos/traducción .html', icono: '✍️', nota: 'Traduce el prólogo de Juan' },
                    { titulo: 'Lectura de Juan 4', url: 'semanas/semana 6/juan 4/JN4.html', icono: '🌍', nota: 'Practica traduciendo frases simples' }
                ]
            },
            
            // SEMANA 7 - Pronombres Personales
            7: {
                titulo: "Pronombres Personales",
                tema: "Pronombres de primera y segunda persona",
                recursos: [
                    { tipo: 'pdf', titulo: 'PDF Contenido de la semana 7', url: 'https://drive.google.com/file/d/1E2Ttu4E1ZkcN25gQ_H8T1rDC2j9NolaL/view?usp=sharing', icono: '📄' },
                    { tipo: 'html', titulo: 'Introducción a los pronombres personales', url: 'semanas/semana 7/HTML/1. Introducción a los pronombres.html', icono: '1️⃣' },
                    { tipo: 'html', titulo: 'Pronombres en Griego Koiné', url: 'semanas/semana 7/HTML/2. pronombres en griego.html', icono: '2️⃣' },
                    { tipo: 'html', titulo: 'Traduciendo los pronombres', url: 'semanas/semana 7/HTML/3. Proceso de traducción.html', icono: '3️⃣' },
                    { tipo: 'html', titulo: 'Más sobre la tercera declinación', url: 'semanas/semana 7/HTML/4. Más sobre tercera declinación.html', icono: '4️⃣' },
                    { tipo: 'html', titulo: 'Otros patrones de la tercera declinación', url: 'semanas/semana 7/HTML/5. Otros patrones.html', icono: '5️⃣' },
                    { tipo: 'html', titulo: 'Reglas de los sustantivos', url: 'semanas/semana 7/HTML/6. Las reglas de los sustantivos.html', icono: '📖' },
                    { tipo: 'html', titulo: 'Vocabulario semana 7', url: 'semanas/semana 7/HTML/7. vocabulario7.html', icono: '📖' }
                ],
                juegos: [
                    { titulo: 'Empareja las palabras', url: 'semanas/semana 7/Juegos/3. Empareja las palabras.html', icono: '🔄', nota: 'Disponible solo en computadora - Arrastra la palabra griega a su traducción' },
                    { titulo: 'Juego de palabras', url: 'semanas/semana 7/Juegos/4.juego de palabras, solo en la computadora.html', icono: '🔠', nota: 'Disponible solo en computadora - Selecciona la respuesta correcta' },
                    { titulo: 'Aprende los pronombres', url: 'semanas/semana 7/Juegos/Pronombres.html', icono: '⭐', nota: 'Disponible solo en computadora - Practica el conocimiento' },
                    { titulo: 'Ejercicio de traducción', url: 'semanas/semana 7/Juegos/traducción .html', icono: '✍️', nota: 'Traduce el prólogo de Juan' },
                    { titulo: 'Lectura de Juan 5', url: 'semanas/semana 7/juan 5/JN5.html', icono: '🌍', nota: 'Practica traduciendo frases simples' }
                ]
            },
            
            // SEMANA 8 - Pronombres Personales de Tercera
            8: {
                titulo: "Pronombres personales de tercera",
                tema: "Pronombres demostrativos y relativos",
                recursos: [
                    { tipo: 'pdf', titulo: 'PDF Contenido de la semana 8', url: 'https://drive.google.com/file/d/1ZbuuI2rMXgI-TxKRXFKsTuFnCedkmwcl/view?usp=sharing', icono: '📄' },
                    { tipo: 'html', titulo: 'Introducción a los pronombres personales de tercera persona', url: 'semanas/Semana 8/HTML/1. Introducción al pronombre de tercera persona.html', icono: '1️⃣' },
                    { tipo: 'html', titulo: 'Forma de los pronombres', url: 'semanas/Semana 8/HTML/2.Forma del pronombre de tercera persona.html', icono: '2️⃣' },
                    { tipo: 'html', titulo: 'Funciones de los pronombres', url: 'semanas/Semana 8/HTML/3. Funciones del pronombre.html', icono: '3️⃣' },
                    { tipo: 'html', titulo: 'Resumen de la semana', url: 'semanas/Semana 8/HTML/resumen.html', icono: '4️⃣' },
                    { tipo: 'html', titulo: 'Vocabulario semana 8', url: 'semanas/Semana 8/HTML/4. vocabulario8.html', icono: '📖' }
                ],
                juegos: [
                    { titulo: 'Empareja las palabras', url: 'semanas/Semana 8/Juegos/3. Empareja las palabras.html', icono: '🔄', nota: 'Disponible solo en computadora - Arrastra la palabra griega a su traducción' },
                    { titulo: 'Juego de palabras', url: 'semanas/Semana 8/Juegos/4.juego de palabras, solo en la computadora.html', icono: '🔠', nota: 'Disponible solo en computadora - Selecciona la respuesta correcta' },
                    { titulo: 'Aprende los pronombres', url: 'semanas/Semana 8/Juegos/Pronombres.html', icono: '⭐', nota: 'Disponible solo en computadora - Practica el conocimiento' },
                    { titulo: 'Ejercicio de traducción', url: 'semanas/Semana 8/Juegos/traducción .html', icono: '✍️', nota: 'Traduce el prólogo de Juan' },
                    { titulo: 'Lectura de Juan 6', url: 'semanas/Semana 8/juan 6/JN6.html', icono: '🌍', nota: 'Practica traduciendo frases simples' }
                ]
            },
            
            // SEMANA 9 - Pronombres Demostrativos
            9: {
                titulo: "Pronombres Demostrativos",
                tema: "οὗτος, ἐκεῖνος, αὐτός",
                recursos: [
                    { tipo: 'pdf', titulo: 'PDF Contenido de la semana 9', url: 'contenido_privado.html', icono: '📄' },
                    { tipo: 'html', titulo: 'Introducción a los pronombres demostrativos', url: 'semanas/semana 9/HTML/1. Pronombres demostrativos en español.html', icono: '1️⃣' },
                    { tipo: 'html', titulo: 'Pronombres demostrativos en griego Koiné', url: 'semanas/semana 9/HTML/2. Pronombres demostrativos griegos.html', icono: '2️⃣' },
                    { tipo: 'html', titulo: 'Más sobre los pronombre demostrativos', url: 'semanas/semana 9/HTML/3. Más sobre pronombres demostrativos.html', icono: '3️⃣' },
                    { tipo: 'html', titulo: 'El caso Vocativo', url: 'semanas/semana 9/HTML/4. Vocativo.html', icono: '4️⃣' },
                    { tipo: 'html', titulo: 'Resumen', url: 'semanas/semana 9/HTML/5. Grados del adjetivo y resumen.html', icono: '5️⃣' },
                    { tipo: 'html', titulo: 'Pronombres relativos en español', url: 'semanas/semana 9/HTML/6. Pronombres relativos en español.html', icono: '5️⃣' },
                    { tipo: 'html', titulo: 'Pronombres relativos en griego', url: 'semanas/semana 9/HTML/7. pronombres relativos en griego.html', icono: '5️⃣' },
                    { tipo: 'html', titulo: 'Resumen de pronombres relativos', url: 'semanas/semana 9/HTML/8. final sobre pronombres relativos.html', icono: '5️⃣' },
                    { tipo: 'html', titulo: 'Vocabulario semana 9', url: 'semanas/semana 9/HTML/9. Vocabulario9.html', icono: '📖' }
                ],
                juegos: [
                    { titulo: 'Empareja las palabras', url: 'semanas/semana 9/Juegos/3. Empareja las palabras.html', icono: '🔄', nota: 'Disponible solo en computadora - Arrastra la palabra griega a su traducción' },
                    { titulo: 'Juego de palabras', url: 'semanas/semana 9/Juegos/4.juego de palabras, solo en la computadora.html', icono: '🔠', nota: 'Disponible solo en computadora - Selecciona la respuesta correcta' },
                    { titulo: 'Aprende los pronombres', url: 'semanas/semana 9/Juegos/Pronombres.html', icono: '⭐', nota: 'Disponible solo en computadora - Practica el conocimiento' },
                    { titulo: 'Ejercicio de traducción', url: 'semanas/semana 9/Juegos/traducción .html', icono: '✍️', nota: 'Traduce el prólogo de Juan' },
                    { titulo: 'Lectura de 1Juan 1.1-9', url: 'semanas/semana 9/Juegos/lectura de juan.html', icono: '✍️', nota: 'Lee el NT Griego' }
                ]
            },
            
            // SEMANA 10 - Introducción al Verbo
            10: {
                titulo: "Introducción a los verbos, Presente Activo Indicativo",
                tema: "Presente Activo Indicativo",
                recursos: [
                    { tipo: 'pdf', titulo: 'PDF Contenido de la semana 9', url: 'contenido_privado.html', icono: '📄' },
                    { tipo: 'html', titulo: 'Introducción al verbo español', url: 'semanas/semana 10/HTML/1. Introducción al verbo desde el español.html', icono: '1️⃣' },
                    { tipo: 'html', titulo: 'Introducción a los verbos griegos', url: 'semanas/semana 10/HTML/2. Verbos en griego,breve resumen.html', icono: '2️⃣' },
                    { tipo: 'html', titulo: 'Componentes básicos del verbo griego', url: 'semanas/semana 10/HTML/3. Componentes básicos del verbo griego.html', icono: '3️⃣' },
                    { tipo: 'html', titulo: 'Presente Activo Indicativo', url: 'semanas/semana 10/HTML/4. Presente Activo Indicativo.html', icono: '4️⃣' },
                    { tipo: 'html', titulo: 'Más sobre los verbos', url: 'semanas/semana 10/HTML/5.Más sobre verbos.html', icono: '5️⃣' },
                    { tipo: 'html', titulo: 'Verbos y pronombres personales. Tabla maestra', url: 'semanas/semana 10/HTML/6. verbos y pronombres personales.html', icono: '5️⃣' },
                    { tipo: 'html', titulo: 'Vocabulario semana 10', url: 'semanas/semana 10/HTML/7. Vocabulario10.html', icono: '📖' }
                ],
                juegos: [
                    { titulo: 'Empareja las palabras', url: 'semanas/semana 10/Juegos/3. Empareja las palabras.html', icono: '🔄', nota: 'Arrastra la palabra griega a su traducción' },
                    { titulo: 'Juego de palabras', url: 'semanas/semana 10/Juegos/4.juego de palabras, solo en la computadora.html', icono: '🔠', nota: 'Selecciona la respuesta correcta' },
                    { titulo: 'Aprende el paradigma del verbo griego', url: 'semanas/semana 10/Juegos/Presente Activo Indicativo.html', icono: '⭐', nota: 'Practica el conocimiento' },
                    { titulo: 'Aprende el paradigma del verbo griego', url: 'semanas/semana 10/Juegos/juego.html', icono: '⭐', nota: 'Practica el conocimiento' }
                ]
            },
            
            // Resto de semanas (11-30) con contenido básico
         11: {
    titulo: "Verbos Contractos, Voz Pasiva y Voz Media",
    tema: "Presente Activo Indicativo - Verbos Contractos y Voces",
    recursos: [
        { tipo: 'html', titulo: 'Introducción a los contractos', url: 'semanas/semana 11/HTML/1. introducción a los contractos.html', icono: '1️⃣' },
        { tipo: 'html', titulo: 'Reglas de contracción', url: 'semanas/semana 11/HTML/2.reglas de contracción.html', icono: '2️⃣' },
        { tipo: 'html', titulo: 'Paradigma de los contractos y resumen', url: 'semanas/semana 11/HTML/3. paradigma de los contractos y resumen.html', icono: '3️⃣' },
        { tipo: 'html', titulo: 'Verbos pasivos', url: 'semanas/semana 11/HTML/4. verbos pasivos.html', icono: '4️⃣' },
        { tipo: 'html', titulo: 'Voz media', url: 'semanas/semana 11/HTML/5.voz media.html', icono: '5️⃣' },
        { tipo: 'html', titulo: 'Vocabulario semana 11', url: 'semanas/semana 11/HTML/6. Vocabulario11.html', icono: '📖' },
        { tipo: 'examen', titulo: 'Examen Semana 11', url: '', icono: '📝' }
    ],
    juegos: [
        { titulo: 'Empareja las palabras', url: 'semanas/semana 11/Juegos/3. Empareja las palabras.html', icono: '🔄', nota: 'Arrastra la palabra griega a su traducción' },
        { titulo: 'Juego de palabras', url: 'semanas/semana 11/Juegos/4.juego de palabras, solo en la computadora.html', icono: '🔠', nota: 'Selecciona la respuesta correcta' },
        { titulo: 'Lectura de Juan', url: 'semanas/semana 11/Juegos/lectura de juan.html', icono: '📖', nota: 'Practica lectura del Evangelio de Juan' },
        { titulo: 'Presente Activo Indicativo', url: 'semanas/semana 11/Juegos/Presente Activo Indicativo.html', icono: '⭐', nota: 'Practica el paradigma del verbo griego' }
    ]
},
         12: {
    titulo: "El Futuro",
    tema: "Futuro Activo y Medio Indicativo",
    recursos: [
        { tipo: 'html', titulo: 'Introducción al Futuro', url: 'semanas/semana12/html/1. introducción al futuro.html', icono: '1️⃣' },
        { tipo: 'html', titulo: 'Raíz verbal', url: 'semanas/semana12/html/2. Raíz verbal..html', icono: '2️⃣' },
        { tipo: 'html', titulo: 'Más sobre futuro', url: 'semanas/semana12/html/3. más sobre futuro. .html', icono: '3️⃣' },
        { tipo: 'html', titulo: 'Futuro medio indicativo', url: 'semanas/semana12/html/4. futuro medio indicativo.html', icono: '4️⃣' },
        { tipo: 'html', titulo: 'Futuro de eimi', url: 'semanas/semana12/html/5. Futuro de eimi.html', icono: '5️⃣' },
        { tipo: 'html', titulo: 'Raíces', url: 'semanas/semana12/html/6. raíces .html', icono: '6️⃣' },
        { tipo: 'html', titulo: 'Más patrones', url: 'semanas/semana12/html/7. Más patrones.html', icono: '7️⃣' },
        { tipo: 'html', titulo: 'Futuro líquido', url: 'semanas/semana12/html/8. futuro liquido.html', icono: '8️⃣' },
        { tipo: 'html', titulo: 'Futuro medio indicativo', url: 'semanas/semana12/html/9. Futuro medio indicativo .html', icono: '9️⃣' },
        { tipo: 'html', titulo: 'Vocabulario semana 12', url: 'semanas/semana12/html/10. Vocabulario12.html', icono: '📖' }
         
    ],
    juegos: [
        { titulo: 'Empareja las palabras', url: 'semanas/semana12/html/3. Empareja las palabras.html', icono: '🔄', nota: 'Arrastra la palabra griega a su traducción' },
        { titulo: 'Juego de palabras', url: 'semanas/semana12/html/4.juego de palabras, solo en la computadora.html', icono: '🔠', nota: 'Selecciona la respuesta correcta' },
        { titulo: 'Juego 1', url: 'semanas/semana12/html/juego1.html', icono: '🎮', nota: 'Practica el futuro griego' },
        { titulo: 'Juego 2', url: 'semanas/semana12/html/juego2.html', icono: '🎯', nota: 'Refuerza el futuro medio' }
    ]
},
            13: { 
                titulo: "Imperfecto Indicativo", 
                tema: "Tiempo pasado continuo", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 13', url: 'recursos_semana13.html', icono: '📚' }
                ] 
            },
            14: { 
                titulo: "Segundo Aoristo", 
                tema: "Aoristo con aumento", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 14', url: 'recursos_semana14.html', icono: '📚' }
                ] 
            },
            15: { 
                titulo: "Consolidación I", 
                tema: "Repaso general", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 15', url: 'recursos_semana_consolidación.html', icono: '📚' }
                ] 
            },
            16: { 
                titulo: "Primer Aoristo", 
                tema: "Aoristo sigma", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 16', url: 'recursos_semana17.html', icono: '📚' }
                ] 
            },
            17: { 
                titulo: "Aoristo/Futuro Pasivo", 
                tema: "Formas pasivas de aoristo y futuro", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 17', url: 'recursos_semana18.html', icono: '📚' }
                ] 
            },
            18: { 
                titulo: "Perfecto", 
                tema: "Tiempo perfecto activo", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 18', url: 'recursos_semana19.html', icono: '📚' }
                ] 
            },
            19: { 
                titulo: "Introducción a Participios", 
                tema: "Participios presentes", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 19', url: 'recursos_semana20.html', icono: '📚' }
                ] 
            },
            20: { 
                titulo: "Participios Adverbiales I", 
                tema: "Participios circunstanciales", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 20', url: 'recursos-semana21.html', icono: '📚' }
                ] 
            },
            21: { 
                titulo: "Participios Adverbiales II", 
                tema: "Participios causales y concesivos", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 21', url: 'recursos-semana22.html', icono: '📚' }
                ] 
            },
            22: { 
                titulo: "Participios Adjetivales", 
                tema: "Participios atributivos", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 22', url: 'recursos-semana23.html', icono: '📚' }
                ] 
            },
            23: { 
                titulo: "Participios Combinativos", 
                tema: "Participios con artículo", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 23', url: 'recursos-semana24.html', icono: '📚' }
                ] 
            },
            24: { 
                titulo: "Subjuntivo", 
                tema: "Modo subjuntivo presente", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 24', url: 'recursos-semana25.html', icono: '📚' }
                ] 
            },
            25: { 
                titulo: "Infinitivo", 
                tema: "Infinitivos y oraciones infinitivas", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 25', url: 'recursos-semana26.html', icono: '📚' }
                ] 
            },
            26: { 
                titulo: "Imperativo", 
                tema: "Modo imperativo", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 26', url: 'recursos-semana27.html', icono: '📚' }
                ] 
            },
            27: { 
                titulo: "Conjugaciones Atemáticas", 
                tema: "Verbos atemáticos e irregulares", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 27', url: 'recursos-semana28.html', icono: '📚' }
                ] 
            },
            28: { 
                titulo: "Consolidación Final", 
                tema: "Repaso completo de gramática", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido semana 28', url: 'recursos-semana28.html', icono: '📚' }
                ] 
            },
            29: { 
                titulo: "Lectura Guiada I", 
                tema: "Juan 1:1-18", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido lectura I', url: '#', icono: '📖' }
                ] 
            },
            30: { 
                titulo: "Lectura Guiada II", 
                tema: "1 Juan 1:1-10 y examen final", 
                recursos: [
                    { tipo: 'html', titulo: 'Contenido lectura II', url: '#', icono: '📖' }
                ] 
            }
        };
    }

    inicializar() {
        // Verificar autenticación
        if (!localStorage.getItem('autenticado')) {
            window.location.href = 'index.html';
            return;
        }

        // Verificar si la semana está desbloqueada
        if (!this.verificarSemanaDesbloqueada()) {
            this.mostrarContenidoBloqueado();
            return;
        }

        // Cargar contenido
        this.cargarContenido();
        this.inicializarEventos();
    }

    verificarSemanaDesbloqueada() {
        if (this.semanaActual === 1) return true;
        
        const semanasDesbloqueadas = JSON.parse(
            localStorage.getItem(`semanasDesbloqueadas_${this.usuario.id}`) || '[]'
        );
        
        return semanasDesbloqueadas.includes(this.semanaActual);
    }

    mostrarContenidoBloqueado() {
        const container = document.getElementById('weekContent');
        container.innerHTML = `
            <div class="text-center" style="padding: 60px 20px;">
                <i class="fas fa-lock fa-4x text-muted mb-20"></i>
                <h2>Contenido Bloqueado</h2>
                <p class="text-muted mb-20">
                    Esta semana aún no está disponible. 
                    ${this.semanaActual > 1 ? 'Completa las semanas anteriores.' : ''}
                </p>
                <a href="index.html" class="btn btn-primary">
                    <i class="fas fa-arrow-left"></i> Volver al Dashboard
                </a>
            </div>
        `;
        
        document.getElementById('markComplete').style.display = 'none';
    }

    cargarContenido() {
        const contenido = this.contenidoSemanas[this.semanaActual] || this.contenidoPorDefecto();
        this.mostrarContenido(contenido);
        this.actualizarProgresoBarra();
    }

    contenidoPorDefecto() {
        return {
            titulo: `Semana ${this.semanaActual}`,
            tema: "Contenido del curso",
            recursos: [
                { tipo: 'html', titulo: `Contenido semana ${this.semanaActual}`, url: `#`, icono: '📚' }
            ]
        };
    }

    mostrarContenido(contenido) {
        const progreso = this.calcularProgreso();
        const examenInfo = this.obtenerEnlaceExamenPorGrupo();
        
        const container = document.getElementById('weekContent');
        container.innerHTML = `
            <div class="week-header">
                <div class="d-flex justify-between align-center">
                    <div>
                        <h1><i class="fas fa-book-open"></i> Semana ${this.semanaActual}</h1>
                        <h2>${contenido.titulo}</h2>
                        <p class="text-muted">${contenido.tema}</p>
                        ${!this.usuario.esProfesor ? `
                            <p class="text-muted" style="margin-top: 10px; font-weight: 600;">
                                <i class="fas fa-users"></i> Grupo: ${this.usuario.grupoNombre || 'No asignado'}
                            </p>
                        ` : ''}
                    </div>
                    <div class="d-flex flex-column align-center">
                        <div class="completion-badge">
                            <i class="fas fa-check"></i>
                            <span>${progreso.completados}/${progreso.total} completados</span>
                        </div>
                        <small class="text-muted">Progreso de la semana</small>
                    </div>
                </div>
            </div>

            <div class="progress-bar-container">
                <div class="progress-bar-fill" id="progressBar"></div>
            </div>

            <div class="mb-20">
                <h3><i class="fas fa-graduation-cap"></i> Objetivos de Aprendizaje</h3>
                <p>Completar todos los recursos y el examen de esta semana.</p>
            </div>

            <!-- Materiales de Estudio -->
            ${contenido.recursos && contenido.recursos.length > 0 ? `
                <div class="resource-section">
                    <h2><i class="fas fa-book"></i> Materiales de Estudio</h2>
                    <ul class="resource-list">
                        ${contenido.recursos.map((recurso, index) => `
                            <li class="resource-item">
                                <span class="resource-icon">${recurso.icono || '📄'}</span>
                                <a href="#" onclick="semanaManager.abrirRecurso(${index}, '${recurso.tipo}')">${recurso.titulo}</a>
                                ${this.generarBadgeCompletado(index)}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}

            <!-- Juegos Interactivos -->
            ${contenido.juegos && contenido.juegos.length > 0 ? `
                <div class="resource-section">
                    <h2><i class="fas fa-gamepad"></i> Juegos Interactivos</h2>
                    ${contenido.juegos[0].nota ? `<p class="note">${contenido.juegos[0].nota}</p>` : ''}
                    <ul class="resource-list">
                        ${contenido.juegos.map((juego, index) => `
                            <li class="resource-item game-item">
                                <span class="resource-icon">${juego.icono || '🎮'}</span>
                                <a href="#" onclick="semanaManager.abrirJuego(${index})">${juego.titulo}</a>
                                ${juego.nota && juego.nota.includes('recomendado') ? `<span class="recommended-badge">Recomendado</span>` : ''}
                                ${this.generarBadgeCompletado(index + 100)}
                            </li>
                            ${juego.nota && !juego.nota.includes('Disponible') ? `<div class="game-description">${juego.nota}</div>` : ''}
                        `).join('')}
                    </ul>
                </div>
            ` : ''}

            <!-- Examen - Personalizado por grupo -->
            ${this.generarSeccionExamen(examenInfo)}
        `;
    }

    generarSeccionExamen(examenInfo) {
        // Si es profesor, mostrar vista especial
        if (this.usuario.esProfesor) {
            return `
                <div class="resource-section">
                    <h2><i class="fas fa-clipboard-check"></i> Examen Semanal</h2>
                    <div class="alert alert-info" style="background: #e7f5ff; border-left-color: #3498DB; padding: 20px;">
                        <i class="fas fa-info-circle"></i>
                        <strong>Vista de profesor:</strong> Los estudiantes verán aquí el examen correspondiente a su grupo (ALFA, BETA o GAMMA).
                    </div>
                </div>
            `;
        }

        // Verificar si el examen ya fue completado
        const examenCompletado = this.verificarExamenCompletado();

        // Caso 1: Examen específico disponible
        if (examenInfo.existe && examenInfo.tipo === 'especifico') {
            return `
                <div class="resource-section">
                    <h2><i class="fas fa-clipboard-check"></i> Examen Semanal</h2>
                    <div class="examen-container" style="background: rgba(46, 204, 113, 0.1); padding: 25px; border-radius: var(--radius); border-left: 5px solid var(--success);">
                        <p style="margin-bottom: 15px; font-size: 1.1rem;">
                            <strong><i class="fas fa-users" style="color: var(--primary);"></i> Tu grupo: ${this.usuario.grupoNombre}</strong>
                            <span style="color: var(--success); margin-left: 10px;"><i class="fas fa-check-circle"></i> Examen personalizado listo</span>
                        </p>
                        <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
                            <a href="${examenInfo.url}" target="_blank" class="btn btn-success" style="gap: 10px;">
                                <i class="fas fa-external-link-alt"></i> ${examenInfo.texto}
                            </a>
                            ${!examenCompletado ? 
                                `<button onclick="semanaManager.marcarExamenCompletado()" class="btn btn-primary">
                                    <i class="fas fa-check"></i> Marcar como Completado
                                </button>` : 
                                `<span class="completion-badge" style="background: var(--success); color: white; padding: 12px 20px;">
                                    <i class="fas fa-check-circle"></i> Examen Completado
                                </span>`
                            }
                        </div>
                    </div>
                </div>
            `;
        }

        // Caso 2: Examen no disponible
        return `
            <div class="resource-section">
                <h2><i class="fas fa-clipboard-check"></i> Examen Semanal</h2>
                <div class="examen-container" style="background: rgba(231, 76, 60, 0.1); padding: 25px; border-radius: var(--radius); border-left: 5px solid var(--danger);">
                    <p style="margin-bottom: 15px;">
                        <i class="fas fa-exclamation-triangle" style="color: var(--danger);"></i>
                        <strong>El examen para tu grupo (${this.usuario.grupoNombre}) aún no está configurado.</strong>
                    </p>
                    <p class="text-muted">Por favor, contacta a tu profesor o facilitador para más información.</p>
                </div>
            </div>
        `;
    }

    verificarExamenCompletado() {
        const recursosCompletados = JSON.parse(
            localStorage.getItem(`recursosCompletados_${this.usuario.id}_${this.semanaActual}`) || '[]'
        );
        return recursosCompletados.includes(999);
    }

    generarBadgeCompletado(indice) {
        const recursosCompletados = JSON.parse(
            localStorage.getItem(`recursosCompletados_${this.usuario.id}_${this.semanaActual}`) || '[]'
        );
        
        if (recursosCompletados.includes(indice)) {
            return `<span class="completion-badge" style="margin-left: auto;">
                <i class="fas fa-check-circle"></i> Completado
            </span>`;
        }
        return '';
    }

    abrirRecurso(indice, tipo) {
        const contenido = this.contenidoSemanas[this.semanaActual];
        if (!contenido || !contenido.recursos[indice]) return;
        
        const recurso = contenido.recursos[indice];
        
        // Marcar como completado
        this.marcarRecursoCompletado(indice);
        
        // Abrir según el tipo
        if (tipo === 'video' || tipo === 'pdf') {
            this.abrirModal(recurso.titulo, recurso.url);
        } else {
            window.open(recurso.url, '_blank');
        }
    }

    abrirJuego(indice) {
        const contenido = this.contenidoSemanas[this.semanaActual];
        if (!contenido || !contenido.juegos[indice]) return;
        
        const juego = contenido.juegos[indice];
        
        // Marcar como completado
        this.marcarRecursoCompletado(indice + 100);
        
        // Abrir juego en nueva pestaña
        window.open(juego.url, '_blank');
    }

    abrirModal(titulo, url) {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 800px;">
                <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
                <h3>${titulo}</h3>
                <div class="iframe-container">
                    <iframe src="${url}" allowfullscreen></iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    calcularProgreso() {
        const recursosCompletados = JSON.parse(
            localStorage.getItem(`recursosCompletados_${this.usuario.id}_${this.semanaActual}`) || '[]'
        );
        
        const contenido = this.contenidoSemanas[this.semanaActual];
        const totalRecursos = (contenido.recursos ? contenido.recursos.length : 0) + 
                             (contenido.juegos ? contenido.juegos.length : 0) + 1; // +1 por el examen
        
        return {
            completados: recursosCompletados.length,
            total: totalRecursos
        };
    }

    actualizarProgresoBarra() {
        const progreso = this.calcularProgreso();
        const porcentaje = (progreso.completados / progreso.total) * 100;
        const barra = document.getElementById('progressBar');
        if (barra) {
            barra.style.width = `${porcentaje}%`;
        }
    }

    marcarRecursoCompletado(indice) {
        const recursosCompletados = JSON.parse(
            localStorage.getItem(`recursosCompletados_${this.usuario.id}_${this.semanaActual}`) || '[]'
        );
        
        if (!recursosCompletados.includes(indice)) {
            recursosCompletados.push(indice);
            localStorage.setItem(
                `recursosCompletados_${this.usuario.id}_${this.semanaActual}`,
                JSON.stringify(recursosCompletados)
            );
            
            // Actualizar progreso general del usuario
            this.actualizarProgresoUsuario('leccion');
            this.actualizarProgresoBarra();
            
            // Actualizar la UI
            this.cargarContenido();
        }
    }

    marcarExamenCompletado() {
        // Marcar examen como completado (índice 999 para exámenes)
        this.marcarRecursoCompletado(999);
        
        // Actualizar estadísticas
        const progreso = this.usuario.progreso || {};
        progreso.examenesCompletados = (progreso.examenesCompletados || 0) + 1;
        this.usuario.progreso = progreso;
        localStorage.setItem('usuarioActual', JSON.stringify(this.usuario));
        localStorage.setItem(`progreso_${this.usuario.id}`, JSON.stringify(progreso));
        
        alert('¡Examen marcado como completado!');
        this.cargarContenido();
    }

    actualizarProgresoUsuario(tipo) {
        const progreso = this.usuario.progreso || {};
        
        switch(tipo) {
            case 'leccion':
                progreso.leccionesCompletadas = (progreso.leccionesCompletadas || 0) + 1;
                break;
            case 'juego':
                progreso.juegosCompletados = (progreso.juegosCompletados || 0) + 1;
                break;
        }
        
        progreso.ultimaActividad = new Date().toISOString();
        
        this.usuario.progreso = progreso;
        localStorage.setItem('usuarioActual', JSON.stringify(this.usuario));
        localStorage.setItem(`progreso_${this.usuario.id}`, JSON.stringify(progreso));
    }

    marcarSemanaCompletada() {
        const semanasCompletadas = JSON.parse(
            localStorage.getItem(`semanasCompletadas_${this.usuario.id}`) || '[]'
        );
        
        if (!semanasCompletadas.includes(this.semanaActual)) {
            semanasCompletadas.push(this.semanaActual);
            localStorage.setItem(
                `semanasCompletadas_${this.usuario.id}`,
                JSON.stringify(semanasCompletadas)
            );
            
            // Desbloquear siguiente semana
            const siguienteSemana = this.semanaActual + 1;
            const semanasDesbloqueadas = JSON.parse(
                localStorage.getItem(`semanasDesbloqueadas_${this.usuario.id}`) || '[]'
            );
            
            if (!semanasDesbloqueadas.includes(siguienteSemana)) {
                semanasDesbloqueadas.push(siguienteSemana);
                localStorage.setItem(
                    `semanasDesbloqueadas_${this.usuario.id}`,
                    JSON.stringify(semanasDesbloqueadas)
                );
            }
            
            // Actualizar progreso
            const progreso = this.usuario.progreso || {};
            progreso.semanasCompletadas = semanasCompletadas.length;
            this.usuario.progreso = progreso;
            localStorage.setItem('usuarioActual', JSON.stringify(this.usuario));
            localStorage.setItem(`progreso_${this.usuario.id}`, JSON.stringify(progreso));
            
            alert(`¡Felicidades! Has completado la semana ${this.semanaActual}`);
            window.location.href = 'index.html';
        } else {
            alert('Esta semana ya estaba marcada como completada');
        }
    }

    inicializarEventos() {
        const btnCompletar = document.getElementById('markComplete');
        if (btnCompletar) {
            btnCompletar.addEventListener('click', () => {
                this.marcarSemanaCompletada();
            });
        }
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    window.semanaManager = new SemanaManager();
});