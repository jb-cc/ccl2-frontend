<template>
  <div class="navbar fixed top-0 z-50 w-full flex items-center justify-between bg-ccl2-Midnight-Blue text-white"
       style="height: 5.5%;">
    <div class="flex items-center">
      <div class="navbar__logo ml-4">
        <router-link class="text-2xl font-bold font-custom" to="/">SKINFINITY</router-link>
      </div>
      <div class="navbar__links ml-4">
        <router-link class="mx-2 font-custom" to="/listings">MARKET</router-link>
      </div>
    </div>
    <div class="flex items-center mr-4">
      <router-link class="mx-2 font-custom" to="/login">LOGIN</router-link>
      <router-link class="mx-2 py-1 px-3 bg-ccl2Purple text-white font-custom" to="/register">REGISTER</router-link>
    </div>
  </div>


</template>

<script>
export default {
  name: 'NavbarDefault'
  // Any other options/data/methods you want to define for this component
}
</script>


