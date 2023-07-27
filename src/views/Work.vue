<template>
    <v-container style="margin-top: 40vh;">
        <v-row>
            <v-col cols="1" sm="2"></v-col>
            <v-col cols="11" sm="10">
                <p class="font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2">work(<span
                        class="text-indigo-accent-4 font-weight-light">'selected'</span>)</p>
                <p class="text-blue-grey-darken-1 mb-16">// Some special projects.</p>


                <v-row dense v-for="(project, i) in app.projects" :key="i" class="pb-16">
                    <v-col cols="12" sm="4">
                        <v-card color="transparent" flat>
                            <v-card-text>
                                <v-avatar :size="size" @click="gotoLink(project.to)" style="cursor: pointer;">
                                    <v-img :src="project.avatar" cover />
                                </v-avatar>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <v-card color="transparent" flat>
                            <v-card-title @click="gotoLink(project.to)"
                                class="text-decoration-none text-indigo-accent-4 font-weight-bold text-h5 text-sm-h4 text-md-h3"
                                style="line-height: 1.2em; cursor: pointer;">{{ project.title }}</v-card-title>
                            <v-card-text>{{ project.caption }}</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <!-- <v-list-item v-for="(project, i) in app.projects" :key="i" class="pb-16">
                    <template v-slot:prepend>
                        <v-avatar :size="size" @click="gotoLink(project.to)"  style="cursor: pointer;">
                            <v-img :src="project.avatar" cover />
                        </v-avatar>
                    </template>
                    <v-list-item-title>
                        <span
                        @click="gotoLink(project.to)"
                            class="text-decoration-none text-indigo-accent-4 font-weight-bold text-h5 text-sm-h4 text-md-h3 text-lg-h2"
                            style="line-height: 1.2em; cursor: pointer;">{{
                                project.title }}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle v-if="project.caption != ''">
                        <span class="text-body-1">{{ project.caption }}</span>
                    </v-list-item-subtitle>
                </v-list-item> -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { useAppStore } from '@/store/app'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
export default {
    setup() {
        const app = useAppStore()

        const size = computed(() => {
            const { name } = useDisplay()

            switch (name.value) {
                case 'xs': return 50
                case 'sm': return 100
                case 'md': return 150
                case 'lg': return 300
                case 'xl': return 300
            }

            return undefined
        })

        return {
            app,
            size
        }
    },

    methods: {
        gotoLink(link) {
            window.open(link)
        }
    }
}
</script>
