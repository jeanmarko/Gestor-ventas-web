// ============================================
// MÓDULO 3: Historial y Reportes
// Responsable: Integrante 3
// ============================================

let _obtenerVentas = typeof obtenerVentas !== "undefined" ? obtenerVentas : null;
let _calcularTotalVentas = typeof calcularTotalVentas !== "undefined" ? calcularTotalVentas : null;

if (typeof module !== "undefined" && module.exports) {
  const ventasModule = require("./ventas");
  _obtenerVentas = ventasModule.obtenerVentas;
  _calcularTotalVentas = ventasModule.calcularTotalVentas;
}

/**
 * Genera un objeto resumen con las estadísticas del reporte.
 * @returns {object}
 */
function generarReporte() {
  const ventas = _obtenerVentas();
  const total = _calcularTotalVentas();

  if (ventas.length === 0) {
    return {
      transacciones: 0,
      ingresos: 0,
      productoMasVendido: "-",
      mayorVentaIndividual: 0
    };
  }

  const productoMasVendido = ventas.reduce((max, v) =>
    v.cantidad > max.cantidad ? v : max
  ).producto;

  const mayorVentaIndividual = Math.max(...ventas.map(v => v.total));

  return {
    transacciones: ventas.length,
    ingresos: total,
    productoMasVendido,
    mayorVentaIndividual
  };
}

// Exportación para pruebas con Jest (Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { generarReporte };
}
