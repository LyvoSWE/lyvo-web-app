<template>
  <div class="alert">
    <v-alert
      v-if="!!$store.state.alertMsg"
      width="95vw"
      class="text-center"
      :type="$store.state.alertType"
      dismissible
      border="left"
      transition="fab-transition"
    >
      {{ $store.state.alertMsg }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'Alert'
}
</script>

<style scoped>
.alert {
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
