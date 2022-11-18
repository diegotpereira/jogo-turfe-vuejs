<template>
    <div class="corrida__cavalo-nome">
        <h2 class="corrida__titulo">Cavalos Nomes</h2>
        <ol class="corrida__lista">
            <li class="corrida__lista-item largada-marca" v-for="cavalo in corridaLoja.cavalos" :key="cavalo.id">
                <EntradaTexto v-model:nome="cavalo.nome"></EntradaTexto>
            </li>
        </ol>
        <div class="corrida__invalida">
            * Os cavalos devem ter um nome.
        </div>
        <div class="corrida__botoes">
            <Botao class="corrida__botao" title="Iniciar" @click="iniciar"></Botao>
        </div>
    </div>
</template>
<script setup>
import { useCorridaLoja } from '@/stores/corridaLoja'
import EntradaTexto from '../entrada/EntradaTexto.vue'
import { defineEmits } from 'vue'
import Botao  from '../Botao.vue'

const corridaLoja = useCorridaLoja();
const emits = defineEmits(["iniciar"])
function iniciar() {

    window.scrollTo({ top: 0 })
    emits("iniciar")
}
</script>