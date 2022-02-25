<template lang="pug">
.header(:class="[size]") 
  BaseCustomIcon.icon(v-if="!!nameIcon" :nameIcon="nameIcon")
  .text(:class="[align]")
    slot
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  size: {
    type: String,
    default: 'h1'
  },
  nameIcon: {
    type: String,
    default: null
  },
  align:{
    type:String,
    default:'start'
  }

});
</script>
<style lang="scss" scoped>
.text {
  @apply w-full;
  &.center {
    @apply text-center;
  }
  &.end {
    @apply text-right;
  }
}
.header {
  @apply font-bold text-gray-700 flex items-center ;

  .icon {
    @apply mr-1;
  }

  &.h1 {
    @apply text-4xl ;
    .icon {
      @apply w-8 h-8;
    }
  }
  &.h2 {
    @apply text-2xl;
    .icon {
      @apply w-6 h-6;
    }
  }
  &.h3 {
    @apply text-xl;
    .icon {
      @apply w-6 h-6;
    }
  }
  &.h4 {
    @apply text-lg;
    .icon {
      @apply w-4 h-4;
    }
  }
}
</style>
