<script setup>
import { ref } from "vue";
import { signOut, getAuth } from 'firebase/auth';

const isOpen = ref(false);

const handleSignOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("User signed out");
      navigateTo('../user.auth/login'); // Redirect to login page after logout
    })
    .catch((error) => {
      console.error("Logout failed", error);
    });
};


</script>
<template>
  <nav class="shadow-md sticky top-0">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div>
            <nuxt-link
              to="/"
              class="flex items-center py-5 px-2 text-white hover:text-gray-300"
            >
              <span class="font-bold">BU-Healthcare</span>
          </nuxt-link>
          </div>
        </div>
        <!--nav links -->
        <div class="hidden md:flex items-center space-x-1">
          <nuxt-link
            to="/report-emergency"
            class="py-5 px-3 text-white hover:text-gray-300"
            >Report Emergency</nuxt-link
          >
          <customButton link="/about-us" linkContent="About Us"/>
          <button @click="handleSignOut">Logout</button>
        </div>
        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="md:hidden flex flex-col p-2" :class="isOpen ? 'flex flex-col' : 'hidden'">
      <nuxt-link to="report-emergency" class="py-3 px-3 text-white hover:text-gray-300"
        >Report Emergency</nuxt-link
      >
		  <customButton link="about-us" linkContent="About Us" class="ml-2"/>

    </div>
  </nav>
</template>
