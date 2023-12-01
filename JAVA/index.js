document.addEventListener("DOMContentLoaded", function () {
  const carritoGuardado = JSON.parse(localStorage.getItem("carritoDeCompras"));
  if (carritoGuardado && carritoGuardado.length > 0) {
    const productosEnCarrito = document.getElementById("productos-en-carrito");

    carritoGuardado.forEach((producto) => {
      const productoElemento = document.createElement("div");
      productoElemento.innerHTML = `
                  <p>${producto.nombre}</p>
                  <p>Precio: ${producto.precio}</p>
              `;
      productosEnCarrito.appendChild(productoElemento);
    });
  } else {
    alert("El carrito de compras está vacío.");
  }
});
