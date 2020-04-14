<template>
  <div class="faq-card-list">
    <v-row align="center" justify="center">
      <v-col v-for="(faq, i) in FAQS" :key="i" cols="12" md="4">
        <v-card height="200">
          <v-card-title class="title" v-text="faq.title" />
          <v-card-text v-text="faq.description" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { constants } from '../utils/constants'

export default {
  name: 'FaqCardList',
  data() {
    return {
      FAQS: constants.FAQS
    }
  }
}
</script>
