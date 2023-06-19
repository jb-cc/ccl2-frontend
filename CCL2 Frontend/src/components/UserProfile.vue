<template>
  <div v-if="user" class="flex flex-col items-center justify-center min-h-screen p-6">
    <h1 class="text-2xl font-bold mb-6 text-center font-Moondance text-6xl text-white">{{ user.username }}</h1>
    <div class="bg-transparent shadow-none px-16 py-10 mb-4 text-white font-Poppins w-1/3">
      <div class="mb-4 flex text-xl justify-between">
        <p class><strong>Username:</strong></p>
        <p>{{ user.username }}</p>
      </div>
      <div class="mb-4 text-xl flex justify-between">
        <p><strong>E-mail:</strong></p>
        <p>{{ user.email }}</p>
      </div>
      <div class="mb-4 text-xl flex justify-between items-center">
        <p><strong>Balance:</strong></p>
        <p>{{ user.balance }}<img
            src="/img/icons/coin.svg"
            alt="Coin Icon"
            class="inline-block mr-2"
        /></p>
      </div>
      <div class="mb-4 flex justify-center">
        <router-link :to="`/user/${user.id}/deposit`" class="bg-ccl2-Light-Gold hover:bg-ccl2-Dark-Gold text-ccl2-Midnight-Blue font-bold py-2 px-4  focus:outline-none">DEPOSIT FUNDS</router-link>
      </div>
      <div class="flex justify-center mt-10">
        <router-link :to="`/user/${user.id}/edit`" class="bg-ccl2-White hover:bg-ccl2-Grey-Blue text-ccl2-Midnight-Blue font-bold py-2 px-4 focus:outline-none">SETTINGS AND PRIVACY</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {UserStore} from '@/stores/user'
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'

const userStore = UserStore()
const user = ref(userStore.user)
const router = useRouter()

onMounted(async () => {
  if (!user.value) {
    console.log('[In UserStore]: user.value is '+user.value)
    router.push('/login')
  }
})
</script>

