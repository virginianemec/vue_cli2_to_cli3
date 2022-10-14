<template>
   <div class="coder--header">
    <div class="descripcion" v-html="pieDescription"></div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SalesFooter',
  setup() {
    const pieDescription = ref(`Cada componente hijo le avisa al Padre que sume ese articulo al pedido. <br> 
      El padre elimina objetos de la lista REF(products) - Octubre 2022`);
    return {
      pieDescription,
    };
  },
};
</script>

<style scoped>
.coder--header {
  background-color: #393b43;
}
h1 {
  color: #e5f876;
  font-size: 25px;
  padding: 10px;
}
.descripcion {
  background-color: black;
  color: #e5f876;
  padding: 10px;
}
</style>
