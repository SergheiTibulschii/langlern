import i18next, { i18n as i18nInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGES } from './const';
import de from './de';
import en from './en';
import ru from './ru';

export const namespaces = {
	common: 'common',
};

const createI18n = (language: string): i18nInstance => {
	const i18n = i18next.createInstance().use(initReactI18next);

	i18n.init({
		lng: language,
		fallbackLng: language,
		resources: {
			[LANGUAGES.en]: en,
			[LANGUAGES.ru]: ru,
			[LANGUAGES.de]: de,
		},
	});

	return i18n;
};

export const i18n = createI18n(LANGUAGES.en);
