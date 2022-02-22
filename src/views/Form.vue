<template lang="pug">
navbarVue
.container.mt-16
  basicFrom
</template>
<script setup>
/* eslint-disable */
import basicFrom from "../components/basicForm/basicForm.vue";
import navbarVue from "../components/navbar/navbar.vue";
import RepositoryFactory from "@/repositories/repository.factory";

const UsersRepository = RepositoryFactory.get("users");

UsersRepository.getUsers();
</script>
<style lang="scss" scoped>
</style>
