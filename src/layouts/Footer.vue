<template>
    <v-footer color="grey-darken-4" rounded="lg">
        <v-card flat rounded="lg" color="transparent">
            <v-card-title class="">CONTACT INFO</v-card-title>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-card-text class=" text-body-2">
                        Contact us and let us know your thoughts using the contact information below and we will get back to you as soon as
                        possible 🙂
                    </v-card-text>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-card-text>
                        <div class="d-flex justify-start align-center">
                            <v-avatar variant="outlined" color="indigo-accent-4">
                                <v-icon>mdi-map-marker</v-icon>
                            </v-avatar>
                            <span class="ml-4  text-body-1">20 Peremabiri Street, Dline Port Harcourt</span>
                        </div>
                        <div class="d-flex justify-start align-center mt-4">
                            <v-avatar variant="outlined" color="indigo-accent-4">
                                <v-icon>mdi-phone</v-icon>
                            </v-avatar>
                            <span class="ml-4  text-body-1"><a href="tel:+2348179612183" class="">+2348179612183</a></span>
                        </div>
                        <div class="d-flex justify-start align-center mt-4">
                            <v-avatar variant="outlined" color="indigo-accent-4">
                                <v-icon>mdi-at</v-icon>
                            </v-avatar>
                            <span class="ml-4  text-body-1"><a href="mailto:info@wanLainjotechhub.org"
                                    class="">info@wanLainjotechhub.org</a></span>
                        </div>
                    </v-card-text>
                </v-col>
                <v-col cols="12">
                    <span>Wanlainjo Groups © {{ new Date().getFullYear() }}</span>
                </v-col>
            </v-row>
        </v-card>
    </v-footer>
</template>
