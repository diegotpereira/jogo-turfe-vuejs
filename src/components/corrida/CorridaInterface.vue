<template>
    <div class="corrida__interface">
        <CorridaCavaloForm v-if="props.corridaInterface.form" @iniciar="iniciar"/>
        <ClassificacaoQuadro v-if="props.corridaInterface.classificacaoQuadro"/>
    </div>
</template>
<script setup>
import CorridaCavaloForm from './CorridaCavaloForm.vue'
import ClassificacaoQuadro from './CorridaClassificacaoQuadro.vue'
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    corridaInterface: {
        type: Object,
        required: true
    }
})

const emits = defineEmits( "iniciar");

function iniciar() {
    emits("iniciar");
}

// function reiniciar() {
//     emits("reiniciar")
// }
</script>