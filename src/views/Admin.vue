<template>
  <div class="admin" align="center" justify="center">
    <h2>Admin</h2>

    <admin-tabs />
  </div>
</template>

<script>
import AdminTabs from '@/components/admin/AdminTabs'
export default {
  name: 'Admin',
  components: {
    AdminTabs
  }
}
</script>
