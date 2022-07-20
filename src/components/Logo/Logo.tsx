import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function Logo() {
	return <Container to='/'>Polygon</Container>;
}

const Container = styled(Link)`
	display: flex;
	align-items: center;
	height: 70px;
	font-size: 2.5rem;
	font-family: var(--ff-mono);
	text-transform: uppercase;
	text-decoration: none;
	color: var(--clr-primary);
	transition: filter 0.5s;

	&:hover {
		filter: brightness(0.9);
	}
`;
