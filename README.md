# 🛒 Gestor de Ventas - UAC
**Construcción de Software | Universidad Continental**

## 📌 Descripción
Sistema de gestión de ventas desarrollado con **HTML5, CSS3 y JavaScript**, como parte del Producto Académico N° 2, implementando control de versiones con Git y GitHub siguiendo el flujo GitFlow, con CI/CD mediante GitHub Actions.

## 👥 Integrantes
- Integrante 1 (Líder) — Módulo de Productos (`js/productos.js`)
- Integrante 2 — Módulo de Ventas (`js/ventas.js`)
- Integrante 3 — Módulo de Reportes (`js/reportes.js`)

## 🛠️ Tecnologías
- HTML5
- CSS3
- JavaScript (ES6)
- Jest (pruebas unitarias)
- Git + GitHub + GitFlow
- GitHub Actions (CI/CD)

## 🚀 Cómo ejecutar
Simplemente abre el archivo `index.html` en tu navegador (doble clic, o clic derecho → "Abrir con" → tu navegador).

No necesita instalación ni servidor.

## 🧪 Cómo correr los tests
```bash
npm install
npm test
```

## 🌿 Estructura de ramas (GitFlow)
```
main         → Versión estable y final
develop      → Integración de features
feature/productos   → Módulo de productos (Integrante 1)
feature/ventas      → Módulo de ventas (Integrante 2)
feature/reportes    → Módulo de reportes (Integrante 3)
```

## ⚙️ CI/CD
Configurado con GitHub Actions (`.github/workflows/ci.yml`). Cada push a `main` o `develop` instala dependencias y ejecuta los tests con Jest automáticamente.

## 📂 Estructura del proyecto
```
gestor-ventas-web/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── productos.js   (Módulo 1)
│   ├── ventas.js      (Módulo 2)
│   ├── reportes.js    (Módulo 3)
│   └── main.js        (Conecta los módulos con la interfaz)
├── tests/
│   ├── productos.test.js
│   ├── ventas.test.js
│   └── reportes.test.js
├── .github/workflows/ci.yml
└── package.json
```
