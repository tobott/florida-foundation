<script lang="ts">
	let options = {
		homeowner: 'I am the homeowner',
		propertyManager: 'I am the property manager',
		realtor: 'Real Estate',
		other: 'Other'
	};
</script>

<form action="https://usebasin.com/f/547a27bb46ce" method="POST" class="">
	<div class="mx-auto">
		<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
			<!-- <label for="first-name">First Name</label> -->
			<input
				type="text"
				name="first-name"
				id="first-name"
				placeholder="First Name"
				class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-branding-300 focus:ring focus:ring-branding-primary-200 focus:ring-opacity-50"
			/>
			<!-- <label for="last-name">Last Name</label> -->
			<input
				type="text"
				name="last-name"
				id="last-name"
				placeholder="Last Name"
				class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-branding-300 focus:ring focus:ring-branding-primary-200 focus:ring-opacity-50"
			/>
			<!-- <label for="email"> Email: </label> -->
			<input
				type="email"
				id="email"
				name="email"
				placeholder="Email"
				class="form-input sm:col-span-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-branding-300 focus:ring focus:ring-branding-primary-200 focus:ring-opacity-50"
			/>
			<!-- <label for="phone">Phone</label> -->
			<input
				type="tel"
				name="phone"
				id="phone"
				placeholder="888.888.8888"
				class="form-input sm:col-span-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-branding-300 focus:ring focus:ring-branding-primary-200 focus:ring-opacity-50"
			/>
			<!-- <label for="project-address">Project Address(City, State, Zipcode)</label> -->
			<input
				type="text"
				name="project-address"
				id="project-address"
				placeholder="Project Address (City, State, Zipcode)"
				class="form-input sm:col-span-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-branding-300 focus:ring focus:ring-branding-primary-200 focus:ring-opacity-50"
			/>
			<!-- <label for="ownership"></label> -->
			<select
				name="ownership"
				id="ownership"
				class="form-select sm:col-span-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-branding-300 focus:ring focus:ring-branding-primary-200 focus:ring-opacity-50"
			>
				<option value="homeowner">I am the homeowner</option>
				<option value="property-manager">I am the property manager</option>
				<option value="realtor">Real Estate</option>
				<option value="other">Other</option>
			</select>
			<textarea
				name="message"
				id="message"
				placeholder="your message here"
				class="form-input sm:col-span-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-branding-300 focus:ring focus:ring-branding-primary-200 focus:ring-opacity-50"
			></textarea>
		</div>
		<div class="mt-8 flex justify-end">
			<button
				type="submit"
				value="Submit"
				class="text-white bg-branding-primary-700 p-2 rounded-md w-1/2 hover:bg-branding-primary-600 hover:shadow-md"
				>Submit</button
			>
		</div>
	</div>
</form>
