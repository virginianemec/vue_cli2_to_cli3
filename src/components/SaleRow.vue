<template>
  <tr :style="classObject">
    <td>{{ id }}</td>
    <td>{{ article }}</td>
    <td style="text-align: left;">
      <div>
        <ul>
          <li v-for="r in items" :key="r.id">
            {{ r.id }} - {{ r.item }}
            <button
              @click="sumar({id: r.id, item: r.item})"
            >Comp. padre, compro este comp. hijo. ++++</button>
          </li>
        </ul>
      </div>
    </td>
    <td>
      <img :src="imagen.source" :alt="imagen.descripcion" />
    </td>
    <td></td>
  </tr>
</template>

<script>
export default {
  name: 'SaleRow',
  props: {
    article: String,
    id: Number,
    items: Array,
    imagen: {
      sourse: String,
      descripcion: String,
    },
    styleObject: {},
  },
  setup() {
    return {
      /* article: '',
      id: 0,
      items: [],
      imagen: {
        sourse: '',
        descripcion: '',
      },
      styleObject: {}, */
    };
  },
  methods: {
    classObject1() {
      return this.id % 2 === 0 ? 'background-color:white' : 'background-color:beige';
    },
    sumar(item) {
      this.$emit('sumar', { fila: item });
    },
  },
  computed: {
    classObject() {
      return this.id % 2 === 0 ? 'background-color:white' : 'background-color:beige';
    },
  },
};
</script>

<style></style>
