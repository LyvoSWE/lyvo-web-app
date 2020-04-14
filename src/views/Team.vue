<template>
  <div class="team" align="center" justify="center">
    <h2>Our Team</h2>
    <team-card-list />
  </div>
</template>

<script>
import TeamCardList from '@/components/TeamCardList'
export default {
  name: 'TEAM',
  components: {
    TeamCardList
  }
}
</script>
