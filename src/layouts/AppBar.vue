<template>
  <v-app-bar flat fixed class="app-bar">
    <v-app-bar-title>
      <v-avatar>
        <v-img src="@/assets/logo.png" cover />
      </v-avatar>

      <router-link to="/" class="ml-2 text-white text-decoration-none">Wanlainjo
      </router-link>
    </v-app-bar-title>

    <v-spacer />

    <router-link to="/" class="text-decoration-none mr-5 text-indigo-accent-4 hidden-xs-only"
      active-class="blue-grey--text text--darken-1">.home()</router-link>
    <router-link to="/work" class="text-decoration-none mr-5 text-indigo-accent-4 hidden-xs-only"
      active-class="blue-grey--text text--darken-1">.work()</router-link>
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