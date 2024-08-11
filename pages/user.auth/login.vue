<template>
  <!-- Login form -->
  <div class="mx-auto my-10 md:w-3/4 md:h-3/4 p-10 flex flex-col md:flex-row gap-4 md:border-2 md:rounded-sm shadow-md">
    <!-- Form on the left side -->
    <form
      action=""
      method="POST"
      class="flex flex-col gap-5 justify-center p-4 md:border-r h-full w-full bg-blue-600"
      novalidate
      @submit.prevent="submitForm"
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        v-model="formValidationState.email$"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <p v-if="v$.email$.$invalid && v$.email$.$dirty" class="text-red-500 text-sm">
        {{ v$.email$.$errors[0].$message }}
      </p>

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        v-model="formValidationState.password"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <p v-if="v$.password.$invalid && v$.password.$dirty" class="text-red-500 text-sm">
        {{ v$.password.$errors[0].$message }}
      </p>

      <div class="callToAction flex mt-3 items-end justify-between">
        <input
          type="submit"
          value="Login"
          class="bg-white text-blue-600 py-2 px-3 rounded md:w-2/5"
        />
        <nuxt-link to="./forgot-password" class="text-white hover:text-blue-400 underline">Forgot Password?</nuxt-link>
      </div>
    </form>

    <!-- Welcome message on the right side -->
    <div class="formDetails w-full h-full flex flex-col gap-3 md:gap-10 justify-center items-center">
      <h1 class="font-bold text-lg md:text-2xl text-blue-600">Welcome Back to BU-HealthCare</h1>

      <div class="callToAction flex gap-3">
        <h5>Don't have an account?</h5>
        <nuxt-link to="./" class="text-blue-600 font-semibold hover:text-blue-400 underline">Sign Up</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

// Form Validation
const formValidationState = reactive({
  email$: '',
  password: ''
});

const rules = {
  email$: { required, email },
  password: { required }
};

const v$ = useVuelidate(rules, formValidationState);

const submitForm = () => {
  v$.value.$touch(); // Mark all fields as touched to trigger validation

  if (!v$.value.$invalid) {
    // Perform the login logic here
    alert('Login successful!');
  } else {
    console.log('Validation failed.');
  }
};
</script>
