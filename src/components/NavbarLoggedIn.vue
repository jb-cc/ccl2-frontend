<template>
  <div class="navbar fixed top-0 z-50 w-full flex items-center justify-between bg-ccl2-Night-Blue text-white"
       style="height: 5.5%;">
    <div class="flex items-center space-x-8">
      <div class="navbar__logo ml-4">
        <router-link class="text-3xl font-Moondance text-ccl2-Gold" to="/">SKINFINITY</router-link>
      </div>
      <div class="navbar__links flex space-x-8">
        <router-link class="mx-2 font-poppins font-light text-xl text-white" to="/listings">MARKET</router-link>
        <router-link class="mx-2 font-poppins font-light text-xl text-white" to="/inventory">INVENTORY</router-link>
      </div>
    </div>
    <div class="flex items-center space-x-8 mr-4">
      <div class="font-Poppins text-xl font-semibold text-ccl2-Gold">{{ user.user.balance }}<img
          src="/img/icons/coin.svg"
          alt="Coin Icon"
          class="inline-block mr-2"
      /></div>
      <router-link class="mx-2 py-2 px-3 bg-ccl2-White text-ccl2-Midnight-Blue font-Poppins text-xl font-semibold relative" to="/profile">ACCOUNT
        <div class="absolute left-0 top-[100%] mt-0 bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-150" style="width: 125px;">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <router-link class="block px-4 py-2 text-xl font-Poppins text-ccl2-Midnight-Blue hover:bg-gray-100" role="menuitem" to="/profile">Profile</router-link>
            <router-link class="block px-4 py-2 text-xl font-Poppins text-ccl2-Midnight-Blue hover:bg-gray-100" role="menuitem" to="/inventory">Inventory</router-link>
            <router-link class="block px-4 py-2 text-xl font-Poppins text-ccl2-Midnight-Blue hover:bg-gray-100" role="menuitem" to="/settings">Settings</router-link>
            <router-link class="block px-4 py-2 text-xl font-Poppins text-ccl2-Midnight-Blue hover:bg-gray-100" role="menuitem" to="/logout">Sign out</router-link>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>


// navbar for all pages if user is logged in


// need to import the user store to get the user's balance and to check if they are logged in
import { UserStore } from '@/stores/user'

const user = UserStore()
</script>

<style scoped>
.relative:hover .absolute {
  display: block;
}

.absolute {
  display: none;

}
</style>
