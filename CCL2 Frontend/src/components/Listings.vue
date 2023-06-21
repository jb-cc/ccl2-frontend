<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <div class="backdrop-blur-sm bg-ccl2-Midnight-Blue/100 w-3/5 h-40 sticky top-0 pt-20 z-10">
      <h1 class="text-7xl text-center mb-20 font-Moondance text-ccl2-White sticky top-20">
        {{ headline }}
      </h1>
    </div>
    <div v-if="FetchingError" class="text-white font-Poppins">
      Fetching Error: {{ FetchingError }}
      <div>
        <router-link
            to="/"
            class="text-lg font-Poppins text-black bg-white px-2 py-1 rounded-none"
        >
          Go back to home
        </router-link>
      </div>
    </div>
    <div
        v-if="items.length"
        class="w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4"
    >
      <div
          v-for="item in items"
          :key="item.id"
          class="flex flex-col bg-ccl2-Dark-Blue shadow-md hover:shadow-xl"
      >
        <img
            :src="getImage(item)"
            alt="Skin Image"
            class="w-full h-auto object-contain"
        />
        <div class="p-2 text-center flex-grow">
          <h2 class="font-regular font-Poppins mb-2 text-ccl2-White">{{ item.name }}</h2>
        </div>
        <div class="pb-2 text-center">
          <img
              src="/img/icons/coin.svg"
              alt="Coin Icon"
              class="inline-block mr-2"
          />
          <h2 class="font-bold text-ccl2-White inline-block">
            {{ item.price }}
          </h2>
        </div>
        <router-link
            :to="`/listings/item/${item.sellerWeaponID}`"
            class="mt-0.5 font-Poppins inline-block w-full px-6 py-2 text-xl font-semibold leading-6 text-center text-black uppercase transition bg-ccl2-Light-Gold rounded-none shadow ripple hover:shadow-lg hover:bg-ccl2-Dark-Gold focus:outline-none"
        >
          BUY
        </router-link>
      </div>
    </div>
    <div v-else class="text-ccl2-White font-Poppins mt-20">
      <p>Currently, there are no items listed. Check back later!</p>
    </div>
  </div>
</template>

<script> // TODO: refactor to use composition api
import http from "../http-common";

export default {
  data() {
    return {
      items: [],
      headline: "Latest Skins",
      FetchingError: "",
    };
  },
  created() {
    const team = this.$route.params.team;
    const fetchItems = (path) => {
      http
          .get(path)
          .then((response) => {
            console.log(response.data);
            this.items = response.data;
          })
          .catch((e) => {
            this.FetchingError = e.message;
            console.log(e);
          });
    };
    if (team) {
      this.headline = `${team}-SIDE WEAPONS`;
      fetchItems(`http://localhost:8080/listings/${team}`);
    } else {
      this.headline = "Latest Skins";
      fetchItems("http://localhost:8080/listings");
    }
  },

  methods: {
    getImage(item) {
      return `/img/skins/${item.image}.png`;
    },
  },
};
</script>
