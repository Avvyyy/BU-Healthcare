<template>
	<div class="w-screen">
		<footer class="fixed bottom-0 w-full flex items-center justify-center py-5 px-2  bg-brand-blue">
			<p class="text-white">
				BU-Healthcare &copy; SavvyXCodes <span class="date">{{ date }}</span>
			</p>
		</footer>
	</div>
</template>

<script setup>
	const date = new Date().getFullYear();
</script>
