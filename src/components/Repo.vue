<template>
  <v-card height="500" class="rounded-xl overflow-hidden">
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet width="100%" height="500" class="ma-0" color="transparent">
          <v-toolbar color="transparent">
            <v-app-bar-title>Recent projects</v-app-bar-title>
            <v-spacer />
            <v-btn flat class="bg-indigo-accent-4" rounded="lg" to="/work">work</v-btn>
          </v-toolbar>

          <v-sheet width="100%" height="452" color="transparent" style="overflow: hidden; overflow-y: auto;">
            <v-list lines="one" class="pb-10">
              <v-list-item v-for="(project, i) in app.projects" :key="i" class="pb-5">
                <template v-slot:prepend>
                  <v-avatar size="60" style="cursor: pointer;" @click="gotoLink(project.to)">
                    <v-img :src="project.avatar" cover />
                  </v-avatar>
                </template>
                <v-list-item-title>
                  <span class="text-indigo-accent-4" @click="gotoLink(project.to)" style="cursor: pointer;">{{
                    project.title }}</span>
                </v-list-item-title>
                <v-list-item-subtitle v-if="project.caption != ''">
                  <span class="text-caption">{{ project.caption.slice(0, 100) }}</span>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { useAppStore } from '@/store/app'
export default {
  data: () => ({
    drawer: true,
  }),

  setup() {
    const app = useAppStore()

    return {
      app
    }
  },

  methods: {
    gotoLink(link) {
      window.open(link)
    }
  }
}
</script>
