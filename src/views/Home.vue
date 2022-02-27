<template lang="pug">
//- navbarVue
Navbar2
.container.mt-16
  heroVue
</template>
<script setup>
/* eslint-disable */
import heroVue from "../components/home/hero.vue";
import navbarVue from "../components/navbar/navbar.vue";
import RepositoryFactory from "@/repositories/repository.factory";
import Navbar2 from "@/components/navbar2/navbar2.vue";

const UsersRepository = RepositoryFactory.get("users");

UsersRepository.getUsers();
</script>
<style lang="scss" scoped>
</style>
