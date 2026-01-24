import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import type { ReactElement, PropsWithChildren } from 'react';

import rootReducer, { RootState } from '@/store';

type ExtendedRenderOptions = {
	preloadedState?: Partial<RootState>;
	store?: ReturnType<typeof configureStore>;
};

export function renderWithProviders(
	ui: ReactElement,
	{
		preloadedState = {},
		store = configureStore({
			reducer: rootReducer,
			preloadedState,
		}),
		...renderOptions
	}: ExtendedRenderOptions = {},
) {
	function Wrapper({ children }: PropsWithChildren) {
		return <Provider store={store}>{children}</Provider>;
	}

	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
