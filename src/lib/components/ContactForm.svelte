<script lang="ts">
	let options = {
		homeowner: 'I am the homeowner',
		propertyManager: 'I am the property manager',
		realtor: 'Real Estate',
		other: 'Other'
	};
</script>

<form action="https://usebasin.com/f/547a27bb46ce" method="POST">
	<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
		<label for="first-name">First Name</label>
		<input type="text" name="first-name" id="first-name" />
		<label for="last-name">Last Name</label>
		<input type="text" name="last-name" id="last-name" />
		<label for="email"> Email: </label>
		<input type="email" id="email" name="email" />
		<label for="phone">Phone</label>
		<input type="tel" name="phone" id="phone" />
		<label for="project-address">Project Address(City, State, Zipcode)</label>
		<input type="text" name="project-address" id="project-address" />
		<label for="ownership"></label>
		<select name="ownership" id="ownership">
			<option value="homeowner">I am the homeowner</option>
			<option value="property-manager">I am the property manager</option>
			<option value="realtor">Real Estate</option>
			<option value="other">Other</option>
		</select>
		<input type="submit" value="Submit" />
	</div>
</form>
