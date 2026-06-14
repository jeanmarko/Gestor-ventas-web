// ============================================
// TESTS - Módulo Reportes
// ============================================

const { productos, agregarProducto } = require("../js/productos");
const { ventas, registrarVenta } = require("../js/ventas");
const { generarReporte } = require("../js/reportes");

beforeEach(() => {
  for (const key in productos) delete productos[key];
  ventas.length = 0;
});

test("reporte sin ventas devuelve valores en cero", () => {
  const r = generarReporte();
  expect(r.transacciones).toBe(0);
  expect(r.ingresos).toBe(0);
  expect(r.productoMasVendido).toBe("-");
});

test("reporte calcula correctamente con ventas registradas", () => {
  agregarProducto("Camisa", 50);
  agregarProducto("Zapatos", 120);
  registrarVenta("Camisa", 3);   // total 150
  registrarVenta("Zapatos", 1);  // total 120

  const r = generarReporte();
  expect(r.transacciones).toBe(2);
  expect(r.ingresos).toBe(270);
  expect(r.productoMasVendido).toBe("Camisa"); // mayor cantidad (3)
  expect(r.mayorVentaIndividual).toBe(150);
});
