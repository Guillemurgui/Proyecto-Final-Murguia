document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-productos");
  
    fetch("../data/productos.json")
      .then((res) => res.json())
      .then((productos) => {
        productos.forEach((producto) => {
          const div = document.createElement("div");
          div.classList.add("card-producto");
  
          div.innerHTML = `
            <img src="assets/${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <span>$${producto.precio}</span>
            <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
          `;
  
          contenedor.appendChild(div);
        });
  
        // botones
        const botones = document.querySelectorAll(".btn-agregar");
        botones.forEach((btn) =>
          btn.addEventListener("click", (e) => {
            const idProducto = e.target.dataset.id;
            agregarAlCarrito(idProducto);
          })
        );
      });
  
    const agregarAlCarrito = (id) => {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const idNum = parseInt(id);
  
      const yaEsta = carrito.some((item) => item.id === idNum);
  
      if (yaEsta) {
        carrito = carrito.map((item) =>
          item.id === idNum ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        carrito.push({ id: idNum, cantidad: 1 });
      }
  
      localStorage.setItem("carrito", JSON.stringify(carrito));
    };
  });
  