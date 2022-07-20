import { WithChildren } from 'types/common';

type Props = {
	as: any;
	isOpened: boolean;
	menuOffset: number;
} & WithChildren;
export type DropdownType = ((props: Props) => JSX.Element) & { DropdownItem: (props: WithChildren) => JSX.Element };

export type DropdownMenuProps = { targetRect: DOMRect; offset: number } & WithChildren;

export type MenuProps = { targetRect: DOMRect; offset: number };
