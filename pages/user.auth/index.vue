<template>
  <!-- Form to Onboard user to the platform -->
  <div
    class="mx-auto my-10 md:w-3/4 md:h-4/5 p-10 flex flex-col md:flex-row gap-4 md:border-2 md:rounded-sm shadow-md"
  >
    <div
      class="formDetails w-full h-full flex flex-col gap-3 md:gap-10 justify-center items-center"
    >
      <h1 class="font-bold text-lg md:text-2xl text-blue-600">Get Started With BU-Healthcare</h1>

      <div class="callToAction flex gap-3">
        <h5>Have an account already?</h5>
        <nuxt-link to="./login" class="text-blue-600 font-semibold hover:text-blue-400 underline">
          Login
        </nuxt-link>
      </div>
    </div>
    <form
      action=""
      method="POST"
      class="flex flex-col gap-2 justify-center p-4 md:border-right h-full w-full bg-blue-600"
      @submit.prevent="submitForm"
      novalidate
    >
      <input
        type="text"
        name="fullName"
        id="fullName"
        placeholder="Full Name"
        v-model="signUpFormValidationState.fullName"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <p v-if="v$.fullName.$error" class="errorMessage text-red-500">
        {{ v$.fullName.$errors[0].$message }}
      </p>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        v-model="signUpFormValidationState.email$"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <p v-if="v$.email$.$error" class="text-red-500 errorMessage">
        {{ v$.email$.$errors[0].$message }}
      </p>

      <input
        type="text"
        name="phoneNumber"
        inputmode="numeric"
        minlength="11"
        maxlength="11"
        id="phoneNumber"
        placeholder="Mobile Number"
        v-model="signUpFormValidationState.phoneNumber"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <p v-if="v$.phoneNumber.$error" class="text-red-500 errorMessage">
        {{ v$.phoneNumber.$errors[0].$message }}
      </p>

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        v-model="signUpFormValidationState.password"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <p v-if="v$.password.$error" class="text-red-500 errorMessage">
        {{ v$.password.$errors[0].$message }}
      </p>

      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm Password"
        v-model="signUpFormValidationState.confirmPassword"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <p v-if="v$.confirmPassword.$error" class="text-red-500 errorMessage">
        {{ v$.confirmPassword.$errors[0].$message }}
      </p>

      <input
        type="submit"
        value="Get Started"
        class="bg-white text-blue-600 py-2 px-3 rounded md:w-2/5 self-end"
      />
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength, sameAs } from '@vuelidate/validators';

// Form validation state
const signUpFormValidationState = reactive({
  fullName: '',
  email$: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
});

// Validation rules
const rules = {
  fullName: { required },
  email$: { required, email },
  phoneNumber: { required, minLength: minLength(11), maxLength: maxLength(11) },
  password: { required },
  confirmPassword: { required, sameAsPassword: sameAs(computed(() => signUpFormValidationState.password)) },
};

const v$ = useVuelidate(rules, signUpFormValidationState);

const submitForm = () => {
  v$.value.$touch(); // Mark all fields as touched to trigger validation

  if (!v$.value.$invalid) {
    // Perform the signup logic here
    alert('SignUp successful!');
  } else {
    console.log('Validation failed.');
  }
};
</script>
