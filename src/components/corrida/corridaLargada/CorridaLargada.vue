<template>
    <CorridaCavalo :cavalo="props.cavalo"></CorridaCavalo>
    <div class="corrida__ponto"></div>
    <div class="corrida__largada-nome">{{ props.cavalo.nome }}</div>
    <div class="corrida__ponto corrida__ponto--final"></div>
</template>
<script setup>
import CorridaCavalo from '../CorridaCavalo.vue'

const props = define({
    cavalo: {
        type: Object,
        required: true
    }
})
</script>