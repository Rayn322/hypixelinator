<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="space-y-2">
	<h2>{$page.error?.message}</h2>
	<Button href="/">Back</Button>
</div>
