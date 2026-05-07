// progress.js - Manejo del progreso del estudiante

const ProgressManager = {
    // Actualizar progreso
    updateProgress: function(type, details = {}) {
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (!userData.id) return null;
        
        // Inicializar progreso si no existe
        if (!userData.progress) {
            userData.progress = {
                weeksCompleted: 0,
                lessonsCompleted: 0,
                gamesCompleted: 0,
                examsCompleted: 0,
                lastActive: new Date().toISOString()
            };
        }
        
        // Actualizar según tipo
        switch(type) {
            case 'week_complete':
                userData.progress.weeksCompleted++;
                this.markWeekComplete(details.weekNumber, userData.id);
                break;
                
            case 'lesson_complete':
                userData.progress.lessonsCompleted++;
                this.markLessonComplete(details.lessonId, userData.id);
                break;
                
            case 'game_complete':
                userData.progress.gamesCompleted++;
                this.markGameComplete(details.gameId, userData.id);
                break;
                
            case 'exam_complete':
                userData.progress.examsCompleted++;
                this.markExamComplete(details.examId, userData.id);
                break;
        }
        
        // Actualizar última actividad
        userData.progress.lastActive = new Date().toISOString();
        
        // Guardar cambios
        localStorage.setItem('currentUser', JSON.stringify(userData));
        
        // Disparar evento de progreso actualizado
        this.dispatchProgressUpdate();
        
        return userData.progress;
    },
    
    // Marcar semana como completada
    markWeekComplete: function(weekNumber, userId) {
        const completedWeeks = JSON.parse(localStorage.getItem(`completedWeeks_${userId}`) || '[]');
        if (!completedWeeks.includes(weekNumber)) {
            completedWeeks.push(weekNumber);
            localStorage.setItem(`completedWeeks_${userId}`, JSON.stringify(completedWeeks));
        }
    },
    
    // Marcar lección como completada
    markLessonComplete: function(lessonId, userId) {
        const completedLessons = JSON.parse(localStorage.getItem(`completedLessons_${userId}`) || '[]');
        if (!completedLessons.includes(lessonId)) {
            completedLessons.push(lessonId);
            localStorage.setItem(`completedLessons_${userId}`, JSON.stringify(completedLessons));
        }
    },
    
    // Marcar juego como completado
    markGameComplete: function(gameId, userId) {
        const completedGames = JSON.parse(localStorage.getItem(`completedGames_${userId}`) || '[]');
        if (!completedGames.includes(gameId)) {
            completedGames.push(gameId);
            localStorage.setItem(`completedGames_${userId}`, JSON.stringify(completedGames));
        }
    },
    
    // Marcar examen como completado
    markExamComplete: function(examId, userId) {
        const completedExams = JSON.parse(localStorage.getItem(`completedExams_${userId}`) || '[]');
        if (!completedExams.includes(examId)) {
            completedExams.push(examId);
            localStorage.setItem(`completedExams_${userId}`, JSON.stringify(completedExams));
        }
    },
    
    // Obtener progreso completo
    getFullProgress: function(userId) {
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (!userData.id) return null;
        
        return {
            user: {
                username: userData.username,
                id: userData.id,
                registrationDate: userData.registrationDate
            },
            progress: userData.progress || {},
            completedWeeks: JSON.parse(localStorage.getItem(`completedWeeks_${userId}`) || '[]'),
            completedLessons: JSON.parse(localStorage.getItem(`completedLessons_${userId}`) || '[]'),
            completedGames: JSON.parse(localStorage.getItem(`completedGames_${userId}`) || '[]'),
            completedExams: JSON.parse(localStorage.getItem(`completedExams_${userId}`) || '[]'),
            lastUpdated: new Date().toISOString()
        };
    },
    
    // Descargar progreso como JSON
    downloadProgress: function() {
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const progress = this.getFullProgress(userData.id);
        
        if (!progress) {
            alert('No hay datos de progreso disponibles');
            return;
        }
        
        const blob = new Blob([JSON.stringify(progress, null, 2)], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `progreso_${progress.user.username}_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },
    
    // Evento de actualización de progreso
    dispatchProgressUpdate: function() {
        const event = new CustomEvent('progressUpdated', {
            detail: { timestamp: new Date().toISOString() }
        });
        document.dispatchEvent(event);
    }
};

// Event listener para actualizaciones de progreso
document.addEventListener('progressUpdated', (event) => {
    console.log('Progreso actualizado:', event.detail.timestamp);
    // Aquí podrías actualizar la UI si es necesario
});