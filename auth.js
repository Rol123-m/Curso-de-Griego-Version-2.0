// auth.js - Manejo de autenticación

const AuthManager = {
    // Verificar autenticación
    checkAuth: function() {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('currentUser');
        
        if (!token || !user) {
            return false;
        }
        
        try {
            const tokenData = JSON.parse(atob(token));
            const now = Date.now();
            const tokenAge = now - tokenData.timestamp;
            
            // Token válido por 30 días
            if (tokenAge > 30 * 24 * 60 * 60 * 1000) {
                this.logout();
                return false;
            }
            
            return true;
        } catch (error) {
            this.logout();
            return false;
        }
    },
    
    // Cerrar sesión
    logout: function() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    },
    
    // Generar nuevo token
    generateToken: function(userId) {
        const tokenData = {
            userId: userId,
            timestamp: Date.now()
        };
        return btoa(JSON.stringify(tokenData));
    },
    
    // Verificar acceso a semana
    canAccessWeek: function(weekNumber) {
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (!userData.id) return false;
        
        return window.courseData.isWeekUnlocked(weekNumber, userData.id);
    }
};

// Proteger páginas que requieren autenticación
function requireAuth() {
    if (!AuthManager.checkAuth()) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}