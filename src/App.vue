<template>
  <div id='app'>
    <SalesHeader></SalesHeader>
    <SalesTable />
    <SalesFooter></SalesFooter>
  </div>
</template>

<script>
import SalesTable from './components/SalesTable.vue';
import SalesFooter from './components/SalesFooter.vue';
import SalesHeader from './components/SalesHeader.vue';

export default {
  name: 'App',
  components: {
    SalesTable,
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
