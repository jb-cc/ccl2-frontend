<template>
  <div class="navbar">
    <div class="navbar__logo">
      <router-link to="/">SKINFINITY</router-link>
    </div>
    <div class="navbar__links">
      <router-link to="/listings">MARKET</router-link>
      <router-link to="/login">LOGIN</router-link>
      <router-link to="/register">REGISTER</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarDefault'
  // Any other options/data/methods you want to define for this component
}
</script>


<style scoped>
/* Any styles specific to this component */
</style>