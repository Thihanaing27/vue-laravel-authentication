<template>
  <div>
    <h1>Home Page</h1>
    <div v-if="authStore.user">
      <h2>{{ authStore.user.name }}</h2>
      <h2>{{ authStore.user.email }}</h2>
    </div>
    <div v-else>you are not login</div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
onMounted(async () => {
  await authStore.getUser();
});
</script>

<style lang="scss" scoped></style>
