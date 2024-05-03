<template>
  <div class="promotion-cards">
    <pv-card class="promotion-card">
      <template #title>
        <p>Clase de cocina peruana y mercado local en Cusco</p>
      </template>
      <template #content>
        <div class="promotion-details">
          <div class="game-info">
            <div>
              <img src="../../../assets/promotion.png" >
            </div>
            <div class="info-text">
              <p><strong>Place:</strong> Cusco</p>
              <p><strong>Time:</strong> 4 horas</p>
              <p><strong>Offer:</strong> 2 personas x uno</p>
            </div>
          </div>
          <div class="promotion-actions">
            <button class="ver-detalles-button">Ver Detalles</button>
            <div class="price-box">
              <p class="price-text">$99</p>
            </div>
          </div>
        </div>
      </template>
    </pv-card>
    <pv-card class="promotion-card">
      <template #title>
        <p>Clase de cocina peruana y mercado local en Cusco</p>
      </template>
      <template #content>
        <div class="promotion-details">
          <div class="game-info">
            <div>
              <img src="../../../assets/promotion.png" >
            </div>
            <div class="info-text">
              <p><strong>Place:</strong> Cusco</p>
              <p><strong>Time:</strong> 4 horas</p>
              <p><strong>Offer:</strong> 2 personas x uno</p>
            </div>
          </div>
          <div class="promotion-actions">
            <button class="ver-detalles-button">Ver Detalles</button>
            <div class="price-box">
              <p class="price-text">$99</p>
            </div>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.promotion-cards {
  display: flex;
  justify-content: center;
}

.promotion-card {
  max-width: 800px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid black; /* Añade un contorno negro a las tarjetas */
}

.game-info {
  display: flex;
  align-items: center;
}

.game-info img {
  max-width: 550px; /* Ajusta el tamaño de la imagen según tus necesidades */
  margin-right: 20px;
}

.info-text {
  display: flex;
  flex-direction: column;
}

.info-text p {
  margin: 15px 0;
}

.promotion-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ver-detalles-button {
  background-color: purple;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
}

.price-box {
  background-color: lightgray; /* Agrega un color de fondo al precio */
  padding: 15px;
  border-radius: 8px;
}

.price-text {
  margin: 0;
}
</style>

<script setup lang="ts">
</script>
