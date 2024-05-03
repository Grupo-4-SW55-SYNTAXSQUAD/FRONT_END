<script setup>

import SearchComponent from "./search.component.vue";
import ListImagesComponent from "./listimages.component.vue";
</script>

<template>
  <div class = "page">
    <div class = "background-image">
      <div class = "background-text">
        <h1>Descubre el mundo con nosotros, <br>tu aventura comienza aquí</h1>
        <p>Encuentra grandes vacaciones y <br>actividades alrededor del Perú</p>
      </div>

    </div>

    <search-component>

    </search-component>
    <list-images-component>

    </list-images-component>
    <footer></footer>
  </div>
</template>

<style>

footer{
  height: 5em;
}


#app {
  margin: 0 10em !important;
}

.background-image{

  color: white;

  background-size: cover;
  background-image: url("@/components/icons/background-image.png");

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1450px;
  height: 600px;
}


.background-text{
  background-color: oklch(60% 0 99 / 60%);
  padding: 0.5em;
  border-radius: 1em;

  text-align: center;
  margin: auto;
}

.background-text > h1{
  font-weight: bold !important;

}

.page{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;


}
</style>