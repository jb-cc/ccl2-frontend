<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 class="text-7xl text-center mb-20 font-Moondance text-ccl2-White">
      Your Inventory
    </h1>
    <div v-if="isLoading" class="text-white font-Poppins">
      Loading items...
    </div>
    <div v-else-if="items.length" class="w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      <div
          v-for="item in items"
          :key="item.userWeaponID"
          class="flex flex-col bg-ccl2-Dark-Blue shadow-md hover:shadow-xl cursor-pointer"
          @click="navigateToItem(item)"
      >
        <img :src="getImage(item)" alt="Item Image" class="w-full h-auto object-contain" />
        <div class="p-2 text-center flex-grow">
          <h2 class="font-regular font-Poppins mb-2 text-ccl2-White">{{ item.name }}</h2>
          <p class="font-regular font-Poppins mb-2 text-ccl2-White">{{ item.rarity }}</p>
        </div>
        <router-link
            :to="`/inventory/${item.userWeaponID}/sell`"
            class="mt-0.5 font-Poppins inline-block w-full px-6 py-2 text-xl font-semibold leading-6 text-center text-black uppercase transition bg-ccl2-Light-Gold rounded-none shadow ripple hover:shadow-lg hover:bg-ccl2-Dark-Gold focus:outline-none"
        >
          SELL
        </router-link>
      </div>
    </div>
    <div v-else class="text-ccl2-White font-Poppins mt-20">
      <p>Currently, there are no items in your inventory. Check back later!</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import http from "../http-common";
import { UserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const userStore = UserStore();
    const user = userStore.user;
    const items = ref([]);
    const isLoading = ref(true);
    const getImage = (item) => `/img/skins/${item.image}.png`;

    const navigateToItem = (item) => {
      router.push(`/inventory/${item.userWeaponID}`);
    };

    onMounted(async () => {
      try {
        const response = await http.get(`http://localhost:8080/inventory/user/${user.id}`);
        items.value = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    });

    return {
      items,
      isLoading,
      getImage,
      navigateToItem
    };
  },
}
</script>
