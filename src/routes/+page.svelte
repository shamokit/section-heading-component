<script>
	import Section from '$lib/Section.svelte';
</script>

<h1>見出し1</h1>

<Section>
	<svelte:fragment slot="heading">見出し2</svelte:fragment>
	<ul>
		<li>リスト</li>
	</ul>
	<Section>
		<svelte:fragment slot="heading">見出し3</svelte:fragment>
		<Section>
			<svelte:fragment slot="heading">見出し4</svelte:fragment>
		</Section>
	</Section>
	<Section>
		<svelte:fragment slot="heading">見出し3</svelte:fragment>
		<Section>
			<svelte:fragment slot="heading">見出し4</svelte:fragment>
		</Section>
	</Section>
</Section>
<Section>
	<svelte:fragment slot="heading">見出し2</svelte:fragment>
	<Section>
		<svelte:fragment slot="heading">見出し3</svelte:fragment>
		<Section>
			<svelte:fragment slot="heading">見出し4</svelte:fragment>
		</Section>
	</Section>
	<Section>
		<svelte:fragment slot="heading">見出し3</svelte:fragment>
	</Section>
</Section>
