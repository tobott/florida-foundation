<script lang="ts">
	import '../app.css';
	import Header from '$lib/containers/Header.svelte';
	import Footer from '$lib/containers/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
