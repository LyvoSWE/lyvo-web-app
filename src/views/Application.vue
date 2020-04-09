<template>
  <div class="application">
    <h2>Application</h2>
    <app-form></app-form>
  </div>
</template>

<script>
import AppForm from '@/components/AppForm.vue'
export default {
  name: 'Application',
  components: {
    AppForm,
  },
}
</script>
