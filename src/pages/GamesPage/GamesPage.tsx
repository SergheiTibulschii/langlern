import styled from '@emotion/styled/macro';
import { useI18N } from 'infrastructure/i18n/hooks';
import routes from 'infrastructure/routes';
import GameCard from './GameCard';

export default function GamesPage() {
	const { t } = useI18N();

	return (
		<Container>
			<GameCard to={routes.flippingCardsGame} name={t('flippingCards')} />
		</Container>
	);
}

const Container = styled.div`
	padding: 20px;
	margin: auto;
	max-width: 1400px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
	gap: 20px;
`;
