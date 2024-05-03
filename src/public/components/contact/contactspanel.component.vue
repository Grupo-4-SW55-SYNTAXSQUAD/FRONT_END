<script setup>

</script>

<template>
  <pv-panel :style="{height:'46.5em', width:'55em'}">
    <div class = "flex flex-column gap-2">
      <div class = "flex gap-2">
        <img src = "@/components/icons/ai-icon.png" width="50" height="50">
        <h1>AI Bot</h1>
      </div>
      <hr>
      <div class = "conversation-panel">
      </div>
      <div class = "message flex gap-2">

        <pv-inputtext style="width:520px" v-model="Mensaje" placeholder="Ingresa tu mensaje aquí">
        </pv-inputtext>
        <pv-button>
          <img src="@/components/icons/emoji.png"  width="40" height="40">
        </pv-button>
        <pv-button>
          <img src="@/components/icons/upload.png"  width="40" height="40">

        </pv-button>
        <pv-button>
          <img src="@/components/icons/microphone.png"  width="40" height="40">

        </pv-button>
        <pv-button>
          <img src="@/components/icons/send.png"  width="40" height="40">

        </pv-button>
      </div>
    </div>

  </pv-panel></template>

<style scoped>

.conversation-panel{
  height: 35em;
}
</style>