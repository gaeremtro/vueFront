<template lang="pug">
teleport(to="body")
XyzTransition(xyz="fade duration-2")
    .popup-layout(v-if='props.open' key='1')
        .fixed.xyz-nested(v-if='props.open' xyz="fade  small-2 duration-2")
            .h-12
                .top-popup
                    .flex.justify-between.w-full
                        .pliege
                        .pliege-wo-radius
                        .top-rest
            .popup-holder
                slot


</template>
<script setup>
import useStore from '@/store/userStore';
import {defineProps} from 'vue';

const user = useStore();
//defineprops to show popup

const props = defineProps({
    open: {
        type: Boolean,
        default: false,
    }
});

</script>
<style lang="scss" scoped>


.popup-layout {
    
    @apply  w-screen fixed  h-screen bg-black/60 flex  items-center justify-center ;
}
.popup-holder {
   
    @apply bg-white w-96 px-10 pb-12;
}

.top-popup {
    @apply flex z-20 fixed w-96 justify-between;
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
    @apply h-10  border-b-white border-solid border-l-transparent fixed  z-20;
}
.top-rest{
    @apply  bg-white w-full h-12; 
}

</style>
