<template>
  <div id="app">
    <div id="details">
      <h1>Tic Tac Toe</h1>
    </div>
    <grid></grid>
  </div>
</template>

<script>
import Grid from './components/grid.vue'

export default {
  name: 'app',
  components: {
    Grid
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
