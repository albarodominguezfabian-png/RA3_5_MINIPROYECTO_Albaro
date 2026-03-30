console.log("Proyecto iniciado");

// CONTROL 1: Mostrar/Ocultar detalle
const btnDetalle = document.getElementById("btnDetalle");
const detalle = document.getElementById("detalle");

btnDetalle.addEventListener("click", () => {
    detalle.classList.toggle("oculto");
});

// CONTROL 2: Modo oscuro
const btnModo = document.getElementById("btnModo");

btnModo.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
});

// CONTROL 3: Cambio en select
const plataforma = document.getElementById("plataforma");
const resultado = document.getElementById("resultado");

plataforma.addEventListener("change", () => {
    resultado.textContent = "Seleccionaste: " + plataforma.value;
});

// CONTROL 4: Formulario + Validación
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    if (nombre === "" || correo === "") {
        mensaje.textContent = "Todos los campos son obligatorios";
        mensaje.className = "error";
        return;
    }

    if (!correo.includes("@")) {
        mensaje.textContent = "Correo inválido";
        mensaje.className = "error";
        return;
    }

    mensaje.textContent = "Formulario enviado correctamente";
    mensaje.className = "correcto";
});

// CONTROL 5: Cargar datos
const btnCargar = document.getElementById("btnCargar");
const lista = document.getElementById("lista");

btnCargar.addEventListener("click", () => {
    lista.innerHTML = "";

    const juegos = [
        "Minecraft",
        "Fortnite",
        "Call of Duty",
        "FIFA",
        "GTA V",
        "Valorant"
    ];

    juegos.forEach(juego => {
        const li = document.createElement("li");
        li.textContent = juego;
        lista.appendChild(li);
    });
});
