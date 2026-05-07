// scripts.js - Lógica principal de la aplicación

class CourseApp {
    constructor() {
        this.currentUser = null;
        this.courseData = null;
        this.initializeApp();
    }

    async initializeApp() {
        // Cargar datos del curso
        this.courseData = window.courseData || await this.loadCourseData();
        
        // Verificar autenticación
        this.checkAuth();
        
        // Inicializar event listeners
        this.initEventListeners();
    }

    checkAuth() {
        const userData = localStorage.getItem('currentUser');
        const authToken = localStorage.getItem('authToken');
        
        if (userData && authToken) {
            this.currentUser = JSON.parse(userData);
            this.showDashboard();
        } else {
            this.showLogin();
        }
    }

    showLogin() {
        const container = document.getElementById('app-container');
        container.innerHTML = `
            <div class="login-container fade-in">
                <div class="login-header">
                    <img src="assets/mas logos.jpeg" alt="Ministerio Vivos para Servir" class="logo-main">
                    <h1>Curso de Griego Koiné</h1>
                    <p class="text-muted">Ministerio "Vivos para Servir"</p>
                </div>
                
                <form id="loginForm" class="login-form">
                    <div class="form-group">
                        <label for="accessCode">
                            <i class="fas fa-key"></i> Código de Acceso
                        </label>
                        <input type="text" id="accessCode" class="form-control" 
                               placeholder="Ingresa tu código exclusivo" required>
                        <small class="text-muted">Código proporcionado por el profesor</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="username">
                            <i class="fas fa-user"></i> Nombre de Usuario
                        </label>
                        <input type="text" id="username" class="form-control" 
                               placeholder="Crea tu nombre de usuario" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">
                            <i class="fas fa-lock"></i> Contraseña
                        </label>
                        <input type="password" id="password" class="form-control" 
                               placeholder="Crea una contraseña segura" required>
                        <small class="text-muted">Mínimo 6 caracteres</small>
                    </div>
                    
                    <button type="submit" class="btn">
                        <i class="fas fa-sign-in-alt"></i> Ingresar al Curso
                    </button>
                    
                    <div id="loginError" class="alert alert-danger mt-20 d-none"></div>
                </form>
            </div>
        `;
        
        // Configurar evento del formulario
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
    }

    handleLogin() {
        const accessCode = document.getElementById('accessCode').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        
        // Validaciones básicas
        if (!accessCode || !username || !password) {
            this.showError('Todos los campos son obligatorios');
            return;
        }
        
        if (password.length < 6) {
            this.showError('La contraseña debe tener al menos 6 caracteres');
            return;
        }
        
        // Verificar código de acceso
        if (!this.validateAccessCode(accessCode)) {
            this.showError('Código de acceso inválido o ya utilizado');
            return;
        }
        
        // Registrar usuario
        this.registerUser(accessCode, username, password);
    }

    validateAccessCode(code) {
        const usedCodes = JSON.parse(localStorage.getItem('usedAccessCodes') || '[]');
        
        // Verificar si el código ya fue usado
        if (usedCodes.includes(code)) {
            return false;
        }
        
        // Verificar si el código es válido (deberías tener una lista de códigos válidos)
        const validCodes = this.courseData.validAccessCodes || [];
        return validCodes.includes(code);
    }

    registerUser(code, username, password) {
        // Generar ID único
        const userId = 'user_' + Date.now() + Math.random().toString(36).substr(2, 9);
        
        // Crear objeto usuario
        const user = {
            id: userId,
            username: username,
            accessCode: code,
            registrationDate: new Date().toISOString(),
            progress: {
                weeksCompleted: 0,
                lessonsCompleted: 0,
                gamesCompleted: 0,
                examsCompleted: 0,
                lastActive: new Date().toISOString()
            }
        };
        
        // Guardar usuario
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Guardar código como usado
        const usedCodes = JSON.parse(localStorage.getItem('usedAccessCodes') || '[]');
        usedCodes.push(code);
        localStorage.setItem('usedAccessCodes', JSON.stringify(usedCodes));
        
        // Generar token de autenticación
        const authToken = btoa(JSON.stringify({
            userId: userId,
            timestamp: Date.now()
        }));
        localStorage.setItem('authToken', authToken);
        
        // Actualizar y mostrar dashboard
        this.currentUser = user;
        this.showDashboard();
    }

    showDashboard() {
        const progress = this.currentUser.progress || {};
        const weeks = this.generateWeeksGrid();
        
        const container = document.getElementById('app-container');
        container.innerHTML = `
            <div class="dashboard fade-in">
                <!-- Header -->
                <div class="dashboard-header">
                    <div class="user-info">
                        <div class="user-avatar">
                            ${this.currentUser.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h2>Bienvenido, ${this.currentUser.username}</h2>
                            <p class="text-muted">Curso de Griego Koiné Elemental</p>
                        </div>
                    </div>
                    
                    <div class="user-actions">
                        <button id="logoutBtn" class="btn btn-danger">
                            <i class="fas fa-sign-out-alt"></i> Salir
                        </button>
                    </div>
                </div>
                
                <!-- Progress Summary -->
                <div class="progress-summary">
                    <h3><i class="fas fa-chart-line"></i> Tu Progreso</h3>
                    <div class="progress-cards">
                        <div class="progress-card">
                            <i class="fas fa-calendar-week"></i>
                            <div class="progress-number">${progress.weeksCompleted || 0}/30</div>
                            <p>Semanas Completadas</p>
                        </div>
                        
                        <div class="progress-card">
                            <i class="fas fa-book"></i>
                            <div class="progress-number">${progress.lessonsCompleted || 0}</div>
                            <p>Lecciones Completadas</p>
                        </div>
                        
                        <div class="progress-card">
                            <i class="fas fa-gamepad"></i>
                            <div class="progress-number">${progress.gamesCompleted || 0}</div>
                            <p>Juegos Completados</p>
                        </div>
                        
                        <div class="progress-card">
                            <i class="fas fa-clipboard-check"></i>
                            <div class="progress-number">${progress.examsCompleted || 0}</div>
                            <p>Exámenes Aprobados</p>
                        </div>
                    </div>
                    
                    <div class="mt-20">
                        <button id="downloadProgress" class="btn btn-secondary">
                            <i class="fas fa-download"></i> Descargar Progreso
                        </button>
                        <button id="unlockWeekBtn" class="btn btn-warning">
                            <i class="fas fa-unlock"></i> Desbloquear Semana
                        </button>
                    </div>
                </div>
                
                <!-- Weeks Grid -->
                <div class="weeks-section">
                    <h3><i class="fas fa-road"></i> Plan de Estudios</h3>
                    <p class="text-muted mb-20">Haz clic en una semana para acceder a sus contenidos</p>
                    
                    <div class="weeks-grid" id="weeksGrid">
                        ${weeks}
                    </div>
                </div>
                
                <!-- Admin Panel (visible solo para admin) -->
                ${this.currentUser.accessCode === 'ADMIN2026' ? this.generateAdminPanel() : ''}
            </div>
            
            <!-- Unlock Modal -->
            <div class="modal" id="unlockModal">
                <div class="modal-content">
                    <span class="close-modal" id="closeModal">&times;</span>
                    <h3><i class="fas fa-unlock-alt"></i> Desbloquear Semana</h3>
                    <p>Ingresa el código especial para desbloquear contenido:</p>
                    
                    <div class="form-group mt-20">
                        <label for="unlockCode">Código de Desbloqueo:</label>
                        <input type="text" id="unlockCode" class="form-control" 
                               placeholder="Ej: UNLOCK_WEEK_5">
                    </div>
                    
                    <div class="form-group">
                        <label for="weekToUnlock">Semana a desbloquear:</label>
                        <select id="weekToUnlock" class="form-control">
                            ${Array.from({length: 30}, (_, i) => i + 1)
                                .map(w => `<option value="${w}">Semana ${w}</option>`).join('')}
                        </select>
                    </div>
                    
                    <button id="confirmUnlock" class="btn btn-success mt-20">
                        <i class="fas fa-check"></i> Desbloquear
                    </button>
                    
                    <div id="unlockError" class="alert alert-danger mt-20 d-none"></div>
                </div>
            </div>
        `;
        
        // Configurar event listeners del dashboard
        this.initDashboardEvents();
    }

    generateWeeksGrid() {
        let html = '';
        const progress = this.currentUser.progress || {};
        const unlockedWeeks = JSON.parse(localStorage.getItem(`unlockedWeeks_${this.currentUser.id}`) || '[]');
        const completedWeeks = JSON.parse(localStorage.getItem(`completedWeeks_${this.currentUser.id}`) || '[]');
        
        // Determinar semana actual basada en fecha de inicio
        const startDate = new Date(localStorage.getItem('courseStartDate') || new Date().toISOString());
        const currentWeek = Math.floor((Date.now() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
        
        for (let week = 1; week <= 30; week++) {
            const isUnlocked = unlockedWeeks.includes(week) || week <= currentWeek;
            const isCompleted = completedWeeks.includes(week);
            const isCurrent = week === currentWeek && !isCompleted;
            
            let badge = '';
            if (isCurrent) badge = '<span class="week-badge">Actual</span>';
            else if (isCompleted) badge = '<span class="week-badge" style="background:var(--success);color:white;">✓</span>';
            
            html += `
                <div class="week-card ${isUnlocked ? '' : 'locked'} ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}" 
                     data-week="${week}" ${isUnlocked ? 'onclick="app.openWeek(' + week + ')"' : ''}>
                    ${badge}
                    <div class="week-number">${week}</div>
                    <h4>${this.courseData.weeks[week - 1]?.title || `Semana ${week}`}</h4>
                    <p class="text-muted">${this.courseData.weeks[week - 1]?.topic || 'Contenido del curso'}</p>
                    ${!isUnlocked ? '<p><small><i class="fas fa-lock"></i> Bloqueada</small></p>' : ''}
                </div>
            `;
        }
        
        return html;
    }

    generateAdminPanel() {
        return `
            <div class="admin-panel">
                <h3><i class="fas fa-cogs"></i> Panel de Administración</h3>
                <div class="admin-controls">
                    <div class="control-group">
                        <h4>Configurar Fecha de Inicio</h4>
                        <input type="date" id="startDate" class="form-control mt-10" 
                               value="${new Date().toISOString().split('T')[0]}">
                        <button id="setStartDate" class="btn btn-secondary mt-10">
                            <i class="fas fa-calendar-alt"></i> Establecer Inicio
                        </button>
                    </div>
                    
                    <div class="control-group">
                        <h4>Generar Códigos de Acceso</h4>
                        <input type="number" id="codeCount" class="form-control mt-10" 
                               placeholder="Número de códigos" min="1" max="100" value="10">
                        <button id="generateCodes" class="btn btn-success mt-10">
                            <i class="fas fa-key"></i> Generar Códigos
                        </button>
                        <div id="generatedCodes" class="mt-10"></div>
                    </div>
                    
                    <div class="control-group">
                        <h4>Estadísticas del Curso</h4>
                        <button id="viewStats" class="btn btn-info mt-10">
                            <i class="fas fa-chart-bar"></i> Ver Estadísticas
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    initDashboardEvents() {
        // Logout
        document.getElementById('logoutBtn').addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('authToken');
            this.currentUser = null;
            this.showLogin();
        });
        
        // Descargar progreso
        document.getElementById('downloadProgress').addEventListener('click', () => {
            this.downloadProgress();
        });
        
        // Desbloquear semana
        document.getElementById('unlockWeekBtn').addEventListener('click', () => {
            document.getElementById('unlockModal').classList.add('active');
        });
        
        // Cerrar modal
        document.getElementById('closeModal').addEventListener('click', () => {
            document.getElementById('unlockModal').classList.remove('active');
        });
        
        // Confirmar desbloqueo
        document.getElementById('confirmUnlock').addEventListener('click', () => {
            this.handleUnlockWeek();
        });
        
        // Eventos del panel de administración
        if (this.currentUser.accessCode === 'ADMIN2026') {
            this.initAdminEvents();
        }
    }

    async openWeek(weekNumber) {
        // Guardar semana actual
        localStorage.setItem('currentWeek', weekNumber);
        
        // Redirigir a la página de la semana
        window.location.href = `semana.html?week=${weekNumber}`;
    }

    handleUnlockWeek() {
        const code = document.getElementById('unlockCode').value.trim();
        const week = parseInt(document.getElementById('weekToUnlock').value);
        
        // Códigos especiales (puedes agregar más)
        const specialCodes = {
            'UNLOCK_ALL': 'Desbloquea todas las semanas',
            'UNLOCK_WEEK_': 'Desbloquea semana específica'
        };
        
        // Verificar código
        if (code === 'UNLOCK_ALL') {
            // Desbloquear todas las semanas
            const unlockedWeeks = Array.from({length: 30}, (_, i) => i + 1);
            localStorage.setItem(`unlockedWeeks_${this.currentUser.id}`, JSON.stringify(unlockedWeeks));
            this.showUnlockSuccess('¡Todas las semanas han sido desbloqueadas!');
        } 
        else if (code.startsWith('UNLOCK_WEEK_')) {
            const weekFromCode = parseInt(code.replace('UNLOCK_WEEK_', ''));
            if (weekFromCode >= 1 && weekFromCode <= 30) {
                const unlockedWeeks = JSON.parse(localStorage.getItem(`unlockedWeeks_${this.currentUser.id}`) || '[]');
                if (!unlockedWeeks.includes(weekFromCode)) {
                    unlockedWeeks.push(weekFromCode);
                    localStorage.setItem(`unlockedWeeks_${this.currentUser.id}`, JSON.stringify(unlockedWeeks));
                    this.showUnlockSuccess(`¡Semana ${weekFromCode} desbloqueada!`);
                } else {
                    this.showUnlockError('Esta semana ya está desbloqueada');
                }
            } else {
                this.showUnlockError('Código inválido');
            }
        }
        else if (code === this.generateUnlockCode(week)) {
            // Desbloquear semana específica
            const unlockedWeeks = JSON.parse(localStorage.getItem(`unlockedWeeks_${this.currentUser.id}`) || '[]');
            if (!unlockedWeeks.includes(week)) {
                unlockedWeeks.push(week);
                localStorage.setItem(`unlockedWeeks_${this.currentUser.id}`, JSON.stringify(unlockedWeeks));
                this.showUnlockSuccess(`¡Semana ${week} desbloqueada!`);
            } else {
                this.showUnlockError('Esta semana ya está desbloqueada');
            }
        } 
        else {
            this.showUnlockError('Código de desbloqueo inválido');
        }
    }

    generateUnlockCode(week) {
        // Generar código simple basado en semana y usuario
        return `WEEK_${week}_${this.currentUser.id.substr(0, 8)}`;
    }

    downloadProgress() {
        const progress = {
            user: this.currentUser.username,
            userId: this.currentUser.id,
            registrationDate: this.currentUser.registrationDate,
            progress: this.currentUser.progress,
            completedWeeks: JSON.parse(localStorage.getItem(`completedWeeks_${this.currentUser.id}`) || '[]'),
            lastUpdated: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(progress, null, 2)], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `progreso_${this.currentUser.username}_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    showError(message) {
        const errorDiv = document.getElementById('loginError');
        errorDiv.textContent = message;
        errorDiv.classList.remove('d-none');
        setTimeout(() => errorDiv.classList.add('d-none'), 5000);
    }

    showUnlockError(message) {
        const errorDiv = document.getElementById('unlockError');
        errorDiv.textContent = message;
        errorDiv.classList.remove('d-none');
        setTimeout(() => errorDiv.classList.add('d-none'), 5000);
    }

    showUnlockSuccess(message) {
        const modal = document.getElementById('unlockModal');
        modal.classList.remove('active');
        alert(message);
        this.showDashboard(); // Refrescar dashboard
    }

    initEventListeners() {
        // Cerrar modal haciendo clic fuera
        document.addEventListener('click', (e) => {
            const modal = document.getElementById('unlockModal');
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    initAdminEvents() {
        // Configurar fecha de inicio
        document.getElementById('setStartDate').addEventListener('click', () => {
            const dateStr = document.getElementById('startDate').value;
            const date = new Date(dateStr);
            localStorage.setItem('courseStartDate', date.toISOString());
            alert('Fecha de inicio actualizada');
        });
        
        // Generar códigos
        document.getElementById('generateCodes').addEventListener('click', () => {
            const count = parseInt(document.getElementById('codeCount').value);
            const codes = this.generateAccessCodes(count);
            
            const codesDiv = document.getElementById('generatedCodes');
            codesDiv.innerHTML = `
                <h5>Códigos generados (${count}):</h5>
                <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; max-height: 200px; overflow-y: auto;">
                    ${codes.map(code => `<code>${code}</code><br>`).join('')}
                </div>
                <button onclick="this.parentElement.innerHTML=''" class="btn btn-sm btn-danger mt-10">
                    <i class="fas fa-times"></i> Ocultar
                </button>
            `;
        });
    }

    generateAccessCodes(count) {
        const codes = [];
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        
        for (let i = 0; i < count; i++) {
            let code = '';
            for (let j = 0; j < 8; j++) {
                code += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            // Agregar prefijo
            code = 'GRIEGO_' + code;
            codes.push(code);
            
            // Guardar en lista de códigos válidos
            const validCodes = JSON.parse(localStorage.getItem('validAccessCodes') || '[]');
            validCodes.push(code);
            localStorage.setItem('validAccessCodes', JSON.stringify(validCodes));
        }
        
        return codes;
    }

    async loadCourseData() {
        // Si no hay datos en localStorage, usar datos por defecto
        const defaultData = {
            validAccessCodes: ['GRIEGO_2026', 'ADMIN2026'],
            weeks: [
                { title: "Alfabeto Griego", topic: "Introducción al alfabeto" },
                { title: "Sustantivos y Casos", topic: "Gramática básica" },
                // ... agregar más semanas según necesites
            ]
        };
        
        return defaultData;
    }
}

// Inicializar aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CourseApp();
});