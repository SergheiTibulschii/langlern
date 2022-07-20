import styled from '@emotion/styled/macro';
import { WithChildren } from 'types/common';

type Props = {};
export default function Main({ children }: WithChildren<Props>) {
	return <Container>{children}</Container>;
}

const Container = styled.main``;
