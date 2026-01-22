// External dependencies
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import cartReducer from './cart.slice';
import sidebarReducer from './sidebar.slice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		sidebar: sidebarReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
