import { useTranslation } from 'react-i18next';
import { I_18_NAMESPACES, LANGUAGES } from 'infrastructure/i18n/const';

export const useI18N = () => {
	const { t, i18n } = useTranslation();

	return {
		t: (key: string, ns: keyof typeof I_18_NAMESPACES = 'common') => t(key, { ns }),
		changeLanguage: i18n.changeLanguage,
		getTranslation: (key: string, language: keyof typeof LANGUAGES, ns: keyof typeof I_18_NAMESPACES = 'common') => {
			const namespace = (i18n.getDataByLanguage(language) as any)[ns];
			if (namespace) {
				return namespace[key] || key;
			}

			return key;
		},
	};
};
