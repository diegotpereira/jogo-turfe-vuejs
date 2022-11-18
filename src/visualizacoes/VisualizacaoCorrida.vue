<template>
    <div class="corrida">
        <PistaCorrida :contar="contar" @contadorManipuladores="contadorManipuladores">
            
        </PistaCorrida>
        <CorridaInterface :corridaInterface="corridaInterface" @iniciar="iniciar"></CorridaInterface>
    </div>
</template>
<script setup>
import PistaCorrida from '../components/corrida/PistaCorrida.vue'
import CorridaInterface from '../components/corrida/CorridaInterface.vue'
import { ref, watch } from 'vue'
import { useCorridaLoja } from "@/stores/corridaLoja"

const corridaInterface = ref({
    form: true,
    liderCorrida: false,
    resultado: false
})

const contar = ref(3);
const corridaLoja = useCorridaLoja();

// corrida terminada
watch(() => corridaLoja.ehCorrida, () => {
    if(corridaLoja.ehCorrida === false) {
        corridaInterface.value.liderCorrida = false;
        corridaInterface.value.resultado = true;
    }
})

function contadorManipuladores(value) {
    contar.value = value
}

function iniciar() {
    corridaLoja.ehCorrida = true;
    setTimeout(() => {
        corridaInterface.value.form = false;
        corridaInterface.value.liderCorrida = true;
        corridaLoja.cavalosCorrendo()
        corridaLoja.cavalos.forEach((cavalo) => {
            corridaLoja.corridaCavalo(cavalo.id)
        })
    }, 3000)
}
</script>