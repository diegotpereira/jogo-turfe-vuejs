<template>
    <div class="corrida__largadas">
        <div class="corrida__largada">
            <CorridaLargada />
        </div>
    </div>
</template>
<script>
import CorridaLargada from './CorridaLargada.vue'

export default {
    name: 'paginaCorridaLargadas',
    components: {
        CorridaLargada
    }

}
</script>