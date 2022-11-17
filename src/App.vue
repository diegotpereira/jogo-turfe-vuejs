<template>
  <Cabecalho />
  <VisualizacaoCorrida />
</template>

<script>
import Cabecalho from './components/cabecalho/Cabecalho.vue'
import VisualizacaoCorrida from './visualizacoes/VisualizacaoCorrida.vue'

export default {
  name: 'App',
  components: {
    Cabecalho,
    VisualizacaoCorrida
  }
}
</script>

<style lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
