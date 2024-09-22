<script context="module" lang="ts">
	import { getContext, setContext } from 'svelte';
	import Heading from './Heading.svelte';

	const KEY = Symbol('heading');
	const setHeadingContext = (v: number) => setContext(KEY, v);
	export const getHeadingContext = () => getContext<number>(KEY);
</script>

<script lang="ts">
	const level = getHeadingContext();

	$: if ($$slots.heading) {
		setHeadingContext(level ? level + 1 : 2);
	}
</script>

<section>
	{#if $$slots.heading}
		<Heading>
			<slot name="heading" />
		</Heading>
	{/if}
	<slot />
</section>
