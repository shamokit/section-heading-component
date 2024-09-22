<script lang="ts">
	import { getHeadingContext } from './Section.svelte';

	const level: number = getHeadingContext();
	$: tag = level ? `h${level}` : 'h2';
</script>

<svelte:element this="{tag}">
	<slot />
</svelte:element>
