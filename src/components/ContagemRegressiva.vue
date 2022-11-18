<template>
    <div class="contagem-regressiva">
        <div class="contagen-regressiva__numero">{{ props.contarNumero }}</div>
    </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, defineProps, defineEmits } from 'vue';

const props = defineProps({
    contarNumero: {
        type: Number,
        required: true
    }
})

const emits = defineEmits(['update: contarNumero'])
let contagemregressiva = null;

onMounted(() => {
    contagemregressiva = setInterval(() => {
        let numero = props.contarNumero;
        numero--;
        emits('update: contarNumero', numero);

        if(numero === 0) {
            clearInterval(contagemregressiva);
        }
    }, 1000)
})

onBeforeUnmount(() => clearInterval(contagemregressiva));
</script>