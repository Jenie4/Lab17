const formulario = document.querySelector("#contacto");

if (formulario) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre")?.value.trim();
    const correo = document.getElementById("email")?.value.trim();
    const numero = document.getElementById("telefono")?.value.trim();
    const descripcion = document.getElementById("mensaje")?.value.trim();

    const errores = [];

    if (!nombre || nombre.length < 3) {
      errores.push("El nombre debe tener al menos 3 caracteres.");
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo || !regexCorreo.test(correo)) {
      errores.push("Por favor, ingresa un correo electrónico válido.");
    }

    const regexTelefono = /^[0-9]{7,15}$/;
    if (!numero || !regexTelefono.test(numero)) {
      errores.push("El número de teléfono debe tener entre 7 y 15 dígitos numéricos.");
    }

    if (!descripcion || descripcion.length < 10) {
      errores.push("El mensaje debe contener al menos 10 caracteres.");
    }

    if (errores.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: errores.join("<br>"),
        confirmButtonColor: "#7a00ff",
        background: "#2a003e",
        color: "#fff",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "¡Formulario enviado con éxito!",
      html: `
        <b>Nombre:</b> ${nombre}<br>
        <b>Correo:</b> ${correo}<br>
        <b>Teléfono:</b> ${numero}<br>
        <b>Mensaje:</b> ${descripcion}
      `,
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#7a00ff",
      background: "#24003a",
      color: "#fff",
      showClass: {
        popup: "animate_animated animate_fadeInDown"
      },
      hideClass: {
        popup: "animate_animated animate_fadeOutUp"
      }
    });

    formulario.reset();
  });
} else {
  console.error("No se encontró el formulario con el ID #contacto");
}