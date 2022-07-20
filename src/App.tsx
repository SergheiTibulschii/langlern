import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FlippingCardsGame from 'features/Games/FlippingCardsGame/FlippingCardsGame';
import { GamesPage } from 'pages/GamesPage';
import routes from 'infrastructure/routes';
import { Container } from 'components/Layout/Container';
import LayoutPrimary from 'components/Layout/LayoutPrimary';
import { ThemeProvider } from 'infrastructure/contexts/ThemeContext';
import GlobalStyles from 'infrastructure/styling/GlobalStyles';

function App() {
	return (
		<ThemeProvider>
			<GlobalStyles />

			<Container>
				<BrowserRouter>
					<LayoutPrimary>
						<Routes>
							<Route path={routes.games} element={<GamesPage />} />
							<Route path={routes.flippingCardsGame} element={<FlippingCardsGame />} />
						</Routes>
					</LayoutPrimary>
				</BrowserRouter>
			</Container>
		</ThemeProvider>
	);
}

export default App;
