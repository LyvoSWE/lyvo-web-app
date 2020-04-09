<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="applicant.firstname"
            :rules="nameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="applicant.lastname"
            :rules="nameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="applicant.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-btn
          :disabled="$store.state.loading"
          :loading="$store.state.loading"
          block
          color="primary"
          class="mr-4"
          @click="submitApplication"
          >Submit</v-btn
        ></v-row
      >
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    valid: false,
    applicant: {},
    nameRules: [v => !!v || 'Name is required'],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    submitApplication() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('submitApplication', this.applicant)
      }
    },
  },
}
</script>
