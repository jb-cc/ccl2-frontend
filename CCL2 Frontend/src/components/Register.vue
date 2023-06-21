<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6">
    <div class="w-full max-w-sm h-auto bg-white shadow-md">
      <form
          @submit.prevent="submitForm"
          class="px-8 pt-6 pb-8 mb-4"
      >
        <div class="flex justify-evenly items-center mb-6 mx-auto">
          <h1 class="text-xl font-semibold text-center text-ccl2-Grey-Blue cursor-pointer" @click="navigateToLogin">
            Login
          </h1>
          <h1 class="text-xl font-semibold text-center text-black border-b-2 border-black">
            Register
          </h1>
        </div>
        <div class="mb-4">
          <label
              class="block text-gray-700 text-sm font-semibold mb-2"
              for="username"
          >
            Username
          </label>
          <input
              class="shadow shadow-xl border-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              v-model="username"
          />
        </div>
        <div class="mb-4">
          <label
              class="block text-gray-700 text-sm font-semibold mb-2"
              for="email"
          >
            Email
          </label>
          <input
              class="shadow shadow-xl border-0 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              v-model="email"
          />
        </div>
        <div class="mb-6">
          <label
              class="block text-gray-700 text-sm font-semibold mb-2"
              for="password"
          >
            Password
          </label>
          <input
              class="shadow shadow-xl appearance-none border-0 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              v-model="password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
              @click="submitForm"
              class="w-full bg-ccl2-Light-Gold hover:bg-ccl2-Dark-Gold text-ccl2-Midnight-Blue font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              type="submit"
          >
            Sign Up
          </button>
        </div>
        <p class="mt-2 text-center text-ccl2-Red">{{ errorMessage }}</p>

      </form>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { UserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

// define reactive data
const username = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('') // New variable for error message

// define router
const router = useRouter()

// define store
const userStore = UserStore()

// define methods
const submitForm = async () => {
  try {
    const response = await userStore.register({
      username: username.value,
      email: email.value,
      password: password.value
    })

    console.log('[Register.vue / submitForm] response data: ' + JSON.stringify(response.data.user))

    // If user registration is successful, navigate to the user page.
    if (response.data.token) {
      errorMessage.value = '' // Clear the error message
      await router.push({path: `/profile`})
    }
  } catch (e) {
    console.log('[Register.vue / submitForm] error response: ' + JSON.stringify(e.response))
    errorMessage.value = e.response.data.message // Update the error message
  }
}

const navigateToLogin = () => {
  router.push({ path: '/login' });
};
</script>
