import styled from '@emotion/styled/macro';
import appTokens from 'infrastructure/appTokens';
import { WithChildren } from 'types/common';

type Props = {};
export default function Container({ children }: WithChildren<Props>) {
	return <ContainerStyled>{children}</ContainerStyled>;
}

const ContainerStyled = styled.div`
	max-width: ${appTokens.screens.xl}px;
	margin: auto;
`;
