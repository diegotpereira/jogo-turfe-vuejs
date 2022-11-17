<template>
    <div class="corrida">
        <PistaCorrida />
        <p>corrida</p>
    </div>
</template>
<script>
import PistaCorrida from '../components/corrida/PistaCorrida.vue'

export default {
    name: 'paginaCorrida',
    components: {
        PistaCorrida
    }
}
</script>