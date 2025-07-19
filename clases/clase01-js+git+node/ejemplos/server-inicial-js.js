// server-inicial.js - Template para proyecto personal
// Los estudiantes copian este código a su server.js

console.log('🚀 Hola! Soy tu API personal');
console.log('📅 Fecha:', new Date().toLocaleDateString());

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('💡 Prueba: node server.js tu-nombre');
} else if (args[0] === 'info') {
    console.log('📊 Tu API se llama: mi-api-blog');
    console.log('🔧 Versión Node:', process.version);
} else {
    const nombre = args[0];
    console.log(`👋 Hola ${nombre}! Tu API está funcionando`);
}

console.log('✅ Script ejecutado correctamente');

/*
INSTRUCCIONES PARA ESTUDIANTES:

1. Copiar este código a tu archivo server.js
2. Cambiar "mi-api-blog" por tu tipo de API elegido
3. Probar con estos comandos:
   - node server.js
   - node server.js Ana
   - node server.js info

EJERCICIO SIMPLE:
- Cambiar los emojis
- Personalizar los mensajes
- Cambiar el nombre de tu API

ES TEMPORAL:
- Este script es solo para practicar
- En Clase 2 lo reemplazaremos completamente
- No se compliquen, es solo para entender Node.js básico
*/