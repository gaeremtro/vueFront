<template lang="pug">
popupBaseVue(:open="open" :heigth='user.openModalLogin? "sm:w-80 max-w-80": "sm:w-96 max-w-96 "' )
    loginVue(v-if='openModalLogin')
    signUpVue(v-if='openModalRegister')
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


</template>
<script setup> 

import userStore from '../../store/userStore'
import popupBaseVue from '../popup/popupBase.vue';
import loginVue from '../popup/login.vue';
import signUpVue from '../popup/signUp.vue';
import { computed, ref, provide } from 'vue';

const user = userStore();

const openModalLogin = ref(false);

const openModalRegister = ref(false);

const handleClose = ()=>{
    openModalLogin.value = false;
    openModalRegister.value = false;
}

const open = computed (() => openModalLogin.value || openModalRegister.value);



const openLogin =() => {
openModalLogin.value = true;
}
const openRegister = () => {
    openModalRegister.value = true;
}


provide('closeModals', handleClose);




</script>
<style lang="scss" scoped>

.navbar {
    @apply w-full  bg-red-800 items-center;
}
.nav-holder {
    @apply flex justify-between items-center h-16
}
.logo {
    @apply h-10 w-24 min-w-fit  mr-4 bg-black;
}
.links-wrap {
    @apply  flex justify-center  md:justify-start md:w-full  items-center;
}
.link{
    @apply mx-2
}
.buttons {
    @apply gap-3 flex
}
</style>
