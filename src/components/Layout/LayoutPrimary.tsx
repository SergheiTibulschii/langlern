import styled from '@emotion/styled/macro';
import { WithChildren } from 'types/common';
import { Header } from './Header';
import { Main } from './Main';

type Props = {};
export default function LayoutPrimary({ children }: WithChildren<Props>) {
	return (
		<Container>
			<Header />
			<Main>{children}</Main>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;
