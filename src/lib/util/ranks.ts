export function getRankDetails(rank: string, plusColor: string | null) {
	let rankText = null;
	let rankHexColor = '#AAAAAA';
	let plusText = null;
	let bracketColor = null;

	switch (rank) {
		case 'VIP':
			rankText = 'VIP';
			rankHexColor = '#55FF55';
			break;
		case 'VIP_PLUS':
			rankText = 'VIP';
			rankHexColor = '#55FF55';
			plusText = '+';
			break;
		case 'MVP':
			rankText = 'MVP';
			rankHexColor = '#55FFFF';
			break;
		case 'MVP_PLUS':
			rankText = 'MVP';
			rankHexColor = '#55FFFF';
			plusText = '+';
			break;
		case 'SUPERSTAR':
			rankText = 'MVP';
			rankHexColor = '#FFAA00';
			plusText = '++';
			break;
		case 'YOUTUBER':
			rankText = 'YOUTUBE';
			rankHexColor = '#FF5555';
			bracketColor = '#FFFFFF';
			break;
		case 'ADMIN':
			rankText = 'ADMIN';
			rankHexColor = '#FF5555';
			break;
	}

	return {
		rankText,
		rankHexColor,
		plusText,
		plusHexColor: plusColor ? getPlusHexColor(plusColor) : null,
		bracketColor: bracketColor || rankHexColor,
	};
}

function getPlusHexColor(plusColor: string) {
	switch (plusColor) {
		case 'BLACK':
			return '#000000';
		case 'DARK_BLUE':
			return '#0000AA';
		case 'DARK_GREEN':
			return '#00AA00';
		case 'DARK_AQUA':
			return '#00AAAA';
		case 'DARK_RED':
			return '#AA0000';
		case 'DARK_PURPLE':
			return '#AA00AA';
		case 'GOLD':
			return '#FFAA00';
		case 'GRAY':
			return '#AAAAAA';
		case 'BLUE':
			return '#5555FF';
		case 'GREEN':
			return '#55FF55';
		case 'AQUA':
			return '#55FFFF';
		case 'RED':
			return '#FF5555';
		case 'LIGHT_PURPLE':
			return '#FF55FF';
		case 'YELLOW':
			return '#FFFF55';
		case 'WHITE':
			return '#FFFFFF';
	}
}
