<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6">
    <div class="w-full max-w-xs">
      <h1 class="text-2xl font-bold mb-6 text-center text-white">Login</h1>
      <form
        @submit.prevent="submitForm"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="submitForm"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
</script>