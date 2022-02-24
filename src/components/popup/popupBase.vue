<template lang="pug">
teleport(to="body")
XyzTransition(xyz="fade duration-2")
    .popup-layout(v-if='props.open' key='1' @click='()=>op = false')
        .fixed.xyz-nested(v-if='props.open' xyz="fade  small-2 duration-2")
            .h-12
                .top-popup
                    .flex.justify-between.w-96
                        .pliege.h-10
                        .top-rest.h-12
            .popup-holder
                slot


</template>
<script setup>
import useStore from '@/store/userStore';
import {defineProps, toRefs} from 'vue';

const user = useStore();
//defineprops to show popup

const props = defineProps({
    open: {
        type: Boolean,
        default: false,
    }
});

const op = toRefs(props.open)


</script>
<style lang="scss" scoped>


.popup-layout {
    @apply  w-screen fixed  h-screen bg-black/60 flex  items-center justify-center;
}
.popup-holder {
    @apply bg-white w-96 px-10 pb-12;
}

.top-popup {
    @apply flex z-20 fixed w-96 justify-between;
}

.pliege {
    
    border-bottom: 48px;
    border-left:48px;
    box-shadow: 10px 11px 13px -7px rgba(0,0,0,0.37);
    @apply  w-0 h-0  border-b-white border-solid border-l-transparent  z-20;
}
.top-rest{
    @apply  bg-white w-full ; 
}

</style>
