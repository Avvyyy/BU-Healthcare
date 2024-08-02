<template>
  <div
  >
    <main class="text-white p-auto mx-auto my-20 w-4/5 h-4/5 flex flex-col items-center gap-7">
      <h1 class="font-bold text-3xl">BU-Healthcare - Leveraging technology for proactivity in healthcare</h1>
			<h3 class="font-semibold">Your journey to rapid emergency response starts here , with us</h3>
			<div class="hero-menu-buttons flex items-center gap-7">

				<nuxt-link
            to="#"
            class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >Get Started</nuxt-link
          >
					<nuxt-link
            to="#"
            class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >Report Emergency</nuxt-link
          >
			</div>
    </main>
  </div>
</template>

<style scoped>
	main {
		backdrop-filter: blur(5px);
	}
</style>

<script setup>
  definePageMeta({
    title: 'BU-Healthcare - Home',
    description: 'BU-Healthcare - Leveraging technology for proactivity in healthcare',
    layout: 'guest',
  });
</script>