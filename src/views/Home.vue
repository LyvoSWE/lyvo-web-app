<template>
  <div class="home">
    <v-parallax src="../assets/home/covid19.jpg">
      <v-row align="center" justify="center">
        <v-card dark color="rgb(86, 20, 10, 0.75)">
          <v-card-title class="justify-center">BioTech Hacks</v-card-title>
          <v-card-text align="center" justify="center">
            A COVID-19 themed Hackathon
            <br />
            <b>Coming Summer {{ new Date().getFullYear() }}</b>
          </v-card-text>
        </v-card>
      </v-row>
    </v-parallax>

    <v-row align="center" justify="center">
      <v-col v-for="(card, i) in HOME.cards" :key="i" cols="12" sm="6" md="4">
        <v-card align="center" justify="center">
          <v-img class="home-image" :src="imgAppendLocation(card.img)" />
          <v-card-title class="title" v-text="card.title" />
          <v-card-subtitle v-text="card.subtitle" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import constants from '../utils/constants'

export default {
  name: 'Home',
  data() {
    return {
      HOME: constants.HOME
    }
  },
  methods: {
    imgAppendLocation(img) {
      // webpack needs require() if the exact module is NOT known at compile time (https://webpack.js.org/guides/dependency-management/)
      return require(`../assets/home/${img}`)
    }
  }
}
</script>
<style scoped>
.home-image {
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
  max-width: 300px;
  max-height: 200px;
}
</style>
