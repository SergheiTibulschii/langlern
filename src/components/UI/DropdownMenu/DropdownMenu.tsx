import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { rem } from 'infrastructure/styling/styling-utils';
import { useLayoutEffect, useState } from 'react';
import { cloneElement, useRef } from 'react';
import { createPortal } from 'react-dom';
import { WithChildren } from 'types/common';
import { DropdownMenuProps, DropdownType, MenuProps } from './types';

import { motion } from 'framer-motion';

const DropdownMenuItem = ({ children }: WithChildren) => {
	return <MenuItem>{children}</MenuItem>;
};

const DropdownMenu = ({ children, offset, targetRect }: DropdownMenuProps) => {
	return createPortal(
		<Menu
			initial={{
				opacity: 0,
			}}
			animate={{ opacity: 1 }}
			offset={offset}
			targetRect={targetRect}
		>
			{children}
		</Menu>,
		document.body
	);
};

const Dropdown: DropdownType = ({ as, children, menuOffset, isOpened }) => {
	const ref = useRef<SVGElement | null>(null);
	const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

	useLayoutEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();

			setTargetRect(rect);
		}
	}, []);

	return (
		<Container>
			{cloneElement(as, {
				ref,
			})}
			{isOpened && targetRect && (
				<DropdownMenu offset={menuOffset} targetRect={targetRect}>
					{children}
				</DropdownMenu>
			)}
		</Container>
	);
};
Dropdown.DropdownItem = DropdownMenuItem;

const Container = styled.div`
	position: relative;
	display: flex;
`;

const Menu = styled(motion.div)<MenuProps>(
	({ targetRect, offset }) => css`
		position: fixed;
		left: calc(${targetRect.x}px + ${targetRect.width / 2}px);
		top: calc(${targetRect.y + targetRect.height}px + ${offset}px);
		transform: translateX(-50%);
		padding: ${rem(10, 20)};
		border-radius: 10px;
		border: 1px solid var(--clr-border);
		background: var(--clr-bg-secondary);
	`
);

const MenuItem = styled.li`
	white-space: nowrap;
`;

export default Dropdown;
