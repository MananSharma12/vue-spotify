<script setup lang="ts">
import { useFirebaseAuth } from 'vuefire'
import { useUserStore } from '~/stores/user'

const auth = useFirebaseAuth()!
const userStore = useUserStore()

onMounted(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    userStore.setUserLoggedIn(!!user)
  })
  onUnmounted(() => unsubscribe())
})
</script>

<template>
  <AppHeader/>
  <NuxtPage />
  <AppAuth />
</template>
