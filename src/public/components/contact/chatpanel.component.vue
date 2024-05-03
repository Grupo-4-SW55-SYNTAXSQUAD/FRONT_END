<script setup>

</script>

<template >
  <pv-panel :style="{height:'45em', width:'20em'}">
    <template #header>
      <div style="background-color: cyan; font-size: 24px; padding: 4px; border-radius: 0.5em;">
        <p>Contactos</p>
      </div>
    </template>
    <div class = "panel-component">
      <div class = "flex flex-column gap-2">
        <p>En linea:</p>
        <div class = "flex gap-3">
          <i class = "img-class pi pi-user"/>
          <i class = "img-class pi pi-user"/>
          <i class = "img-class pi pi-user"/>
          <i class = "img-class pi pi-user"/>

        </div>


      </div>
    </div>

  </pv-panel>
</template>

<style scoped>

.panel-component{
  padding: 0;
  font-size: 20px;
}

.img-class{
  font-size: 2.75em;
}
</style>