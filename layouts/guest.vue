<template>
	<div  class="bg-cover bg-center h-screen w-screen"
	:style="{ backgroundImage: 'url(/img/hero-menu-img.jpg)' }">
		<nav-bar />
		<slot></slot>
		<foo-ter/>
	</div>
</template>