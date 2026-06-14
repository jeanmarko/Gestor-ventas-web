// ============================================
// MÓDULO 1: Gestión de Productos
// Responsable: Integrante 1 (Líder)
// ============================================

const productos = {};

/**
 * Registra un producto con su precio en el sistema.
 * @param {string} nombre
 * @param {number} precio
 * @returns {boolean} true si se registró correctamente
 */
function agregarProducto(nombre, precio) {
  if (!nombre || nombre.trim() === "" || isNaN(precio) || precio <= 0) {
    return false;
  }
  productos[nombre.trim()] = precio;
  return true;
}

/**
 * Devuelve todos los productos registrados.
 * @returns {object}
 */
function listarProductos() {
  return productos;
}

/**
 * Devuelve el precio de un producto o null si no existe.
 * @param {string} nombre
 * @returns {number|null}
 */
function obtenerPrecio(nombre) {
  return productos.hasOwnProperty(nombre) ? productos[nombre] : null;
}

// Exportación para pruebas con Jest (Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { productos, agregarProducto, listarProductos, obtenerPrecio };
}


// Validación adicional: el nombre no puede contener solo espacios en blanco
