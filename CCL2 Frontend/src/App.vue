<template>
  <div id="App" class="app-background">
    <header>
      <nav>
        <NavbarLoggedIn v-if="user.isLoggedIn"/>
        <NavbarDefault v-else/>
      </nav>
    </header>
    <RouterView/>
  </div>
</template>


<script setup>
import { UserStore } from './stores/user'
import NavbarDefault from './components/NavbarDefault.vue';
import NavbarLoggedIn from "@/components/NavbarLoggedIn.vue";

const user = UserStore()
</script>


<style scoped>
.app-background {
  background-image: url('./assets/img/Background.svg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
</style>

