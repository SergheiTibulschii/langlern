import styled from '@emotion/styled/macro';
import { useState } from 'react';
import { LANGUAGES } from 'infrastructure/i18n/const';
import { useI18N } from 'infrastructure/i18n/hooks';
import { css } from '@emotion/react';

type Props = {
	k: string;
};
export default function FlippingCard({ k }: Props) {
	const [isFlipped, flip] = useState(false);
	const { t, getTranslation } = useI18N();

	const handleClick = () => {
		flip((prev) => !prev);
	};

	return (
		<Card onClick={handleClick} isFlipped={isFlipped}>
			<CardInner>
				<CardFront>
					<CardText>{getTranslation(k, LANGUAGES.de)}</CardText>
				</CardFront>
				<CardBack>
					<CardText>{t(k)}</CardText>
				</CardBack>
			</CardInner>
		</Card>
	);
}

const CardInner = styled.div`
	position: relative;
	height: 100%;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	border-radius: 10px;
	border: 3px solid var(--clr-blue-400);
	background: var(--clr-white);
`;

const Side = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CardFront = styled(Side)``;

const CardBack = styled(Side)`
	transform: rotateY(180deg);
`;

const Card = styled.div<{ isFlipped: boolean }>`
	width: 100%;
	height: 230px;
	cursor: pointer;
	perspective: 1000px;

	${({ isFlipped }) =>
		isFlipped &&
		css`
			& ${CardInner} {
				transform: rotateY(-180deg);
			}
		`}
`;

const CardText = styled.span`
	font-size: 2.5rem;
`;
