<template lang="pug">
.container
        
    .flex.mt-4.gap-4 
        BaseFormInputText(v-model="formData.name" @click='setError("name","")' label="Name" placeholder="Antonio" :error="formError.name" )
        BaseFormInputText(v-model="formData.surname" @click='setError("surname","")' label="Surname" placeholder="Perales" :error="formError.surname"  )
    .full-w.mt-4
        BaseFormInputText(v-model="formData.email" @click='setError("email","")' label="E-mail" placeholder="antonioperales@mail.com" :error="formError.email"  )
    .flex.mt-4.gap-4 
        BaseFormInputText(v-model="formData.password" label="Password" @click='setError("password","")' placeholder="XXXX" :error="formError.password" type="password"  )
        BaseFormInputText(v-model="formData.confirmPassword" @click='setError("confirmPassword","")' label="Confirm your password" placeholder="XXXXX" :error="formError.confirmPassword" type="password")

    .flex.justify-end.itens-center.mt-6
        BaseButtonDefault(@click="submited") Check form


</template>

<script setup>

import { ref, watch } from "vue";

const formData = ref({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
});

const formError = ref({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
});

//Check for errors and let to goForward
function submited() {
    if (!validateEmail(formData.value.email)) setError("email", "Tipo de Email incorrecto");
    if (formData.value.password !== formData.value.confirmPassword) setError("confirmPassword", "Las contraseñas no coinciden");
    if (formData.value.password.length < 8) setError("password", "El password debe tener minimo 8 caracteres");
    Object.keys(formData.value).map((key) => {
        if (formData.value[key].length === 0) {
            setError(key, "Este campo no puede estar vacio");
        }
    });
    let correct = !Object.values(formError.value).some((value) => value !== "");
    if (correct) alert("toda la informacion del formulario es correcta, Gracias!");
}

//Set any error
const setError = (prop, value) => {
    formError.value[prop] = value;
};

//Validates an email
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// if password changes and is === to confirmPasword, this erease the error.
watch(
    formData.value,
    (newValue) => {
        if (newValue.confirmPassword === newValue.password) setError("confirmPassword", "");
    },
    { deep: true }
);

</script>

<style lang="scss" scoped>

</style>
