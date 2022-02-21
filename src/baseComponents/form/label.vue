<template lang="pug">
label {{textLabel}}
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  textLabel: {
    type: String,
    default: 'Empty'
  }
});
</script>
<style lang="scss" scoped>
label {
  @apply text-sm text-gray-500 mb-2;
}
</style>
