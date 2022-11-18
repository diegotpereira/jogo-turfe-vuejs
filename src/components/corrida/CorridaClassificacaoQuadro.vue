<template>
    <div class="corrida__classificacaoquadro">
        <h2 class="corrida__titulo">Quadro Classificação</h2>
        <ol class="corrida__lista">
            <li class="corrida__lista-item corrida_lista-item--finalizado" v-for="cavalo in finalizado" :key="cavalo.id">

            </li>
            <li class="corrida__lista-item" v-for="cavalo in classificacaoQuadro" :key="cavalo.id">

            </li>
        </ol>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useCorridaLoja } from '@/stores/corridaLoja' 

const corridaLoja = useCorridaLoja();

const classificacaoQuadro = computed(() => {

    const copiarCavalos = JSON.parse(JSON.stringify(corridaLoja.cavalos));

    const cavaloNaoFinalizado = copiarCavalos.filter((cavalo) => cavalo.numeroDe === null);

    if(!cavaloNaoFinalizado)
        return;
    
    const sortearPosicaoLargada = cavaloNaoFinalizado.sort((primeiroCavalo, segundoCavalo) => {
        if(primeiroCavalo.posicaoLargada > segundoCavalo.posicaoLargada) {

            return -1;
        }

        if (primeiroCavalo.posicaoLargada < segundoCavalo.posicaoLargada) {
            
            return 1;
        } 
    })
    return sortearPosicaoLargada
})


const finalizado = computed(() => {

    const copiarCavalos = JSON.parse(JSON.stringify(corridaLoja.cavalos));

    const finalizadoCavalos = copiarCavalos.filter((cavalo) => cavalo.numeroDe);
    let finalizadoNumeroDe;

    if(finalizadoCavalos.length > 0) {
        finalizadoNumeroDe = finalizadoCavalos.sort((primeiroCavalo, segundoCavalo) => {
            if(primeiroCavalo.numeroDe < segundoCavalo.numeroDe) {
                return -1;
            }

            if(primeiroCavalo.numeroDe > segundoCavalo.numeroDe) {
                return 1
            }
        })
    } else {
        return;
    }

    return finalizadoNumeroDe;
 })
</script>