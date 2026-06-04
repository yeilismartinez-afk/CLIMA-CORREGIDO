// Configuración de ubicaciones geográficas de Chile (según tu interfaz de ejemplo)
const CIUDADES = [
    { nombre: "Osorno", lat: -40.5739, lon: -73.1353 },
    { nombre: "Valdivia", lat: -39.8142, lon: -73.2459 },
    { nombre: "Valparaíso", lat: -33.0472, lon: -71.6127 },
    { nombre: "Curicó", lat: -34.9833, lon: -71.2333 },
    { nombre: "Puerto Montt", lat: -41.4693, lon: -72.9424 },
    { nombre: "Viña del Mar", lat: -33.0246, lon: -71.5518 },
    { nombre: "Punta Arenas", lat: -53.1548, lon: -70.9089 },
    { nombre: "Arica", lat: -18.4746, lon: -70.2979 },
    { nombre: "Santiago", lat: -33.4569, lon: -70.6483 },
    { nombre: "Antofagasta", lat: -23.6500, lon: -70.4000 }
];

// Mapeo meteorológicos WMO de Open-Meteo
function interpretarWeatherCode(code) {
    if (code === 0) return "Soleado";
    if ([1, 2, 3].includes(code)) return "Parcialmente Nublado";
    if ([45, 48].includes(code)) return "Neblina";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "Lluvia";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "Nieve";
    if ([95, 96, 99].includes(code)) return "Tormenta";
    return "Despejado";
}

// Variables globales para almacenar el estado de la aplicación
let datosClimaGlobal = {};

// Elementos de la interfaz DOM
const gridCiudades = document.getElementById("grid-ciudades");
const homeView = document.getElementById("home-view");
const detailView = document.getElementById("detail-view");
const btnBack = document.getElementById("btn-back");
const navLogo = document.getElementById("nav-logo");

const detailCiudadNombre = document.getElementById("detail-ciudad-nombre");
const pronosticoSemanalContainer = document.getElementById("pronostico-semanal-container");
const statsContainer = document.getElementById("stats-container");
const alertsContainer = document.getElementById("alerts-container");

// Inicialización de la App: Consumo de la API Open-Meteo
async function inicializarDashboard() {
    gridCiudades.innerHTML = "<p style='text-align:center; width:100%;'>Cargando datos meteorológicos en tiempo real...</p>";
    
    try {
        for (const ciudad of CIUDADES) {

const url = `https://api.open-meteo.com/v1/forecast?latitude=${ciudad.lat}&longitude=${ciudad.lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weathercode&timezone=auto`;
            const respuesta = await fetch(url);
            const data = await respuesta.json();
// console.log(data);
          
            datosClimaGlobal[ciudad.nombre] = {
                actual: data.current,
                pronostico: data.daily
            };
            
        }
console.log(datosClimaGlobal);


        renderizarHome();
    } catch (error) {
        gridCiudades.innerHTML = "<p style='text-align:center; width:100%; color:#ffccd5;'>Error al conectar con la API de Open-Meteo. Intenta de nuevo.</p>";
        console.error("Error en Fetch:", error);
    }
}

// Renderizado de la vista de inicio (Muestra las cards)
function renderizarHome() {
    gridCiudades.innerHTML = "";
    
    CIUDADES.forEach(ciudad => {
        const info = datosClimaGlobal[ciudad.nombre];
        if (!info) return;

        const tempActual = Math.round(info.actual.temperature_2m);
        const estado = interpretarWeatherCode(info.actual.weathercode);
        const viento = Math.round(info.actual.wind_speed_10m);
        const humedadActual= Math.round(info.actual.relative_humidity_2m);


        

        const card = document.createElement("div");
        card.className = "clima-card";
        card.innerHTML = `
            <div class="ciudad-nombre">${ciudad.nombre}</div>
            <div class="temperatura">${tempActual}°C</div>
            <div class="estado-clima">${estado}</div>
            <div class="info-secundaria">
                <span>💧 ${humedadActual} Humedad</span>
                <span>💨 ${viento} km/h Viento</span>
            </div>
            <button class="ver-detalles-btn" onclick="verDetalleLugar('${ciudad.nombre}')">Ver detalles</button>
        `;
        gridCiudades.appendChild(card);
    });
}

// Lógica de cálculo y renderizado de la vista de Detalle
window.verDetalleLugar = function(nombreCiudad) {
    const info = datosClimaGlobal[nombreCiudad];
    if (!info) return;

    // Cambiar de vista en el DOM
    homeView.classList.add("hidden");
    detailView.classList.remove("hidden");
    
    detailCiudadNombre.textContent = nombreCiudad;
    pronosticoSemanalContainer.innerHTML = "";

    const dias = info.pronostico.time;
    const maximas = info.pronostico.temperature_2m_max;
    const minimas = info.pronostico.temperature_2m_min;
    const codigosClima = info.pronostico.weathercode;

    let sumaTotalTemps = 0;
    let diasSoleados = 0;
    let diasLluvia = 0;

    // 1. Renderizar Pronóstico Diario (Cards de la Semana)
    dias.forEach((dia, index) => {
        const max = Math.round(maximas[index]);
        const min = Math.round(minimas[index]);
        const cod = codigosClima[index];
        const estadoDia = interpretarWeatherCode(cod);
        
        // Acumuladores Estadísticos
        sumaTotalTemps += ((max + min) / 2);
        if (estadoDia === "Soleado") diasSoleados++;
        if (estadoDia === "Lluvia" || estadoDia === "Tormenta") diasLluvia++;

        // Formatear fecha legible
        const fechaFormateada = new Date(dia + "T00:00:00").toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric' });

        const cardDia = document.createElement("div");
        cardDia.className = "clima-card";
        cardDia.innerHTML = `
            <div class="ciudad-nombre" style="font-size: 1rem; text-transform: capitalize;">${fechaFormateada}</div>
            <div class="temperatura" style="font-size: 1.8rem;">${max}°C</div>
            <div style="font-size: 0.9rem; margin-bottom: 8px;">Min: ${min}°C</div>
            <div class="estado-clima" style="font-size: 0.85rem;">${estadoDia}</div>
        `;
        pronosticoSemanalContainer.appendChild(cardDia);
    });

    // 2. Procesar y Renderizar Sección Estadísticas de la Semana
    const tempMaximaAbsoluta = Math.max(...maximas);
    const tempMinimaAbsoluta = Math.min(...minimas);
    const promedioSemanal = (sumaTotalTemps / dias.length).toFixed(1);

    statsContainer.innerHTML = `
        <ul>
            <li><strong>Temperatura Mínima Semanal:</strong> ${Math.round(tempMinimaAbsoluta)}°C</li>
            <li><strong>Temperatura Máxima Semanal:</strong> ${Math.round(tempMaximaAbsoluta)}°C</li>
            <li><strong>Temperatura Promedio:</strong> ${promedioSemanal}°C</li>
            <li><strong>Días Soleados registrados:</strong> ${diasSoleados} día(s)</li>
            <li><strong>Días de Lluvia registrados:</strong> ${diasLluvia} día(s)</li>
        </ul>
    `;

    // Alertas Meteorológicas
    alertsContainer.innerHTML = "";
    let alertaActivada = false;

    // Alerta de calor si el promedio > 18°C
    if (promedioSemanal > 18) {
        alertsContainer.innerHTML += `<div class="alert-badge heat-alert">🔥 Alerta de Calor: El promedio semanal proyectado supera los 18°C (${promedioSemanal}°C). ¡Mantente hidratado!</div>`;
        alertaActivada = true;
    }

    // Regla 2:Semana lluviosa si hay 2 o más días con precipitaciones
    if (diasLluvia >= 2) {
        alertsContainer.innerHTML += `<div class="alert-badge rain-alert">🌧️ Alerta de Semana Lluviosa: Se detectan ${diasLluvia} días bajo condiciones severas de precipitaciones. Lleva paraguas.</div>`;
        alertaActivada = true;
    }

    // Estado sin alertas críticas
    if (!alertaActivada) {
        alertsContainer.innerHTML = `<div class="alert-badge normal-alert">✅ Condiciones normales: No se registran alertas extremas vigentes para los próximos 7 días en esta zona.</div>`;
    }
}

// Controladores de flujo y navegación limpia entre módulos
function regresarAlHome() {
    detailView.classList.add("hidden");
    homeView.classList.remove("hidden");
}

btnBack.addEventListener("click", regresarAlHome);
navLogo.addEventListener("click", regresarAlHome);

// Lanzamiento automático al cargar el documento
document.addEventListener("DOMContentLoaded", inicializarDashboard);
