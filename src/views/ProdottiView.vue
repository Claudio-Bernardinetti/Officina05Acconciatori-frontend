<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const products = ref([]);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        products.value = response.data;
      } catch (e) {
        error.value =
          "Impossibile caricare i prodotti. Verifica la connessione.";
      } finally {
        loading.value = false;
      }
    });

    return { products, loading, error };
  },
};
</script>

<template>
  <section class="container py-5">
    <h1 class="text-center mb-4">I Nostri Prodotti</h1>

    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
    </div>

    <p v-else-if="error" class="text-center text-danger">{{ error }}</p>

    <div v-else-if="products.length === 0" class="text-center text-muted py-5">
      Nessun prodotto disponibile.
    </div>

    <div v-else class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="product in products" :key="product.id" class="col">
        <div class="card h-100 shadow-sm">
          <img
            v-if="product.image"
            :src="product.image"
            class="card-img-top"
            :alt="product.name"
            style="object-fit: cover; height: 200px"
          />
          <div
            v-else
            class="d-flex align-items-center justify-content-center bg-light"
            style="height: 200px"
          >
            <span class="text-muted">Immagine non disponibile</span>
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text text-muted flex-grow-1">
              {{ product.description }}
            </p>
            <p class="fw-bold fs-5 mt-2">
              € {{ Number(product.price).toFixed(2) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
