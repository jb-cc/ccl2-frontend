<template>
  <div>
    <strong>Logging out and redirecting...</strong>
  </div>
</template>

<script setup>
import { UserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import {onMounted} from "vue";

const user = UserStore()
const router = useRouter()

onMounted(async () => {
  await user.logOut()
  await router.replace('/')
})
</script>
