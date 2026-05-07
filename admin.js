// admin.js - Funciones administrativas

const AdminManager = {
    // Verificar si el usuario es admin
    isAdmin: function() {
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        return userData.accessCode === 'ADMIN2026';
    },
    
    // Generar códigos de acceso
    generateAccessCodes: function(count) {
        const codes = [];
        const prefix = 'GRIEGO_';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        
        for (let i = 0; i < count; i++) {
            let code = '';
            for (let j = 0; j < 8; j++) {
                code += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            codes.push(prefix + code);
        }
        
        // Guardar códigos
        const validCodes = JSON.parse(localStorage.getItem('validAccessCodes') || '[]');
        validCodes.push(...codes);
        localStorage.setItem('validAccessCodes', JSON.stringify(validCodes));
        
        return codes;
    },
    
    // Desbloquear semana para usuario específico
    unlockWeekForUser: function(userId, weekNumber) {
        const unlockedWeeks = JSON.parse(localStorage.getItem(`unlockedWeeks_${userId}`) || '[]');
        if (!unlockedWeeks.includes(weekNumber)) {
            unlockedWeeks.push(weekNumber);
            localStorage.setItem(`unlockedWeeks_${userId}`, JSON.stringify(unlockedWeeks));
            return true;
        }
        return false;
    },
    
    // Obtener estadísticas del curso
    getCourseStats: function() {
        const allUsers = this.getAllUsers();
        
        return {
            totalUsers: allUsers.length,
            activeUsers: allUsers.filter(u => {
                const lastActive = new Date(u.progress?.lastActive || 0);
                const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
                return lastActive > thirtyDaysAgo;
            }).length,
            averageProgress: this.calculateAverageProgress(allUsers),
            completionRate: this.calculateCompletionRate(allUsers)
        };
    },
    
    // Obtener todos los usuarios
    getAllUsers: function() {
        // Nota: En un sistema real, esto vendría de una base de datos
        // Por ahora, solo podemos acceder al usuario actual
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        return currentUser.id ? [currentUser] : [];
    },
    
    // Calcular progreso promedio
    calculateAverageProgress: function(users) {
        if (users.length === 0) return 0;
        
        const totalProgress = users.reduce((sum, user) => {
            return sum + (user.progress?.weeksCompleted || 0);
        }, 0);
        
        return Math.round(totalProgress / users.length);
    },
    
    // Calcular tasa de completación
    calculateCompletionRate: function(users) {
        if (users.length === 0) return 0;
        
        const completedUsers = users.filter(user => {
            return (user.progress?.weeksCompleted || 0) >= 30;
        }).length;
        
        return Math.round((completedUsers / users.length) * 100);
    }
};