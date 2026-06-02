// app.js - VERSIÓN COMPLETA CON FECHA GLOBAL Y DESBLOQUEO POR CÓDIGO
// Fecha de inicio del curso: Martes 3 de marzo de 2026

// ================================
// CONFIGURACIÓN GLOBAL DEL CURSO
// ================================
window.CONFIG = {
    PASSWORD_UNICA: "griego2026",
    CODIGO_ADMIN: "ADMIN2026",
    TOTAL_SEMANAS: 30,
    DIAS_DESBLOQUEO: 7,
    
    // FECHA DE INICIO GLOBAL PARA TODOS LOS ESTUDIANTES
    // Martes 3 de marzo de 2026 a las 00:00 horas
    FECHA_INICIO_GLOBAL: "2026-03-02T00:00:00-05:00",

    // Configuración de grupos
    GRUPOS: {
        ALFA: {
            id: "alfa",
            nombre: "Grupo Alfa (α)",
            profesorTitular: "Rolando Y. Desdín García",
            profesorAsistente: "Raidel Ramón Toranzo",
            facilitadores: ["Leonard Luis Carrera Castillo", "Alexei Sánchez"]
        },
        BETA: {
            id: "beta",
            nombre: "Grupo Beta (β)",
            profesorTitular: "Yordanka Álvarez Pérez",
            profesorAsistente: "Rolando Desdín García",
            facilitadores: ["Daniel Ramírez"]
        },
        GAMMA: {
            id: "gamma",
            nombre: "Grupo Gamma (γ)",
            profesorTitular: "Yurleidy Domínguez Vega",
            asistentes: ["Marcos González", "Mario L. Mondeja Leyva"]
        }
    },

    // ================================================
    // CONFIGURACIÓN DE EXÁMENES POR GRUPO
    // ================================================
    EXAMENES_POR_GRUPO: {
        ALFA: {
            1: "https://forms.gle/1qbXukGfPFFJ8LAY8",
            2: "https://forms.gle/v1A2yX11SwFC6rX88",
            3: "https://docs.google.com/forms/d/e/1FAIpQLSc28ZWsV9bI-pLzNxdL_MRrdap4D5Wvn4Gj8rR_coOmEDVqxA/viewform?usp=sharing&ouid=113497680338048717727",
            4: "https://forms.gle/HQEwHsA93RdK7QU47",
            5: "https://forms.gle/fwYdW4aq8Js3ZzzY6",
            6: "https://forms.gle/UdS4v6H9z4wSR4bX7",
            7: "https://forms.gle/SAsw5QsWkxdL6pDo9",
            8: "https://forms.gle/TcbvQaEUAwTpYrFu8",
            9: "https://forms.gle/bxYg1PCnerC3QE5r8",
            10: "https://forms.gle/MmWjD83B8y6S14Mh6",
            11: "https://forms.gle/1QyFTcs2myoghcXb8",
            12: "https://forms.gle/GfYiaCLBqWeJgSRb7",
            13: "https://forms.gle/jYtS4n5eSKmgWcMA8",
            14: "https://forms.gle/JJfPTugEPc8QzUqv6",
            15: "https://forms.gle/EJEMPLO_ALFA_15",
            16: "https://forms.gle/EJEMPLO_ALFA_16",
            17: "https://forms.gle/EJEMPLO_ALFA_17",
            18: "https://forms.gle/EJEMPLO_ALFA_18",
            19: "https://forms.gle/EJEMPLO_ALFA_19",
            20: "https://forms.gle/EJEMPLO_ALFA_20",
            21: "https://forms.gle/EJEMPLO_ALFA_21",
            22: "https://forms.gle/EJEMPLO_ALFA_22",
            23: "https://forms.gle/EJEMPLO_ALFA_23",
            24: "https://forms.gle/EJEMPLO_ALFA_24",
            25: "https://forms.gle/EJEMPLO_ALFA_25",
            26: "https://forms.gle/EJEMPLO_ALFA_26",
            27: "https://forms.gle/EJEMPLO_ALFA_27",
            28: "https://forms.gle/EJEMPLO_ALFA_28",
            29: "https://forms.gle/EJEMPLO_ALFA_29",
            30: "https://forms.gle/EJEMPLO_ALFA_30"
        },
        
        BETA: {
            1: "https://forms.gle/ijdg5b22frXGrfKa9",
            2: "https://forms.gle/owx242yd5Qedi6gj7",
            3: "https://docs.google.com/forms/d/e/1FAIpQLSfLTOwPyaKAk73mFGrwXUvJM8-Z0APIM5VODvHGmqJUFRahmQ/viewform?usp=sharing&ouid=113497680338048717727",
            4: "https://forms.gle/aWb5PxeAgfVr1yx26",
            5: "https://forms.gle/hfCj72pQHUZKmQY39",
            6: "https://forms.gle/dExT59gcr8gUa38ZA",
            7: "https://forms.gle/akKepTXFGET71ckm6",
            8: "https://forms.gle/C1iK3JFmdLnoaJcG9",
            9: "https://forms.gle/zYqfzWJM68zrdSNu8",
            10: "https://forms.gle/irWyHbX5SRHVi9rm8",
            11: "https://forms.gle/7p8Bppsas4vXAHFw8",
            12: "https://forms.gle/gEboRE3gnMT36vhk9",
            13: "https://forms.gle/qWw4JzEzYqC7A6aT8",
            14: "https://forms.gle/kJb34w5MSmD99MrR8",
            15: "https://forms.gle/EJEMPLO_BETA_15",
            16: "https://forms.gle/EJEMPLO_BETA_16",
            17: "https://forms.gle/EJEMPLO_BETA_17",
            18: "https://forms.gle/EJEMPLO_BETA_18",
            19: "https://forms.gle/EJEMPLO_BETA_19",
            20: "https://forms.gle/EJEMPLO_BETA_20",
            21: "https://forms.gle/EJEMPLO_BETA_21",
            22: "https://forms.gle/EJEMPLO_BETA_22",
            23: "https://forms.gle/EJEMPLO_BETA_23",
            24: "https://forms.gle/EJEMPLO_BETA_24",
            25: "https://forms.gle/EJEMPLO_BETA_25",
            26: "https://forms.gle/EJEMPLO_BETA_26",
            27: "https://forms.gle/EJEMPLO_BETA_27",
            28: "https://forms.gle/EJEMPLO_BETA_28",
            29: "https://forms.gle/EJEMPLO_BETA_29",
            30: "https://forms.gle/EJEMPLO_BETA_30"
        },
        
        GAMMA: {
            1: "https://forms.gle/GZc8Yh3AN3aXR8DbA",
            2: "https://forms.gle/NPx8cvtMykYdXjYH7",
            3: "https://docs.google.com/forms/d/e/1FAIpQLSdrJmddVWBESK5E1V7_b-yZR1qkoq5IumTtIq8aA8x85HSBnA/viewform?usp=sharing&ouid=113497680338048717727",
            4: "https://forms.gle/me2wfCmcKbPLLbDF9",
            5: "https://forms.gle/2edbVKbTq41LeP4e9",
            6: "https://forms.gle/uZSeyoAwrBsrYo237",
            7: "https://forms.gle/AASBTn2cjqtrCZbT6",
            8: "https://forms.gle/DRj5dJM14xrWhEGd6",
            9: "https://forms.gle/RFjELj9rxnY1pT3z7",
            10: "https://forms.gle/ef3DjvPVkxJdLqSe8",
            11: "https://forms.gle/yTzwXf8WZHpfixM38",
            12: "https://forms.gle/SCNYKQK8LsBRoNkM8",
            13: "https://forms.gle/rAwtzGKHKjEHSrbT6",
            14: "https://forms.gle/r1mQArTkQm3EUS4cA",
            15: "https://forms.gle/EJEMPLO_GAMMA_15",
            16: "https://forms.gle/EJEMPLO_GAMMA_16",
            17: "https://forms.gle/EJEMPLO_GAMMA_17",
            18: "https://forms.gle/EJEMPLO_GAMMA_18",
            19: "https://forms.gle/EJEMPLO_GAMMA_19",
            20: "https://forms.gle/EJEMPLO_GAMMA_20",
            21: "https://forms.gle/EJEMPLO_GAMMA_21",
            22: "https://forms.gle/EJEMPLO_GAMMA_22",
            23: "https://forms.gle/EJEMPLO_GAMMA_23",
            24: "https://forms.gle/EJEMPLO_GAMMA_24",
            25: "https://forms.gle/EJEMPLO_GAMMA_25",
            26: "https://forms.gle/EJEMPLO_GAMMA_26",
            27: "https://forms.gle/EJEMPLO_GAMMA_27",
            28: "https://forms.gle/EJEMPLO_GAMMA_28",
            29: "https://forms.gle/EJEMPLO_GAMMA_29",
            30: "https://forms.gle/EJEMPLO_GAMMA_30"
        }
    }
};

// ================================
// DATOS DE ESTUDIANTES POR GRUPO
// ================================
const ESTUDIANTES_POR_GRUPO = {
    ALFA: [
        { id: 1, nombre: "Orlando Aguilar Fonseca", email: "orlandoaguilarfonseca@gmail.com", telefono: "56171023", nacionalidad: "Cuba" },
        { id: 2, nombre: "Dannier Aldana Rivero", email: "aldanadannier@gmail.com", telefono: "54944913", nacionalidad: "Cuba" },
        { id: 3, nombre: "Yusnel Argote Pérez", email: "yusnelargote@gmail.com", telefono: "5354522889", nacionalidad: "Cuba" },
        { id: 4, nombre: "Carlos Rodolfo Avila Peña", email: "97noelere@gmail.com", telefono: "+5358603602", nacionalidad: "Cuba" },
        { id: 5, nombre: "Dariel Brunet Urquia", email: "darielbrunet063@gmail.com", telefono: "51101729", nacionalidad: "Cuba" },
        { id: 6, nombre: "Eudis Daniel Cardozo Heredia", email: "eudisdanielcardozoheredia@gmail.com", telefono: "50727668", nacionalidad: "Cuba" },
        { id: 7, nombre: "Jeremías Miguel Cifuentes Lastre", email: "cifuenteslastre@gmail.com", telefono: "+5351317304", nacionalidad: "Cuba" },
        { id: 8, nombre: "Abel Angel Checca Perez", email: "abelcpz@gmail.com", telefono: "966541324", nacionalidad: "Perú" },
        { id: 9, nombre: "Saul Abner Flores Alcocer", email: "saulpay2@gmail.com", telefono: "72462615", nacionalidad: "Bolivia" },
        { id: 10, nombre: "Yailin Fonseca Pérez", email: "yailin45@gmail.com", telefono: "55079500", nacionalidad: "Cuba" },
        { id: 11, nombre: "Emanuel Fumero Núñez", email: "emanuelfumero253@gmail.com", telefono: "+53 58726216", nacionalidad: "Cuba" },
        { id: 12, nombre: "César Grabiel García Duaniz", email: "gaceniga2008@gmail.com", telefono: "+53 51118890", nacionalidad: "Cuba" },
        { id: 13, nombre: "Abimael Enrique García Paniagua", email: "kikesito199620@gmail.com", telefono: "+59177113363", nacionalidad: "Bolivia" },
        { id: 14, nombre: "Humberto Gómez Pérez", email: "tommydos084@gmail.com", telefono: "9191163202", nacionalidad: "México" },
        { id: 15, nombre: "Laynis Milagros Hernández Mir", email: "laynishernandez@gmail.com", telefono: "+5358242651", nacionalidad: "Cuba" },
        { id: 16, nombre: "Mariano Hernández Nápoles", email: "mariano8619@gmail.com", telefono: "51724493", nacionalidad: "Cuba" },
        { id: 17, nombre: "Geysi Marten Cruzata", email: "gmartencruzata@gmail.com", telefono: "7179841787", nacionalidad: "EE.UU." },
        { id: 18, nombre: "José Manuel Morales Torres", email: "josedecristo2007@gmail.com", telefono: "56394810", nacionalidad: "Cuba" },
        { id: 19, nombre: "David Mosquera Cedeño", email: "mosqueracedenodavid@gmail.com", telefono: "53687380", nacionalidad: "Cuba" },
        { id: 20, nombre: "Usiel Navarro Rodríguez", email: "navarrousiel2@gmail.com", telefono: "50069374", nacionalidad: "Cuba" },
        { id: 21, nombre: "Ezequiel Osorio Bulté", email: "ezequielosorio0711@gmail.com", telefono: "+53 51203750", nacionalidad: "Cuba" },
        { id: 22, nombre: "Ángel Antonio Osorio Noda", email: "angelosorionoda@gmail.com", telefono: "53922184", nacionalidad: "Cuba" },
        { id: 23, nombre: "Josué Pereira Arias", email: "josuepereiraa56@gmail.com", telefono: "+5351092988", nacionalidad: "Cuba" },
        { id: 24, nombre: "Nolberto Zaldivar", email: "nolbertozaldivar57@gmail.com", telefono: "54194656", nacionalidad: "Cuba" }
    ],
    
    BETA: [
        { id: 25, nombre: "Dianelis Corrales Martínez", email: "dianeliscorralesmartinez0@gmail.com", telefono: "59571348", nacionalidad: "Cuba" },
        { id: 26, nombre: "Enrique Jonathan del Castillo Gonzalez", email: "delcastillojonathan257@gmail.com", telefono: "54948063", nacionalidad: "Cuba" },
        { id: 27, nombre: "Yusnan Despaigne Cabrera", email: "despaigneyusnan@gmail.com", telefono: "56115169", nacionalidad: "Cuba" },
        { id: 28, nombre: "Carlos Alberto Dixon Magaña", email: "cdixonmagana@gmail.com", telefono: "52491097", nacionalidad: "Cuba" },
        { id: 29, nombre: "Juan Miguel Gongora Téllez", email: "juansigongora797@gmail.com", telefono: "58248023", nacionalidad: "Cuba" },
        { id: 30, nombre: "Juan Carlos Hernández Oro", email: "jh4281813@gmail.com", telefono: "52067985", nacionalidad: "Cuba" },
        { id: 31, nombre: "Rene Hernández Yirat", email: "renehernandezyirat@gmail.com", telefono: "58147112", nacionalidad: "Cuba" },
        { id: 32, nombre: "Yuraime Lache Laviada", email: "yuralache@yahoo.com", telefono: "+5352820346", nacionalidad: "Cuba" },
        { id: 33, nombre: "José Antonio Leyva Rigñack", email: "joserinack1988@gmail.com", telefono: "54951048", nacionalidad: "Cuba" },
        { id: 34, nombre: "Osiel Matos Piñon", email: "olmusic0102@gmail.com", telefono: "53490353", nacionalidad: "Cuba" },
        { id: 35, nombre: "Enrique Merma", email: "enriquemer79@gmail.com", telefono: "938535488", nacionalidad: "Perú" },
        { id: 36, nombre: "Yanetsy Nuñez Dominico", email: "yanetsy.nd@gmail.com", telefono: "54722199", nacionalidad: "Cuba" },
        { id: 37, nombre: "Joel David Plutin Seara", email: "davidjoelplutinseara@gmail.com", telefono: "63640405", nacionalidad: "Cuba" },
        { id: 38, nombre: "Mirseidis Pita Hinojosa", email: "mirseidis.pita@nauta.com.cu", telefono: "59791606", nacionalidad: "Cuba" },
        { id: 39, nombre: "Nebaith Ramos Pujay", email: "nramospujay@gmail.com", telefono: "929892376", nacionalidad: "Perú" },
        { id: 40, nombre: "Elianis Gehovanna Rodríguez Almaguer", email: "elyonelegida@gmail.com", telefono: "56511294", nacionalidad: "Cuba" },
        { id: 41, nombre: "Luis Miguel Rodríguez Hernández", email: "luismirh07@gmail.com", telefono: "58024666", nacionalidad: "Cuba" },
        { id: 42, nombre: "Orley Rodríguez Navarro", email: "orleyr84@gmail.com", telefono: "58827531", nacionalidad: "Cuba" },
        { id: 43, nombre: "Kevin Rodríguez Romero", email: "rodrigyezkevin13@gmail.com", telefono: "59351339", nacionalidad: "Cuba" },
        { id: 44, nombre: "Isabel Adjany Sánchez Ramírez", email: "isabeladjanysanchez@gmail.com", telefono: "+5355076443", nacionalidad: "Cuba" },
        { id: 45, nombre: "Neftalis Sosa coello", email: "neftalisosa40@gmail.com", telefono: "59727809", nacionalidad: "Cuba" },
        { id: 46, nombre: "Emanuel Tito Guerrero", email: "titoemanuel03@gmail.com", telefono: "51464558", nacionalidad: "Cuba" },
        { id: 47, nombre: "Janet Vargas Cuevas", email: "janetvargascuevas155@gmail.com", telefono: "52998335", nacionalidad: "Cuba" },
        { id: 71, nombre: "Yaquelín Ramírez", email: "ramirezcuadradoyaqulin@gmail.com", telefono: "56511185", nacionalidad: "Cuba" },
        { id: 74, nombre: "Ernesto Jiménez del Risco", email: "ernestjr16499@gmail.com", telefono: "58917573", nacionalidad: "Cuba" },
         { id: 75, nombre: "Melba Gainza", email: "ernestjr16499@gmail.com", telefono: "99765544", nacionalidad: "Cuba" },
         { id: 76, nombre: "Agustín Nicot", email: "nicot.llorente9@gmail.com", telefono: "53783797", nacionalidad: "Cuba" }
    ],
    
    GAMMA: [
        { id: 48, nombre: "Eliú Arias Rasúa", email: "eliuarias@nauta.cu", telefono: "56771742", nacionalidad: "Cuba" },
        { id: 49, nombre: "Aldo Benitez Suárez", email: "benitezaldo881@gmail.com", telefono: "55526727", nacionalidad: "Cuba" },
        { id: 50, nombre: "Caleb Comes Díaz", email: "calebcomesdiaz@gmail.com", telefono: "53867721", nacionalidad: "Cuba" },
        { id: 51, nombre: "Saraí Coira Rodríguez", email: "saraicoira@gmail.com", telefono: "+53 55077548", nacionalidad: "Cuba" },
        { id: 52, nombre: "Antonio Cruz Cruz", email: "krus.antonio@gmail.com", telefono: "+5352974066", nacionalidad: "Cuba" },
        { id: 53, nombre: "Yoander Cutiño Martín", email: "yoander8910@gmail.com", telefono: "54252762", nacionalidad: "Cuba" },
        { id: 54, nombre: "Luis Gerardo Escalante", email: "gerluis12345@gmail.com", telefono: "1125194390", nacionalidad: "Argentina" },
        { id: 55, nombre: "Eilen Ochoa", email: "eilenochoatabares@gmail.com", telefono: "58458529", nacionalidad: "Cuba" },
        { id: 56, nombre: "Ernesto Miguel Fernández Oliva", email: "ernestom.fernandez123@gmail.com", telefono: "+5358107514", nacionalidad: "Cuba" },
        { id: 57, nombre: "María Claudia Grave de Peralta", email: "mariaclgpc05@gmail.com", telefono: "51704889", nacionalidad: "Cuba" },
        { id: 58, nombre: "Alessandro Guillén García", email: "guillengarciaalessandro7@gmail.com", telefono: "54913901", nacionalidad: "Cuba" },
        { id: 59, nombre: "Jesús Hernández Reina", email: "jesushernandezreina400@gmail.com", telefono: "+53 63655980", nacionalidad: "Cuba" },
        { id: 60, nombre: "Ruliseidis Legra Tamayo", email: "ruliseidisl@gmail.com", telefono: "54403040", nacionalidad: "Cuba" },
        { id: 61, nombre: "Reynier Limonta Domínguez", email: "limontareynier50@gmail.com", telefono: "+53 58145138", nacionalidad: "Cuba" },
        { id: 62, nombre: "Yanisleydi Martinez Lafita", email: "martinezlafitayanisleydi@gmail.com", telefono: "51464558", nacionalidad: "Cuba" },
        { id: 63, nombre: "Ledian Medina Isaac", email: "juventud3xcristo@gmail.com", telefono: "58092690", nacionalidad: "Cuba" },
        { id: 64, nombre: "Justo Pila Reinoso", email: "justo.sarita1976@gmail.com", telefono: "+5354127358", nacionalidad: "Cuba" },
        { id: 65, nombre: "Santiago Joaquin Romero Fernández", email: "santirf2802@hotmail.com", telefono: "3624226037", nacionalidad: "Argentina" },
        { id: 66, nombre: "Wilfrido Sánchez Ramírez", email: "wsanchezramirez83@gmail.com", telefono: "52400256", nacionalidad: "Cuba" },
        { id: 67, nombre: "Ana Iris Varona González", email: "ana.iris.varona88@gmail.com", telefono: "53027626", nacionalidad: "Cuba" },
        { id: 68, nombre: "Luis Ramón Verdecia Peramo", email: "verdeciaperamo@gmail.com", telefono: "58026276", nacionalidad: "Cuba" },
        { id: 69, nombre: "Juan Gabriel Villahermosa", email: "pastorgabrielv.na@gmail.com", telefono: "+584265589474", nacionalidad: "Venezuela" },
        { id: 70, nombre: "Lazara Salet Vera Gomez", email: "Veragomezlazarasslet@gmail.con", telefono: "50334200", nacionalidad: "Cuba" },
        { id: 72, nombre: "Frank Rodríguez Díaz", email: "dyamila964@gmail.com", telefono: "52998335", nacionalidad: "Cuba" },
        { id: 73, nombre: "José Daniel Arias Alvarez", email: "eliuarias@nauta.cu", telefono: "56535853", nacionalidad: "Cuba" }
    ]
};

// ID de profesores (IDs reservados: 100-199 para profesores)
const PROFESORES = [
    { id: 100, nombre: "Rolando Y. Desdín García", grupos: ["ALFA", "BETA"], rol: "profesor_titular" },
    { id: 101, nombre: "Raidel Ramón Toranzo", grupos: ["ALFA"], rol: "profesor_asistente" },
    { id: 102, nombre: "Leonard Luis Carrera Castillo", grupos: ["ALFA"], rol: "facilitador" },
    { id: 103, nombre: "Alexei Sánchez", grupos: ["ALFA"], rol: "facilitador" },
    { id: 104, nombre: "Yordanka Álvarez Pérez", grupos: ["BETA"], rol: "profesor_titular" },
    { id: 105, nombre: "Daniel Ramírez", grupos: ["BETA"], rol: "facilitador" },
    { id: 106, nombre: "Joel Gutiérrez", grupos: ["GAMMA"], rol: "profesor_titular" },
    { id: 107, nombre: "Yurleidy Domínguez Vega", grupos: ["GAMMA"], rol: "profesor_titular" },
    { id: 108, nombre: "Marcos González", grupos: ["GAMMA"], rol: "asistente" },
    { id: 109, nombre: "Mario L. Mondeja Leyva", grupos: ["GAMMA"], rol: "asistente" }
];

// ================================
// CLASE PRINCIPAL DE LA APLICACIÓN
// ================================
class CursoGriegoApp {
    constructor() {
        this.usuarioActual = null;
        this.grupoSeleccionado = null;
        this.inicializar();
    }

    inicializar() {
        this.verificarAutenticacion();
        this.inicializarEventos();
    }

    // ================================
    // AUTENTICACIÓN
    // ================================
    verificarAutenticacion() {
        const usuario = localStorage.getItem('usuarioActual');
        const autenticado = localStorage.getItem('autenticado');
        
        if (usuario && autenticado === 'true') {
            this.usuarioActual = JSON.parse(usuario);
            this.mostrarDashboard();
        } else {
            this.mostrarSeleccionGrupo();
        }
    }

    mostrarSeleccionGrupo() {
        const container = document.getElementById('app-container');
        container.innerHTML = `
            <div class="login-container fade-in">
                <div class="login-header">
                    <img src="mas logos.jpeg" alt="Ministerio Vivos para Servir" class="logo-main">
                    <h1>Curso de Griego Koiné</h1>
                    <p class="text-muted">Ministerio "Vivos para Servir"</p>
                </div>
                
                <div class="form-group">
                    <label for="grupoSelect">
                        <i class="fas fa-users"></i> Selecciona tu grupo:
                    </label>
                    <select id="grupoSelect" class="form-control" onchange="app.cargarEstudiantesGrupo()">
                        <option value="">-- Selecciona tu grupo --</option>
                        <option value="ALFA">${CONFIG.GRUPOS.ALFA.nombre} (24 estudiantes)</option>
                        <option value="BETA">${CONFIG.GRUPOS.BETA.nombre} (23 estudiantes)</option>
                        <option value="GAMMA">${CONFIG.GRUPOS.GAMMA.nombre} (23 estudiantes)</option>
                    </select>
                </div>
                
                <div id="estudiantesContainer" class="d-none">
                    <div class="form-group">
                        <label for="estudianteSelect">
                            <i class="fas fa-user"></i> Selecciona tu nombre:
                        </label>
                        <select id="estudianteSelect" class="form-control">
                            <option value="">-- Selecciona tu nombre --</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="userId">
                            <i class="fas fa-key"></i> ID de usuario:
                        </label>
                        <input type="text" id="userId" class="form-control" 
                               placeholder="Ingresa tu ID numérico asignado">
                        <small class="text-muted">(El ID numérico te fue proporcionado al inicio del curso)</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">
                            <i class="fas fa-lock"></i> Contraseña:
                        </label>
                        <input type="password" id="password" class="form-control" 
                               placeholder="Ingresa la contraseña compartida">
                    </div>
                    
                    <button onclick="app.login()" class="btn btn-block">
                        <i class="fas fa-sign-in-alt"></i> Ingresar al Curso
                    </button>
                </div>
                
                <div id="profesoresContainer" class="d-none">
                    <div class="form-group">
                        <label for="profesorSelect">
                            <i class="fas fa-chalkboard-teacher"></i> Selecciona tu nombre (Profesor):
                        </label>
                        <select id="profesorSelect" class="form-control">
                            <option value="">-- Selecciona tu nombre --</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="profesorId">
                            <i class="fas fa-key"></i> ID de profesor:
                        </label>
                        <input type="text" id="profesorId" class="form-control" 
                               placeholder="Ingresa tu ID de profesor">
                    </div>
                    
                    <div class="form-group">
                        <label for="profesorPassword">
                            <i class="fas fa-lock"></i> Contraseña de profesor:
                        </label>
                        <input type="password" id="profesorPassword" class="form-control" 
                               placeholder="Ingresa la contraseña de profesor">
                    </div>
                    
                    <button onclick="app.loginProfesor()" class="btn btn-block btn-secondary">
                        <i class="fas fa-sign-in-alt"></i> Ingresar como Profesor
                    </button>
                </div>
                
                <div class="mt-20 text-center">
                    <button onclick="app.mostrarFormularioProfesor()" class="btn btn-outline">
                        <i class="fas fa-chalkboard-teacher"></i> Soy profesor/facilitador
                    </button>
                </div>
                
                <div id="loginError" class="alert alert-danger mt-20 d-none">
                    <i class="fas fa-exclamation-circle"></i>
                    <span id="errorText"></span>
                </div>
            </div>
        `;
    }

    cargarEstudiantesGrupo() {
        const grupoSelect = document.getElementById('grupoSelect');
        const estudiantesContainer = document.getElementById('estudiantesContainer');
        const estudianteSelect = document.getElementById('estudianteSelect');
        const profesoresContainer = document.getElementById('profesoresContainer');
        
        this.grupoSeleccionado = grupoSelect.value;
        
        if (!this.grupoSeleccionado) {
            estudiantesContainer.classList.add('d-none');
            profesoresContainer.classList.add('d-none');
            return;
        }
        
        estudiantesContainer.classList.remove('d-none');
        estudianteSelect.innerHTML = '<option value="">-- Selecciona tu nombre --</option>';
        
        const estudiantes = ESTUDIANTES_POR_GRUPO[this.grupoSeleccionado];
        estudiantes.forEach(estudiante => {
            const option = document.createElement('option');
            option.value = estudiante.id;
            option.textContent = `${estudiante.id} - ${estudiante.nombre}`;
            estudianteSelect.appendChild(option);
        });
        
        profesoresContainer.classList.add('d-none');
    }

    mostrarFormularioProfesor() {
        const estudiantesContainer = document.getElementById('estudiantesContainer');
        const profesoresContainer = document.getElementById('profesoresContainer');
        const profesorSelect = document.getElementById('profesorSelect');
        const grupoSelect = document.getElementById('grupoSelect');
        
        estudiantesContainer.classList.add('d-none');
        profesorSelect.innerHTML = '<option value="">-- Selecciona tu nombre --</option>';
        
        PROFESORES.forEach(profesor => {
            const option = document.createElement('option');
            option.value = profesor.id;
            option.textContent = `${profesor.id} - ${profesor.nombre} (${profesor.rol})`;
            profesorSelect.appendChild(option);
        });
        
        profesoresContainer.classList.remove('d-none');
        grupoSelect.value = '';
    }

    login() {
        const grupo = this.grupoSeleccionado;
        const estudianteId = parseInt(document.getElementById('estudianteSelect').value);
        const userId = document.getElementById('userId').value.trim();
        const password = document.getElementById('password').value;
        
        if (!grupo) {
            this.mostrarError('Debes seleccionar un grupo');
            return;
        }
        
        if (!estudianteId) {
            this.mostrarError('Debes seleccionar tu nombre');
            return;
        }
        
        if (!userId) {
            this.mostrarError('Debes ingresar tu ID numérico');
            return;
        }
        
        if (!password) {
            this.mostrarError('Debes ingresar la contraseña');
            return;
        }
        
        if (userId !== estudianteId.toString()) {
            this.mostrarError('El ID no coincide con el estudiante seleccionado');
            return;
        }
        
        if (password === CONFIG.PASSWORD_UNICA) {
            const estudiantes = ESTUDIANTES_POR_GRUPO[grupo];
            const estudiante = estudiantes.find(e => e.id === estudianteId);
            
            if (!estudiante) {
                this.mostrarError('Estudiante no encontrado en el grupo seleccionado');
                return;
            }
            
            const usuario = {
                id: estudianteId.toString(),
                nombre: estudiante.nombre,
                email: estudiante.email,
                telefono: estudiante.telefono,
                nacionalidad: estudiante.nacionalidad,
                grupo: grupo,
                grupoNombre: CONFIG.GRUPOS[grupo].nombre,
                fechaRegistro: new Date().toISOString(),
                rol: 'estudiante',
                progreso: this.obtenerProgresoUsuario(estudianteId.toString())
            };
            
            localStorage.setItem('usuarioActual', JSON.stringify(usuario));
            localStorage.setItem('autenticado', 'true');
            
            this.usuarioActual = usuario;
            this.mostrarDashboard();
        } else {
            this.mostrarError('Contraseña incorrecta');
        }
    }

    loginProfesor() {
        const profesorId = parseInt(document.getElementById('profesorSelect').value);
        const userId = document.getElementById('profesorId').value.trim();
        const password = document.getElementById('profesorPassword').value;
        
        if (!profesorId) {
            this.mostrarError('Debes seleccionar tu nombre');
            return;
        }
        
        if (!userId) {
            this.mostrarError('Debes ingresar tu ID de profesor');
            return;
        }
        
        if (!password) {
            this.mostrarError('Debes ingresar la contraseña');
            return;
        }
        
        if (userId !== profesorId.toString()) {
            this.mostrarError('El ID no coincide con el profesor seleccionado');
            return;
        }
        
        if (password === CONFIG.PASSWORD_UNICA || password === CONFIG.CODIGO_ADMIN) {
            const profesor = PROFESORES.find(p => p.id === profesorId);
            
            if (!profesor) {
                this.mostrarError('Profesor no encontrado');
                return;
            }
            
            const usuario = {
                id: profesorId.toString(),
                nombre: profesor.nombre,
                grupos: profesor.grupos,
                rol: profesor.rol,
                fechaRegistro: new Date().toISOString(),
                esProfesor: true,
                permisos: this.obtenerPermisosProfesor(profesor.rol)
            };
            
            localStorage.setItem('usuarioActual', JSON.stringify(usuario));
            localStorage.setItem('autenticado', 'true');
            
            this.usuarioActual = usuario;
            this.mostrarDashboard();
        } else {
            this.mostrarError('Contraseña incorrecta');
        }
    }

    obtenerPermisosProfesor(rol) {
        const permisos = {
            profesor_titular: ['ver_todos_grupos', 'editar_contenido', 'generar_codigos', 'ver_estadisticas', 'desbloquear_semanas'],
            profesor_asistente: ['ver_grupo_asignado', 'editar_contenido', 'ver_estadisticas'],
            profesora: ['ver_grupo_asignado', 'editar_contenido', 'ver_estadisticas'],
            facilitador: ['ver_grupo_asignado', 'ver_estadisticas'],
            asistente: ['ver_grupo_asignado']
        };
        
        return permisos[rol] || ['ver_grupo_asignado'];
    }

    logout() {
        localStorage.removeItem('usuarioActual');
        localStorage.removeItem('autenticado');
        this.usuarioActual = null;
        this.grupoSeleccionado = null;
        this.mostrarSeleccionGrupo();
    }

    // ================================
    // CÁLCULO DE SEMANA ACTUAL GLOBAL
    // ================================
    calcularSemanaActualGlobal() {
        const fechaInicio = new Date(CONFIG.FECHA_INICIO_GLOBAL);
        const hoy = new Date();
        
        // Si hoy es antes de la fecha de inicio, semana 0 (ninguna desbloqueada)
        if (hoy < fechaInicio) {
            return 0;
        }
        
        // Calcular diferencia en días
        const diffTiempo = hoy.getTime() - fechaInicio.getTime();
        const diffDias = Math.floor(diffTiempo / (1000 * 60 * 60 * 24));
        
        // Calcular semana actual (1 = primera semana)
        let semanaActual = Math.floor(diffDias / 7) + 1;
        
        // Limitar al total de semanas del curso
        return Math.min(semanaActual, CONFIG.TOTAL_SEMANAS);
    }

    // ================================
    // DASHBOARD
    // ================================
    mostrarDashboard() {
        const esProfesor = this.usuarioActual.esProfesor || false;
        const progreso = this.usuarioActual.progreso || {};
        const semanasHTML = this.generarGridSemanas();
        
        const container = document.getElementById('app-container');
        container.innerHTML = `
            <div class="dashboard fade-in">
                <!-- Header -->
                <div class="dashboard-header">
                    <div class="user-info">
                        <div class="user-avatar ${esProfesor ? 'avatar-profesor' : 'avatar-estudiante'}">
                            ${this.usuarioActual.nombre.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h2>Bienvenido, ${this.usuarioActual.nombre}</h2>
                            <p class="text-muted">
                                ${esProfesor ? 
                                    `<i class="fas fa-chalkboard-teacher"></i> ${this.usuarioActual.rol} - ` : 
                                    `<i class="fas fa-user-graduate"></i> Estudiante - `}
                                ${this.usuarioActual.grupoNombre || 'Curso de Griego Koiné Elemental'}
                            </p>
                            ${!esProfesor ? `<p class="text-muted">ID: ${this.usuarioActual.id}</p>` : ''}
                        </div>
                    </div>
                    
                    <div class="user-actions">
                        <button onclick="app.logout()" class="btn btn-danger">
                            <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
                        </button>
                    </div>
                </div>
                
                ${!esProfesor ? this.generarResumenProgreso(progreso) : ''}
                
                <!-- Semanas del Curso -->
                <div class="weeks-section">
                    <div class="section-title">
                        <i class="fas fa-road"></i>
                        <h3>Plan de Estudios (${CONFIG.TOTAL_SEMANAS} semanas)</h3>
                    </div>
                    <p class="text-muted mb-20">Haz clic en una semana para acceder a sus contenidos</p>
                    
                    <div class="weeks-grid" id="weeksGrid">
                        ${semanasHTML}
                    </div>
                </div>
                
                ${!esProfesor ? this.generarSeccionDesbloqueo() : ''}
            </div>
            
            <!-- Modal Desbloqueo -->
            <div class="modal" id="unlockModal">
                <div class="modal-content">
                    <span class="close-modal" onclick="app.cerrarModalDesbloqueo()">&times;</span>
                    <h3><i class="fas fa-unlock-alt"></i> Desbloquear Contenido</h3>
                    
                    <div class="form-group mt-20">
                        <label for="unlockCode">Código de Desbloqueo:</label>
                        <input type="text" id="unlockCode" class="form-control" 
                               placeholder="Código especial proporcionado por el profesor">
                    </div>
                    
                    <div class="form-group">
                        <label for="weekToUnlock">Semana a desbloquear:</label>
                        <select id="weekToUnlock" class="form-control">
                            ${Array.from({length: CONFIG.TOTAL_SEMANAS}, (_, i) => 
                                `<option value="${i + 1}">Semana ${i + 1}</option>`
                            ).join('')}
                        </select>
                    </div>
                    
                    <button onclick="app.desbloquearSemana()" class="btn btn-success btn-block mt-20">
                        <i class="fas fa-check"></i> Desbloquear
                    </button>
                    
                    <div id="unlockError" class="alert alert-danger mt-20 d-none">
                        <i class="fas fa-exclamation-circle"></i>
                        <span id="unlockErrorText"></span>
                    </div>
                </div>
            </div>
        `;
        
        this.inicializarEventosDashboard();
    }

    generarResumenProgreso(progreso) {
        return `
            <div class="progress-summary">
                <div class="section-title">
                    <i class="fas fa-chart-line"></i>
                    <h3>Tu Progreso</h3>
                </div>
                
                <div class="progress-cards">
                    <div class="progress-card">
                        <i class="fas fa-calendar-week"></i>
                        <div class="progress-number">${progreso.semanasCompletadas || 0}/${CONFIG.TOTAL_SEMANAS}</div>
                        <p>Semanas Completadas</p>
                    </div>
                    
                    <div class="progress-card">
                        <i class="fas fa-book"></i>
                        <div class="progress-number">${progreso.leccionesCompletadas || 0}</div>
                        <p>Lecciones</p>
                    </div>
                    
                    <div class="progress-card">
                        <i class="fas fa-gamepad"></i>
                        <div class="progress-number">${progreso.juegosCompletados || 0}</div>
                        <p>Juegos</p>
                    </div>
                    
                    <div class="progress-card">
                        <i class="fas fa-clipboard-check"></i>
                        <div class="progress-number">${progreso.examenesCompletados || 0}</div>
                        <p>Exámenes</p>
                    </div>
                </div>
            </div>
        `;
    }

    generarSeccionDesbloqueo() {
        return `
            <div class="mt-20 text-center">
                <button onclick="app.mostrarModalDesbloqueo()" class="btn btn-warning">
                    <i class="fas fa-unlock"></i> Desbloquear Semana con Código
                </button>
                <p class="text-muted mt-10"><small>¿Necesitas acceso anticipado? Solicita un código a tu profesor.</small></p>
            </div>
        `;
    }

    generarGridSemanas() {
        let html = '';
        const esProfesor = this.usuarioActual.esProfesor || false;
        const semanaActualGlobal = this.calcularSemanaActualGlobal();
        
        if (esProfesor) {
            // Vista para profesores - mostrar todas las semanas
            for (let semana = 1; semana <= CONFIG.TOTAL_SEMANAS; semana++) {
                const tituloSemana = this.obtenerTituloSemana(semana);
                
                html += `
                    <div class="week-card profesor-week" data-week="${semana}" onclick="app.abrirSemana(${semana})">
                        <div class="week-number">${semana}</div>
                        <h4>${tituloSemana.titulo}</h4>
                        <p class="text-muted">${tituloSemana.tema}</p>
                    </div>
                `;
            }
        } else {
            // Vista para estudiantes - lógica de desbloqueo por fecha global + códigos
            const semanasDesbloqueadas = JSON.parse(localStorage.getItem(`semanasDesbloqueadas_${this.usuarioActual.id}`) || '[]');
            const semanasCompletadas = JSON.parse(localStorage.getItem(`semanasCompletadas_${this.usuarioActual.id}`) || '[]');
            
            for (let semana = 1; semana <= CONFIG.TOTAL_SEMANAS; semana++) {
                // Una semana está desbloqueada si:
                // 1. Es menor o igual a la semana actual global, O
                // 2. Fue desbloqueada manualmente con código
                const estaDesbloqueada = semanasDesbloqueadas.includes(semana) || semana <= semanaActualGlobal;
                const estaCompletada = semanasCompletadas.includes(semana);
                const esActual = semana === semanaActualGlobal && !estaCompletada;
                
                let badge = '';
                if (esActual) {
                    badge = '<span class="week-badge" style="background: var(--warning);">Semana Actual</span>';
                } else if (estaCompletada) {
                    badge = '<span class="week-badge" style="background: var(--success);"><i class="fas fa-check"></i> Completada</span>';
                } else if (semanasDesbloqueadas.includes(semana) && semana > semanaActualGlobal) {
                    badge = '<span class="week-badge" style="background: var(--info);"><i class="fas fa-unlock"></i> Desbloqueada</span>';
                }
                
                const tituloSemana = this.obtenerTituloSemana(semana);
                
                html += `
                    <div class="week-card ${estaDesbloqueada ? '' : 'locked'} ${estaCompletada ? 'completed' : ''} ${esActual ? 'current' : ''}" 
                         data-week="${semana}" 
                         ${estaDesbloqueada ? `onclick="app.abrirSemana(${semana})"` : ''}>
                        ${badge}
                        <div class="week-number">${semana}</div>
                        <h4>${tituloSemana.titulo}</h4>
                        <p class="text-muted">${tituloSemana.tema}</p>
                        ${!estaDesbloqueada ? 
                            `<p><small><i class="fas fa-lock"></i> Disponible ${this.obtenerFechaDesbloqueo(semana)}</small></p>` : ''}
                    </div>
                `;
            }
        }
        
        return html;
    }

    obtenerTituloSemana(numero) {
        const semanas = {
            1: { titulo: "Alfabeto Griego", tema: "Introducción al alfabeto" },
            2: { titulo: "Sustantivos y Casos", tema: "Gramática básica" },
            3: { titulo: "Artículo Definido", tema: "Traducción inicial" },
            4: { titulo: "Preposiciones y Eimi", tema: "Verbo ser" },
            5: { titulo: "Adjetivos", tema: "Concordancia" },
            6: { titulo: "Tercera Declinación", tema: "Sustantivos" },
            7: { titulo: "Pronombres Personales", tema: "Primera y segunda" },
            8: { titulo: "Pronombres Personales", tema: "Tercera persona" },
            9: { titulo: "Pronombres Demostrativos", tema: "οὗτος, ἐκεῖνος" },
            10: { titulo: "Verbo - Presente", tema: "Activo Indicativo" },
            11: { titulo: "Verbos Contractos", tema: "Voz pasiva" },
            12: { titulo: "Futuro Activo", tema: "Medio Pasivo" },
            13: { titulo: "Imperfecto", tema: "Indicativo" },
            14: { titulo: "Segundo Aoristo", tema: "Formación" },
            15: { titulo: "Consolidación", tema: "Repaso general" },
            16: { titulo: "Primer Aoristo", tema: "Aoristo sigma" },
            17: { titulo: "Aoristo/Futuro Pasivo", tema: "Formas pasivas" },
            18: { titulo: "Perfecto", tema: "Tiempo perfecto" },
            19: { titulo: "Participios", tema: "Introducción" },
            20: { titulo: "Participios Adverbiales I", tema: "Circunstanciales" },
            21: { titulo: "Participios Adverbiales II", tema: "Causales" },
            22: { titulo: "Participios Adjetivales", tema: "Atributivos" },
            23: { titulo: "Participios Combinativos", tema: "Con artículo" },
            24: { titulo: "Subjuntivo", tema: "Modo subjuntivo" },
            25: { titulo: "Infinitivo", tema: "Oraciones infinitivas" },
            26: { titulo: "Imperativo", tema: "Modo imperativo" },
            27: { titulo: "Conjugaciones Atemáticas", tema: "Verbos irregulares" },
            28: { titulo: "Consolidación Final", tema: "Repaso completo" },
            29: { titulo: "Lectura Guiada I", tema: "Juan 1:1-18" },
            30: { titulo: "Lectura Guiada II", tema: "1 Juan 1:1-10" }
        };
        
        return semanas[numero] || { titulo: `Semana ${numero}`, tema: "Contenido del curso" };
    }

    obtenerFechaDesbloqueo(semana) {
        const fechaInicio = new Date(CONFIG.FECHA_INICIO_GLOBAL);
        const fechaDesbloqueo = new Date(fechaInicio.getTime() + ((semana - 1) * 7 * 24 * 60 * 60 * 1000));
        return fechaDesbloqueo.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });
    }

    abrirSemana(numero) {
        localStorage.setItem('semanaActual', numero);
        window.location.href = `semana.html?semana=${numero}`;
    }

    // ================================
    // DESBLOQUEO CON CÓDIGO
    // ================================
    mostrarModalDesbloqueo() {
        document.getElementById('unlockModal').classList.add('active');
    }

    cerrarModalDesbloqueo() {
        document.getElementById('unlockModal').classList.remove('active');
    }

    desbloquearSemana() {
        const codigo = document.getElementById('unlockCode').value.trim();
        const semana = parseInt(document.getElementById('weekToUnlock').value);
        
        // Código para desbloquear todas las semanas
        if (codigo === 'DESBLOQUEAR_TODO') {
            this.desbloquearTodasSemanas();
            this.mostrarExito('¡Todas las semanas han sido desbloqueadas!');
        } 
        // Código para desbloquear una semana específica
        else if (codigo === `SEMANA_${semana}`) {
            this.agregarSemanaDesbloqueada(semana);
            this.mostrarExito(`¡Semana ${semana} desbloqueada!`);
        }
        // Código de administrador
        else if (codigo === CONFIG.CODIGO_ADMIN) {
            this.desbloquearTodasSemanas();
            this.mostrarExito('¡Todas las semanas desbloqueadas con código de administrador!');
        }
        else {
            this.mostrarErrorDesbloqueo('Código de desbloqueo inválido');
        }
    }

    agregarSemanaDesbloqueada(semana) {
        const semanasDesbloqueadas = JSON.parse(localStorage.getItem(`semanasDesbloqueadas_${this.usuarioActual.id}`) || '[]');
        if (!semanasDesbloqueadas.includes(semana)) {
            semanasDesbloqueadas.push(semana);
            localStorage.setItem(`semanasDesbloqueadas_${this.usuarioActual.id}`, JSON.stringify(semanasDesbloqueadas));
            this.mostrarDashboard(); // Refrescar
        }
    }

    desbloquearTodasSemanas() {
        const todasSemanas = Array.from({length: CONFIG.TOTAL_SEMANAS}, (_, i) => i + 1);
        localStorage.setItem(`semanasDesbloqueadas_${this.usuarioActual.id}`, JSON.stringify(todasSemanas));
        this.mostrarDashboard(); // Refrescar
    }

    mostrarExito(mensaje) {
        this.cerrarModalDesbloqueo();
        alert(mensaje);
    }

    // ================================
    // PROGRESO
    // ================================
    obtenerProgresoUsuario(userId) {
        return JSON.parse(localStorage.getItem(`progreso_${userId}`)) || {
            semanasCompletadas: 0,
            leccionesCompletadas: 0,
            juegosCompletados: 0,
            examenesCompletados: 0,
            ultimaActividad: new Date().toISOString()
        };
    }

    // ================================
    // MENSAJES DE ERROR
    // ================================
    mostrarError(mensaje) {
        const error = document.getElementById('loginError');
        if (error) {
            document.getElementById('errorText').textContent = mensaje;
            error.classList.remove('d-none');
            setTimeout(() => error.classList.add('d-none'), 5000);
        } else {
            alert(`Error: ${mensaje}`);
        }
    }

    mostrarErrorDesbloqueo(mensaje) {
        const error = document.getElementById('unlockError');
        if (error) {
            document.getElementById('unlockErrorText').textContent = mensaje;
            error.classList.remove('d-none');
            setTimeout(() => error.classList.add('d-none'), 5000);
        }
    }

    // ================================
    // EVENTOS
    // ================================
    inicializarEventos() {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                if (document.getElementById('password')) {
                    this.login();
                } else if (document.getElementById('profesorPassword')) {
                    this.loginProfesor();
                }
            }
        });
        
        // Cerrar modal al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }
        });
    }

    inicializarEventosDashboard() {
        // Los eventos se manejan con onclick
    }
}

// ================================
// INICIALIZAR APLICACIÓN
// ================================
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CursoGriegoApp();
});

// Añadir estilos CSS adicionales
const style = document.createElement('style');
style.textContent = `
    .avatar-profesor {
        background: linear-gradient(135deg, #8E44AD 0%, #9B59B6 100%) !important;
    }
    
    .avatar-estudiante {
        background: linear-gradient(135deg, #275c90 0%, #34495E 100%) !important;
    }
    
    .profesor-week {
        border: 2px dashed #8E44AD !important;
        background: rgba(142, 68, 173, 0.05) !important;
    }
    
    .profesor-week:hover {
        border-color: #6C3483 !important;
        background: rgba(142, 68, 173, 0.1) !important;
    }
    
    .btn-outline {
        background: transparent !important;
        border: 2px solid var(--primary) !important;
        color: var(--primary) !important;
    }
    
    .btn-outline:hover {
        background: var(--primary) !important;
        color: white !important;
    }
    
    .week-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 0.7rem;
        padding: 3px 8px;
        border-radius: 20px;
        font-weight: 500;
        background: var(--info);
        color: white;
    }
    
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        align-items: center;
        justify-content: center;
    }
    
    .modal.active {
        display: flex;
    }
    
    .modal-content {
        background: white;
        padding: 30px;
        border-radius: var(--radius);
        max-width: 500px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
    }
    
    .close-modal {
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: var(--text-muted);
    }
    
    .close-modal:hover {
        color: var(--danger);
    }
`;
document.head.appendChild(style);
