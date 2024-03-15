// -------------------------------------------------------------------------------------------

import { ReactNode } from 'react';

// -------------------------------------------------------------------------------------------

export enum Theme {
	Light = 'light',
	Dark = 'dark',
	Default = 'default',
}

export enum Color {
	Light = '#efedf4',
	Dark = '#121318',
}

export enum Storage {
	Keyword = 'theme',
}

export enum ClassName {
	Light = 'light-theme',
	Dark = 'dark-theme',
}

// -------------------------------------------------------------------------------------------

export type ThemeType = [
	theme: Theme,
	setTheme: React.Dispatch<React.SetStateAction<Theme>>,
	toggleTheme: () => void
];

// -------------------------------------------------------------------------------------------

export interface ThemeProviderProps {
	children: ReactNode;
}

// -------------------------------------------------------------------------------------------
