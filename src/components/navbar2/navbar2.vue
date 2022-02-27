<template lang="pug">
.navbar

  .container.nav-holder
    .w-30
      .logo

    .links-wrap
      BaseAnchorDefault.link Home
      BaseAnchorDefault.link(to='/ui') Ui
      BaseAnchorDefault.link(to='/about') About
      BaseAnchorDefault.link(to='/form') Form
    .buttons
      BaseButtonDefault(v-if='!user.isLogged' color='ternary' @click="openLogin" ) Login
      BaseButtonDefault(v-if='!user.isLogged' color='ternary' @click="openRegister") Register
      BaseButtonDefault(v-if='user.isLogged' color='ternary' @click="user.loggout") LogOut

popupBaseVue(:open="showModal" :heigth='heigth')
  component(:is="compontentSelected")
</template>
<script setup>
import popupBaseVue from '../popup/popupBase.vue';
import userStore from '../../store/userStore'
import { ref, provide, computed } from 'vue';
import loginComponent from './login.vue';
import signUp from './signup.vue';
import remember from './remember.vue';

const components = {
  login: loginComponent,
  signUp,
  remember
}

const user = userStore();
const showModal = ref(false)
const componentName = ref('login')

const handleClose = () => {
  showModal.value = false
}

const openLogin = () => {
  showModal.value = true;
  componentName.value = 'login';
}
const openRegister = () => {
  showModal.value = true;
  componentName.value = 'signUp';
}
const openRemember = () => {
  showModal.value = true;
  componentName.value = 'remember';
}

const compontentSelected = computed(() => {
  return components[componentName.value]
})


const heigth = computed(() => {
  if (componentName.value == 'signUp') return 'sm:w-96 max-w-96'
  return "sm:w-80 max-w-80"
})

provide('closeModals', handleClose);
provide('openLogin', openLogin)
provide('openRegister', openRegister)
provide('openRemember', openRemember)

</script>
<style lang="scss" scoped>
.navbar {
  @apply w-full  bg-red-800 items-center;
}
.nav-holder {
  @apply flex justify-between items-center h-16;
}
.logo {
  @apply h-10 w-24 min-w-fit  mr-4 bg-black;
}
.links-wrap {
  @apply flex justify-center  md:justify-start md:w-full  items-center;
}
.link {
  @apply mx-2;
}
.buttons {
  @apply gap-3 flex;
}
</style>
