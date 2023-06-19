<template>
  <div>
    <strong>Logging out and redirecting...</strong>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import {onMounted} from "vue";

const user = useUserStore()
const router = useRouter()

onMounted(async () => {
  await user.logOut()
  await router.replace('/')
})
</script>
