// Obtener los elementos
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');

const inputRojo = document.getElementById('input-rojo');
const inputVerde = document.getElementById('input-verde');
const inputAzul = document.getElementById('input-azul');

const colorBox = document.getElementById('color-box');
const codigoHex = document.getElementById('codigo-hex');

// Función para actualizar el color
function actualizarColor() {
  let r = parseInt(rojo.value);
  let g = parseInt(verde.value);
  let b = parseInt(azul.value);

  // Asegurar que los valores están dentro del rango
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  // Actualizar los valores de los inputs numéricos
  inputRojo.value = r;
  inputVerde.value = g;
  inputAzul.value = b;

  // Actualizar el color del recuadro
  colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // Actualizar el código hexadecimal
  codigoHex.textContent = rgbToHex(r, g, b);
}

// Función para convertir RGB a Hexadecimal
function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
}

// Eventos de cambio en los sliders
rojo.addEventListener('input', () => {
  inputRojo.value = rojo.value;
  actualizarColor();
});
verde.addEventListener('input', () => {
  inputVerde.value = verde.value;
  actualizarColor();
});
azul.addEventListener('input', () => {
  inputAzul.value = azul.value;
  actualizarColor();
});

// Eventos de cambio en los inputs numéricos
inputRojo.addEventListener('input', () => {
  rojo.value = inputRojo.value;
  actualizarColor();
});
inputVerde.addEventListener('input', () => {
  verde.value = inputVerde.value;
  actualizarColor();
});
inputAzul.addEventListener('input', () => {
  azul.value = inputAzul.value;
  actualizarColor();
});

// Inicializar color
actualizarColor();
