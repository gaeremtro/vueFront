<template lang="pug">
.hero-wrapper
  BaseHeaderDefault(size="h1") This is header hero
label
.classDiv
  
  input.fullWidthTest(placeholder="Escribe el nombre de tu heroe")


</template>
<script setup></script>
<style lang="scss" scoped>
.hero-wrapper {
    @apply p-6 bg-slate-100 rounded-2xl;
}
.classDiv {
    @apply p-3 mt-2 bg-slate-100 max-w-full px-4 rounded-md;
}
.fullWidthTest {
    @apply w-full;
}

input {
    @apply outline-none ;
}
</style>
