<template>
  <div class="principal">
    <div class="div--container">
      <table class="table border-primary">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>ITEMS</th>
            <th>IMAGEN</th>
          </tr>
        </thead>
        <tbody v-for="sale in salesArray" :key="sale.id">
          <SaleRow
            :id="sale.id"
            :article="sale.article"
            :items="sale.items"
            :imagen="sale.imagen"
            @sumar="sumar($event)"
          ></SaleRow>
        </tbody>
        <footer collspan="4"></footer>
      </table>
    </div>
    <div>
      <div class="columna-alignLeft">
        Pedido:
        <div v-for="(item, index) in  carrito" :key="'product'+index">
          {{ index }} - {{ item }}
          <button @click="quitar(index)">Comp. quita este articulo ---</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SaleRow from './SaleRow.vue';

export default {
  name: 'SalesTable',
  setup() {
    const carrito = ref([]);
    const salesArray = [
      {
        id: 1,
        article: 'Verduleria',
        items: [
          { id: 1, item: 'Papa' },
          { id: 2, item: 'Pimiento' },
        ],
        imagen: {
          source: './imagenes/verduleria.jpg',
          descripcion: 'La Verduleria del barrio.',
        },
        styleObject: {
          background: '#59af6c',
        },
      },
      {
        id: 2,
        article: 'Panaderia',
        items: [
          { id: 1, item: 'Pan' },
          { id: 2, item: 'Cremona' },
          { id: 3, item: 'Media luna' },
          { id: 4, item: 'Prepizza' },
        ],
        imagen: {
          source: './imagenes/panaderia.jpg',
          descripcion: 'La Panaderia del barrio.',
        },
        styleObject: {
          background: '#ffc107',
        },
      },
      {
        id: 3,
        article: 'Carniceria',
        items: [
          { id: 1, item: 'Costeleta' },
          { id: 2, item: 'Bife' },
        ],
        imagen: {
          source: './imagenes/carniceria.jpg',
          descripcion: 'La Carniceria del barrio.',
        },
        styleObject: {
          background: 'red',
        },
      },
    ];
    /*
    const columns = [
      { id: 1, name: 'ID' },
      { id: 2, name: 'NOMBRE' },
      { id: 3, name: 'PRODUCTOS' },
      { id: 4, name: 'IMAGEN' },
    ];
    */
    return {
      salesArray,
      carrito,
    };
  },
  components: {
    SaleRow,
  },
  methods: {
    sumar(objFilaItem) {
      this.agregarCarrito(objFilaItem.fila.item);
      console.log(`Se modifico la fila: ${objFilaItem.fila.item}`);
    },
    agregarCarrito(objItem) {
      this.carrito.push(objItem);
    },
    quitar(indexOfObject) {
      this.carrito.splice(indexOfObject, 1);
    },
  },
};
</script>

<style scoped>
.principal {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.div--container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  width: 100%;
  padding-top: 20px;
}
table {
  width: 80%;
  margin: auto;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 2px 2px 10px rgb(142, 142, 142);
  transition: 0.3s;
  color: #2c3e50;
  text-align: center;
}
.columna-alignLeft {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
}
</style>
