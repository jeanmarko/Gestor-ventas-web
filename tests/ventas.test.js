// ============================================
// TESTS - Módulo Ventas
// ============================================

const { productos, agregarProducto } = require("../js/productos");
const { ventas, registrarVenta, calcularTotalVentas } = require("../js/ventas");

beforeEach(() => {
  for (const key in productos) delete productos[key];
  ventas.length = 0;
  agregarProducto("Pantalon", 80);
});

test("registrar venta válida devuelve true y se agrega al historial", () => {
  const resultado = registrarVenta("Pantalon", 2);
  expect(resultado).toBe(true);
  expect(ventas.length).toBe(1);
});

test("el total de la venta se calcula correctamente", () => {
  registrarVenta("Pantalon", 3);
  expect(calcularTotalVentas()).toBe(240);
});

test("registrar venta de producto inexistente devuelve false", () => {
  const resultado = registrarVenta("Zapatos", 1);
  expect(resultado).toBe(false);
});

test("registrar venta con cantidad inválida devuelve false", () => {
  const resultado = registrarVenta("Pantalon", 0);
  expect(resultado).toBe(false);
});
