// ============================================
// TESTS - Módulo Productos
// ============================================

const { productos, agregarProducto, obtenerPrecio } = require("../js/productos");

beforeEach(() => {
  // Limpia el objeto productos antes de cada test
  for (const key in productos) delete productos[key];
});

test("agregar producto válido devuelve true y lo registra", () => {
  const resultado = agregarProducto("Camisa", 50);
  expect(resultado).toBe(true);
  expect(productos["Camisa"]).toBe(50);
});

test("agregar producto con precio negativo devuelve false", () => {
  const resultado = agregarProducto("Camisa", -10);
  expect(resultado).toBe(false);
});

test("agregar producto con nombre vacío devuelve false", () => {
  const resultado = agregarProducto("", 50);
  expect(resultado).toBe(false);
});

test("obtener precio de producto existente", () => {
  agregarProducto("Polo", 30);
  expect(obtenerPrecio("Polo")).toBe(30);
});

test("obtener precio de producto inexistente devuelve null", () => {
  expect(obtenerPrecio("NoExiste")).toBeNull();
});
