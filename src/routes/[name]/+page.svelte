<script lang="ts">
	import RankText from '$lib/components/RankText.svelte';
	import * as Card from '$lib/components/ui/card';

	export let data;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{data.name}</Card.Title>
		{#if data.status.online}
			<Card.Description>
				<span class="text-green-500">Online</span>
			</Card.Description>
		{:else}
			<Card.Description>
				<span class="text-red-500">Offline</span>
				<RankText rank={data.rank} plusColor={data.plusColor} />
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
