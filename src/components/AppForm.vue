<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col
          v-for="(field, i) in APPLICATION_FIELDS"
          :key="i"
          cols="12"
          :md="field.md"
        >
          <v-text-field
            v-if="field.type === 'textField'"
            v-model="applicant[field.name]"
            :rules="field.rules"
            :label="field.label"
          />
          <v-select
            v-else-if="field.type === 'select'"
            v-model="applicant[field.name]"
            :rules="field.rules"
            :label="field.label"
            :items="field.items"
          />
          <v-combobox
            v-else-if="field.type === 'combobox'"
            v-model="applicant[field.name]"
            :rules="field.rules"
            :label="field.label"
            :items="field.items"
            multiple
            hide-selected
            persistent-hint
            small-chips
            clearable
          />
          <v-file-input
            v-else-if="field.type === 'fileInput'"
            :accept="field.accept"
            :label="field.label"
            :prepend-icon="field.icon"
            :rules="field.rules"
          />
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
import { constants } from '../utils/constants'

export default {
  data: () => ({
    valid: false,
    APPLICATION_FIELDS: constants.APPLICATION_FIELDS,
    applicant: {}
  }),
  methods: {
    submitApplication() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('submitApplication', this.applicant)
      }
    }
  }
}
</script>
