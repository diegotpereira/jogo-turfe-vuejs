<template>
    <div 
        class="relativa"
        :style="`left: ${props.cavalo.posicaoLargada}%`">
        <img src="@/assets/imagens/horse.gif" class="corrida_cavalo" v-if="props.cavalo.correndo" />
        <img src="@/assets/imagens/horse-stop.gif" class="corrida_cavalo" v-if="!props.cavalo.correndo" />
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