import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

type Props = {
	name: string;
	to: string;
};
export default function GameCard({ name, to }: Props) {
	return <LinkContainer to={to}>{name}</LinkContainer>;
}

const LinkContainer = styled(Link)`
	border: 1px solid var(--clr-violet-500);
	border-radius: 10px;
	aspect-ratio: 1.75;
	font-family: var(--ff-sans-serif);
	font-weight: 500;

	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	cursor: pointer;
	text-decoration: none;
	color: inherit;
`;
