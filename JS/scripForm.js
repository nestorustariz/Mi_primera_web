
const form = document.getElementById("formularios");
const nombre = document.getElementById("nombres");
const parrafo = document.getElementById("alertas");
const email = document.getElementById("email");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (nombre.value.length < 4) {
    valido = false;
    Swal.fire({
      icon: 'error',
      title: '',
      html: '<b class="rojo">El nombre debe tener más de 4 caracteres</b>',
      padding: '1rem',
      allowOutsideClick: true,
      allowEscapeKey: false,
      allowEnterKey: true,
      confirmButtonColor: 'red'
    });
    
  }
  if(!emailRegex.test(email.value)){

    valido = false;

    Swal.fire({
      icon: 'error',
      title: '',
      html: '<b class="rojo">El email no es válido</b>',
      padding: '1rem',
      allowOutsideClick: true,
      allowEscapeKey: false,
      allowEnterKey: true,
      confirmButtonColor: 'red'
    });


  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {

    Swal.fire({
      icon: 'success',
      title: 'ENVIADO',
      confirmButtonColor: 'green',
      timer: 1500
    });
    limpiarFormulario();
  }
  return valido;
 
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formularios.submit();
   
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});


function enviarFormulario(){
  console.log('enviando formulario');
  validarFormulario();

  return false;
}

function limpiarFormulario() {
  document.getElementById("formularios").reset();
}
