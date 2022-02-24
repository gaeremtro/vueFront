<template lang="pug">
popupBaseVue(:open="open")
        loginVue(v-if='user.isOpenLogin')
        signUpVue(v-if='user.isOpenRegister')
.navbar
    
    .container.nav-holder
        .logo
        .links-wrap
            BaseAnchorDefault.link Home
            BaseAnchorDefault.link(to='/ui') Ui
            BaseAnchorDefault.link(to='/about') About
            BaseAnchorDefault.link(to='/form') Form
        BaseButtonDefault(v-if='!user.isLogged' color='ternary' @click="user.openLogin") Login
        BaseButtonDefault(v-if='!user.isLogged' color='ternary' @click="user.openRegister") Register
        BaseButtonDefault(v-if='user.isLogged' color='ternary' @click="user.loggout") LogOut


</template>
<script setup>

import userStore from '../../store/userStore'
import popupBaseVue from '../popup/popupBase.vue';
import loginVue from '../popup/login.vue';
import signUpVue from '../popup/signUp.vue';
import { computed, ref } from 'vue';



const user = userStore();

const open = computed (() => user.isOpenLogin || user.isOpenRegister)







</script>
<style lang="scss" scoped>

.navbar {
    @apply w-full  bg-red-800 items-center;
}
.nav-holder {
    @apply flex justify-between items-center h-16
}
.logo {
    @apply h-10 w-28 min-w-max mr-4 bg-black;
}
.links-wrap {
    @apply  flex justify-center  md:justify-start md:w-4/6  items-center;
}
.link{
    @apply mx-2
}
</style>
