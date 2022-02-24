<template lang="pug">
.default-button(
  :class="[color, size, { disabled: disabled }, { buttonIcon: !!nameIcon }]"
)
  slot
  BaseCustomIcon.icon(v-if="!!nameIcon", :nameIcon="nameIcon")
</template>
<script setup>
import { defineProps } from "vue";
// eslint-disable-next-line
const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "normal",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  nameIcon: {
    type: String,
    default: null,
  },
});
</script>
<style lang="scss" scoped>
.default-button {
  @apply text-white font-bold cursor-pointer transition-colors text-center rounded-md shadow-md;

  &.buttonIcon {
    @apply flex items-center;
    .icon {
      @apply ml-2 -mr-1;
    }
  }

  &.normal {
    @apply py-1 px-4 text-base;

    .icon {
      @apply w-5;
    }
  }

  &.big {
    @apply py-2 px-6 text-xl;
    .icon {
      @apply w-6;
    }
  }

  &.primary {
    @apply bg-blue-500 shadow-blue-500/50;

    &:hover {
      @apply bg-blue-700;
    }
  }
  &.secondary {
    @apply bg-red-800 shadow-red-800/50;

    &:hover {
      @apply bg-red-900;
    }
  }
  &.ternary {
    @apply bg-white  text-black;

    &:hover {
      @apply bg-black text-white;
    }
  }

  &.disabled {
    @apply bg-gray-200 shadow-none text-gray-400/50 cursor-default;
    &:hover {
      @apply bg-gray-200;
    }
  }
}
</style>
