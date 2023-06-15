<template>
  <div id="App" class="app-background">
    <header>
      <nav>
        <NavbarDefault/> <!-- Use the navbar component -->
      </nav>
    </header>

    <RouterView/>
  </div>
</template>


<script>
import NavbarDefault from './components/NavbarDefault.vue';
// Import the navbar component

export default {
  components: {
    NavbarDefault, // Register the navbar component locally
  },
  // Rest of the component options...
}
</script>


<style scoped>
.app-background {
  background-image: url('./assets/img/Background.svg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
</style>

