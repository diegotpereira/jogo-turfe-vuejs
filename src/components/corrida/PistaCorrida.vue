<template>
    <div class="corrida__pista">
        <div 
            class="corrida__contagem-regressiva"
            v-if="corridaLoja.ehCorrida && contarNumero > 0">
        </div>
        <CorridaLargadas></CorridaLargadas>
    </div>
</template>
<script setup>
import { useCorridaLoja } from '@/stores/corridaLoja'
import { ref } from 'vue'

const corridaLoja = useCorridaLoja();
const contarNumero = ref()
</script>