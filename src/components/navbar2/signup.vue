<template lang="pug">
h1 componente signup
.flex.gap-2.mt-5
  BaseButtonDefault.flex-grow(@click="openRemember") go to register
  BaseButtonDefault.flex-grow(@click="openLogin") go to login
</template>

<script setup>
import { inject } from 'vue';

const openLogin = inject('openLogin')
const openRemember = inject('openRemember')

</script>

<style lang="scss" scoped>
</style>