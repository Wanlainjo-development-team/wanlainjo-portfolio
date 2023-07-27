<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card color="transparent" class="d-flex justify-space-between align-center" width="100%" height="100vh" flat>
          <v-card-text class="text-center">
            <v-avatar size="150">
              <v-img src="@/assets/logo.png" cover />
            </v-avatar>

            <v-card-text class="text-h4 font-weight-bold">Wanlainjo Groups</v-card-text>
            <span>Your Path to Excellence</span>
            <v-card-actions class="d-flex justify-space-evenly">
              <v-btn icon flat @click="openLink('https://www.facebook.com/Rukkiecodes')">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon flat @click="openLink('https://twitter.com/rukkiecodes')">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon flat @click="openLink('https://www.linkedin.com/in/rukkiecodes')">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row id="work">
      <v-col cols="12" sm="6" md="5">
        <v-card color="transparent" class="mx-0 ml-sm-5" flat>
          <v-card-title class="mx-0 px-0 text-h4">about(<span class="text-indigo-accent-4">Wanlainjo</span>)<span
              class="ml-3">{</span></v-card-title>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="11">
              <span class="text-blue-grey-darken-1">
                `
                <span>Welcome to Wanlainjo Groups - Your Path to Excellence!</span>
                <br>
                <br>
                <span>We are a dynamic company excelling in four key sectors: Computer Hardware Sales and Repairs,
                  Software Development, Real Estate, and IT Training.</span>
                `
              </span>
            </v-col>
          </v-row>
          <v-card-title class="mx-0 px-0 text-h4">}</v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="7">
        <Repo />
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col cols="12" sm="4">
        <SkillsImage />
      </v-col>
      <v-col cols="12" sm="8">
        <Skills />
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col cols="12">
        <v-card color="transparent" flat>
          <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">Check out our <router-link to="/work"
              class="text-indigo-accent-4" style="cursor: pointer;">Selcted works</router-link> for more
            details.</p>
          <p>We are available for new projects and a coffee <span>😉</span></p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Repo from "../components/Repo.vue"
import SkillsImage from "../components/SkillsImage.vue"
import Skills from "../components/Skills.vue"

const openLink = link => {
  // window.open(link)
}
</script>
