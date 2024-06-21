<script>
	import MainImage from '$lib/MainImage.svelte';
</script>

<div class="relative">
	<MainImage />
	<div class="fixed bottom-8 right-0 lg:right-8 p-8 lg:p-0 text-white w-full lg:w-[640px]">
		<enhanced:img src="$lib/images/description.svg" alt="description" />
	</div>
</div>
