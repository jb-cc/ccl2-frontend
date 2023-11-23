<template>
  <div class="navbar fixed top-0 z-50 w-full flex items-center justify-between bg-ccl2-Night-Blue text-white"
       style="height: 5.5%;">
    <div class="flex items-center space-x-8">
      <div class="navbar__logo ml-4">
        <router-link class="text-3xl font-Moondance text-ccl2-Gold" to="/">SKINFINITY</router-link>
      </div>
      <div class="navbar__links flex space-x-8">
        <router-link class="mx-2 font-poppins font-light text-xl text-white" to="/listings">MARKET</router-link>
      </div>
    </div>
    <div class="flex items-center space-x-8 mr-4">
      <router-link class="mx-2 font-poppins font-normal text-xl text-white" to="/login">LOGIN</router-link>
      <router-link class="mx-2 py-2 px-3 bg-ccl2-White text-ccl2-Midnight-Blue font-Poppins border border-white text-xl font-semibold" to="/register">REGISTER</router-link>
    </div>
  </div>


</template>

<script>

// default navbar for all pages if user is not logged in

export default {
  name: 'NavbarDefault'
  // Any other options/data/methods you want to define for this component
}
</script>


