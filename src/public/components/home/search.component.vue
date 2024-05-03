<script setup>

</script>

<template>
  <div class="main-toolbar">
    <pv-toolbar class = "toolbar-component ">
      <template #center style="padding:1em">
        <div class=" toolbar-nav flex align-items-center gap-6">
          <div>
            <p>Destination</p>
            <div class = "flex align-items-center gap-2">
              <i class = "pi pi-clock" style="color: lightblue"></i>
              <h1>Destination</h1>
              <i class = "pi pi-angle-down" style="color: blueviolet"></i>

            </div>

          </div>
          <div>
            <p>Activities</p>
            <div class = "flex align-items-center gap-2">
              <i class = "pi pi-user" style="color: lightblue"></i>
              <h1>Activities</h1>
              <i class = "pi pi-angle-down" style="color: blueviolet"></i>

            </div>

          </div>
          <div>
            <p>Duration</p>
            <div class = "flex align-items-center gap-2">
              <i class = "pi pi-calendar" style="color: lightblue"></i>
              <h1>Duration</h1>
              <i class = "pi pi-angle-down" style="color: blueviolet"></i>

            </div>

          </div>
        </div>

      </template>
      <template #end class="">
        <div class = "end-toolbar align-items-center">
            <p>SEARCH</p>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>

  h1{
    font-size: 1.25em;
    font-weight: bold;
  }
  .toolbar-component{
    padding: 0;
    border: 1px solid darkgrey;
    width: 50em;
  }

  .toolbar-nav{
    padding: 1em;
  }
  .end-toolbar{
    height: 5.75em;
    width: 7.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
    color: white;

  }
</style>