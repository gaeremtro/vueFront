<template lang="pug">
//EL TELEPORT ES UN COMPONENTE COMO CUALQUIER OTRO, SI NO AÑADES EL CONTENIDO DENTRO NO FUNCIONA.
//LA CLASE POPUP-LAYOUT, SI ES UN FIXED FULL SCREEN, HAY QUE AÑADIRLE LAS PROPIEDADES TOP-0 Y LEFT-0, SI NO SE IRAN A LA POSICION EN LA QUE SE ENCEUNTREN, POR ESO CREO QUE NO ESTABAS PONIENDO BIEN LA CLASE TELEPORT POR QUE SE TE IVA AL FOOTER AL HACERLO BIEN.
teleport(to="body")
  XyzTransition(xyz="fade duration-2")
    .popup-layout(v-if='open' key='1' )
      // NO ES NECESARIO ABRIR PARENTESIS POR CADA PROPIEDAD
      //- .fixed.mx-4.xyz-nested(v-if='props.open' xyz="fade  small-2 duration-2")(:class='[heigth]')(ref='target')
      .fixed.mx-4.xyz-nested(v-if='open' xyz="fade  small-2 duration-2" :class='[heigth]' ref='target')
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
import { ref, inject, toRefs } from 'vue';
import { onClickOutside } from '@vueuse/core'
//ORDENEMOS UN POCO LOS CODIGOS, PRIMEROS LOS PROPS SI EXISTE, LUEGO DECLARACIONES DE CONSTANTES/REFS LUEGO INJECTS, USESTORE, USEROUTER Y LUEGO YA LOGICA Y FUNCIONES DEL COMPONENTE

//RECUERDA USAR ESTA LINEA EN VEZ DE REALIZAR LA IMPORTACION DE LA CLASE VUE. NO ES NECESARIO.
// eslint-disable-next-line
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
//MEJORAMOS PRACTICAS, CUALQUIER PROP ES MEJOR PASSARLO A REFERENCIA
const { open, heigth } = toRefs(props);

const target = ref(null);

const closeModal = inject('closeModals');

onClickOutside(target, (ev) => { closeModal() })
</script>
<style lang="scss" scoped>
.popup-layout {
  @apply w-screen fixed top-0 left-0  z-10 h-screen bg-black/60 flex  items-center justify-center;
}
.popup-holder {
  @apply bg-white   px-10 pb-12;
}

.top-popup {
  @apply flex justify-between w-full;
}

//este solo es un  triangulo, ocupa el espacio y se queda atras
.pliege-wo-radius {
  border-bottom: 48px;
  border-left: 48px;
  @apply border-b-white border-solid border-l-transparent;
}
//este tiene el radius y tambien la sombra, como es fixed la sombra tambein queda arriba de los demas componentes
.pliege {
  border-bottom-right-radius: 10px 10px;
  border-bottom: 48px;
  border-left: 48px;
  box-shadow: 10px 11px 13px -7px rgba(0, 0, 0, 0.37);
  border-left-color: rgba(0, 0, 0, 0);
  @apply h-10  border-b-white border-solid border-opacity-0 fixed  z-20;
}
.top-rest {
  @apply bg-white w-full h-12;
}
</style>
