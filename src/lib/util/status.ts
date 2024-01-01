export function parseGameType(gameType: string) {
	switch (gameType) {
		case 'BEDWARS':
			return 'Bed Wars';
		case 'LEGACY':
			return 'Classic Games';
		case 'MCGO':
			return 'Cops and Crims';
		case 'PIT':
			return 'The Pit';
		case 'SKYBLOCK':
			return 'SkyBlock';
		case 'SKYWARS':
			return 'SkyWars';
		case 'SMP':
			return 'SMP';
		case 'SUPER_SMASH':
			return 'Smash Heroes';
		case 'TNTGAMES':
			return 'TNT Games';
		case 'UHC':
			return 'UHC';
		case 'WALLS3':
			return 'Mega Walls';
		case 'WOOL_GAMES':
			return 'Wool Wars';
		default:
			return gameType
				.split('_')
				.map(
					(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
				)
				.join(' ');
	}
}
