<template lang="pug">
h1 componente rememberpsw
.flex.gap-2.mt-5
  BaseButtonDefault.flex-grow(@click="openRegister") go to register
  BaseButtonDefault.flex-grow(@click="openLogin") go to login
</template>

<script setup>
import { inject } from 'vue';

const openLogin = inject('openLogin')
const openRegister = inject('openRegister')

</script>

<style lang="scss" scoped>
</style>