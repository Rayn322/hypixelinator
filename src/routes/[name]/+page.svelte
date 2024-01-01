<script lang="ts">
	import PlayerName from '$lib/components/PlayerName.svelte';
	import * as Card from '$lib/components/ui/card';

	export let data;
</script>

<Card.Root class="max-w-md">
	<Card.Header>
		<Card.Title>
			<PlayerName
				name={data.name}
				rank={data.rank}
				plusColor={data.plusColor}
			/>
		</Card.Title>
		{#if data.status.online}
			<Card.Description>
				<span class="text-green-500">Online</span>
			</Card.Description>
		{:else}
			<Card.Description>
				<span class="text-red-500">Offline</span>
			</Card.Description>
		{/if}
	</Card.Header>
	<Card.Content>
		<p>Card Content</p>
	</Card.Content>
	<Card.Footer>
		<p>Card Footer</p>
	</Card.Footer>
</Card.Root>
