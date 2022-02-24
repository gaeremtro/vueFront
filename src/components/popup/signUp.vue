<template lang="pug">
h3 Register new Account
h4 When you register a new account.
.flex.justify-between
    basicForm( buttonName='Custom Action' v-on:handle-action='handleRegister' v-on:handle-close='handleClose')

</template>
<script setup>

import useStore from '@/store/userStore';
import basicForm from "@/components/basicForm/basicForm.vue"
import { ref,def } from 'vue';


const store = useStore();

function handleRegister (formData) {
    store.register(formData.name,formData.surname, formData.email,formData.password)
    
}

function handleClose () {
    store.close()
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



</script>
<style lang="scss" scoped>


</style>
