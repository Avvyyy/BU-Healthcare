<template>
  <!-- Login form-->
  <div
    class="mx-auto my-10 md:w-3/4 md:h-3/4 p-10 flex flex-col md:flex-row gap-4 md:border-2 md:rounded-sm shadow-md"
  >
    <!-- Form on the left side -->
    <form
      action=""
      method="POST"
      class="flex flex-col gap-5 justify-center p-4 md:border-r h-full w-full bg-blue-600"
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        class="bg-inherit border-b-2 border-b-white outline-none placeholder:text-white text-white"
      />
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
