// tarea-resuelta.js - SOLUCIONES PARA EL PROFESOR
// Ejercicios resueltos de la tarea de Clase 1

console.log('📚 SOLUCIONES TAREA CLASE 1');
console.log('='.repeat(50));

// ===============================================
// EJERCICIO 1: ARRAYS
// ===============================================

console.log('\n🍎 EJERCICIO 1: ARRAYS');
console.log('-'.repeat(30));

const frutas = ['manzana', 'banana', 'naranja', 'uva', 'kiwi'];

// SOLUCIÓN: Usar forEach para mostrar cada fruta
console.log('\n✅ forEach - Mostrar cada fruta:');
frutas.forEach(fruta => {
    console.log(`🍇 ${fruta}`);
});

// SOLUCIÓN: Usar filter para frutas que tengan más de 5 letras
console.log('\n✅ filter - Frutas con más de 5 letras:');
const frutasLargas = frutas.filter(fruta => {
    return fruta.length > 5;
});
console.log('Frutas largas:', frutasLargas);

// SOLUCIÓN: Usar map para convertir todas a mayúsculas
console.log('\n✅ map - Convertir a mayúsculas:');
const frutasMayusculas = frutas.map(fruta => {
    return fruta.toUpperCase();
});
console.log('En mayúsculas:', frutasMayusculas);

// SOLUCIÓN: Usar find para encontrar 'banana'
console.log('\n✅ find - Encontrar banana:');
const encontrarBanana = frutas.find(fruta => {
    return fruta === 'banana';
});
console.log('Encontré:', encontrarBanana);

// ===============================================
// EJERCICIO 2: OBJETOS
// ===============================================

console.log('\n\n👤 EJERCICIO 2: OBJETOS');
console.log('-'.repeat(30));

const usuario = {
    nombre: 'Ana',
    edad: 25,
    email: 'ana@gmail.com',
    activo: true
};

// SOLUCIÓN: Usar destructuring para extraer nombre y email
console.log('\n✅ Destructuring:');
const { nombre, email } = usuario;
console.log(`Usuario: ${nombre}, Email: ${email}`);

// SOLUCIÓN: Agregar una nueva propiedad 'telefono'
console.log('\n✅ Agregar propiedad:');
usuario.telefono = '123-456-789';
console.log('Teléfono agregado:', usuario.telefono);

// SOLUCIÓN: Crear función que valide si el usuario es mayor de edad
console.log('\n✅ Función de validación:');
function esMayorDeEdad(usuario) {
    return usuario.edad >= 18;
}

// SOLUCIÓN: Mostrar info completa con template literals
console.log('\n✅ Template literals:');
console.log(`Información: ${nombre} tiene ${usuario.edad} años`);
console.log(`Email: ${email}, Teléfono: ${usuario.telefono}`);
console.log('¿Es mayor de edad?', esMayorDeEdad(usuario));

// ===============================================
// EJERCICIO 3: FUNCIONES
// ===============================================

console.log('\n\n⚡ EJERCICIO 3: FUNCIONES');
console.log('-'.repeat(30));

// SOLUCIÓN: Crear función tradicional que sume dos números
console.log('\n✅ Función tradicional - Sumar:');
function sumar(a, b) {
    return a + b;
}

// SOLUCIÓN: Crear arrow function que calcule el área de un círculo
console.log('\n✅ Arrow function - Área círculo:');
const areaCirculo = (radio) => {
    return Math.PI * radio * radio;
};

// SOLUCIÓN: Crear función que reciba un array y devuelva el mayor
console.log('\n✅ Función - Encontrar mayor:');
const encontrarMayor = (numeros) => {
    return Math.max(...numeros);
    // Alternativa con reduce:
    // return numeros.reduce((mayor, actual) => actual > mayor ? actual : mayor);
};

// SOLUCIÓN: Crear función con valores por defecto
console.log('\n✅ Función con valores por defecto:');
function saludar(nombre = 'Usuario') {
    return `¡Hola ${nombre}!`;
}

// Probar todas las funciones
console.log('\n🧪 PRUEBAS:');
console.log('Suma 5 + 3:', sumar(5, 3));
console.log('Área círculo radio 5:', areaCirculo(5).toFixed(2));
console.log('Mayor de [2,8,3,1]:', encontrarMayor([2, 8, 3, 1]));
console.log(saludar());
console.log(saludar('Luis'));

// ===============================================
// VARIACIONES Y ALTERNATIVAS
// ===============================================

console.log('\n\n🔄 VARIACIONES ALTERNATIVAS');
console.log('-'.repeat(30));

// Alternativa con arrow functions más concisas
console.log('\n📝 Arrow functions concisas:');
const sumarArrow = (a, b) => a + b;
const areaCirculoCorta = radio => Math.PI * radio ** 2;

console.log('Suma arrow:', sumarArrow(10, 5));
console.log('Área arrow:', areaCirculoCorta(3).toFixed(2));

// Función encontrarMayor con forEach (más didáctica)
console.log('\n📝 Encontrar mayor con forEach:');
const encontrarMayorForEach = (numeros) => {
    let mayor = numeros[0];
    numeros.forEach(numero => {
        if (numero > mayor) {
            mayor = numero;
        }
    });
    return mayor;
};

console.log('Mayor con forEach:', encontrarMayorForEach([7, 2, 9, 1, 5]));

// Filter con arrow function más compacta
console.log('\n📝 Filter más compacto:');
const frutasLargasCompacto = frutas.filter(fruta => fruta.length > 5);
console.log('Frutas largas (compacto):', frutasLargasCompacto);

// ===============================================
// ERRORES COMUNES Y SOLUCIONES
// ===============================================

console.log('\n\n⚠️ ERRORES COMUNES Y SOLUCIONES');
console.log('-'.repeat(30));

console.log('\n❌ Error común: Olvidar return en funciones');
console.log('// Incorrecto:');
console.log('// const sumar = (a, b) => { a + b }  // No retorna nada');
console.log('// Correcto:');
console.log('// const sumar = (a, b) => { return a + b }');
console.log('// O más corto:');
console.log('// const sumar = (a, b) => a + b');

console.log('\n❌ Error común: Confundir map con forEach');
console.log('// forEach: NO retorna array, solo ejecuta función');
console.log('// map: SÍ retorna nuevo array transformado');

console.log('\n❌ Error común: No usar const/let consistentemente');
console.log('// Usar const por defecto, let solo si necesitas reasignar');

console.log('\n✅ TODAS LAS SOLUCIONES FUNCIONAN CORRECTAMENTE');

/*
NOTAS PARA EL PROFESOR:

1. CONCEPTOS CLAVE PRACTICADOS:
   - Array methods: forEach, filter, map, find
   - Destructuring de objetos
   - Template literals
   - Arrow functions vs funciones tradicionales
   - Parámetros por defecto

2. ERRORES COMUNES A REVISAR:
   - Olvidar return en arrow functions con {}
   - Confundir map (retorna) con forEach (no retorna)
   - No usar const/let apropiadamente
   - Sintaxis incorrecta en destructuring

3. EXTENSIONES POSIBLES:
   - Mostrar alternativas con métodos más avanzados
   - Explicar diferencias de performance
   - Introducir conceptos como spread operator

4. TIEMPO ESTIMADO REVISIÓN: 15-20 minutos en próxima clase
*/