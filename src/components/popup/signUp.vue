<template lang="pug">
popupBaseVue(:open="openModal" heigth="sm:w-96 max-w-96" )
  .text-center
    BaseHeaderDefault(size='h2', align='center') Register new Account
  .pt-4
    p  Once you are register, you can inmediatly convert any format file to another.
  .flex.justify-between
    basicForm( buttonName='Register' v-on:handle-action='handleRegister' v-on:handle-close='closeModal')

</template>
<script setup>

import useStore from '@/store/userStore';
import basicForm from "@/components/basicForm/basicForm.vue"
import { inject, toRefs } from 'vue';
import popupBaseVue from '../popup/popupBase.vue';

//eslint-disable-next-line
const props = defineProps({
  openModal: {
    type: Boolean,
    default: false
  }
})
const { openModal } = toRefs(props)

const closeModal = inject('closeModals');
const store = useStore();

function handleRegister(formData) {
  store.register(formData.name, formData.surname, formData.email, formData.password)

}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



</script>
<style lang="scss" scoped>
</style>
