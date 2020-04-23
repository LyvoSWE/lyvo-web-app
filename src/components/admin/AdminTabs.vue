<template>
  <v-card>
    <v-tabs v-model="tab" fixed-tabs background-color="primary" dark>
      <v-tab>
        Applicants
      </v-tab>
      <v-tab>
        Statistics
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <applicant-table />
      </v-tab-item>
      <v-tab-item>
        <statistics />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import ApplicantTable from '@/components/admin/ApplicantTable'
import Statistics from '@/components/admin/Statistics'
export default {
  name: 'AdminTabs',
  components: {
    ApplicantTable,
    Statistics
  },
  data() {
    return {
      tab: null
    }
  },
  methods: {
    getApplicantCollection() {
      if (!this.$store.state.applicants.length) {
        this.$store.dispatch('getApplicantCollection')
      }
    }
  }
}
</script>

<style></style>
