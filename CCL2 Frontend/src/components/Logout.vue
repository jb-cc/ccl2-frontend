<template>
  <div>
    <strong>Logging out and redirecting...</strong>
  </div>
</template>

<script setup>

// this component is used to log out the user and redirect to the home page, nothing of importance is displayed

// necessary imports
import { UserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import {onMounted} from "vue";


// variables for router and userstore
const user = UserStore()
const router = useRouter()


// on page load, log out the user and redirect to home page
onMounted(async () => {
  await user.logOut()
  await router.replace('/')
})
</script>
