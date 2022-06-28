// -------------- Consumo de combustible --------------

// Variables
const distancia = document.querySelector('.distancia');
const precio = document.querySelector('.precio');
const litros = document.querySelector('.litros');
const btnConsumo = document.querySelector('.consumo');
const resultadoCombustible = document.querySelector('.resultadoCombustible');
const resultadoPrecio = document.querySelector('.resultadoPrecio');
const formCombustible = document.querySelector('.formCombustible');

// Evento en el botón
btnConsumo.addEventListener('click', (e) => {
    e.preventDefault();
    let distanciaValor = distancia.value;
    let precioValor = precio.value;
    let litrosValor = litros.value;

    calcularCombustible(distanciaValor, precioValor, litrosValor);
    formCombustible.reset();
})

// Calcular combustible
function calcularCombustible(distanciaValor, precioValor, litrosValor) {
    let consumo = litrosValor / 100 * distanciaValor;
    let precioTotal = consumo*precioValor;
    
    mostrarResultadoCombustible(consumo, precioTotal);
}

// Mostrar resultado en HTML
function mostrarResultadoCombustible(consumo, precioTotal) {
    resultadoCombustible.textContent = '';
    resultadoPrecio.textContent = '';

    let p = document.createElement('p');
    let p2 = document.createElement('p');

    p.textContent = `Litros a consumir: ${consumo.toFixed(2)}`;
    p2.textContent = `Precio por ${consumo.toFixed(2)} litros: $${precioTotal.toFixed(2)}`;

    resultadoCombustible.append(p);
    resultadoPrecio.append(p2);
}

// -------------- Duración del tanque --------------

// Variables
const litrosDuracion = document.querySelector('.litrosDuracion');
const capacidadDuracion = document.querySelector('.capacidadDuracion');
const btnDuracion = document.querySelector('.duracion');
const resultadoDuracion = document.querySelector('.resultadoDuracion');
const formDuracion = document.querySelector('.formDuracion');

// Evento en el botón
btnDuracion.addEventListener('click', (e) => {
    e.preventDefault();
    let capacidadDuracionValor = capacidadDuracion.value;
    let litrosDuracionValor = litrosDuracion.value;

    calcularDuracion(capacidadDuracionValor, litrosDuracionValor);
    formDuracion.reset();
})

// Calcular duración
function calcularDuracion(capacidad, litrosDuracionValor) {
    let duracionValor = capacidad / litrosDuracionValor * 100;

    mostrarResultadoDuracion(duracionValor)
}

// Mostrar resultado en HTML
function mostrarResultadoDuracion(duracionValor) {
    resultadoDuracion.textContent = '';

    let p = document.createElement('p');

    p.textContent = `Duración total del tanque: ${duracionValor.toFixed(2)}km`;

    resultadoDuracion.append(p);
}