<template>
  <v-card height="500" class="rounded-xl overflow-hidden">
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet width="100%" height="500" class="ma-0" color="transparent">
          <v-toolbar color="transparent">
            <v-app-bar-title>Recent projects</v-app-bar-title>
            <v-spacer />
            <v-btn flat class="bg-deep-purple-accent-4" rounded="lg" to="/work">work()</v-btn>
          </v-toolbar>

          <v-sheet width="100%" height="452" color="transparent" style="overflow: hidden; overflow-y: auto;">
            <v-list lines="one" class="pb-10">
              <v-list-item v-for="(project, i) in projects" :key="i" class="pb-5">
                <template v-slot:prepend>
                  <v-avatar size="60">
                    <v-img :src="project.avatar" cover />
                  </v-avatar>
                </template>
                <v-list-item-title>
                  <router-link class="text-decoration-none" :to="project.to">
                    {{ project.title }}
                  </router-link>
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
export default {
  data: () => ({
    drawer: true,
    projects: [
      {
        title: 'Oymo',
        to: '/oymo',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013445/oymo_x9mxvd.png',
        caption: 'Oymo is a communication platform, which offers a comfortable and safe environment for men and women to find the love of their life.'
      },
      {
        title: 'Oymo waitlist',
        to: '/oymoWaaitList',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013443/oymowl_uytscq.png',
        caption: 'Find friends, and dates around you with just a swipe.'
      },
      {
        title: 'Oymo backend',
        to: '/oymoWaaitList',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664014178/nodejs_n2acwe.png',
        caption: 'Find friends, and dates around you with just a swipe.'
      },
      {
        title: 'Tandom editor',
        to: '/tandom',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1666620492/Screenshot_from_2022-10-24_15-07-25_zhimpn.png',
        caption: 'Quick and easy email drag and drop editor'
      },
      {
        title: 'Code block',
        to: '/codeblock',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1667346265/Screenshot_from_2022-11-02_00-39-45_b0arsw.png',
        caption: 'Quick and easy code snippet editor'
      },
      {
        title: 'BlueZone Finance',
        to: '/blueZone',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013442/bz_u00lwc.png',
        caption: 'Bluezone Finance is a premium cryptocurrency Trading company, with an open financial system predominantly for the purpose of regenerating invested cryptocurrencies through daily professional trades and Crypto Mining. Bluezone Finance has become a multi-functional cryptocurrency platform, trusted by over thousands of users.'
      },
      {
        title: 'BlueZone Finance Admin',
        to: '/blueZoneAdmin',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013439/bza_mlmxsm.png',
        caption: 'Bluezone Finance is a premium cryptocurrency Trading company, with an open financial system predominantly for the purpose of regenerating invested cryptocurrencies through daily professional trades and Crypto Mining. Bluezone Finance has become a multi-functional cryptocurrency platform, trusted by over thousands of users.'
      },
      {
        title: 'BlueZone Finance backend',
        to: '/blueZone',
        icon: 'mdi-nodejs',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664014178/nodejs_n2acwe.png',
        caption: 'Bluezone Finance is a premium cryptocurrency Trading company, with an open financial system predominantly for the purpose of regenerating invested cryptocurrencies through daily professional trades and Crypto Mining. Bluezone Finance has become a multi-functional cryptocurrency platform, trusted by over thousands of users.'
      },
      {
        title: 'Maystro',
        to: '/maystro',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013444/maystro_df4df0.png',
        caption: 'ESTABLISHED OR EMERGING, WE PROVIDE QUALITY OPPORTUNITIES WITHIN FILM, TELEVISION, THEATRE & COMMERCIALS.'
      },
      {
        title: 'Trustpaddi',
        to: '/trustpaddi',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013444/tp_xjiihh.png',
        caption: 'TrustPaddi is a payment solution built with escrow protection, which ensures safer and scam free transactions between online vendors, service providers and individuals online.'
      },
      {
        title: 'Trustpaddi waitlist',
        to: '/trustpaddiWaitlist',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664013443/tpwl_ke2h3h.png',
        caption: 'TrustPaddi is a payment solution built with escrow protection, which ensures safer and scam free transactions between online vendors, service providers and individuals online.'
      },
      {
        title: 'Trustpaddi backend',
        to: '/trustpaddi',
        avatar: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664014178/nodejs_n2acwe.png',
        caption: 'TrustPaddi is a payment solution built with escrow protection, which ensures safer and scam free transactions between online vendors, service providers and individuals online.'
      },
    ],
  })
}
</script>
