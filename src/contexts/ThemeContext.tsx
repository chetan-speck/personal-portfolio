// -------------------------------------------------------------------------------------------

import { createContext, useContext, useEffect, useState } from 'react';

import {
    ClassName, Color, Storage, Theme, ThemeProviderProps, ThemeType
} from '../types/ThemeContextTypes';

// -------------------------------------------------------------------------------------------

const useTheme = (): ThemeType => {
	const [theme, setTheme] = useState<Theme>(() => {
		const storedTheme = localStorage.getItem(Storage.Keyword);

		if (storedTheme) {
			return storedTheme as Theme;
		} else {
			return Theme.Default;
		}
	});

	useEffect(() => {
		applyTheme[theme]();
	}, [theme]);

	useEffect(() => {
		const bodyElement = document.getElementsByTagName(
			'body'
		)[0] as HTMLBodyElement;

		bodyElement.style.display = 'block';
	}, []);

	const htmlElement = document.getElementsByTagName(
		'html'
	)[0] as HTMLHtmlElement;
	const metaElement = document.getElementsByName(
		'theme-color'
	)[0] as HTMLMetaElement;

	const applyTheme = {
		[Theme.Light]: () => {
			htmlElement.classList.remove(ClassName.Dark);
			htmlElement.classList.add(ClassName.Light);
			metaElement.setAttribute('content', Color.Light);
			localStorage.setItem(Storage.Keyword, Theme.Light);
		},
		[Theme.Dark]: () => {
			htmlElement.classList.remove(ClassName.Light);
			htmlElement.classList.add(ClassName.Dark);
			metaElement.setAttribute('content', Color.Dark);
			localStorage.setItem(Storage.Keyword, Theme.Dark);
		},
		[Theme.Default]: () => {
			const defaultTheme = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches
				? Theme.Dark
				: Theme.Light;

			applyTheme[defaultTheme]();

			const handleThemeChange = (event: MediaQueryListEvent) => {
				if (localStorage.getItem(Storage.Keyword) === Theme.Default) {
					const newTheme = event.matches ? Theme.Dark : Theme.Light;
					applyTheme[newTheme]();
					localStorage.setItem(Storage.Keyword, Theme.Default);
				}
			};

			const mediaQuery = window.matchMedia(
				'(prefers-color-scheme: dark)'
			);
			mediaQuery.addEventListener('change', handleThemeChange);
			localStorage.setItem(Storage.Keyword, Theme.Default);
		},
	};

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			let newTheme: Theme;

			if (prevTheme === Theme.Default) {
				const defaultTheme = window.matchMedia(
					'(prefers-color-scheme: dark)'
				).matches
					? Theme.Dark
					: Theme.Light;

				newTheme =
					defaultTheme === Theme.Light ? Theme.Dark : Theme.Light;
			} else {
				newTheme = prevTheme === Theme.Light ? Theme.Dark : Theme.Light;
			}

			return newTheme;
		});
	};

	return [theme, setTheme, toggleTheme];
};

// -------------------------------------------------------------------------------------------

const ThemeContext = createContext<ThemeType | undefined>(undefined);

export const useThemeContext = (): ThemeType => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useThemeContext must be used within a ThemeProvider');
	}

	return context;
};

// -------------------------------------------------------------------------------------------

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const theme: ThemeType = useTheme();

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

// -------------------------------------------------------------------------------------------

export default ThemeProvider;

// -------------------------------------------------------------------------------------------
