// calculadora.js - Ejercicio simple para Clase 1
const [numero1, operador, numero2] = process.argv.slice(2);

const a = Number(numero1);
const b = Number(numero2);

if (operador === '+') console.log(a + b);
if (operador === '-') console.log(a - b);
if (operador === '*') console.log(a * b);
if (operador === '/') console.log(a / b);

/*
COMANDOS PARA PROBAR:

node calculadora.js 5 + 3    → 8
node calculadora.js 10 - 4   → 6  
node calculadora.js 7 * 2    → 14
node calculadora.js 12 / 3   → 4

CONCEPTOS QUE ENSEÑA:
- Destructuring de arrays
- process.argv.slice(2)
- Number() para convertir strings
- if statements simples
- Solo lo esencial de Node.js
*/