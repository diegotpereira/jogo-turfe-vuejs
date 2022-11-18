<template>
    <button type="button" class="botao" :disabled="btnDesabilitar">
        {{ props.titulo }}
    </button>
</template>
<script setup>
import { defineProps } from 'vue';


const props = defineProps({
    titulo: {
        type: String,
        default: "Começar"
    },
    btnDesabilitar: {
        type: Boolean,
        default: false
    }
})
</script>
<script>
export default {
    name: 'paginaBotao'
}
</script>