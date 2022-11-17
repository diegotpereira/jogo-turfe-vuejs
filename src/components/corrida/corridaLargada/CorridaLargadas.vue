<template>
    <div class="corrida__largadas">
        <div 
            class="corrida__largada"
            :class="[(cavalo.id % 2) ? 'corrida__largada--escuro' : 'corrida__largada--luz']"
            v-for="cavalo in corridaLoja.cavalos" :key="cavalo.id">
            <CorridaLargada :cavalo="cavalo"></CorridaLargada>
        </div>
    </div>
</template>
<script setup>  
import CorridaLargada from './CorridaLargada.vue'
import { useCorridaLoja } from '@/stores/corridaLoja'

const corridaLoja = useCorridaLoja();

// export default {
//     name: 'paginaCorridaLargadas',
//     components: {
//         CorridaLargada
//     }

// }
</script>