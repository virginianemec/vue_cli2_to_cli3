<template>
  <div id='app'>
    <SalesHeader></SalesHeader>
    <router-view/>
    <SalesFooter></SalesFooter>
  </div>
</template>

<script>
import SalesFooter from './components/SalesFooter.vue';
import SalesHeader from './components/SalesHeader.vue';

export default {
  name: 'App',
  components: {
    SalesHeader,
    SalesFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
