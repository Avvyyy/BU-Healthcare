<template>
  <div
    class="mx-auto my-10 md:w-2/5 p-10 flex flex-col gap-10 md:border-2 md:rounded-sm shadow-md"
  >
    <h1 class="font-bold text-lg md:text-2xl text-center text-brand-blue">
      Forgot Password
    </h1>
    <form
      @submit.prevent="forgotPassword"
      action="/login"
      method="POST"
      class="flex flex-col gap-4"
      novalidate
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Input your email"
        v-model="email$"
        class="bg-inherit border-b-2 border-b-blue-600 outline-none placeholder:text-blue-600 text-blue-600"
      />
      <p v-if="v$.email$.$error" class="text-red-500 text-sm">
        {{ v$.email$.$message || "Invalid email address" }}
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
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const email$ = ref("");

// Define validation rules
const rules = {
  email$: {
    required,
    email,
  },
};

// Use Vuelidate for validation
const v$ = useVuelidate(rules, { email$ });

// Form submission handler
const forgotPassword = () => {
  v$.value.$touch(); // Mark all fields as touched to trigger validation

  if (!v$.value.$invalid) {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email$.value)
      .then(() => {
        navigateTo("./login");
      })
      .catch((error) => {
        console.error("Failed to send password reset email", error);
      });
  } else {
    console.error("Validation failed.");
  }
};
</script>
