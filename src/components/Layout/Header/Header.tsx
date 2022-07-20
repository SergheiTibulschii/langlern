import { Logo } from 'components/Logo';
import { Link } from 'react-router-dom';
import routes from 'infrastructure/routes';
import styled from '@emotion/styled/macro';
import { ReactComponent as SettingsSvg } from 'assets/svg/settings.svg';
import { useTheme } from 'infrastructure/contexts/ThemeContext';
import { useI18N } from 'infrastructure/i18n/hooks';
import { rem } from 'infrastructure/styling/styling-utils';
import DropdownMenu from 'components/UI/DropdownMenu/DropdownMenu';
import { useState } from 'react';
import { css } from '@emotion/react';

export default function Header() {
	const { toggleTheme } = useTheme();
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);
	const { t } = useI18N();
	const toggleSettings = () => setIsSettingsOpen((prev) => !prev);

	return (
		<Container>
			<Logo />
			<Nav>
				<NavLink to={routes.games}>{t('games')}</NavLink>
			</Nav>
			<Menu>
				<DropdownMenu menuOffset={10} isOpened={isSettingsOpen} as={<Settings isOpened={isSettingsOpen} onClick={toggleSettings} />}>
					<DropdownMenu.DropdownItem>
						<Button onClick={toggleTheme}>Change Theme</Button>
					</DropdownMenu.DropdownItem>
				</DropdownMenu>
			</Menu>
		</Container>
	);
}

const Container = styled.header`
	padding: ${rem(20)};
	display: flex;
	align-items: center;
	gap: clamp(20px, calc(20px + 7vw), 120px);
`;

const Nav = styled.nav`
	flex: 1;
`;

const NavLink = styled(Link)`
	font-family: var(--ff-sans-serif);
	color: var(--clr-pink-700);
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 600;
	font-size: 1.25rem;
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
`;

const Settings = styled(SettingsSvg)<{ isOpened: boolean }>(({ isOpened }) => {
	const angle = 45;
	const settingsClosedStyles = css`
		transition: transform 0.25s;

		&:hover {
			transform: rotate(${angle}deg);
		}
	`;

	const settingsOpenedStyles = css`
		transform: rotate(${angle}deg);
	`;

	return css`
		width: 24px;
		cursor: pointer;
		color: var(--clr-text-primary);
		${isOpened ? settingsOpenedStyles : settingsClosedStyles}
	`;
});

const Button = styled.button`
	color: var(--clr-text-primary);
`;
