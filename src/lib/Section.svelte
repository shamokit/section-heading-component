<script>
	import { getHeadingContext, setHeadingContext } from './Heading.svelte';

	let level = getHeadingContext();
	$: setHeadingContext(level ? level + 1 : 2);
</script>

<section>
	<slot />
</section>
