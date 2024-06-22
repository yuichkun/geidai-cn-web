<script lang="ts">
	import '../app.css';
	import Menu from '$lib/Menu.svelte';
</script>

<div class="relative">
	<div class="fixed top-8 right-8 z-50">
		<Menu />
	</div>
	<slot />
</div>
