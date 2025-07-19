// saludo.js - Demo process.argv para Clase 1
console.log('🚀 ¡Hola desde Node.js!');

const argumentos = process.argv.slice(2);

if (argumentos.length === 0) {
    console.log('❌ Uso: node saludo.js TuNombre');
    process.exit(1);
}

const nombre = argumentos[0];
console.log(`👋 ¡Hola ${nombre}!`);

if (argumentos.length >= 2) {
    const apellido = argumentos[1];
    console.log(`📝 Nombre completo: ${nombre} ${apellido}`);
}

/*
COMANDOS PARA DEMO:

1. Sin argumentos:
   node saludo.js
   → Muestra error de uso

2. Solo nombre:
   node saludo.js Ana
   → Saluda a Ana

3. Nombre y apellido:
   node saludo.js Luis García
   → Muestra nombre completo

CONCEPTOS QUE ENSEÑA:
- process.argv básico
- slice(2) para obtener argumentos del usuario
- Validación simple con if
- process.exit(1) para terminar con error
*/