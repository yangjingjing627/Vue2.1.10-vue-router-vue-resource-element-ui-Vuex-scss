<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <hh v-bind:class="{ active: isActive}"></hh>
    <router-view></router-view>
  </div>
</template>

<script>
import hh from './views/hh.vue'
export default {
  name: 'app',
  data () {
    return {
      isActive: true
    }
  },
  components: { hh }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  font-size: 30px;
  font-weight: bold;
}
</style>
