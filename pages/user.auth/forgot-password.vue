<template>
  <div class="mx-auto my-10 md:w-2/5 p-10 flex flex-col gap-10 md:border-2 md:rounded-sm shadow-md">
    <h1 class="font-bold text-lg md:text-2xl text-center text-brand-blue">Forgot Password</h1>
    <form action="" method="POST" class="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Input your email"
        v-model="email"
        class="bg-inherit border-b-2 border-b-blue-600 outline-none placeholder:text-blue-600 text-blue-600"
      />
      <input
        type="submit"
        value="Send Password Reset Link"
        class="bg-blue-600 text-white py-2 px-3 rounded self-end"
      />
    </form>
  </div>
</template>

<script setup>
	import { ref } from 'vue';

	//Form validation
	const email = ref('');

</script>