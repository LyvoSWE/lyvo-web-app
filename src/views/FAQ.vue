<template>
  <div class="about" align="center" justify="center">
    <h2>FAQs</h2>
    <faq-card-list />
  </div>
</template>

<script>
import FaqCardList from '@/components/FaqCardList'
export default {
  name: 'FAQ',
  components: {
    FaqCardList
  }
}
</script>
