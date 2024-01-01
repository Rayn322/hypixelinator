<script lang="ts">
	import { getRankDetails } from '$lib/util/ranks';

	export let name: string;
	export let rank: string;
	export let plusColor: string | null;

	const { rankText, rankHexColor, plusText, plusHexColor, bracketColor } =
		getRankDetails(rank, plusColor);
</script>

<!-- I know its ugly, maybe snippets can help -->
{#if rankText}
	<span style:color={bracketColor}>[</span><span style:color={rankHexColor}
		>{rankText}</span
	>{#if plusText && plusColor}<span style:color={plusHexColor}>{plusText}</span
		>{/if}<span style:color={bracketColor}>]</span>
{/if}

<span style:color={bracketColor}>{name}</span>
