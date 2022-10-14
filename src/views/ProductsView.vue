<template>
  <div>
    <SalesTable></SalesTable>
  </div>
</template>

<script>
import SalesTable from '@/components/SalesTable.vue';

export default {
  components: {
    SalesTable,
  },
};
</script>

<style scoped>
.descripcion {
  background-color: #e5f876;
  color: black;
  padding: 10px;
}
</style>
