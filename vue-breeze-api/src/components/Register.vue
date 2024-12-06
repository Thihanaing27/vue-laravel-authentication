<template>
  <div class="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
    <div
      class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable"
    >
      <div class="flex items-center justify-center w-full lg:p-12">
        <div class="flex items-center xl:p-10 shadow-2xl rounded-lg">
          <form
            @submit.prevent="authStore.handleRegister(form)"
            class="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
          >
            <h3 class="mb-3 text-4xl font-extrabold text-dark-grey-900">
              Sign Up
            </h3>
            <p class="mb-4 text-grey-700">Enter your email and password</p>
            <label for="name" class="mb-2 text-sm text-start text-grey-900"
              >Name</label
            >
            <input
              id="name"
              type="text"
              v-model="form.name"
              placeholder="mail@loopple.com"
              class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
            />
            <template v-if="authStore.errors?.name">
              <p class="text-red-500 py-2">
                {{ authStore.errors?.name[0] }}
              </p>
            </template>
            <label for="email" class="mb-2 text-sm text-start text-grey-900"
              >Email</label
            >
            <input
              id="email"
              type="text"
              v-model="form.email"
              placeholder="mail@loopple.com"
              class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
            />
            <template v-if="authStore.errors?.email">
              <p class="text-red-500 py-2">
                {{ authStore.errors.email[0] }}
              </p>
            </template>
            <label for="password" class="mb-2 text-sm text-start text-grey-900"
              >Password</label
            >
            <input
              id="password"
              type="password"
              v-model="form.password"
              placeholder="Enter a password"
              class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
            />
            <template v-if="authStore.errors?.password">
              <p class="text-red-500 py-2">
                {{ authStore.errors.password[0] }}
              </p>
            </template>
            <label
              for="password_confirmation"
              class="mb-2 text-sm text-start text-grey-900"
              >Confirm Password</label
            >
            <input
              id="password_confirmation"
              type="password"
              v-model="form.password_confirmation"
              placeholder="Enter a password"
              class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
            />
            <button
              class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-100 bg-indigo-500"
            >
              Sign up
            </button>
            <p class="text-sm leading-relaxed text-grey-900">
              Already have an account?
              <a href="javascript:void(0)" class="font-bold text-grey-700"
                >Login to your Account</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
</script>

<style scoped></style>
