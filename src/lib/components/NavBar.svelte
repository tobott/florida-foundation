<script lang="ts">
	import logo from '$lib/assets/logos/ffe-logo.png';
	let isOpen: boolean = false;
</script>

<nav class="bg-white z-20 shadow fixed w-full">
	<div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<!-- <div class="flex"> -->
			<div class="flex flex-shrink-0 items-center">
				<a href="/"> <img class="h-12 w-auto" src={logo} alt="Florida Foundation Experts" /></a>
			</div>
			<div class="hidden sm:ml-6 lg:flex sm:space-x-8">
				<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
				<a
					href="/foundation-problems"
					class="inline-flex items-center border-b-2 border-transparent hover:border-branding-primary-500 px-1 pt-1 text-sm font-medium text-gray-900 uppercase"
				>
					Foundation Problems
				</a>
				<a
					href="/foundation-repair"
					class="inline-flex items-center border-b-2 border-transparent hover:border-branding-primary-500 px-1 pt-1 text-sm font-medium text-gray-900 uppercase"
				>
					Foundation Repair
				</a>
				<a
					href="/concrete-lifting"
					class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-500 hover:text-gray-700 uppercase"
					>Concrete Lifting</a
				>
				<a
					href="/crawl-space-encapsulation"
					class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-500 hover:text-gray-700 uppercase"
					>Crawl Space Encapsulation</a
				>
				<a
					href="/piling-repair"
					class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-500 hover:text-gray-700 uppercase"
					>Piling Repair</a
				>
				<a
					href="/contact"
					class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-500 hover:text-gray-700 uppercase"
					>Contact Us</a
				>
			</div>
			<!-- </div> -->

			<div class="-mr-2 flex items-center lg:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => (isOpen = !isOpen)}
				>
					<span class="absolute -inset-0.5"></span>
					<span class="sr-only">Open main menu</span>
					<!--
              Icon when menu is closed.
  
              Menu open: "hidden", Menu closed: "block"
            -->
					{#if !isOpen}
						<svg
							class="block h-10 w-10"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					{/if}
					<!--
              Icon when menu is open.
  
              Menu open: "block", Menu closed: "hidden"
            -->{#if isOpen}
						<svg
							class="block h-10 w-10"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if isOpen}
		<div class="lg:hidden" id="mobile-menu">
			<div class="space-y-1 pb-3 pt-2">
				<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
				<a
					href="/foundation-repair"
					class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
					>Foundation Repair</a
				>
				<a
					href="/concrete-lifting"
					class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
					>Concrete Lifting</a
				>
				<a
					href="/crawl-space-encapsulation"
					class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
					>Crawl Space Encapsulation</a
				>
				<a
					href="/piling-repair"
					class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
					>Piling Repair</a
				>
				<a
					href="/contact"
					class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
					>Contact Us</a
				>
			</div>
		</div>
	{/if}
</nav>
