<template>
  <v-card flat>
    <v-card-title>
      Applicants
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="this.$store.state.applicants"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
import { constants } from '@/utils/constants'
export default {
  name: 'ApplicantTable',
  computed: {
    headers: () =>
      constants.APPLICATION_FIELDS.map(field => ({
        text: field.label,
        value: field.name
      }))
  },
  data() {
    return {
      search: ''
    }
  },
  mounted() {
    //statistics could have also loaded this data
    console.log('Getting collection from backend..')
    if (!this.$store.state.applicants.length) {
      this.$store.dispatch('getApplicantCollection')
    }
  }
}
</script>

<style></style>
