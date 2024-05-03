<script setup>

</script>

<template >

  <div class="main-toolbar"  ref="toolbar">
    <pv-toolbar class = "toolbar-component" >

      <template #start>
        <h1>PeruVentura</h1>
      </template>
      <template #center>
        <div class = "flex  gap-2" style="font-size: 24px">
          <router-link to="home">
            <pv-button class="toolbar-button" label="Home"/>
          </router-link>
          <router-link to="destination">
            <pv-button class="toolbar-button" label="Destinos"/>
          </router-link>
          <router-link to="activities">
            <pv-button class="toolbar-button" label="Actividades"/>
          </router-link>
          <router-link to="/promotion">
            <pv-button class="toolbar-button" label="Promociones"/>
          </router-link>
          <router-link to="contact">
            <pv-button class="toolbar-button" label="Contacto"/>
          </router-link>
        </div>
      </template>
      <template #end>
        <router-link to="/profile-tourist">
          <div class=" toolbar-nav flex align-items-center">
            <i class = "pi pi-user" style="font-size: 24px"></i>
          </div>
        </router-link>

      </template>
    </pv-toolbar>
  </div>


</template>

<style scoped>

.toolbar-component {
  width: 100%;
  z-index: 1000;
}

.toolbar-button{
  background-color: white;
  color: black;
  font-size: 1.1em;
}
h1{
  font-weight: bold;
}

.toolbar-component{

  border: none;
  border-radius: 0;
  width: 80vw;
  border-bottom: 2px solid black;
}

.toolbar-nav > p{
  font-size: 25px;
}



</style>