<template>
  <v-card flat>
    <v-card-title>
      Statistics
      <v-spacer></v-spacer>
    </v-card-title>
    <v-row align="center" justify="center">
      <v-col
        v-for="(options, i) in optionsList"
        :key="i"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <Highcharts :options="options" />
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Highcharts from 'highcharts'
import { genComponent } from 'vue-highcharts'

import constants from '@/utils/constants'
export default {
  name: 'Statistics',
  components: {
    Highcharts: genComponent('Highcharts', Highcharts)
  },
  data() {
    return {
      optionsList: constants.ADMIN.pieCharts.map(chart => ({
        ...constants.ADMIN.pieChartOptions,
        title: {
          text: `Conference by ${chart}`
        },
        series: [
          {
            name: `${chart}`,
            colorByPoint: true,
            data: this.$store.state.data[chart]
          }
        ]
      }))
    }
  },
  mounted() {
    //applicantTable could have also loaded this data
    console.log('Getting collection from backend..')
    if (!this.$store.state.applicants.length) {
      this.$store.dispatch('getApplicantCollection')
    }
  }
}
</script>

<style></style>
