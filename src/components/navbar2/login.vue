<template lang="pug">
h1 componente login
.flex.gap-2.mt-5
  BaseButtonDefault.flex-grow(@click="openRegister") go to register
  BaseButtonDefault.flex-grow(@click="openRemember") go to remember
</template>

<script setup>
import { inject } from 'vue';

const openRegister = inject('openRegister')
const openRemember = inject('openRemember')

</script>

<style lang="scss" scoped>
</style>
