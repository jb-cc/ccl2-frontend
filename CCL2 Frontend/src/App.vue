<!--    This is the main vue file, which runs inside the main.js. everything that happens, happens in this file as well.            -->

<template>
  <div id="App" class="app-background">
    <header>
      <nav>
        <NavbarLoggedIn v-if="user.isLoggedIn" />
        <NavbarDefault v-else />
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<script setup>

// importing the necessary files

import { UserStore } from "./stores/user";
import NavbarDefault from "./components/NavbarDefault.vue";
import NavbarLoggedIn from "@/components/NavbarLoggedIn.vue";
import http from "./http-common";
import { onMounted } from "vue";


// initializing the user store
let user = UserStore();


// checking if the user is logged in on page load, if so, set the user store to the user that is logged in, and set the isLoggedIn to true.
// the isloggedin is used to determine which navbar to show, the logged in one or the default one.


onMounted(async () => {
  await checkIfLoggedIn();
});



const checkIfLoggedIn = async () => {
  try {
    const response = await http.get(`http://localhost:8080/me`);
    if (response.data.user.id) {
      user.user = response.data.user;
      user.isLoggedIn = true;
      console.log("[App.vue / checkIfLoggedIn]: user: ", user.user);
    } else {
      console.error("[App.vue / checkIfLoggedIn]: No data in response.data.user.id, does the user exist?");
    }

  } catch (err) {
    console.error("[App.vue / checkIfLoggedIn]: ", err.response.data.message);
  }
};
</script>

<style scoped>
.app-background {
  background-image: url("./assets/img/Background.svg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  overflow-y: auto;
}
</style>