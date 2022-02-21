<template lang="pug">
navbarVue
.container.mt-16
  .flex.mt-10.gap-4 
    BaseButtonDefault(color="primary") Primary default
    BaseButtonDefault(color="secondary") Secondary default
    BaseButtonDefault(color="ternary" ) Ternary big
    BaseButtonDefault(color="primary" :disabled="true") disabled
    BaseButtonDefault(color="primary" nameIcon="mdiAccount") With icon
  .flex.mt-10.gap-4 
    BaseButtonDefault(color="primary" size="big") Primary big
    BaseButtonDefault(color="secondary" size="big") Secondary big
    BaseButtonDefault(color="ternary" size="big") Ternary big
    BaseButtonDefault(color="primary" size="big" :disabled="true") disabled
    BaseButtonDefault(color="primary" size="big" nameIcon="mdiAccount") With icon
  .flex.mt-10.gap-4 
    BaseFormInputText(v-model="exampleInputText" label="Input text" placeholder="Add yout text here" :error="null" :disabled="false")
    BaseFormInputText(v-model="textTwo" label="Input text" placeholder="Add yout text here" error="Any error" :disabled="false")
    BaseFormInputText(v-model="textTwo" label="Input text" placeholder="Add yout text here" :error="null" :disabled="true")
  .flex.flex-col.mt-10.gap-4
    BaseHeaderDefault(size="h1") Header h1 
    BaseHeaderDefault(size="h2") Header h2 
    BaseHeaderDefault(size="h3") Header h3 
    BaseHeaderDefault(size="h4") Header h4 
  .flex.flex-col.mt-10.gap-4
    BaseHeaderDefault(size="h1" nameIcon="mdiAccount") Header h1 
    BaseHeaderDefault(size="h2" nameIcon="mdiAccount") Header h2 
    BaseHeaderDefault(size="h3" nameIcon="mdiAccount") Header h3 
    BaseHeaderDefault(size="h4" nameIcon="mdiAccount") Header h4 

</template>
<script >
export default {
  setup() {
    return {};
  },
  data: () => ({
    exampleInputText: '',
    textTwo:''
  })
};
</script>
<script setup>
import navbarVue from '@/components/navbar/navbar.vue';
</script>
<style lang="scss" scoped></style>
