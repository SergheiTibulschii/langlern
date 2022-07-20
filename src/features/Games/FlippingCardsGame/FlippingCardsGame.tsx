import styled from '@emotion/styled/macro';
import { useI18N } from 'infrastructure/i18n/hooks';
import FlippingCard from './FlippingCard';

export default function FlippingCardsGame() {
	const { changeLanguage } = useI18N();

	return (
		<Container>
			<Content>
				<button onClick={() => changeLanguage('en')}>English</button>
				<button onClick={() => changeLanguage('ru')}>Russian</button>
				<FlippingCard k='butterfly' />
			</Content>
		</Container>
	);
}

const Container = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.div`
	position: relative;
	width: min(100%, 320px + 10vw);
	max-width: 450px;
	padding: 20px;
`;
