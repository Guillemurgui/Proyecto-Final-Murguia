document.addEventListener("DOMContentLoaded", () => {
    const mensaje = document.getElementById("mensaje");
  
    const datos = JSON.parse(localStorage.getItem("datosCheckout"));
  
    if (datos && datos.nombre) {
      mensaje.textContent = `¡Gracias, ${datos.nombre}! Tu pedido está siendo procesado.`;
    } else {
      mensaje.textContent = "Tu pedido está siendo procesado.";
    }
  
  });
  