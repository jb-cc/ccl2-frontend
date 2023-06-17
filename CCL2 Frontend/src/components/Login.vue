<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6">
    <div class="w-full max-w-xs">
      <h1 class="text-2xl font-bold mb-6 text-center text-white">Login</h1>
      <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" v-model="username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" v-model="password">
        </div>
        <div class="flex items-center justify-between">
          <button @click="submitForm" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import http from "../http-common";

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      http.post('http://localhost:8080/login', {
        username: this.username,
        password: this.password
      })
          .then(response => {
            console.log('response data: '+ JSON.stringify(response.data));
            // If user login is successful, navigate to the user profile page.
            if (response.data.token) {

              console.log('user id: '+response.data.user.id);
              this.$router.push({ path: `/user/${response.data.user.id}` });

            }
          })
          .catch(e => {
            console.log('error response: '+JSON.stringify(e.response));
          });
    }
  }

}
</script>
