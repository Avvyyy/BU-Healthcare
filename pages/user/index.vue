<script setup> 
import { useUserStore } from '@/stores/userStore';

const user = useUserStore();
</script>

<template>
	<h1>Hi {{ user.name }}</h1>
	<h3>Here are your medical stats</h3>
</template>