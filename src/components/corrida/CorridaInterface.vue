<template>
    <div class="corrida__interface">
        <CorridaCavaloForm v-if="props.corridaInterface.form" @iniciar="iniciar"/>
        <ClassificacaoQuadro v-if="props.corridaInterface.classificacaoQuadro"/>
        <CorridaResultado v-if="props.corridaInterface.resultado" @reiniciar="reiniciar" />
    </div>
</template>
<script setup>
import CorridaCavaloForm from './CorridaCavaloForm.vue'
import ClassificacaoQuadro from './CorridaClassificacaoQuadro.vue'
import { defineProps, defineEmits } from 'vue';
import CorridaResultado from './CorridaResultado.vue'

const props = defineProps({
    corridaInterface: {
        type: Object,
        required: true
    }
})

const emits = defineEmits(["reiniciar", "iniciar"]);

function iniciar() {
    emits("iniciar");
}

function reiniciar() {
    emits("reiniciar")
}
</script>