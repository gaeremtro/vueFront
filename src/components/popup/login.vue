<template lang="pug">
.text-center
    BaseHeaderDefault(size='h2', align='center') Login to Access 
.pt-4
    p When you loggin you gain accest to convert any file you want.
.flex.pt-6
    BaseFormInputText(v-model="email" label="Email" @click='errorMail=""' placeholder="email" :error="errorMail"   )
.flex.pt-4
    BaseFormInputText(v-model="pass"  label="Password" placeholder="password" type='password')
.flex.pt-10
    .flex.justify-around.w-full
        BaseButtonDefault(@click="handleLogin"  color='secondary' ) Signin
        BaseButtonDefault(@click="closeModal" color='secondary') Close
    

</template>
<script setup>

import useStore from '@/store/userStore';
import { ref, inject } from 'vue';


const closeModal = inject('closeModals');

const store = useStore();

const email = ref('');
const pass = ref('');

const errorMail = ref('');

function handleLogin () {
    if (validateEmail(email.value)){
        store.loggin(email.value, pass.value);
  }  else {errorMail.value = 'Formato de Email incorrecto';}
    
}



function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



</script>
<style lang="scss" scoped>

.popup-layout {
    @apply z-10 w-full h-full bg-black/10 flex items-center justify-center ;
}
.popup-holder {
    @apply bg-white w-2/4 h-3/4 p-8;
}
</style>
