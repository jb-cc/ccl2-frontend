<template>
  <div id="App">
  <header>
    <nav>
    <NavbarDefault /> <!-- Use the navbar component -->
    </nav>
  </header>

  <RouterView />
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
</style>
