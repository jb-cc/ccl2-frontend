<template>
  <div class="navbar fixed top-0 z-50 w-full flex items-center justify-between bg-ccl2-Night-Blue text-white"
       style="height: 5.5%;">
    <div class="flex items-center space-x-8">
      <div class="navbar__logo ml-4">
        <router-link class="text-3xl font-Moondance text-ccl2-Gold" to="/">SKINFINITY</router-link>
      </div>
      <div class="navbar__links flex space-x-8">
        <router-link class="mx-2 font-poppins font-light text-xl text-white" to="/listings">MARKET</router-link>
        <router-link class="mx-2 font-poppins font-light text-xl text-white" to="/login">INVENTORY</router-link>
      </div>
    </div>
    <div class="flex items-center space-x-8 mr-4 relative">
      <router-link class="mx-2 py-2 px-3 bg-ccl2-White text-ccl2-Midnight-Blue font-Poppins text-xl font-semibold" to="/profile">ACCOUNT</router-link>
      <div class="absolute left-0 top-[100%] mt-0 bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-150" style="width: 125px;">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <router-link class="block px-4 py-2 text-xl font-Poppins text-ccl2-Midnight-Blue hover:bg-gray-100" role="menuitem" to="/profile">Profile</router-link>
          <router-link class="block px-4 py-2 text-xl font-Poppins text-ccl2-Midnight-Blue hover:bg-gray-100" role="menuitem" to="/inventory">Inventory</router-link>
          <router-link class="block px-4 py-2 text-xl font-Poppins text-ccl2-Midnight-Blue hover:bg-gray-100" role="menuitem" to="/settings">Settings</router-link>
          <router-link class="block px-4 py-2 text-xl font-Poppins text-ccl2-Midnight-Blue hover:bg-gray-100" role="menuitem" to="/logout">Sign out</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarLoggedIn'
}
</script>

<style scoped>
.relative:hover .absolute {
  display: block;
}

.absolute {
  display: none;
  transform: translateX(-24px); /* align the navbar content to account button */
}
</style>

