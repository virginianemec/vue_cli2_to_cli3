<template>
  <div class="coder--header">
    <h1>{{ title }} - {{ presentation_name }}</h1>
    <div class="descripcion" v-html="workDescription"></div>
  </div>
</template>

<script>
export default {
  name: 'SalesHeader',
  data() {
    return {
      title: 'Hello Coderhouse!',
      presentation_name: 'Mi nombre es Virginia Nemec',
      workDescription: `DESAFIO GENERICO - CLASE 7 <BR> ELABORA DOS COMPONENTES ANIDADOS <BR>
Crea dos componentes anidados, que puedan comunicarse entre sí.
 `,
    };
  },
};
</script>

<style >
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
