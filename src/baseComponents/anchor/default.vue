<template lang="pug">
.link 
  router-link(:to='to')
    slot
</template>

<script setup>
import { computed, defineProps,  watch } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
    to: {
        type: String,
        default: "/",
    },
});

//const name = computed(()=>{})
//const { to } = toRefs(props)

const router = useRouter();
watch( router.currentRoute ,(route)=>console.log(route),{inmmediate:true} )

</script>
<style lang="scss" scoped>
.link {
    @apply text-white;
    &:hover {
        @apply underline;
    }
}
.router-link-exact-active {
    @apply underline;
}
</style>
