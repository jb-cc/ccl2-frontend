<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <div
      v-if="item"
      class="w-3/5 bg-ccl2-Dark-Blue shadow-md hover:shadow-xl rounded-none p-4"
    >
      <img
        :src="getImage(item)"
        alt="Skin Image"
        class="w-full h-auto object-contain"
      />
      <h1 class="font-bold text-center text-ccl2-White my-4">
        {{ item.name }}
      </h1>
      <p class="text-center text-ccl2-White">
        <i class="fas fa-dollar-sign"></i> {{ item.price }}
      </p>
      <button
        class="mt-4 inline-block w-full px-6 py-2 text-xs font-medium leading-6 text-center text-ccl2-Night-Blue uppercase transition bg-ccl2-Light-Gold rounded-none shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        @click="buyItem"
      >
        BUY NOW
      </button>
    </div>
    <div v-else class="text-ccl2-White mt-20">
      <p>Fetching item...</p>
    </div>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  data() {
    return {
      item: null,
      headline: "Latest Skins",
      FetchingError: "",
    };
  },
  created() {
    const sellerWeaponID = this.$route.params.item;
    http
      .get(`http://localhost:8080/listings/item/${sellerWeaponID}`)
      .then((response) => {
        this.item = response.data[0];
      });
  },
  methods: {
    getImage(item) {
      if (item && item.image) {
        return `/img/skins/${item.image}.png`;
      }
      return ""; // return a default image or empty string if item or item.image is not defined
    },
    buyItem() {
      // Here you can define what happens when the BUY NOW button is clicked.
      // You probably want to make a POST request to your server to initiate the purchase.
    },
  },
};
</script>
