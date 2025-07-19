# 📚 CLASE 1 - Repaso JS/Git + Intro Node.js + Setup Proyecto API

## 🎯 INFORMACIÓN DE LA CLASE
- **Duración:** 3 horas (180 minutos)
- **Modalidad:** Virtual (clases online)
- **Estudiantes:** Completaron Curso 1 (HTML, CSS, JavaScript básico)
- **Objetivo:** Repaso fundamentos + Node.js básico + proyecto personal iniciado

---

## ⏰ TIMING DETALLADO (180 MINUTOS)

### **🔧 VERIFICACIÓN HERRAMIENTAS (10 min)**
- Verificar Node.js: `node --version` (v18+)
- Verificar Git: `git config user.name`
- Verificar VS Code: `code --version`
- Resolución rápida de problemas críticos

### **📚 REPASO FUNDAMENTOS (30 min)**

#### **Repaso JavaScript Básico (20 min) - SLIDE**
- Variables: const/let (NO var)
- Condicionales: if/else con ===
- Bucles: for, for...of, forEach
- Funciones: tradicionales vs arrow functions
- **Pregunta de verificación** incluida

#### **Repaso Git Workflow (10 min) - SLIDE**
- Comandos básicos: add, commit, push, pull
- Los 2 repositorios del curso
- Método recomendado: crear repo con README checkbox

### **🚀 INTRODUCCIÓN A NODE.JS (40 min) - SLIDE**

#### **¿Qué es Node.js? (20 min)**
- Concepto: JavaScript fuera del navegador
- Demo lado a lado: navegador vs Node.js
- Diferencias: window vs global vs process

#### **Primer Script Node.js (20 min)**
- Script saludo.js con process.argv
- Ejercicio calculadora.js (súper simple)
- Testing con argumentos

### **🎯 PRESENTACIÓN PROYECTOS API (25 min) - SLIDE**

#### **4 Opciones de API Personal (20 min)**
- 📝 Blog Personal + Auth
- 🍽️ Restaurante + Auth  
- 📚 E-learning + Auth
- 🛍️ E-commerce + Auth

#### **Selección Interactiva (5 min)**
- Cards clicables
- Comparación de complejidad
- Resultado final que construirán

### **💻 SETUP PROYECTO PERSONAL (45 min) - SLIDE**

#### **Crear Repositorio Individual (10 min)**
- Método GitHub-first con README checkbox
- Clonar a computadora local

#### **Estructura Inicial (10 min)**
- Crear server.js básico (súper simple)
- Testing del script

#### **Primer Commit (5 min)**
- git add, commit, push
- Verificar en GitHub

#### **Documentación Básica (10 min)**
- Actualizar README.md
- Documentar tipo de API elegido

#### **Ejercicio Práctico (10 min)**
- Personalizar script (muy simple)
- Agregar comando 'info' básico

---

## 🎯 OBJETIVOS DE APRENDIZAJE

### **Al final de esta clase, los estudiantes podrán:**
1. ✅ Ejecutar scripts básicos de Node.js desde terminal
2. ✅ Usar process.argv para capturar argumentos
3. ✅ Entender diferencias navegador vs Node.js
4. ✅ Tener repositorio GitHub funcionando
5. ✅ Haber elegido su tipo de API personal
6. ✅ Realizar commits y push básicos

---

## 📂 ESTRUCTURA DE ARCHIVOS ENTREGADOS

```
clases/clase01-js+git+node/
├── README.md                              ← Este archivo
├── ejemplos/
│   ├── calculadora-simple.js             ← Ejercicio simple para estudiantes
│   ├── demo-comparacion.js               ← Demo navegador vs Node.js
│   ├── ejemplo-1-intro-node-js.css       ← CSS para slide Node.js
│   ├── ejemplo-1-intro-node-js.html      ← Slide Node.js interactivo
│   ├── saludo.js                         ← Demo process.argv principal
│   └── server-inicial.js                 ← Template proyecto personal
├── recursos/
│   └── (materiales adicionales)
└── slides/
    ├── repaso/
    │   ├── slide-repaso-git.css
    │   ├── slide-repaso-git.html
    │   ├── slide-repaso-javascript.css
    │   └── slide-repaso-javascript.html
    ├── slide1-instalacion-herramientas.css
    ├── slide1-instalacion-herramientas.html
    ├── slide2-tipos-api.css
    ├── slide2-tipos-api.html
    ├── slide3-setup-proyecto.css
    └── slide3-setup-proyecto.html
```

---

## 🚨 CONCEPTOS PROHIBIDOS EN ESTA CLASE
- ❌ Express (se introduce en Clase 3)
- ❌ NPM install de paquetes (se enseña en Clase 2)
- ❌ Servidores HTTP (llega en Clase 3)
- ❌ Base de datos o SQL (empezará en Clase 7)
- ❌ JSON parsing complejo (Clases 4-5)
- ❌ Variables de entorno process.env (Clase 16)

---

## 📋 PRERREQUISITOS VERIFICAR
- ✅ JavaScript básico (variables, funciones, arrays, objetos)
- ✅ Git básico (clone, add, commit, push)
- ✅ Terminal/command line básico
- ✅ Editor de código (VS Code recomendado)
- ✅ Cuenta GitHub activa

---

## 🎯 ENTREGABLES DE LA CLASE

### **Cada estudiante debe tener al final:**
1. **Node.js funcionando:** `node --version` muestra v18+
2. **Repositorio personal:** GitHub configurado y clonado
3. **Script básico:** server.js ejecutándose sin errores
4. **Tipo de API elegido:** Documentado en README.md
5. **Primer commit:** Realizado y visible en GitHub

---

## 📝 ARCHIVOS DE EJEMPLO PARA DEMOS

### **saludo.js - Demo principal**
```javascript
// saludo.js
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
```

### **calculadora.js - Ejercicio simple**
```javascript
// calculadora.js
const [numero1, operador, numero2] = process.argv.slice(2);

const a = Number(numero1);
const b = Number(numero2);

if (operador === '+') console.log(a + b);
if (operador === '-') console.log(a - b);
if (operador === '*') console.log(a * b);
if (operador === '/') console.log(a / b);
```

### **server.js - Template proyecto personal**
```javascript
// server.js - Script inicial súper simple
console.log('🚀 Hola! Soy tu API personal');
console.log('📅 Fecha:', new Date().toLocaleDateString());

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('💡 Prueba: node server.js tu-nombre');
} else {
    const nombre = args[0];
    console.log(`👋 Hola ${nombre}! Tu API está funcionando`);
}

console.log('✅ Script ejecutado correctamente');
```

---

## 🧪 COMANDOS PARA TESTING EN VIVO

### **Verificación inicial:**
```bash
node --version        # v18+
npm --version         # 9+
git --version         # 2.34+
code --version        # VS Code instalado
```

### **Testing de scripts:**
```bash
# saludo.js
node saludo.js
node saludo.js Ana
node saludo.js Luis García

# calculadora.js
node calculadora.js 5 + 3
node calculadora.js 10 - 4
node calculadora.js 7 * 2
node calculadora.js 12 / 3

# server.js (proyecto personal)
node server.js
node server.js Ana
```

### **Git workflow:**
```bash
git status
git add .
git commit -m "Clase 1: Setup inicial + primer script Node.js"
git push origin main
```

---

## 🔄 PREPARACIÓN PARA CLASE 2

### **Prerrequisitos para próxima clase:**
- ✅ Node.js funcionando correctamente
- ✅ Proyecto personal creado y funcionando
- ✅ Git configurado y primer commit realizado
- ✅ Tipo de API elegido y documentado

### **Próxima clase - Node.js Fundamentos:**
- **NPM y package.json** (npm init, npm install)
- **Módulos built-in** (fs, path, os)
- **Crear archivos JSON** para datos
- **Módulos personalizados**

---

## 🎯 METODOLOGÍA DE CLASE

### **Flujo recomendado:**
1. **Verificación rápida** herramientas (10 min)
2. **Repaso teórico** con slides (30 min)
3. **Demo práctica** Node.js (40 min)
4. **Selección de proyecto** interactiva (25 min)
5. **Setup hands-on** proyecto personal (45 min)
6. **Verificación final** que todo funcione (10 min)

### **Notas para clases virtuales:**
- Usar breakout rooms para ayuda individual
- Compartir pantalla para demos
- Chat para dudas rápidas
- Verificar que TODOS tienen su repo funcionando

---

## ✅ CHECKLIST FINAL PROFESOR

### **Antes de terminar la clase, verificar:**
- [ ] Todos los estudiantes tienen Node.js funcionando
- [ ] Todos tienen su repositorio personal clonado
- [ ] Todos ejecutaron su script server.js sin errores
- [ ] Todos eligieron su tipo de API
- [ ] Todos hicieron su primer commit
- [ ] Resueltas las dudas principales
- [ ] Explicada la tarea para casa

### **Tarea para próxima clase:**
- Leer documentación básica de NPM
- Pensar en funcionalidades específicas para su API
- Practicar comandos básicos: `node archivo.js`
- Documentar ideas en README.md

---

## 🚀 ¡CLASE 1 COMPLETADA!

**Los estudiantes ahora tienen:**
- ✅ Fundamentos sólidos de Node.js
- ✅ Proyecto personal configurado
- ✅ Repositorio GitHub funcionando
- ✅ Tipo de API elegido
- ✅ Base para construir su API completa

**¡Preparados para Clase 2: NPM y Módulos!** 🎯