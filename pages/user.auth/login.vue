<template>
  <!-- Login form -->
  <div
    class="mx-auto my-10 md:w-3/4 md:h-3/4 p-10 flex flex-col md:flex-row gap-4 md:border-2 md:rounded-sm shadow-md"
  >
    <!-- Form on the left side -->
    <form
      action=""
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
      <p
        v-if="v$.email$.$invalid && v$.email$.$dirty"
        class="text-red-500 text-sm"
      >
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
      <p
        v-if="v$.password.$invalid && v$.password.$dirty"
        class="text-red-500 text-sm"
      >
        {{ v$.password.$errors[0].$message }}
      </p>

      <div class="callToAction flex mt-3 items-end justify-between">
        <input
          type="submit"
          value="Login"
          class="bg-white text-blue-600 py-2 px-3 rounded md:w-2/5"
        />
        <nuxt-link
          to="./forgot-password"
          class="text-white hover:text-blue-400 underline"
          >Forgot Password?</nuxt-link
        >
      </div>
    </form>

    <!-- Welcome message on the right side -->
    <div
      class="formDetails w-full h-full flex flex-col gap-3 md:gap-10 justify-center items-center"
    >
      <h1 class="font-bold text-lg md:text-2xl text-blue-600">
        Welcome Back to BU-HealthCare
      </h1>

      <div class="callToAction flex gap-3">
        <h5>Don't have an account?</h5>
        <nuxt-link
          to="./"
          class="text-blue-600 font-semibold hover:text-blue-400 underline"
          >Sign Up</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUserStore } from '@/stores/userStore';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// Initialize Firestore
const db = getFirestore();

// Form Validation
const formValidationState = reactive({
  email$: "",
  password: "",
});

const rules = {
  email$: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, formValidationState);

const submitForm = () => {
  v$.value.$touch(); // Mark all fields as touched to trigger validation

  if (!v$.value.$invalid) {
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      formValidationState.email$,
      formValidationState.password
    )
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Get the user data from Firestore using UID
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();

          // Set the user in the store
          const userStore = useUserStore();
          userStore.setUser({
            displayName: userData.fullName,
            phoneNumber: userData.phoneNumber,
            email: userData.email
          });

          console.log("Login successful", userData);

          // Redirect to the user dashboard
          navigateTo('../user/');
        } else {
          console.error("No such user found!");
        }
      })
      .catch((error) => {
        console.error("Login failed", error.code, error.message);
        // Handle login errors
      });
  } else {
    console.log("Validation failed");
  }
};
</script>

import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUserStore } from '@/stores/userStore';
//I will use these imports to get the user data from firestore
import { useDocument } from "vuefire";
import { getFirestore, collection, doc } from 'firebase/firestore';


// Form Validation
const formValidationState = reactive({
  email$: "",
  password: "",
});

const rules = {
  email$: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, formValidationState);

const submitForm = () => {
  v$.value.$touch(); // Mark all fields as touched to trigger validation
      const db = getFirestore();

  if (!v$.value.$invalid) {
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      formValidationState.email$,
      formValidationState.password
    )
      .then(() => {
        const user = useDocument(doc(collection(db, 'users'), email$)); //Get the user data from firestore and set it as the user

        // Set the user in the store
        const userStore = useUserStore();
        userStore.setUser(user);
        console.log(user);

        // Redirect to the user dashboard
        // if(user){
        //   navigateTo('../user/');
        // }
      })
      .catch((error) => {
        console.error("Login failed", error.code, error.message);
        // Handle login errors
      });
  } else {
    console.log("Validation failed");
  }
};
</script>