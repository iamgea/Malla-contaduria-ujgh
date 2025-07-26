
const materias = {
    "matematica_general": {
        nombre: "Matemática General",
        creditos: 4,
        prerrequisitos: "Ninguno"
    },
    "introduccion_cs": {
        nombre: "Introducción a las Ciencias Sociales",
        creditos: 3,
        prerrequisitos: "Ninguno"
    },
    "lenguaje_comunicacion": {
        nombre: "Lenguaje y Comunicación",
        creditos: 4,
        prerrequisitos: "Ninguno"
    }
    // Más materias serán agregadas...
};

function mostrarDetalle(id) {
    const materia = materias[id];
    if (!materia) return;
    document.getElementById("materia-nombre").textContent = materia.nombre;
    document.getElementById("materia-creditos").textContent = materia.creditos;
    document.getElementById("materia-prerrequisitos").textContent = materia.prerrequisitos;
    document.getElementById("detalle-materia").style.display = "block";
}

function cerrarDetalle() {
    document.getElementById("detalle-materia").style.display = "none";
}

window.onload = function () {
    const container = document.getElementById("malla-container");
    const trimestre1 = document.createElement("div");
    trimestre1.className = "trimestre";
    trimestre1.innerHTML = `
        <h3>Trimestre 1</h3>
        <div class="materia" onclick="mostrarDetalle('matematica_general')">Matemática General</div>
        <div class="materia" onclick="mostrarDetalle('introduccion_cs')">Introducción a las Ciencias Sociales</div>
        <div class="materia" onclick="mostrarDetalle('lenguaje_comunicacion')">Lenguaje y Comunicación</div>
    `;
    container.appendChild(trimestre1);
}
