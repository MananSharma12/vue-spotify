<script setup lang="ts">
import { useModalStore } from '@/stores/modal';
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const { logoutUser } = useAuth()

function toggleAuthModal() {
  const modalStore = useModalStore()
  modalStore.isOpen = !modalStore.isOpen
}
</script>

<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!userStore.isAuthReady">
            <span class="px-2 text-white">Loading....</span>
          </li>
          <li v-else-if="!userStore.userLoggedIn">
            <a class="px-2 text-white cursor-pointer" @click.prevent="toggleAuthModal">Login / Register</a>
          </li>
          <template v-else>
            <li>
              <a class="px-2 text-white cursor-pointer" href="#">Manage</a>
            </li>
            <li>
              <a class="px-2 text-white cursor-pointer" @click.prevent="logoutUser">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>
