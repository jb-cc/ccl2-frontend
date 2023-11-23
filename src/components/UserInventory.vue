<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <div class="backdrop-blur-sm bg-ccl2-Midnight-Blue/100 w-3/5 h-40 sticky top-0 pt-20 z-10">
      <h1 class="text-7xl text-center mb-20 font-Moondance text-ccl2-White sticky top-20">
        Your Inventory
      </h1>
    </div>
    <div v-if="isLoading" class="text-white font-Poppins">
      Loading items...
    </div>
    <div v-else-if="items.length" class="w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4"
    >
      <div
          v-for="item in items"
          :key="item.userWeaponID"
          class="flex flex-col bg-ccl2-Dark-Blue shadow-md hover:shadow-xl"
          @click="navigateToItem(item)"
      >
        <img :src="getImage(item)" alt="Skin Image" class="w-full h-auto object-contain"/>
        <div class="p-2 text-center flex-grow">
          <h2 class="font-regular font-Poppins mb-2 text-ccl2-White">{{ item.name }}</h2>
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
      <p>Currently, there are no items in your inventory. Check out the Market!</p>
    </div>
  </div>
</template>


<script>

// necessary imports
import {ref, onMounted} from 'vue';
import http from "../http-common";
import {UserStore} from '@/stores/user';
import {useRouter} from 'vue-router';

export default {

  // necessary variables and store / router setup
  setup() {
    const router = useRouter();
    const userStore = UserStore();
    const user = userStore.user;
    const items = ref([]);
    const isLoading = ref(true);

    // get image of item
    const getImage = (item) => `/img/skins/${item.image}.png`;

    // navigate to item on click of item
    const navigateToItem = (item) => {
      router.push(`/inventory/${item.userWeaponID}`);
    };

    // get items from inventory
    onMounted(async () => {
      try {
        const response = await http.get(`http://localhost:8080/inventory/user/${parseInt(user.id)}`);
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

