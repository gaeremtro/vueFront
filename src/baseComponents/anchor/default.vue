<template lang="pug">
.link(:class='linkcated ? linkcated: ""') 
  router-link(:to='to')
    slot
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  to: {
    type: String,
    default: '/'
  },
});


</script>
<style lang="scss" scoped>
.link {
    @apply text-white;
  &:hover {
      @apply underline
  }
}
.linkcated {
    @apply underline
}
</style>
