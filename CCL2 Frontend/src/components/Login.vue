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
        <div v-if="error" class="mb-4 flex justify-center text-lg">
          <p class="text-ccl2-Red">
            {{ error }}
          </p>
        </div>
      </form>
    </div>
  </div>
</template>





<script setup>

// necessary imports
import { UserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { ref } from "vue";


// variables for login and error handling, as well as router and userstore
const user = UserStore();
const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref("");


// function to submit the login form, gets called when login button is clicked
const submitForm = async () => {
  try {

    // send login request to backend and navigate to profile page if successful
    // otherwise display error message
    await user.logIn({ username: username.value, password: password.value });
    console.log("[Login.vue / submitForm] user from Userstore: " + JSON.stringify(user));
    await router.push({ path: `/profile` });
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      error.value = err.response.data.message;
      console.log("Server response: " + err.response.data.message);
    } else {
      error.value = err.message;
      console.log("An error occurred: " + err.message);
    }
  }
};


// function to navigate to register page, called when register button is clicked
const navigateToRegister = () => {
  router.push({ path: '/register' });
};
</script>
