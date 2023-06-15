<template>
  <div>
    <div><h1>Latest Skins</h1></div>
    <div v-if="items.length" class="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <router-link
          v-for="item in items"
          :key="item.id"
          :to="`/listings/item/${item.sellerWeaponID}`"
          class="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div class="p-4">
          <h2 class="font-bold">Seller ID: {{ item.sellerID }}</h2>
          <p>Price: {{ item.price }}</p>
        </div>
      </router-link>
    </div>
    <div v-else class="text-ccl2-White mt-20">
      <p>Currently, there are no items listed. Check back later!</p>
    </div>
  </div>
</template>

<script>
import http from '../http-common';

export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    http.get('http://localhost:8080/listings').then((response) => {
      this.items = response.data;
    });
  },
};
</script>
