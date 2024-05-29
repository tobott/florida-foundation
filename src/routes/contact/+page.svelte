<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Contact Us"
	description="Contact Florida Foundation Experts for all your foundation repair needs."
/>

<div class="h-[90vh] isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl capitalize">
			We want to hear from you!
		</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			Florida Foundation Experts is here to help you with your foundation repair needs. Please fill
			out the form below and we will get back to you as soon as possible.
		</p>
	</div>
	<div class="w-1/2 mx-auto mt-6">
		<ContactForm />
	</div>
</div>
