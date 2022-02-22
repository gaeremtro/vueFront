<template lang="pug">
.default-input(:class="{ error: !!error, disabled: !!disabled }")
  BaseFormLabel(:textLabel="label")
  .input
    input(
      :value="modelValue",
      @input="$emit('update:modelValue', $event.target.value)",
      :type='type',
      :placeholder="placeholder",
      :disabled="'disabled' ? disabled : false",

    )
  .error-text(v-if="error") {{ error }}
</template>
<script setup>
import { defineEmits, defineProps } from "vue";

defineEmits(["update:modelValue"]);
defineProps({
    modelValue: {
        type: String,
    },
    label: {
        type: String,
        default: null,
    },
    placeholder: {
        type: String,
        default: null,
    },
    error: {
        type: String,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type:String,
        default:'text',
    }
    
});
</script>
<style lang="scss" scoped>
.default-input {
    @apply flex flex-col w-full outline-none;

    .input {
        @apply  outline-gray-300 outline-1 outline rounded-md; //initual
        &:hover{
          @apply outline-green-400; //hovered
        }
        &:focus-within {
            @apply outline-green-400 outline-2; //focused
        }
        input {
            @apply w-full py-2 px-4 outline-none;
            &:focus {
                @apply outline-none;
            }
        }
    }

    &.error {
        .input {
            @apply outline-red-400;
        }
    }

    &.disabled {
        .input {
            @apply outline-gray-200;
            input {
              
                @apply cursor-default text-gray-300;
            }
        }
    }
    .error-text {
        @apply text-red-400 text-sm mt-1;
    }
}
</style>
