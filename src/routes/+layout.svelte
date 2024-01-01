<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
</script>

<ModeWatcher />
<header class="border-b p-4">
	<h1 class="text-xl">
		<a href="/">Cobble Stats</a>
	</h1>
</header>
<main class="p-4">
	<slot />
</main>
