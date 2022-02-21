<template lang="pug">
svg-icon(type="mdi", :path="pathIcon", :size="size")
</template>
<script setup>
// eslint-disable-next-line
import SvgIcon from '@jamescoyle/vue-icon';
import * as listIcons from '@mdi/js';
import { computed, defineProps } from 'vue';

const props = defineProps({
  nameIcon: {
    type: String,
    default: 'mdiAccount'
  },
  size: {
    type: Number,
    default: 24
  }
});

// eslint-disable-next-line
const pathIcon = computed(() => {
  return listIcons[props.nameIcon];
});
</script>
<style lang="scss" scoped></style>
