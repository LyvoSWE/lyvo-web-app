<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group active-class="primary--text">
          <v-list-item @click="routeTo('/')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item @click="routeTo('/faq')">
            <v-list-item-icon>
              <v-icon>mdi-frequently-asked-questions</v-icon>
            </v-list-item-icon>
            <v-list-item-title>FAQ</v-list-item-title>
          </v-list-item>
          <v-list-item @click="routeTo('/team')">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Our Team</v-list-item-title>
          </v-list-item>
          <v-list-item @click="routeTo('/application')">
            <v-list-item-icon>
              <v-icon>mdi-application</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Application</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>BioTech Hacks</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <Alert />

        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app absolute>
      <v-card flat tile width="100vw" class="accent white--text text-center">
        <v-card-text>
          <!-- How to link with a button https://stackoverflow.com/a/58299637 -->
          <v-btn
            v-for="icon in APP.icons"
            :key="icon"
            class="mx-4 white--text"
            icon
            :href="icon.link"
            target="_blank"
          >
            <v-icon size="24px">{{ icon.name }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>BioTech Hacks</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { constants } from '@/utils/constants'
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      APP: constants.APP
    }
  },
  components: {
    Alert: () => import('@/components/Alert')
  },
  methods: {
    routeTo(newPath) {
      if (this.$route.path != newPath) {
        this.$router.push({ path: newPath })
      }
    }
  }
}
</script>
