<script lang="ts">
	let isOpen = false;
	let overlayRef: HTMLElement;
	const onClick = () => {
		isOpen = !isOpen;
	};
	let styles = {
		left: '200%'
	};
	$: overlayStyle = Object.entries(styles)
		.map(([key, value]) => `${key}:${value}`)
		.join(';');
	$: {
		if (overlayRef) {
			if (isOpen) {
				styles.left = '0%';
			} else {
				styles.left = '100%';
			}
		}
	}
</script>

<div class="relative">
	<button on:click={onClick} class="w-6 cursor-pointer z-10 absolute">
		{#if isOpen}
			<enhanced:img src="$lib/images/close.svg" alt="close-button" />
		{:else}
			<enhanced:img src="$lib/images/hamburger.svg" alt="menu-button" />
		{/if}
	</button>
	<nav
		bind:this={overlayRef}
		class="fixed w-screen h-screen bg-black top-0 left-0 transition-all bg-opacity-50"
		style={overlayStyle}
	>
		<ul class="grid h-screen place-content-center gap-2">
			<li>
				<a href="/artist-map">
					<enhanced:img src="$lib/images/map.svg" alt="map-icon" class="inline mr-2" width={20} />
					<span class="text-white underline text-lg">Artist Locations</span>
				</a>
			</li>
			<li>
				<!-- TODO: add url -->
				<a>
					<enhanced:img
						src="$lib/images/right-arrow.svg"
						alt="map-icon"
						class="inline mr-2"
						width={20}
					/>
					<span class="text-white underline text-lg">Add Yours</span>
				</a>
			</li>
		</ul>
	</nav>
</div>
