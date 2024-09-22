<script context="module" lang="ts">
	import { getContext, setContext, type ComponentProps } from 'svelte';

	const KEY = Symbol('heading');
	export const setHeadingContext = (v: number) => setContext(KEY, v);
	export const getHeadingContext = () => getContext<number>(KEY);
</script>

<script lang="ts">
	let level = getHeadingContext();
	$: tag = level ? `h${level}` : 'h2';
</script>

<svelte:element this="{tag}">
	<slot />
</svelte:element>
