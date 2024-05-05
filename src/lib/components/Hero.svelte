<script lang="ts">
	export let title: string;
	let pScroll: number;
</script>

<svelte:head>
	<title>Foundation Repair Panama City, Florida</title>
	<meta
		name="description"
		content="Foundation repair Panama City, Florida. We are the foundation repair experts in Panama City, Florida. Call us today for a free estimate."
	/>
</svelte:head>

<svelte:window bind:scrollY={pScroll} />
<div class="relative w-full h-full">
	<div
		style:transform={`translate3d(0,${pScroll * 0.005}px, 0)`}
		class=" relative bg-fixed bg-cover w-full h-[80vh] md:h-full md:aspect-video z-[-1]"
		style="background-image:url('https://ik.imagekit.io/wkftmp47jiv/florida_foundation_experts/assets/destin-beach-houses_raXgTrMc3H.jpg');transform:translate3d(0px,0px,0px);"
	/>
	<div
		class="absolute inset-0 w-full z-10 flex flex-col items-center justify-center gap-y-4 bg-black/20"
	>
		<h1
			class="w-full md:w-2/3 text-4xl lg:text-6xl font-bold text-white uppercase text-center tracking-wide font-branding-sans"
			style:transform={`translate3d(0, ${pScroll * -0.09}px, 0)`}
		>
			{title}
		</h1>
	</div>
</div>
