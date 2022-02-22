<template lang="pug">
.navbar
    .container.nav-holder
        .logo
        .links-wrap
            BaseAnchorDefault.link Home
            BaseAnchorDefault.link(to='/ui') Ui
            BaseAnchorDefault.link(to='/about') About
            BaseAnchorDefault.link(to='/form') Form
        BaseButtonDefault(color='ternary') SignIn


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
    @apply h-10 w-28 min-w-max mr-4 bg-black;
}
.links-wrap {
    @apply  flex justify-center  md:justify-start md:w-4/6  items-center;
}
.link{
    @apply mx-2
}
</style>
