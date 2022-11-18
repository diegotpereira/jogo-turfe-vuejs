<template>
    <div class="corrida__pista">
        <div 
            class="corrida__contagem-regressiva"
            v-if="corridaLoja.ehCorrida && contarNumero > 0">
            <ContagemRegressiva v-model:contarNumero="contarNumero"></ContagemRegressiva>
        </div>
        <CorridaLargadas></CorridaLargadas>
    </div>
</template>
<script setup>
import { useCorridaLoja } from '@/stores/corridaLoja'
import { onBeforeMount, ref, watch, defineProps, defineEmits} from 'vue'
import ContagemRegressiva from '../ContagemRegressiva.vue'
import CorridaLargadas from './corridaLargada/CorridaLargadas.vue'

const corridaLoja = useCorridaLoja();
const props = defineProps({
    contar: {
        type: Number,
        required: true
    }
});
const emits = defineEmits(["contadorManipuladores"]);
const contarNumero = ref();

onBeforeMount(() => {
    contarNumero.value = props.contar;
});

watch(() => props.contar, () => {
    contarNumero.value = props.contar;
});

watch(() => contarNumero.value, () => {
    emits("contadorManipuladores", contarNumero.value)
});

</script>