<template lang="pug">
.navbar
    .container.nav-holder
        .logo
        .links-wrap
            BaseAnchorDefault.lin Home
            BaseAnchorDefault.lin(to='/ui') Ui
            BaseAnchorDefault.lin(to='/about') About
        BaseButtonDefault SignIn


</template>
<script setup></script>
<style lang="scss" scoped>

.navbar {
    @apply w-full  bg-yellow-500 items-center;
}
.nav-holder {
    @apply flex justify-between items-center h-16
}
.logo {
    @apply h-10 w-28 bg-black;
}
.links-wrap {
    @apply flex justify-start w-4/6 items-center;
}
.lin{
    @apply mx-2
}
</style>
