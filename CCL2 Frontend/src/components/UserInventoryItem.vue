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
        <button
            class="mt-4 inline-block w-1/2 px-6 py-2 font-semibold font-Poppins leading-6 text-center text-ccl2-Night-Blue uppercase transition bg-ccl2-Light-Gold rounded-none shadow ripple hover:shadow-lg hover:bg-ccl2-Dark-Gold focus:outline-none"
            @click="sellItem"
        >
          SELL
        </button>
      </div>
      <div v-else class="text-center" v-if="!item.isListed">
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
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import http from "../http-common";

const route = useRoute();
const router = useRouter();
const item = ref({});

onMounted(async () => {
  const userWeaponID = route.params.item;
  try {
    const response = await http.get(`http://localhost:8080/inventory/item/${userWeaponID}`);
    console.log('[UserInventoryItem.vue / onMounted]: response.data: '+JSON.stringify(response.data[0]))
    if(response.data[0]) {
      item.value = response.data[0];
      console.log('item.value: '+JSON.stringify(item.value))
    } else {
      console.error('No data in response.data[0]');
    }
  } catch(err) {
    console.error(err);
  }
});

const sellItem = () => {
  if(item.value && item.value.id) {
    router.push(`/inventory/${item.value.userWeaponID}}/sell`);
  } else {
    console.error('No item to sell');
  }
};
</script>
