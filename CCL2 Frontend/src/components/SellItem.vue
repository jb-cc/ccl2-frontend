<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <div
      v-if="item && item.name"
      class="w-3/5 bg-ccl2-Dark-Blue shadow-md hover:shadow-xl rounded-none p-4"
    >
      <img
        :src="`/img/skins/${item.image || 'default'}.png`"
        alt="Skin Image"
        class="w-1/2 h-auto object-contain mx-auto my-4"
      />

      <h1 class="font-bold text-center text-ccl2-White my-4">
        {{ item.name }}
      </h1>
      <p class="text-center text-ccl2-White mb-4">
        {{ item.rarity }}
      </p>

      <div class="text-center" v-if="!item.isListed">
        <input
          type="number"
          v-model="price"
          placeholder="Enter price"
          class="mt-4 inline-block w-1/6 px-6 py-2 font-semibold font-Poppins leading-6 text-center text-ccl2-Night-Blue uppercase transition bg-ccl2-White rounded-none shadow ripple hover:shadow-lg hover:bg-blue-50 focus:outline-none"
        />
        <button
          class="mt-4 inline-block w-1/2 px-6 py-2 font-semibold font-Poppins leading-6 text-center text-ccl2-Night-Blue uppercase transition bg-ccl2-Light-Gold rounded-none shadow ripple hover:shadow-lg hover:bg-ccl2-Dark-Gold focus:outline-none"
          @click="listOnMarket"
        >
          LIST ON MARKET
        </button>
      </div>
      <div v-else class="text-center">
        <button
          class="mt-4 inline-block w-1/2 px-6 py-2 font-semibold font-Poppins leading-6 text-center text-ccl2-Night-Blue uppercase transition bg-ccl2-Light-Gold rounded-none shadow ripple hover:shadow-lg hover:bg-ccl2-Dark-Gold focus:outline-none"
        >
          ITEM ON MARKET
        </button>
      </div>
    </div>
    <div v-else class="text-ccl2-White mt-20">
      <p>Fetching item...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { UserStore } from "@/stores/user";
import {useRoute, useRouter} from "vue-router";
import http from "../http-common";

const item = ref({});
const price = ref(null);
const userStore = UserStore();
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  const userWeaponID = route.params.item;
  try {
    const response = await http.get(
      `http://localhost:8080/inventory/item/${userWeaponID}`
    );
    console.log(
      "[SellItem.vue / onMounted]: response.data: " +
        JSON.stringify(response.data[0])
    );
    if (response.data[0]) {
      item.value = response.data[0];
      console.log("[SellItem.vue / onMounted]: item.value: " + JSON.stringify(item.value));
    } else {
      console.error("[SellItem.vue / onMounted]: No data in response.data[0]");
    }
  } catch (err) {
    console.error(err);
  }
});

const listOnMarket = async () => {
  try {
    const listingData = {

      sellerID: userStore.user.id,
      sellerWeaponID: item.value.userWeaponID,
      price: price.value,
    };
    await http.post("http://localhost:8080/listings/add", listingData);
    item.value.isListed = true;
  } catch (error) {
    console.error(error);
  }
};
</script>