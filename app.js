
function encriptarTexto(texto) {
    const reemplazos = {
        'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'
    };
    return texto.replace(/[aeiou]/g, match => reemplazos[match]);
}

function desencriptarTexto(texto) {
    const reemplazos = {
        'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u'
    };
    return texto.replace(/ai|enter|imes|ober|ufat/g, match => reemplazos[match]);
}

function manejarTexto(accion) {
    const inputTexto = document.querySelector('.texto-a-encriptar');
    const resultadoContenedor = document.querySelector('.resultado-contenedor');
    const resultadoTexto = document.querySelector('.resultado-texto');
    const btnCopiar = document.querySelector('.btn-copiar');
    
    const texto = inputTexto.value;
    
    if (accion === 'encriptar') {
        resultadoTexto.textContent = encriptarTexto(texto);
    } else if (accion === 'desencriptar') {
        resultadoTexto.textContent = desencriptarTexto(texto);
    }
    
    resultadoContenedor.style.display = 'block';
    btnCopiar.style.display = 'block';
    
  
    document.querySelector('.texto-muñeco').style.display = 'none';
    document.querySelector('.muñeco').style.display = 'none';
}

function configurarEventos() {
    const botonEncriptar = document.querySelector('.boton-encriptar');
    const botonDesencriptar = document.querySelector('.boton-desencriptar');
    const btnCopiar = document.querySelector('.btn-copiar');
    
    botonEncriptar.addEventListener('click', () => manejarTexto('encriptar'));
    botonDesencriptar.addEventListener('click', () => manejarTexto('desencriptar'));
    
    btnCopiar.addEventListener('click', () => {
        const textoResultado = document.querySelector('.resultado-texto').textContent;
        navigator.clipboard.writeText(textoResultado)
            .then(() => alert('Texto copiado al portapapeles'))
            .catch(err => console.error('Error al copiar el texto:', err));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    configurarEventos();
});
