<template>
    <div 
        class="relativo"
        :style="`left: ${props.cavalo.posicaoLargada}%`">
        <img src="@/assets/imagens/horse.gif" class="corrida__cavalo" v-if="props.cavalo.correndo" />
        <img src="@/assets/imagens/horse-stop.gif" class="corrida__cavalo" v-if="!props.cavalo.correndo" />
    </div>
</template>
<script setup>

const props = defineProps({
    cavalo: {
        type: Object,
        required: true
    }
})
</script>