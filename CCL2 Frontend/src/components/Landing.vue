<template>
  <div class="h-screen flex flex-col items-center justify-center pt-20 ">
    <div class="text-center space-y-4 ">
      <h1 class="text-[13vw] md:text-6xl lg:text-[12.75rem] leading-none font-Moondance text-ccl2-White">Skinfinity</h1>
      <h2 class="text-[3.4375rem] leading-none font-Poppins text-ccl2-Gold">CSGO trading and more</h2>
    </div>
    <div class="bg-ccl2-Dark-Blue-70 w-3/5 h-80 flex items-center justify-center flex-col space-y-4">
      <h3 class="text-4xl">The newest collections for the best prices</h3>
      <router-link to="/listings" class="text-lg">SHOP NOW</router-link>
    </div>
    <div class="flex w-3/5 justify-between space-x-3">
      <div class="bg-ccl2-Light-Blue-40 w-1/2 h-80 flex items-center justify-center">
        <router-link to="/listings/team/CT">CT-SIDE WEAPONS</router-link>
      </div>
      <div class="bg-ccl2-Light-Red-40 w-1/2 h-80 flex items-center justify-center ">
        <router-link to="/listings/team/T">T-SIDE WEAPONS</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import NavbarDefault from './NavbarDefault.vue';
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