function ajustarAltura(textarea) {
  textarea.style.height = ''; // Restablece la altura para calcular el nuevo tamaño
  textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta la altura según el contenido
}

document.addEventListener('DOMContentLoaded', function () {
  var encriptarButton = document.getElementById('encriptarButton');
  encriptarButton.addEventListener('click', function () {
    var textOutputContainer = document.querySelector('.textOutputContainer');
    var copiarButton = document.getElementById('copiarButton');
    copiarButton.style.display = 'block';
    textOutputContainer.style.display = 'none';
  });
});

function encriptarTexto() {
  var textoEntrada = document.getElementById('miTextarea').value.toLowerCase();
  var textoEncriptado = encriptar(textoEntrada);
  var salida = document.getElementById('outputText');
  salida.style.display = 'block';
  document.getElementById('outputText').value = textoEncriptado;
}

function encriptar(texto) {
  var reglasEncriptacion = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat',
  };

  return texto.replace(/[eioua]/g, function (match) {
    return reglasEncriptacion[match];
  });
}

function desencriptar(textoEncriptado) {
  var reglasDesencriptacion = {
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u',
  };

  var claves = Object.keys(reglasDesencriptacion).sort(
    (a, b) => b.length - a.length
  );

  var regex = new RegExp(claves.join('|'), 'g');

  return textoEncriptado.replace(regex, function (match) {
    return reglasDesencriptacion[match];
  });
}

function desencriptarTexto() {
  var textoEncriptado = document.getElementById('miTextarea').value;
  var textoDesencriptado = desencriptar(textoEncriptado);
  var entrada = document.getElementById('outputText');
  entrada.style.display = 'block';
  document.getElementById('outputText').value = textoDesencriptado;

  var textOutputContainer = document.querySelector('.textOutputContainer');
  var copiarButton = document.getElementById('copiarButton');
  copiarButton.style.display = 'block';
  textOutputContainer.style.display = 'none';
}

function copiarTexto() {
  var textareaSalida = document.getElementById('outputText');
  textareaSalida.select();
  document.execCommand('copy');
}
