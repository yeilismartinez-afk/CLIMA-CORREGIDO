
const datosClima = [
    {
        id: "osorno", nombre: "Osorno", tempActual: 18, humedad: 20, viento: 15, icono: "☀️",
        pronosticoSemanal: [
            { dia: "Lun", min: 10, max: 20, estado: "Soleado" },
            { dia: "Mar", min: 12, max: 22, estado: "Soleado" },
            { dia: "Mié", min: 9, max: 18, estado: "Nublado" },
            { dia: "Jue", min: 8, max: 15, estado: "Lluvioso" },
            { dia: "Vie", min: 11, max: 19, estado: "Soleado" },
            { dia: "Sáb", min: 10, max: 21, estado: "Soleado" },
            { dia: "Dom", min: 12, max: 23, estado: "Soleado" }
        ]
    },
    {
        id: "valdivia", nombre: "Valdivia", tempActual: 8, humedad: 55, viento: 50, icono: "⛅",
        pronosticoSemanal: [
            { dia: "Lun", min: 5, max: 10, estado: "Lluvioso" },
            { dia: "Mar", min: 6, max: 11, estado: "Lluvioso" },
            { dia: "Mié", min: 4, max: 9, estado: "Nublado" },
            { dia: "Jue", min: 5, max: 12, estado: "Nublado" },
            { dia: "Vie", min: 7, max: 14, estado: "Soleado" },
            { dia: "Sáb", min: 6, max: 11, estado: "Lluvioso" },
            { dia: "Dom", min: 5, max: 10, estado: "Lluvioso" }
        ]
    },
    {
        id: "valparaiso", nombre: "Valparaíso", tempActual: 12, humedad: 35, viento: 70, icono: "⛅",
        pronosticoSemanal: [
            { dia: "Lun", min: 11, max: 15, estado: "Nublado" },
            { dia: "Mar", min: 10, max: 14, estado: "Nublado" },
            { dia: "Mié", min: 12, max: 17, estado: "Soleado" },
            { dia: "Jue", min: 13, max: 18, estado: "Soleado" },
            { dia: "Vie", min: 11, max: 16, estado: "Nublado" },
            { dia: "Sáb", min: 10, max: 15, estado: "Nublado" },
            { dia: "Dom", min: 12, max: 17, estado: "Soleado" }
        ]
    },
    {
        id: "curico", nombre: "Curicó", tempActual: 11, humedad: 35, viento: 50, icono: "☁️",
        pronosticoSemanal: [
            { dia: "Lun", min: 8, max: 14, estado: "Nublado" },
            { dia: "Mar", min: 7, max: 13, estado: "Nublado" },
            { dia: "Mié", min: 6, max: 12, estado: "Lluvioso" },
            { dia: "Jue", min: 9, max: 15, estado: "Soleado" },
            { dia: "Vie", min: 8, max: 14, estado: "Nublado" },
            { dia: "Sáb", min: 7, max: 13, estado: "Soleado" },
            { dia: "Dom", min: 8, max: 16, estado: "Soleado" }
        ]
    },
    {
        id: "puerto-montt", nombre: "Puerto Montt", tempActual: 8, humedad: 85, viento: 20, icono: "🌧️",
        pronosticoSemanal: [
            { dia: "Lun", min: 6, max: 10, estado: "Lluvioso" },
            { dia: "Mar", min: 5, max: 9, estado: "Lluvioso" },
            { dia: "Mié", min: 7, max: 11, estado: "Lluvioso" },
            { dia: "Jue", min: 6, max: 10, estado: "Nublado" },
            { dia: "Vie", min: 5, max: 9, estado: "Lluvioso" },
            { dia: "Sáb", min: 4, max: 8, estado: "Lluvioso" },
            { dia: "Dom", min: 6, max: 11, estado: "Nublado" }
        ]
    },
    {
        id: "vina-del-mar", nombre: "Viña del Mar", tempActual: 12, humedad: 5, viento: 50, icono: "☁️",
        pronosticoSemanal: [
            { dia: "Lun", min: 10, max: 14, estado: "Nublado" },
            { dia: "Mar", min: 11, max: 15, estado: "Nublado" },
            { dia: "Mié", min: 9, max: 13, estado: "Nublado" },
            { dia: "Jue", min: 12, max: 17, estado: "Soleado" },
            { dia: "Vie", min: 13, max: 18, estado: "Soleado" },
            { dia: "Sáb", min: 11, max: 15, estado: "Nublado" },
            { dia: "Dom", min: 10, max: 14, estado: "Nublado" }
        ]
    },
    {
        id: "punta-arenas", nombre: "Punta Arenas", tempActual: 8, humedad: 55, viento: 50, icono: "🌧️",
        pronosticoSemanal: [
            { dia: "Lun", min: 2, max: 7, estado: "Lluvioso" },
            { dia: "Mar", min: 1, max: 6, estado: "Lluvioso" },
            { dia: "Mié", min: 3, max: 8, estado: "Nublado" },
            { dia: "Jue", min: 2, max: 7, estado: "Lluvioso" },
            { dia: "Vie", min: 0, max: 5, estado: "Lluvioso" },
            { dia: "Sáb", min: 1, max: 6, estado: "Nublado" },
            { dia: "Dom", min: 3, max: 8, estado: "Soleado" }
        ]
    },
    {
        id: "arica", nombre: "Arica", tempActual: 15, humedad: 51, viento: 30, icono: "⛅",
        pronosticoSemanal: [
            { dia: "Lun", min: 14, max: 19, estado: "Soleado" },
            { dia: "Mar", min: 15, max: 20, estado: "Soleado" },
            { dia: "Mié", min: 14, max: 18, estado: "Nublado" },
            { dia: "Jue", min: 13, max: 17, estado: "Nublado" },
            { dia: "Vie", min: 15, max: 21, estado: "Soleado" },
            { dia: "Sáb", min: 16, max: 22, estado: "Soleado" },
            { dia: "Dom", min: 15, max: 20, estado: "Soleado" }
        ]
    },
    {
        id: "santiago", nombre: "Santiago", tempActual: 11, humedad: 35, viento: 15, icono: "🌧️",
        pronosticoSemanal: [
            { dia: "Lun", min: 8, max: 14, estado: "Nublado" },
            { dia: "Mar", min: 9, max: 13, estado: "Lluvioso" },
            { dia: "Mié", min: 7, max: 12, estado: "Lluvioso" },
            { dia: "Jue", min: 6, max: 15, estado: "Soleado" },
            { dia: "Vie", min: 8, max: 16, estado: "Soleado" },
            { dia: "Sáb", min: 9, max: 14, estado: "Nublado" },
            { dia: "Dom", min: 8, max: 15, estado: "Soleado" }
        ]
    },
    {
        id: "antofagasta", nombre: "Antofagasta", tempActual: 19, humedad: 35, viento: 5, icono: "☀️",
        pronosticoSemanal: [
            { dia: "Lun", min: 15, max: 21, estado: "Soleado" },
            { dia: "Mar", min: 16, max: 22, estado: "Soleado" },
            { dia: "Mié", min: 16, max: 20, estado: "Soleado" },
            { dia: "Jue", min: 14, max: 19, estado: "Nublado" },
            { dia: "Vie", min: 15, max: 21, estado: "Soleado" },
            { dia: "Sáb", min: 17, max: 23, estado: "Soleado" },
            { dia: "Dom", min: 16, max: 22, estado: "Soleado" }
        ]
    }
];

// Mapas de iconos por estado para las vistas de detalle
const estadoIconos = { "Soleado": "☀️", "Nublado": "☁️", "Lluvioso": "🌧️" };

// Elementos del DOM
const gridCiudades = document.getElementById("grid-ciudades");
const homeView = document.getElementById("home-view");
const detailView = document.getElementById("detail-view");
const btnHome = document.getElementById("btn-home");
const btnBack = document.getElementById("btn-back");

// 2. Funciones de Renderizado e Interfaz
function renderizarHome() {
    gridCiudades.innerHTML = "";
    datosClima.forEach(ciudad => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div>${ciudad.icono}</div>
            <h2>${ciudad.nombre}</h2>
            <div class="temp">${ciudad.tempActual}°C</div>
            <div class="meta">
                <span>${ciudad.humedad}%<br>Humedad</span>
                <span>${ciudad.viento}km<br>Viento</span>
            </div>
            <button class="btn-primary btn-detalle" data-id="${ciudad.id}">Ver detalles</button>
        `;
        gridCiudades.appendChild(card);
    });

    // Delegación de eventos para clicks en los botones
    document.querySelectorAll(".btn-detalle").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const ciudadId = e.target.getAttribute("data-id");
            mostrarDetalle(ciudadId);
        });
    });
}

function mostrarDetalle(id) {
    const ciudad = datosClima.find(c => c.id === id);
    if (!ciudad) return;


    homeView.classList.add("hidden");
    detailView.classList.remove("hidden");

    // Asignar Nombre
    document.getElementById("detail-ciudad-nombre").innerText = `Clima en ${ciudad.nombre}`;

    // lista semanal
    const containerSemana = document.getElementById("pronostico-semanal-container");
    containerSemana.innerHTML = "";
    
    ciudad.pronosticoSemanal.forEach(p => {
        const icono = estadoIconos[p.estado] || "❓";
        const minicard = document.createElement("div");
        minicard.className = "card";
        minicard.innerHTML = `
            <h3>${p.dia}</h3>
            <div>${icono}</div>
            <p>${p.estado}</p>
            <p>Min: ${p.min}°C | Max: ${p.max}°C</p>
        `;
        containerSemana.appendChild(minicard);
    });

    // 3. Ciclos y Condicionales
    calcularYMostrarEstadisticas(ciudad.pronosticoSemanal);
}

function calcularYMostrarEstadisticas(pronostico) {
    let minTotal = Infinity;
    let maxTotal = -Infinity;
    let sumaTemp = 0;
    
    let conteoClimas = { Soleado: 0, Lluvioso: 0, Nublado: 0 };

  
    for (let i = 0; i < pronostico.length; i++) {
        const dia = pronostico[i];
        
        // Mínimo y Máximo 
        if (dia.min < minTotal) minTotal = dia.min;
        if (dia.max > maxTotal) maxTotal = dia.max;
        
        // Sumar para el promedio general
        sumaTemp += (dia.min + dia.max) / 2;

        // Sentencias condicionales 
        if (dia.estado === "Soleado") {
            conteoClimas.Soleado++;
        } else if (dia.estado === "Lluvioso") {
            conteoClimas.Lluvioso++;
        } else if (dia.estado === "Nublado") {
            conteoClimas.Nublado++;
        }
    }

    const promedio = (sumaTemp / pronostico.length).toFixed(1);

    // Manipulación del DOM para las estadísticas calculadas
    document.getElementById("stat-min").innerText = minTotal;
    document.getElementById("stat-max").innerText = maxTotal;
    document.getElementById("stat-avg").innerText = promedio;
    document.getElementById("stat-soleado").innerText = conteoClimas.Soleado;
    document.getElementById("stat-lluvioso").innerText = conteoClimas.Lluvioso;
    document.getElementById("stat-nublado").innerText = conteoClimas.Nublado;

    let resumenMsg = `La semana presentará temperaturas entre los ${minTotal}°C y los ${maxTotal}°C con una media de ${promedio}°C. `;
    if (conteoClimas.Lluvioso > conteoClimas.Soleado) {
        resumenMsg += "Tendencia a días muy húmedos y precipitaciones constantes. Se aconseja llevar paraguas.";
    } else if (conteoClimas.Soleado >= 4) {
        resumenMsg += "Predominarán las condiciones soleadas ideales para actividades al aire libre.";
    } else {
        resumenMsg += "Se mantendrán cielos cambiantes y nubosidades parciales a lo largo del período.";
    }
    
    document.getElementById("stat-resumen").innerText = resumenMsg;
}

function irAHome() {
    detailView.classList.add("hidden");
    homeView.classList.remove("hidden");
}

btnHome.addEventListener("click", (e) => { e.preventDefault(); irAHome(); });
btnBack.addEventListener("click", irAHome);


renderizarHome();
