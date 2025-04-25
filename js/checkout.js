document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-checkout");
  
    // Precarga de datos si ya hay algo en localStorage
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const direccion = document.getElementById("direccion");
  
    const datosGuardados = JSON.parse(localStorage.getItem("datosCheckout"));
  
    if (datosGuardados) {
      nombre.value = datosGuardados.nombre || "";
      email.value = datosGuardados.email || "";
      direccion.value = datosGuardados.direccion || "";
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const datos = {
        nombre: nombre.value.trim(),
        email: email.value.trim(),
        direccion: direccion.value.trim()
      };
  
      localStorage.setItem("datosCheckout", JSON.stringify(datos));
  
     
      localStorage.removeItem("carrito");
  
      window.location.href = "gracias.html";
    });
  });
  