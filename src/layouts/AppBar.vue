<template>
  <v-app-bar flat fixed class="app-bar">
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Essentials Preset
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
  //
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");

* {
  font-family: "Fira Code", monospace !important;
}

.app-bar {
  background: #1212128a !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>