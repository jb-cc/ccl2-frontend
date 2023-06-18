<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6">
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
        <p>{{ user.balance }}</p>
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







<script>
import http from "../http-common";

export default {
  data() {
    return {
      user: {
        id: '', // Initialize with the correct id
        username: '', // Initialize with the correct username
        email: '', // Initialize with the correct email
        balance: 0 // Initialize with the correct balance
      }
    }
  },
  methods: {
    getUserData(userId) {
      http.get(`http://localhost:8080/users/${userId}`)
          .then(response => {
            console.log('response data: '+ JSON.stringify(response));
            // Assign the fetched user data to the user data property
            this.user.id = response.data.id;
            this.user.username = response.data.username;
            this.user.email = response.data.email;
            this.user.balance = response.data.balance;
          })
          .catch(e => {
            console.log('error response: '+e);
          });
    }
  },
  created() {
    // Fetch the user data when the component is created
    this.getUserData(this.$route.params.id);
  }
}
</script>
