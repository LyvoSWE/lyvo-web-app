<template>
  <div class="team-card-list">
    <v-pagination v-model="page" :length="TEAM.length" total-visible="3" />
    {{ TEAM[TEAM.length - page].year }}
    <v-list
      v-for="(category, i) in ['Executives', 'General', 'Chairs']"
      :key="i"
    >
      {{ category }}
      <v-row align="center" justify="center">
        <v-col
          v-for="(member, i) in TEAM[TEAM.length - page][category]"
          :key="i"
          cols="12"
          sm="4"
          md="3"
          lg="2"
        >
          <v-card height="220">
            <v-img :src="imgAppendLocation(member.img)" class="member-image" />
            <v-card-title class="title">
              <a :href="member.linkedIn" v-text="member.name" />
            </v-card-title>
            <v-card-subtitle v-text="member.position" />
          </v-card>
        </v-col>
      </v-row>
    </v-list>
  </div>
</template>

<script>
import constants from '../utils/constants'

export default {
  name: 'TeamCardList',
  data() {
    return {
      TEAM: constants.TEAM,
      page: constants.TEAM.length
    }
  },
  methods: {
    imgAppendLocation(img) {
      // webpack needs require() if the exact module is NOT known at compile time (https://webpack.js.org/guides/dependency-management/)
      return require(`../assets/team/${img}`)
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
}
a:hover {
  color: orangered;
}
.member-image {
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
  max-width: 120px;
  max-height: 120px;
}
</style>
