<script setup lang="ts">
import { useFirebaseAuth } from 'vuefire'
import { onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from '~/stores/user'

const auth = useFirebaseAuth()!
const userStore = useUserStore()

onMounted(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
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
