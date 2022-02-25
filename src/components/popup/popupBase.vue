<template lang="pug">
teleport(to="body")
XyzTransition(xyz="fade duration-2")
    .popup-layout(v-if='props.open' key='1' )
        .fixed.mx-4.xyz-nested(v-if='props.open' xyz="fade  small-2 duration-2")(:class='[heigth]')(ref='target')
            .h-12
                .top-popup
                    .flex.justify-between.w-full
                        .pliege
                        .pliege-wo-radius
                        .top-rest
            .popup-holder(:class='[heigth]')
                slot


</template>
<script setup>
import useStore from '@/store/userStore';
import { defineProps, ref, inject } from 'vue';
import { onClickOutside } from '@vueuse/core'



const user = useStore();
//defineprops to show popup
const target = ref(null);

const closeModal = inject('closeModals');

onClickOutside(target,(ev)=>{closeModal()})




const props = defineProps({
    open: {
        type: Boolean,
        default: false,
    },
    heigth: {
        type: String,
        default: 'w-80'
    },
   
});

</script>
<style lang="scss" scoped>


.popup-layout {
    
    @apply  w-screen fixed  z-10 h-screen bg-black/60 flex  items-center justify-center ;
}
.popup-holder {
   
    @apply bg-white   px-10 pb-12;
}

.top-popup {
    @apply flex justify-between w-full ;
}

//este solo es un  triangulo, ocupa el espacio y se queda atras
.pliege-wo-radius {
    border-bottom: 48px;
    border-left:48px;
    @apply  border-b-white border-solid border-l-transparent ;
}
//este tiene el radius y tambien la sombra, como es fixed la sombra tambein queda arriba de los demas componentes
.pliege {
    border-bottom-right-radius: 10px 10px;
    border-bottom: 48px;
    border-left:48px;
    box-shadow: 10px 11px 13px -7px rgba(0,0,0,0.37);
    border-left-color: rgba(0,0,0,0);
    @apply h-10  border-b-white border-solid border-opacity-0 fixed  z-20;
}
.top-rest{
    @apply  bg-white w-full h-12; 
}

</style>
