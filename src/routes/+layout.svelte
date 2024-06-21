<script lang="ts">
	import '../app.css';
	import Menu from '$lib/Menu.svelte';
	export const prerender = true;
</script>

<div class="relative">
	<div class="fixed top-8 right-8">
		<Menu />
	</div>
	<slot />
</div>
