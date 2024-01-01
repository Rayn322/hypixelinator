<script lang="ts">
	import PlayerName from '$lib/components/PlayerName.svelte';
	import * as Card from '$lib/components/ui/card';
	import { parseGameType } from '$lib/util/status.js';

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
				<span>•</span>
				{#if data.status.mode === 'LOBBY'}
					<span>In the {parseGameType(data.status.gameType)} lobby</span>
				{:else}
					<span>Playing {parseGameType(data.status.gameType)}</span>
					{#if data.status.map && data.status.map !== 'Base'}
						<span>on {data.status.map}</span>
					{/if}
				{/if}
				<p>raw: {data.status.gameType}</p>
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
