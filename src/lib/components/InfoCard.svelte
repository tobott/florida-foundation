<script lang="ts">
	export let image_src: string;
	export let image_alt: string;
	export let title: string;
	export let content: string;
</script>

<div class="info-card shadow-lg max-w-64 rounded-lg">
	<div>
		<slot name="image">
			{#if image_src}
				<img src={image_src} alt={image_alt} class="w-full rounded-t-lg" />
			{:else}
				<img
					src="https://via.placeholder.com/150"
					alt="foundation damage"
					class="w-full rounded-t-lg"
				/>
			{/if}
		</slot>
	</div>
	<div class="p-6">
		<slot name="title">
			{#if title}
				<h3 class="text-xl font-bold">{title}</h3>
			{:else}
				<h3 class="text-xl font-bold">Card Title</h3>
			{/if}
		</slot>
		<slot name="content">
			{#if content}
				<p>{content}</p>
			{:else}
				<p>Card Content</p>
			{/if}
		</slot>
	</div>
</div>
