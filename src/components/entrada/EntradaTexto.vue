<template>
    <label :for="props.nome">{{ props.campoTexto }}</label>
    <input type="text" :name="props.nome" :id="props.nome" :value="props.nome" :placeholder="props.espacoReservadoTexto"
      @input="manipuladorNome">
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    campoTexto: {
        type: String,
        default: ""
    },
    espacoReservadoTexto: {
        type: String
    },
    nome: {
        type: String,
        required: true
    }
})

const emits = defineEmits(['update: nome']);

function manipuladorNome(event) {
    emits('update: nome', event.target.value);
}
</script>