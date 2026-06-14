// ============================================
// MAIN - Lógica de interfaz (DOM)
// Conecta los módulos de productos, ventas y reportes
// con la interfaz HTML
// ============================================

const formProducto = document.getElementById("form-producto");
const formVenta = document.getElementById("form-venta");
const tablaProductosBody = document.querySelector("#tabla-productos tbody");
const tablaVentasBody = document.querySelector("#tabla-ventas tbody");
const selectProducto = document.getElementById("select-producto");
const msgProducto = document.getElementById("msg-producto");
const msgVenta = document.getElementById("msg-venta");

// ---------- Renderizado ----------

function renderProductos() {
  tablaProductosBody.innerHTML = "";
  selectProducto.innerHTML = '<option value="">-- Seleccione un producto --</option>';

  const items = listarProductos();
  for (const nombre in items) {
    const precio = items[nombre];

    // Fila en la tabla
    const row = document.createElement("tr");
    row.innerHTML = `<td>${nombre}</td><td>S/. ${precio.toFixed(2)}</td>`;
    tablaProductosBody.appendChild(row);

    // Opción en el select
    const option = document.createElement("option");
    option.value = nombre;
    option.textContent = `${nombre} (S/. ${precio.toFixed(2)})`;
    selectProducto.appendChild(option);
  }
}

function renderVentas() {
  tablaVentasBody.innerHTML = "";
  const ventas = obtenerVentas();

  ventas.forEach((v, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${v.producto}</td>
      <td>${v.cantidad}</td>
      <td>S/. ${v.precioUnitario.toFixed(2)}</td>
      <td>S/. ${v.total.toFixed(2)}</td>
    `;
    tablaVentasBody.appendChild(row);
  });
}

function renderReporte() {
  const r = generarReporte();
  document.getElementById("rep-transacciones").textContent = r.transacciones;
  document.getElementById("rep-ingresos").textContent = r.ingresos.toFixed(2);
  document.getElementById("rep-producto").textContent = r.productoMasVendido;
  document.getElementById("rep-mayor").textContent = r.mayorVentaIndividual.toFixed(2);
}

function mostrarMensaje(el, texto, tipo) {
  el.textContent = texto;
  el.className = `msg ${tipo}`;
  setTimeout(() => { el.textContent = ""; el.className = "msg"; }, 3000);
}

// ---------- Eventos ----------

formProducto.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre-producto").value;
  const precio = parseFloat(document.getElementById("precio-producto").value);

  const ok = agregarProducto(nombre, precio);
  if (ok) {
    mostrarMensaje(msgProducto, `✅ Producto "${nombre}" registrado correctamente.`, "success");
    formProducto.reset();
    renderProductos();
  } else {
    mostrarMensaje(msgProducto, "❌ Datos inválidos. Verifica nombre y precio.", "error");
  }
});

formVenta.addEventListener("submit", (e) => {
  e.preventDefault();
  const producto = selectProducto.value;
  const cantidad = parseInt(document.getElementById("cantidad-venta").value);

  const ok = registrarVenta(producto, cantidad);
  if (ok) {
    mostrarMensaje(msgVenta, `✅ Venta registrada correctamente.`, "success");
    formVenta.reset();
    renderVentas();
    renderReporte();
  } else {
    mostrarMensaje(msgVenta, "❌ No se pudo registrar la venta. Verifica los datos.", "error");
  }
});

// ---------- Inicialización ----------
renderProductos();
renderVentas();
renderReporte();
