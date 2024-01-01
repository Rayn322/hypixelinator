<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Reload } from 'radix-icons-svelte';

	let username = '';
	let loading = false;

	function onSubmit() {
		loading = true;
		if (username.length > 0) {
			goto(`/${username}`);
		} else {
			loading = false;
		}
	}
</script>

<form class="flex justify-center" on:submit|preventDefault={onSubmit}>
	<Card.Root class="max-w-sm grow">
		<Card.Content class="space-y-3 p-6">
			<Label for="username" class="text-md">Enter Minecraft username</Label>
			<Input
				type="text"
				placeholder="Username"
				id="username"
				bind:value={username}
			/>
		</Card.Content>
		<Card.Footer>
			<Button disabled={loading} type="submit" class="w-full">
				{#if loading}
					<Reload class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				Submit
			</Button>
		</Card.Footer>
	</Card.Root>
</form>
