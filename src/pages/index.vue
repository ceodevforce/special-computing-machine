<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	useHead({
		title: 'Exam Lame - Home',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<AlertHero />
	<MainHero />
</template>

<route lang="yaml">
name: home
</route>
