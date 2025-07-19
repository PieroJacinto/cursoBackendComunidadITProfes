// demo-comparacion.js - JavaScript en Node.js
// Para mostrar lo que SOLO funciona en Node.js

console.log('⚡ DEMO: JavaScript en NODE.JS');
console.log('='.repeat(40));

// ✅ ESTO FUNCIONA EN NODE.JS (pero NO en navegador)
console.log('\n✅ LO QUE FUNCIONA EN NODE.JS:');

// process: información sobre el programa que está corriendo
console.log('📂 Carpeta donde estoy:', process.cwd());
console.log('⚡ Versión de Node.js:', process.version);

// __filename: nombre completo del archivo actual
console.log('📝 Este archivo se llama:', __filename);

// __dirname: carpeta donde está este archivo
console.log('📁 Este archivo está en:', __dirname);

console.log('\n💡 Estos comandos SOLO funcionan en Node.js');

// ❌ ESTO NO FUNCIONA EN NODE.JS (pero SÍ en navegador)
console.log('\n❌ LO QUE NO FUNCIONA EN NODE.JS:');
console.log('- alert("Hola") → No existe alert en Node.js');
console.log('- document.getElementById() → No hay DOM en Node.js');
console.log('- window.location → No hay window en Node.js');
console.log('- localStorage → No hay localStorage en Node.js');

console.log('\n💡 Estos comandos SOLO funcionan en el navegador');

// 🔄 CONCLUSIÓN
console.log('\n🤔 CONCLUSIÓN:');
console.log('🌐 Navegador: JavaScript para páginas web interactivas');
console.log('⚡ Node.js: JavaScript para programas de computadora');
console.log('📝 Mismo lenguaje, diferentes superpoderes');

console.log('\n✅ Demo de Node.js terminada');
console.log('👆 Ahora abre demo-comparacion.html en tu navegador');

/*
INSTRUCCIONES PARA LA DEMO:

1. Ejecutar en terminal: node demo-comparacion.js
   → Muestra lo que funciona en Node.js

2. Abrir demo-comparacion.html en navegador
   → Muestra lo que funciona en navegador

3. Comparar los resultados y explicar las diferencias

CONCEPTOS QUE ENSEÑA:
- process: información del programa en Node.js
- __filename y __dirname: información de archivos
- Qué NO funciona en Node.js (DOM, window, etc)
- Diferencias claras entre entornos
*/