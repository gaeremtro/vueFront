<template lang="pug">
router-view
</template>

<script setup>

import popupBaseVue from "@/components/popup/popupBase.vue";
import loginVue from "@/components/popup/login.vue";
import userStore from "@/store/userStore";
import SignUp from "./components/popup/signUp.vue";

const user = userStore();

user.$subscribe((mutation, state) => {
    console.log(mutation);
    console.log("user name:", state.name);
    console.log("isAdmin:", state.isAdmin);
});


</script>
