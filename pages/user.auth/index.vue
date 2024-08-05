<template>
  <!-- Form to Onboard user to the platform -->
  <div
    class="mx-auto my-10 md:w-3/4 md:h-3/4 p-10 flex flex-col md:flex-row gap-4 md:border-2 md:rounded-sm shadow-md"
  >
    <div
      class="formDetails w-full h-full flex flex-col gap-3 md:gap-10 justify-center items-center"
    >
      <h1 class="font-bold text-lg md:text-2xl text-blue-600">Get Started With BU-Healthcare</h1>

      <div class="callToAction flex gap-3">
        <h5>Have an account already?</h5>
				<nuxt-link to="./login" class="text-blue-600 font-semibold hover:text-blue-400 underline ">Login</nuxt-link>
      </div>
    </div>
    <form
      action=""
      method="POST"
      class="flex flex-col gap-5 justify-center p-4 md:border-right h-full w-full bg-blue-600"
    >
      <input
        type="text"
        name="fullName"
        id="fullName"
        placeholder="Full Name"
				v-model="fullName"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
				v-model="email"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <input
        type="text"
        name="phoneNumber"
        inputmode="numeric"
        minlength="11"
        maxlength="11"
        id="phoneNumber"
        placeholder="Mobile Number"
				v-model="phoneNumber"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
				v-model="password"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm Password"
				v-model="confirmPassword"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <input
        type="submit"
        value="Get Started"
        class="bg-white text-blue-600 py-2 px-3 rounded md:w-2/5 self-end"
      />
    </form>
  </div>
</template>

<script setup>
	import { ref } from 'vue';

	//Form validation
	const fullName = ref('');
	const email = ref('');
	const phoneNumber = ref('');
	const password = ref('');
	const confirmPassword = ref('');

</script>