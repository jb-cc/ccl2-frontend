<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
      <label for="username">Username:</label><br>
      <input type="text" id="username" v-model="username"><br>
      <label for="password">Password:</label><br>
      <input type="password" id="password" v-model="password"><br>
      <input type="submit" value="Submit">
    </form>
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
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  }
}
</script>
