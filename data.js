// data.js - Datos del curso y configuración

window.courseData = {
    // Códigos de acceso válidos (se añadirán más dinámicamente)
    validAccessCodes: ['GRIEGO_2026', 'ADMIN2026'],
    
    // Información del curso
    courseInfo: {
        title: "Curso de Griego Koiné Elemental",
        institution: "Ministerio 'Vivos para Servir'",
        teacher: "Rolando Y. Desdín García",
        duration: "28 semanas (2 semestres)",
        modality: "Online",
        year: "2026"
    },
    
    // En data.js, dentro de window.courseData, agrega:
weeks: [
    {
        number: 1,
        title: "Alfabeto Griego",
        topic: "Introducción al alfabeto, pronunciación y escritura",
        unlockedByDefault: true
    },
    {
        number: 2,
        title: "Sustantivos y Casos Gramaticales",
        topic: "Primera y segunda declinación"
    },
    {
        number: 3,
        title: "Artículo Definido y Traducción",
        topic: "Uso del artículo y primeras traducciones"
    },
    {
        number: 4,
        title: "Preposiciones y Verbo Eimi",
        topic: "Preposiciones básicas y el verbo 'ser'"
    },
    {
        number: 5,
        title: "Adjetivos",
        topic: "Concordancia y grados del adjetivo"
    },
    {
        number: 6,
        title: "Tercera Declinación",
        topic: "Sustantivos de la tercera declinación"
    },
    {
        number: 7,
        title: "Pronombres Personales",
        topic: "Pronombres de primera y segunda persona"
    },
    {
        number: 8,
        title: "Pronombres Personales de Tercera",
        topic: "Pronombres demostrativos y relativos"
    },
    {
        number: 9,
        title: "Pronombres Demostrativos",
        topic: "οὗτος, ἐκεῖνος, αὐτός"
    },
    {
        number: 10,
        title: "Introducción al Verbo",
        topic: "Presente Activo Indicativo"
    },
    {
        number: 11,
        title: "Verbos Contractos y Voz Pasiva",
        topic: "Contracción vocálica y pasiva básica"
    },
    {
        number: 12,
        title: "Futuro Activo y Medio Pasivo",
        topic: "Formación del futuro"
    },
    {
        number: 13,
        title: "Imperfecto Indicativo",
        topic: "Tiempo pasado continuo"
    },
    {
        number: 14,
        title: "Segundo Aoristo",
        topic: "Aoristo con aumento"
    },
    {
        number: 15,
        title: "Consolidación I",
        topic: "Repaso general"
    },
    {
        number: 16,
        title: "Primer Aoristo",
        topic: "Aoristo sigma"
    },
    {
        number: 17,
        title: "Aoristo/Futuro Pasivo",
        topic: "Formas pasivas de aoristo y futuro"
    },
    {
        number: 18,
        title: "Perfecto",
        topic: "Tiempo perfecto activo"
    },
    {
        number: 19,
        title: "Introducción a Participios",
        topic: "Participios presentes"
    },
    {
        number: 20,
        title: "Participios Adverbiales I",
        topic: "Participios circunstanciales"
    },
    {
        number: 21,
        title: "Participios Adverbiales II",
        topic: "Participios causales y concesivos"
    },
    {
        number: 22,
        title: "Participios Adjetivales",
        topic: "Participios atributivos"
    },
    {
        number: 23,
        title: "Participios Combinativos",
        topic: "Participios con artículo"
    },
    {
        number: 24,
        title: "Subjuntivo",
        topic: "Modo subjuntivo presente"
    },
    {
        number: 25,
        title: "Infinitivo",
        topic: "Infinitivos y oraciones infinitivas"
    },
    {
        number: 26,
        title: "Imperativo",
        topic: "Modo imperativo"
    },
    {
        number: 27,
        title: "Conjugaciones Atemáticas",
        topic: "Verbos atemáticos e irregulares"
    },
    {
        number: 28,
        title: "Consolidación II",
        topic: "Repaso final de gramática"
    },
    {
        number: 29,
        title: "Lectura Guiada I",
        topic: "Juan 1:1-18"
    },
    {
        number: 30,
        title: "Lectura Guiada II",
        topic: "1 Juan 1:1-10 y examen final"
    }
],
    
    // Configuración del sistema
    settings: {
        unlockInterval: 7, // días entre desbloqueo automático
        startDate: null, // se establece dinámicamente
        allowUnlockCodes: true
    },
    
    // URLs de exámenes (Google Forms)
    exams: {
        1: "https://docs.google.com/forms/d/e/1FAIpQLSdp4FVcShz_KqxaaoE3GzJEQNLl8c29SXWxEow5wXR5q3B8yQ/viewform",
        // ... agregar más URLs
    },
    
    // Inicializar sistema
    init: function() {
        // Establecer fecha de inicio si no existe
        if (!localStorage.getItem('courseStartDate')) {
            localStorage.setItem('courseStartDate', new Date().toISOString());
        }
        
        // Cargar códigos válidos de localStorage
        const savedCodes = JSON.parse(localStorage.getItem('validAccessCodes') || '[]');
        this.validAccessCodes = [...new Set([...this.validAccessCodes, ...savedCodes])];
        
        console.log('Sistema de curso inicializado');
    },
    
    // Métodos de utilidad
    getCurrentWeek: function() {
        const startDate = new Date(localStorage.getItem('courseStartDate'));
        const now = new Date();
        const diffTime = Math.abs(now - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return Math.floor(diffDays / 7) + 1;
    },
    
    isWeekUnlocked: function(weekNumber, userId) {
        // Semana 1 siempre desbloqueada
        if (weekNumber === 1) return true;
        
        // Verificar desbloqueo manual
        const unlockedWeeks = JSON.parse(localStorage.getItem(`unlockedWeeks_${userId}`) || '[]');
        if (unlockedWeeks.includes(weekNumber)) return true;
        
        // Verificar desbloqueo automático por tiempo
        const currentWeek = this.getCurrentWeek();
        return weekNumber <= currentWeek;
    },
    
    // Generar reporte de progreso
    generateProgressReport: function(userId) {
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (!userData.id) return null;
        
        return {
            userInfo: {
                username: userData.username,
                userId: userData.id,
                registrationDate: userData.registrationDate
            },
            progress: userData.progress || {},
            completedWeeks: JSON.parse(localStorage.getItem(`completedWeeks_${userId}`) || '[]'),
            lastActivity: new Date().toISOString(),
            generated: new Date().toISOString()
        };
    }
};

// Inicializar cuando se carga
document.addEventListener('DOMContentLoaded', () => {
    window.courseData.init();
});