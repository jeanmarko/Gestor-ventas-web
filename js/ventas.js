// ============================================
// MÓDULO 2: Registro de Ventas
// Responsable: Integrante 2
// ============================================

// En Node (Jest) necesitamos importar productos.js
let _obtenerPrecio = typeof obtenerPrecio !== "undefined" ? obtenerPrecio : null;
if (typeof module !== "undefined" && module.exports) {
  const prodModule = require("./productos");
  _obtenerPrecio = prodModule.obtenerPrecio;
}

const ventas = [];

/**
 * Registra una venta calculando el total automáticamente.
 * @param {string} producto
 * @param {number} cantidad
 * @returns {boolean} true si la venta se registró correctamente
 */
function registrarVenta(producto, cantidad) {
  const precio = _obtenerPrecio(producto);

  if (precio === null) return false;
  if (isNaN(cantidad) || cantidad <= 0) return false;

  const total = precio * cantidad;
  ventas.push({
    producto,
    cantidad,
    precioUnitario: precio,
    total
  });
  return true;
}

/**
 * Calcula el total acumulado de todas las ventas.
 * @returns {number}
 */
function calcularTotalVentas() {
  return ventas.reduce((acc, v) => acc + v.total, 0);
}

/**
 * Retorna la lista de todas las ventas registradas.
 * @returns {Array}
 */
function obtenerVentas() {
  return ventas;
}

// Exportación para pruebas con Jest (Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ventas, registrarVenta, calcularTotalVentas, obtenerVentas };
}
