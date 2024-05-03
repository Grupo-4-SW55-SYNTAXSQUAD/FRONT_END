<script>

export default {
  name: "tourist_profile",
}
</script>

<template>
  <div class="tourist-profile">
    <div class="profile-info">
      <pv-card class="user-info-card">
        <template #title>Datos del Usuario</template>
        <template #content>
          <div class="user-data">
            <p class="data-label">Nombre:</p>
            <p class="data-value">User</p>
            <p class="data-label">Edad:</p>
            <p class="data-value">20</p>
            <p class="data-label">Nacionalidad:</p>
            <p class="data-value">Peruano</p>
          </div>
        </template>
      </pv-card>

      <pv-card class="tourist-card">
        <template #title>Turista</template>
        <template #content>
          <div class="tourist-content">
            <p class="tourist-name">User</p>
            <div class="image-container">
              <img src="@/assets/userDefault.png" alt="imagen" class="profile-image" />
            </div>
            <p class="tourist-quote">"Nunca te rindas ante las adversidades"</p>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.tourist-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-info {
  width: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.user-info-card {
  background-color: #fff; /* Cambio de color de fondo */
  border: 2px solid #ddd; /* Reducción del grosor del borde y cambio de color */
  border-radius: 15px; /* Aumento del radio de borde */
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1); /* Agregado de sombra */
}

.user-info-card pv-card-title {
  font-size: 20px; /* Aumento del tamaño del título */
  font-weight: bold; /* Añadido de negrita al título */
}

.user-data {
  padding: 20px;
}

.data-label {
  font-weight: bold;
  color: #333; /* Cambio de color del texto a uno más oscuro */
}

.data-value {
  margin-top: 5px;
  color: #666; /* Cambio de color del texto a uno más suave */
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.tourist-quote {
  font-style: italic;
}
.image-container {
  text-align: center; /* Centra horizontalmente el contenido */
}
</style>
