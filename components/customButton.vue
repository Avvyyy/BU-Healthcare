<template>
	<div>
		<nuxt-link :to="link" class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">{{linkContent}}</nuxt-link>
	</div>
</template>

<script setup>
	defineProps({
		link: {
			type: String,
			required: true,
		},
		linkContent: {
			type: String,
			required: true,
		}
	})
</script>