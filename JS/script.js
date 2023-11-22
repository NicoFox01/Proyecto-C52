//nav para las paginas: Equipo, Servicio y Contacto.
document.addEventListener('DOMContentLoaded', function () {

  const navJs = document.getElementById('navJs');

  navJs.innerHTML = `
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <img id="Logo-Nav" src="../Imagenes/LogoANConsultora.jpg" alt="Logo AN Consultora">
        <a class="navbar-brand" href="#">AN Consultora</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../Repositorio/Equipo.html">Equipo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../Repositorio/Servicios.html">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../Repositorio/Contacto.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>`;

  const nav = document.createElement('nav');
  nav.className = 'navbar bg-body-tertiary fixed-top';
  
  navJsContainer.appendChild(nav);
});
//Footer para las paginas: Equipo, servicios y Contacto.
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('idfooter').innerHTML = `
    <div class="divider"></div>
    <div class="contenedor-footer">
      <img id="imagen-logo" src="../imagenes/LogoANConsultora.jpg" alt="Logo AN consultora">
      <p>www.anconsultora.com.ar</p>
    </div>`;
});
//funcion de mensaje para mandarle a la persona que completa form
function mostrarMensaje() {
  let nombre = document.getElementById('nombre').value;
  alert(`¡Muchas gracias ${nombre}! Te estaremos contactando a la brevedad.`);
}