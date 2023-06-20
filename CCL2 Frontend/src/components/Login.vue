<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6">
    <div class="w-full max-w-sm h-auto bg-white shadow-md">
      <form
          @submit.prevent="submitForm"
          class="px-8 pt-6 pb-8 mb-4"
      >
        <div class="flex justify-evenly items-center mb-6 mx-auto">
          <h1 class="text-xl font-semibold text-center text-black border-b-2 border-black">
            Login
          </h1>
          <h1 class="text-xl font-semibold text-center text-ccl2-Grey-Blue cursor-pointer" @click="navigateToRegister">
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
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>





<script setup>
import { UserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { ref } from "vue";

const user = UserStore();
const router = useRouter();
const username = ref("");
const password = ref("");

const submitForm = async () => {
  await user.logIn({ username: username.value, password: password.value });
  if (user.isLoggedIn) {
    console.log("[Login.vue / submitForm] user from Userstore: " + JSON.stringify(user));
    await router.push({ path: `/profile` });
  }
};

const navigateToRegister = () => {
  router.push({ path: '/register' });
};
</script>
