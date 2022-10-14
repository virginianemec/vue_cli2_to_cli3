<template>
  <div class="coder--header">
    <h1>{{ title }} - {{ presentationName }}</h1>
    <div class="descripcion" v-html="workDescription"></div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SalesHeader',
  setup() {
    const title = ref('Hello Coderhouse!');
    const presentationName = ref('Mi nombre es Virginia Nemec');
    const workDescription = ref(`Tomá el DESAFIO GENERICO - CLASE 7: <BR> ELABORA DOS COMPONENTES ANIDADOS <BR>
                          Crea dos componentes anidados, que puedan comunicarse entre sí. <br> 
                          AHORA: pasalo a vue 3 y router 4`);
    return {
      title,
      presentationName,
      workDescription,
    };
  },
};
</script>

<style scope>
.coder--header {
  background-color: #393b43;
}
h1 {
  color: #e5f876;
  font-size: 25px;
  padding: 10px;
}
.descripcion {
  background-color: #e5f876;
  color: black;
  padding: 10px;
}
</style>
