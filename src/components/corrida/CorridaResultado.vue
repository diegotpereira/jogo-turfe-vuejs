<template>
    <div class="corrida__resultado">
        <h2 class="corrida__titulo">Resultado</h2>
        <ol class="corrida__lista">
            <li class="corrida__lista-item" v-for="cavalo in resultado" :key="cavalo.id">
                {{ `${cavalo.nome} (Faixa Nº: ${cavalo.id})` }}
            </li>
        </ol>
        <Botao class="corrida__botao" title="Reiniciar" @click="reiniciar" />
    </div>
</template>
<script setup>
import Botao from '../Botao.vue'
import { useCorridaLoja } from "@/stores/corridaLoja"
import { ref, onMounted, defineEmits } from 'vue'

const corridaLoja = useCorridaLoja();
const resultado = ref();
const emits = defineEmits(["reiniciar"]);

onMounted(() => {
    resultado.value =  calcularResultado();
})

const calcularResultado = () => {

    const copiarCavalo = JSON.parse(JSON.stringify(corridaLoja.cavalos));
    const sortearPosicaoLargada = copiarCavalo.sort((primeiroCavalo, segundoCavalo) => {

        if(primeiroCavalo.numeroDe > segundoCavalo.numeroDe) {
            return 1;
        }

        if(primeiroCavalo.numeroDe < segundoCavalo.numeroDe) {
            return -1;
        }
    })

    return sortearPosicaoLargada;
}

function reiniciar() {
    emits("reiniciar");
}
</script>