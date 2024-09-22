<script context="module" lang="ts">
	import { getContext, setContext } from 'svelte';

	const KEY = Symbol('heading');
	const setHeadingContext = (v: number) => setContext(KEY, v);
	export const getHeadingContext = () => getContext<number>(KEY);
</script>

<script>
	let level = getHeadingContext();
	$: setHeadingContext(level ? level + 1 : 2);
</script>

<section>
	<slot />
</section>
