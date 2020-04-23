<template>
  <v-app light>
    <v-navigation-drawer v-model="sidebar" app temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(navLink, i) in navLinks"
            :key="i"
            :to="navLink.link"
            exact
            active-class="primary--text"
          >
            <v-list-item-title>{{ navLink.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevate-on-scroll>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="sidebar = true" />

      <v-toolbar-title>
        <router-link to="/" tag="div" style="cursor: pointer" class="pr-4">
          <v-img src="@/assets/covid.png" width="35px" />
        </router-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(navLink, i) in navLinks"
          :key="i"
          :to="navLink.link"
          active-class="primary--text"
        >
          {{ navLink.name }}
        </v-btn>
      </v-toolbar-items>

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
            :key="icon.name"
            class="mx-4 white--text"
            icon
            :href="icon.link"
            target="_blank"
          >
            <v-icon size="24px">{{ icon.name }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>

        <v-btn color="white" text rounded class="my-2">
          Our Team
        </v-btn>
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
      sidebar: false,
      APP: constants.APP,
      navLinks: [
        { name: 'FAQ', link: '/faq' },
        { name: 'Our Team', link: '/team' },
        { name: 'Application', link: '/application' },
        { name: 'Schedule', link: '/schedule' }
      ]
    }
  },
  components: {
    Alert: () => import('@/components/Alert')
  }
}
</script>
