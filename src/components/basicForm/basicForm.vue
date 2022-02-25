<template lang="pug">

.container.test-scroll.invisible-scrollbar

  .input-holder
    BaseFormInputText(v-model="formData.name" @click='setError("name", "")', label="Name", placeholder="Antonio", :error="formError.name" )
    .small-margin-input
      BaseFormInputText(v-model="formData.surname" @click='setError("surname", "")' label="Surname" placeholder="Perales" :error="formError.surname"  )
  .full-w.mt-4
    BaseFormInputText(v-model="formData.email" @click='setError("email", "")' label="E-mail" placeholder="antonioperales@mail.com" :error="formError.email"  )
  .full-w.mt-4
    BaseFormInputText(v-model="formData.password" label="Password" @click='setError("password", "")' placeholder="XXXX" :error="formError.password" type="password"  )
  .full-w.mt-4
    BaseFormInputText(v-model="formData.confirmPassword" @click='setError("confirmPassword", "")' label="Confirm your password" placeholder="XXXXX" :error="formError.confirmPassword" type="password")

  .buttons-holder
    BaseButtonDefault(@click="submited" color='secondary') {{buttonName ? buttonName :'Check form'}}
    .small-margin
      BaseButtonDefault(@click="emitClose" color='secondary') Cerrar

</template>

<script setup>
import { ref, toRefs, watch, computed } from "vue";
import { defineProps, defineEmits } from "vue";


const props = defineProps({
    buttonName: {
        type: String,
        default: "checkform",
    }
});



const emit = defineEmits(['handle-close', 'handle-action']);

function emitClose () {
  emit('handle-close');
}

function emitAction (formData) {
  emit('handle-action', formData)
}

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
    if (correct){ emitAction(formData.value);emitClose()}//:alert("toda la informacion del formulario es correcta, Gracias!");
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

const formComputed = computed(() => formData.value);

// if password changes and is === to confirmPasword, this erease the error.
watch(
    formComputed,
    (newValue) => {
         if (newValue.confirmPassword === newValue.password) setError("confirmPassword", "");
    },
    { deep: true }
);
</script>

<style lang="scss" scoped>
.test-scroll{
 
  max-height: 55vh;
  @apply overflow-y-scroll ;
}
 .invisible-scrollbar{
  &::-webkit-scrollbar {
    @apply w-1 bg-slate-200 sm:hidden;
  }
  &::-webkit-scrollbar-thumb  {
     @apply bg-red-800
  }

}
.buttons-holder {
   
    @apply block sm:flex justify-between items-center mt-6 gap-4;
}
.input-holder {
   
    @apply block sm:flex  items-center mt-6 gap-4;
}
.small-margin-input{
  @apply mt-4 sm:mt-0 w-full
}

.small-margin{
  @apply mt-4 sm:mt-0
}

</style>
