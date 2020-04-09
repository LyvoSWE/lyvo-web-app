<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="navLinks"
          active-class="blue--text text--accent-4"
        >
          <v-list-item @click="routeTo('/')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="routeTo('/application')">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Application</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <v-alert
        v-if="$store.state.alert"
        :type="$store.state.alertType"
        dense
        text
        dismissible
        :value="$store.state.alert"
        elevation="6"
        border="left"
        transition="fab-transition"
      >
        {{ $store.state.alertMsg }}
      </v-alert>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      navLinks: [
        { text: 'Home', icon: 'mdi-home' },
        { text: 'About', icon: 'mdi-about' },
        { text: 'Application', icon: 'mdi-account', path: '/application' },
      ],
    }
  },
  methods: {
    routeTo(newPath) {
      if (this.$route.path != newPath) {
        this.$router.push({ path: newPath })
      }
    },
  },
}
</script>
