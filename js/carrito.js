document.addEventListener("DOMContentLoaded", async () => {
    const contenedor = document.getElementById("carrito-contenedor");
    const totalSpan = document.getElementById("total-precio");
    const btnCheckout = document.getElementById("btn-checkout");
  
    const productos = await fetch("../data/productos.json").then(res => res.json());
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    const renderCarrito = () => {
      contenedor.innerHTML = "";
  
      let total = 0;
  
      carrito.forEach(item => {
        const producto = productos.find(p => p.id === item.id);
        const subtotal = producto.precio * item.cantidad;
        total += subtotal;
  
        const div = document.createElement("div");
        div.classList.add("item-carrito");
  
        div.innerHTML = `
          <h3>${producto.nombre}</h3>
          <p>Precio unitario: $${producto.precio}</p>
          <p>Cantidad: ${item.cantidad}</p>
          <p>Subtotal: $${subtotal}</p>
          <button class="btn-eliminar" data-id="${item.id}">Eliminar</button>
        `;
  
        contenedor.appendChild(div);
      });
  
      totalSpan.textContent = total;
  
      // Event listeners de eliminación
      document.querySelectorAll(".btn-eliminar").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const id = parseInt(e.target.dataset.id);
          carrito = carrito.filter(item => item.id !== id);
          localStorage.setItem("carrito", JSON.stringify(carrito));
          renderCarrito();
        });
      });
    };
  
    renderCarrito();
  
    btnCheckout.addEventListener("click", () => {
      if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }
  
      window.location.href = "checkout.html";
    });
  });
  