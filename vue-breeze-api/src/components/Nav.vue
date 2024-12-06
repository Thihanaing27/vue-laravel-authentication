<template>
  <div class="flex bg-indigo-800 text-white px-4 py-8">
    <div class="flex-1 text-2xl"><h2>Vue - Laravel</h2></div>
    <div class="flex-1 text-xl flex justify-end gap-4">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <template v-if="!authStore.user">
        <router-link :to="{ name: 'Login' }">Login</router-link>
        <router-link :to="{ name: 'Register' }">Register</router-link>
      </template>
      <template v-else>
        <button @click="authStore.handleLogout">Logout</button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
</script>

<style scoped></style>
