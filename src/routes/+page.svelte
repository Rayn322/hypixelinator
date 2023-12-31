<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
</script>

<h1 class="text-xl">Welcome to SvelteKit</h1>
<p>
	Visit <a class="text-" href="https://kit.svelte.dev">kit.svelte.dev</a> to read
	the documentation
</p>

<Button>Click me</Button>
<div class="w-96 p-4">
	<Card.Root>
		<Card.Header>
			<Card.Title>Card Title</Card.Title>
			<Card.Description>Card Description</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>Card Content</p>
		</Card.Content>
		<Card.Footer>
			<p>Card Footer</p>
		</Card.Footer>
	</Card.Root>
</div>
