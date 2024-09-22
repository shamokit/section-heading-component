<script>
	import Section from '$lib/Section.svelte';
	import Heading from '$lib/Heading.svelte';
</script>

<h1>見出し1</h1>

<Section>
	<Heading>見出し2</Heading>
	<Section>
		<Heading>見出し3</Heading>
		<Section>
			<Heading>見出し4</Heading>
		</Section>
	</Section>
	<Section>
		<Heading>見出し3</Heading>
		<Section>
			<Heading>見出し4</Heading>
		</Section>
	</Section>
</Section>
<Section>
	<Heading>見出し2</Heading>
	<Section>
		<Heading>見出し3</Heading>
		<Section>
			<Heading>見出し4</Heading>
		</Section>
	</Section>
	<Section>
		<Heading>見出し3</Heading>
	</Section>
</Section>
