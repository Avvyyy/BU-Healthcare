<template>
  <div class="mx-auto my-10 md:w-2/5 p-10 flex flex-col gap-10 md:border-2 md:rounded-sm shadow-md">
    <h1 class="font-bold text-lg md:text-2xl text-center text-brand-blue">Forgot Password</h1>
    <form @submit.prevent="submitForm" action="/login" method="POST" class="flex flex-col gap-4" novalidate>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Input your email"
        v-model="emailState"
        class="bg-inherit border-b-2 border-b-blue-600 outline-none placeholder:text-blue-600 text-blue-600"
      />
      <p v-if="v$.emailState.$error" class="text-red-500 text-sm">
        {{ v$.emailState.$message || 'Invalid email address' }}
      </p>
      <input
        type="submit"
        value="Send Password Reset Link"
        class="bg-blue-600 text-white py-2 px-3 rounded md:self-end"
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const emailState = ref('');

// Define validation rules
const rules = {
  emailState: { 
    required, email
  },
};

// Use Vuelidate for validation
const v$ = useVuelidate(rules, { emailState });

// Form submission handler
const submitForm = () => {
  v$.value.$touch(); // Mark all fields as touched to trigger validation

  if (!v$.value.$invalid) {
    // Perform the password reset link logic here
    alert('Password reset link sent!');
  } else {
    console.error('Validation failed.');
  }
};
</script>
