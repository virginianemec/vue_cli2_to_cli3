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
      workDescription: `DESAFIO de VUE2 a VUE3 <br> DESAFIO GENERICO DE LA CLASE 7 HECHO EN VUE 2 <BR> ELABORA DOS COMPONENTES ANIDADOS <BR>
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
