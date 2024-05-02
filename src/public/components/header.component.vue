<script>
export default {
  name: "header-component"
}
</script>

<template>
  <body>
  <header class="header">
    <nav class="nav container">
      <a href='#' class="logo">
        <i class='bx bxs-bug logo__icon'></i>
        <span>PeruVentura</span>
      </a>

      <div class="nav__menu">
        <button type="button" class="btn btn--close" aria-label="cerrar">
          <i class='bx bx-x'></i>
        </button>

        <ul class="nav__list">
          <li class="nav__item">
            <a href='#hero' class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href='#about' class="nav__link">About Us</a>
          </li>
          <li class="nav__item">
            <a href='#services' class="nav__link">Servicios</a>
          </li>
          <li class="nav__item">
            <a href='#works' class="nav__link">About the Team</a>
          </li>
          <li class="nav__item">
            <a href='#contact' class="nav__link">Contacto</a>
          </li>
        </ul>
      </div>

      <button type="button" class="btn btn--open" aria-label="abrir">
        <i class='bx bx-menu'></i>
      </button>
    </nav>
  </header>
  </body>
</template>

<style scoped>

</style>